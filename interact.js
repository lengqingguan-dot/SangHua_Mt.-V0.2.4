// ============================================================
// 交互系统核心逻辑 (interact.js) - 策略模式重构版
// 负责处理所有物品的按钮生成逻辑，告别 if-else 屎山
// ============================================================

const InteractSystem = {
    // 楼梯/梯子的目标房间映射表 (将硬编码转化为数据字典)
    stairsMap: {
        'spiral_stairs_north': 'second_floor_north',
        'spiral_stairs_north_2f': 'corridor_north_2',
        'spiral_stairs_south': 'second_floor_4',
        'spiral_stairs_south_2f': 'corridor_south_2',
        'stairs_to_third_floor': 'third_floor_center',
        'stairs_to_second_floor': 'second_floor_4',
        'ladder_to_attic': 'attic',
        'ladder_from_attic': 'third_floor_north',
        'stairs_to_hut_floor2': 'hut_floor2',
        'stairs_to_hut_floor1': 'hut_floor1',
        'stairs_to_cellar': 'cellar_southeast',
        'stairs_from_cellar': 'corridor_south_2',
        'basement_ladder_up': 'forest_4_center'
    },

    // ----------------------------------------------------
    // 1. 地面物品的交互策略
    // ----------------------------------------------------
    getGroundInteractions: function(itemId, item) {
        let html = '';
        const addBtn = (icon, label, color, action) => {
            html += `<div><span style="color: ${color}; text-decoration: underline; cursor: pointer;" onclick="${action}">${icon} ${label}</span></div>`;
        };

        // 优先处理特殊地标与机关 (基于字典映射调用，不再使用长串的if-else)
        const customActions = {
            'stone_wall': () => addBtn('⛏️', '挖掘', '#ffaa66', `mineStoneWall('${itemId}')`),
            'stove': () => addBtn('🍳', '烹饪', '#ff8844', `useStove('${itemId}')`),
            'workbench': () => addBtn('🔨', '锻造', '#88ccff', `useWorkbench('${itemId}')`),
            'milker': () => addBtn('🥛', '榨奶', '#ffddaa', `useMilker('${itemId}')`),
            'dynamite': () => addBtn('💥', '使用雷管', '#ff4444', `useDynamite('${itemId}')`),
            'side_gate_door': () => addBtn('🚪', '使用钥匙开门', '#aaffaa', `useSideGate('${itemId}')`),
            'randolph_statue': () => addBtn('💪', '推倒雕像', '#ff6666', `pushStatue('${itemId}')`),
            'mansion_gate_door': () => addBtn('🚪', '使用钥匙开门', '#cc9966', `useMansionGate('${itemId}')`),
            'wooden_hut': () => addBtn('🏠', '进入木屋', '#cc9966', `enterWoodenHut('${itemId}')`),
            'hut_door': () => addBtn('🚪', '出去', '#cc9966', `exitHut('${itemId}')`),
            'karen_town': () => addBtn('🚶', '进入', '#aaffaa', `useItemFromDetail('${itemId}')`),
            'sanghuashan_mine': () => addBtn('🚶', '进入', '#ff8844', `useItemFromDetail('${itemId}')`),
            'wardrobe': () => addBtn('🔍', '翻找', '#aaccff', `searchWardrobe('${itemId}')`),
            'leaf_pile': () => addBtn('🍃', '扫开落叶', '#aaffaa', `sweepLeafPile()`),
            'tunnel_entrance': () => addBtn('🕳️', '进入地道', '#aaffaa', `enterTunnel()`),
            'teleport_circle': () => addBtn('🌀', '查看传送阵', '#6688ff', `useTeleportCircle('${itemId}')`),
            'mod_teleport_circle': () => addBtn('🌀', '查看传送阵', '#6688ff', `useTeleportCircle('${itemId}')`),
            'heavy_wooden_door': () => addBtn('⚔️', '强行破门', '#ffaa66', `breakHeavyDoor('${itemId}')`)
        };

        if (customActions[itemId]) {
            customActions[itemId]();
        } 
        else if (this.stairsMap[itemId]) {
            // 通过字典快速匹配旋转楼梯
            const label = itemId.includes('up') || itemId.includes('stairs_to_') || (itemId.includes('spiral') && !itemId.includes('2f')) ? '登上去' : '下楼';
            addBtn('🪜', label, '#cc9966', `useSpiralStairs('${itemId}', '${this.stairsMap[itemId]}')`);
        }
        else if (itemId.includes('medium_wooden_door')) {
            addBtn('⚔️', '强行破门', '#ffaa66', `breakMediumDoor('${itemId}')`);
        }
        else if (itemId.includes('mine_pit')) {
            addBtn('⬇️', '跳下', '#ff6b6b', `jumpIntoPit('${itemId}')`);
        }
        else if (itemId === 'iron_lock') {
            const hasKey = typeof gameState !== 'undefined' && gameState.player.inventory.some(i => i && i.id === 'mine_exit_4_key');
            if (hasKey) addBtn('🔑', '使用四号矿井口钥匙', '#aaffaa', `openIronLockWithKey('${itemId}')`);
            addBtn('⚔️', '破坏铁锁', '#ffaa66', `breakLock('${itemId}')`);
        }
        else if (itemId.includes('removed_ladder')) {
            addBtn('🪜', '使用', '#aaffaa', `useLadder('${itemId}')`);
        }
        else if (itemId.includes('ladder') && item.usable && item.customAction) {
            addBtn('🪜', '使用木梯', '#aaffaa', `useLadder('${itemId}')`);
        }

        // 尸体通用操作
        if (itemId.includes('corpse')) {
            if (item.corpseStory || item.usable) addBtn('🔞', '互动', '#ff66aa', `useCorpseOnGround('${itemId}')`);
            if (item.loot && item.loot.length > 0) addBtn('✨', '搜刮', '#ffdd44', `lootCorpse('${itemId}')`);
            if (item.dismemberable) addBtn('🔪', '肢解', '#ff6b6b', `dismemberItem('${itemId}')`);
        }

        // 拾取操作判定
        if (!item.notPickable && !this.isHardcodedUnpickable(itemId, item)) {
            addBtn('📦', '拾取', '#aaffaa', `pickupItem('${itemId}')`);
            if (typeof countSameItemsOnGround === 'function') {
                const sameCount = countSameItemsOnGround(item.name);
                if (sameCount > 1) {
                    addBtn('📥', `全部拾取(${sameCount}个)`, '#aaffaa', `pickupAllSameItems('${item.name}')`);
                }
            }
        }

        return html;
    },

    // 集中管理那些虽然没写 notPickable 但其实不能捡的"背景板物体"
    isHardcodedUnpickable: function(itemId, item) {
        if (itemId.includes('removed_ladder')) return false; 
        return (itemId.includes('ladder') && item.usable && item.customAction) ||
            ['dynamite', 'heavy_wooden_door', 'stove', 'milker', 'mansion_gate_door', 'wooden_hut', 'hut_door', 'side_gate_door', 'stone_wall', 'stairs_from_cellar'].includes(itemId) ||
            itemId.includes('medium_wooden_door') || 
            itemId.includes('spiral_stairs') || 
            itemId.includes('stairs_to_') || 
            itemId.includes('randolph_statue');
    },

    // ----------------------------------------------------
    // 2. 背包物品的交互策略
    // ----------------------------------------------------
    getInventoryInteractions: function(itemId, item) {
        let html = '';
        const addBtn = (icon, label, color, action) => {
            html += `<div><span style="color: ${color}; text-decoration: underline; cursor: pointer;" onclick="${action}">${icon} ${label}</span></div>`;
        };

        if (itemId.includes('corpse')) {
            if (item.corpseStory || item.usable) addBtn('🔞', '互动', '#ff66aa', `useCorpse('${itemId}')`);
            if (item.loot && item.loot.length > 0) addBtn('✨', '搜刮', '#ffdd44', `lootCorpseFromInventory('${itemId}')`);
            if (item.dismemberable) addBtn('🔪', '肢解', '#ff6b6b', `dismemberCorpseFromInventory('${itemId}')`);
        } else if (['weapon', 'armor', 'accessory'].includes(item.type)) {
            addBtn('⚔️', '装备并返回', '#aaffaa', `equipItemFromDetail('${itemId}')`);
        } else if (item.type === 'consumable') {
            addBtn('🧪', '使用并返回', '#aaffaa', `useItemFromDetail('${itemId}')`);
        } else if (item.type === 'readable') {
            addBtn('📖', '阅读', '#aaffaa', `readItemFromDetail('${itemId}')`);
        } else if (itemId.includes('removed_ladder')) {
            addBtn('🪜', '使用梯子', '#aaffaa', `useRemovedLadderFromInventory()`);
        } else if (item.story) {
            addBtn('🔍', '使用（互动）', '#80e5ff', `useLimb('${itemId}')`);
        } else if (item.milkItem) {
            html += `<div><span style="color: #888;">需在榨奶器旁使用</span></div>`;
        } else {
            html += `<div>此物品无法使用或装备。</div>`;
        }

        // 所有背包物品都可以丢弃
        addBtn('🗑️', '丢弃', '#ff8888', `dropItemFromInventory('${itemId}')`);
        if (typeof gameState !== 'undefined') {
            const sameCount = gameState.player.inventory.filter(i => i.name === item.name).length;
            if (sameCount > 1) {
                addBtn('🗑️', `全部丢弃(${sameCount}个)`, '#ff6666', `dropAllItemsByName('${item.name}')`);
            }
        }

        return html;
    }
};