// ============================================================
//  game/saveSystem.js - 改进版存档/读档系统
//  - 持久化动态物品模板(dynamicItems)
//  - 持久化剧情/任务状态(storyState)
//  - 修复尸体肢解状态和地面掉落物的保存问题
// ============================================================

// 原始静态模板ID集合（用于区分动态创建的物品）
const ORIGINAL_TEMPLATE_IDS = new Set(
    (typeof ITEM_TEMPLATES !== 'undefined') ? Object.keys(ITEM_TEMPLATES) : []
);

// Mod 在页面启动后才加载；只登记本次加载的 Mod 物品，避免把旧游戏遗留的
// 动态掉落误登记成静态模板。
function registerStaticItemTemplates() {
    if (typeof ModLoader === 'undefined' || !ModLoader.mergedItems) return;
    Object.keys(ModLoader.mergedItems).forEach(id => ORIGINAL_TEMPLATE_IDS.add(id));
}

// 已从世界数据中移除的旧装饰物。读旧存档时也一并清理，避免重新出现。
const DEPRECATED_ROOM_ITEM_IDS = new Set([
    'sofa_set', 'tea_table', 'fireplace',
    'marble_bathtub', 'copper_faucet', 'towel_rack',
    'bookcases', 'leather_chair', 'writing_desk',
    'four_post_bed', 'tapestry', 'window_view',
    'old_furniture', 'wooden_boxes',
    'pink_bed', 'bookshelf', 'dressing_table',
    'wicker_chairs', 'tea_table_terrace',
    'medium_wooden_door_countess'
]);

function cleanupDeprecatedWorldContent(state) {
    if (!state || !state.world) return;

    Object.values(state.world).forEach(room => {
        if (room && Array.isArray(room.items)) {
            room.items = room.items.filter(id => !DEPRECATED_ROOM_ITEM_IDS.has(id));
        }
        if (room && room.exits) {
            Object.keys(room.exits).forEach(direction => {
                if (room.exits[direction] === 'secret_storage') delete room.exits[direction];
            });
        }
    });

    // 兼容曾进入过旧占位房间的存档，先送回原走廊再删除房间。
    if (state.player && state.player.location === 'secret_storage') {
        state.player.location = 'second_floor_3';
    }
    delete state.world.secret_storage;
}

// 判断是否为动态物品ID
function isDynamicItem(itemId) {
    return !ORIGINAL_TEMPLATE_IDS.has(itemId);
}

// 收集所有动态创建的物品模板
function collectDynamicItems() {
    const dynamic = {};
    for (const [id, template] of Object.entries(ITEM_TEMPLATES)) {
        if (isDynamicItem(id) && template && typeof template === 'object') {
            dynamic[id] = JSON.parse(JSON.stringify(template));
        }
    }
    return dynamic;
}

// 恢复动态物品模板到全局
function restoreDynamicItems(dynamicItems) {
    if (!dynamicItems) return 0;
    let count = 0;
    for (const [id, template] of Object.entries(dynamicItems)) {
        if (!ITEM_TEMPLATES[id]) {
            ITEM_TEMPLATES[id] = template;
            // ★ 不添加到 ORIGINAL_TEMPLATE_IDS，保持动态物品标记
            // 确保后续保存时 isDynamicItem() 仍返回 true
            count++;
        }
    }
    return count;
}

// 保存游戏
async function saveGame() {
    try {
        const saveData = {
            version: 2,
            timestamp: Date.now(),
            player: gameState.player,
            world: gameState.world,
            quests: gameState.quests,
            gameFlags: gameState.gameFlags || {},
            talkedNPCs: gameState.talkedNPCs || {},
            assaultedNPCs: gameState.assaultedNPCs || {},
            firstTimeEntered: gameState.firstTimeEntered,

            // ★ 持久化势力与悬赏状态
            factions: gameState.factions || {},
            bountyState: gameState.bountyState || { activeBounties: [], lastShownBounties: [] },

            // ★ 持久化逃跑后的后台盟友战斗
            backgroundBattles: gameState.backgroundBattles || {},

            // ★ 持久化动态创建的物品模板
            dynamicItems: collectDynamicItems(),

            // ★ 持久化剧情/任务状态
            storyState: typeof StoryEngine !== 'undefined' ? StoryEngine.getState() : {}
        };

        const saveDataStr = JSON.stringify(saveData);
        const fileName = `save_${Date.now()}.json`;
        const options = {
            suggestedName: fileName,
            types: [{ description: '游戏存档', accept: { 'application/json': ['.json', '.sav'] } }]
        };
        const handle = await window.showSaveFilePicker(options);
        const writable = await handle.createWritable();
        await writable.write(saveDataStr);
        await writable.close();
        print("💾 你的复仇之路已保存到: " + handle.name);
    } catch (e) {
        if (e.name === 'AbortError') {
            print("⚠️ 保存已取消。");
        } else {
            print("❌ 保存失败: " + e.message);
        }
    }
}

// 读取存档
async function loadGame() {
    currentPanel = null;
    try {
        const options = {
            types: [{ description: '游戏存档', accept: { 'application/json': ['.json', '.sav'] } }]
        };
        const [fileHandle] = await window.showOpenFilePicker(options);
        const file = await fileHandle.getFile();
        const saved = await file.text();
        if (!saved) { print("❌ 存档文件为空。"); return false; }

        const loaded = JSON.parse(saved);

        cleanupDeprecatedWorldContent(loaded);

        // ★ 恢复动态物品模板
        if (loaded.dynamicItems) {
            const restored = restoreDynamicItems(loaded.dynamicItems);
            console.log(`[SaveSystem] 恢复了 ${restored} 个动态物品模板`);
        }

        // ★ 恢复剧情状态
        if (loaded.storyState && typeof StoryEngine !== 'undefined') {
            StoryEngine.restore(loaded.storyState);
        }

        // 恢复游戏状态
        gameState = loaded;

        // 兼容旧存档：补默认势力/悬赏状态
        if (!gameState.factions) gameState.factions = {};
        if (!gameState.factions.extinction) gameState.factions.extinction = { joined: false, renown: 0, level: 1 };
        if (!gameState.bountyState) gameState.bountyState = { activeBounties: [], lastShownBounties: [] };
        if (!gameState.bountyState.activeBounties) gameState.bountyState.activeBounties = [];
        if (!gameState.bountyState.lastShownBounties) gameState.bountyState.lastShownBounties = [];
        // 兼容旧存档：补后台战斗字段
        if (!gameState.backgroundBattles) gameState.backgroundBattles = {};

        // 重新加载世界数据，确保包含最新的房间定义
        const latestWorld = getWorldData();
        for (const roomId in latestWorld) {
            if (!gameState.world[roomId]) {
                gameState.world[roomId] = latestWorld[roomId];
            }
        }

        // 重新注册地面物品到ITEM_TEMPLATES（兼容旧存档）
        for (const roomId in gameState.world) {
            const room = gameState.world[roomId];
            if (room && room.items) {
                room.items.forEach(itemId => {
                    if (!ITEM_TEMPLATES[itemId]) {
                        // 尝试从动态物品中查找
                        if (loaded.dynamicItems && loaded.dynamicItems[itemId]) {
                            ITEM_TEMPLATES[itemId] = loaded.dynamicItems[itemId];
                        }
                    }
                });
            }
        }

        gameState.firstTimeEntered = false;
        waitingForName = false;
        UI.elements.cmdInput.placeholder = "输入命令 (如 look, n, i)...";
        clearOutput();

        // ★ 读档后恢复进行中悬赏的NPC实例
        if (typeof restoreBountyNpcs === 'function') {
            restoreBountyNpcs();
        }

        // ★ 读档后恢复未完成的后台盟友战斗
        if (typeof ensureBackgroundBattleLoop === 'function') {
            const hasPending = Object.keys(gameState.backgroundBattles || {})
                .some(id => gameState.backgroundBattles[id] && gameState.backgroundBattles[id].status === 'pending');
            if (hasPending) ensureBackgroundBattleLoop();
        }

        print("📀 记忆复苏，你回到了桑华山的矿道中……");
        look();
        updateMinimap();
        return true;
    } catch (e) {
        print("❌ 存档损坏，无法读取。");
        console.error("读档错误:", e);
        return false;
    }
}

// 重置游戏
function resetGame() {
    currentPanel = null;
    if (confirm('一切将重新开始，确定吗？')) {
        gameState = getDefaultGameState();
        clearOutput();
        waitingForName = false;
        UI.elements.cmdInput.placeholder = "输入命令 (如 look, n, i)...";
        print("⚒️ 桑华山的阴冷再次包裹了你。你必须逃出去，然后复仇。");
        look();
        updateMinimap();
    }
}
