// ============================================================
//  Mod 加载器 - 动态加载和合并模组数据
//  扫描 mod/ 文件夹，加载所有已启用的模组
// ============================================================

const ModLoader = {
    mods: [],           // 已加载的模组列表
    loaded: false,      // 是否已完成加载

    // 已合并的模组数据（供主游戏使用）
    mergedWorld: {},        // 合并后的模组世界数据
    mergedCharacters: {},   // 合并后的模组角色数据
    mergedItems: {},        // 合并后的模组物品数据
    modConnections: [],     // 模组与主世界的连接信息

    // ============================================================
    //  动态加载单个 JS 文件
    // ============================================================
    loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => {
                console.warn(`[ModLoader] 加载脚本失败: ${src}`);
                resolve(); // 不阻塞其他模组加载
            };
            document.head.appendChild(script);
        });
    },

    // ============================================================
    //  加载单个模组
    // ============================================================
    async loadMod(modDir) {
        try {
            // 1. 加载 mod.json 配置
            const configResp = await fetch(`mod/${modDir}/mod.json`);
            if (!configResp.ok) {
                console.warn(`[ModLoader] 模组 ${modDir} 缺少 mod.json`);
                return null;
            }
            const config = await configResp.json();

            // 2. 检查是否启用
            if (config.enabled === false) {
                console.log(`[ModLoader] 模组 ${config.name || modDir} 已禁用，跳过`);
                return null;
            }

            console.log(`[ModLoader] 正在加载模组: ${config.name || modDir} v${config.version || '?'}`);

            // 3. 加载模组 JS 文件
            if (config.files && Array.isArray(config.files)) {
                for (const file of config.files) {
                    await this.loadScript(`mod/${modDir}/${file}`);
                }
            }

            return {
                config: config,
                dir: modDir
            };
        } catch (e) {
            console.error(`[ModLoader] 加载模组 ${modDir} 失败:`, e);
            return null;
        }
    },

    // ============================================================
    //  扫描并加载所有模组
    //  通过 fetch 获取 mod/ 目录下的文件列表
    // ============================================================
    async loadAllMods() {
        console.log('[ModLoader] 开始扫描模组...');
        this.mods = [];
        this.mergedWorld = {};
        this.mergedCharacters = {};
        this.mergedItems = {};
        this.modConnections = [];

        // 已知的模组目录列表（静态配置）
        // 模组作者将新模组目录名添加到 MOD_LIST 中即可
        const MOD_LIST = [
            'example_mod'
            // 在这里添加更多模组目录名：
            // 'my_custom_mod',
            // 'another_mod',
        ];

        for (const modDir of MOD_LIST) {
            const mod = await this.loadMod(modDir);
            if (mod) {
                this.mods.push(mod);
            }
        }

        // 合并所有已加载模组的数据
        this.mergeAllModData();

        this.loaded = true;
        console.log(`[ModLoader] 模组加载完成，共加载 ${this.mods.length} 个模组`);
        return this.mods.length;
    },

    // ============================================================
    //  合并所有模组数据到统一结构
    // ============================================================
    mergeAllModData() {
        for (const mod of this.mods) {
            const config = mod.config;

            // 合并世界数据（检查全局变量 MOD_WORLD_TEMPLATE）
            if (typeof MOD_WORLD_TEMPLATE !== 'undefined' && mod.dir === this.mods[this.mods.indexOf(mod)].dir) {
                // 每个模组的全局变量名可能不同，通过约定命名查找
            }

            // 使用动态变量名查找模组数据
            // 模组文件应定义以下全局变量（可选）：
            //   MOD_WORLD_TEMPLATE      - 世界地图数据
            //   MOD_CHARACTER_TEMPLATES  - 角色/NPC数据
            //   MOD_ITEM_TEMPLATES       - 物品数据
        }

        // 重新扫描所有已加载的全局变量
        this.collectModData();
    },

    // ============================================================
    //  收集所有模组的全局变量数据
    // ============================================================
    collectModData() {
        // 收集世界数据
        if (typeof MOD_WORLD_TEMPLATE !== 'undefined') {
            for (const roomId in MOD_WORLD_TEMPLATE) {
                if (MOD_WORLD_TEMPLATE.hasOwnProperty(roomId)) {
                    this.mergedWorld[roomId] = JSON.parse(JSON.stringify(MOD_WORLD_TEMPLATE[roomId]));
                }
            }
        }

        // 收集角色数据
        if (typeof MOD_CHARACTER_TEMPLATES !== 'undefined') {
            for (const charId in MOD_CHARACTER_TEMPLATES) {
                if (MOD_CHARACTER_TEMPLATES.hasOwnProperty(charId)) {
                    this.mergedCharacters[charId] = JSON.parse(JSON.stringify(MOD_CHARACTER_TEMPLATES[charId]));
                }
            }
        }

        // 收集物品数据
        if (typeof MOD_ITEM_TEMPLATES !== 'undefined') {
            for (const itemId in MOD_ITEM_TEMPLATES) {
                if (MOD_ITEM_TEMPLATES.hasOwnProperty(itemId)) {
                    this.mergedItems[itemId] = JSON.parse(JSON.stringify(MOD_ITEM_TEMPLATES[itemId]));
                }
            }
        }

        // 收集连接信息
        for (const mod of this.mods) {
            if (mod.config.connectsTo) {
                for (const modRoomId in mod.config.connectsTo) {
                    this.modConnections.push({
                        modRoomId: modRoomId,
                        targetRoom: mod.config.connectsTo[modRoomId].targetRoom,
                        direction: mod.config.connectsTo[modRoomId].direction
                    });
                }
            }
        }

        console.log(`[ModLoader] 合并完成 - 世界: ${Object.keys(this.mergedWorld).length} 个房间, ` +
                     `角色: ${Object.keys(this.mergedCharacters).length} 个, ` +
                     `物品: ${Object.keys(this.mergedItems).length} 个, ` +
                     `连接: ${this.modConnections.length} 个`);
    },

    // ============================================================
    //  将模组数据合并到游戏世界
    //  在 getWorldData() 之后调用
    // ============================================================
    applyToWorld(worldData) {
        // 1. 添加模组房间
        for (const roomId in this.mergedWorld) {
            if (this.mergedWorld.hasOwnProperty(roomId)) {
                worldData[roomId] = JSON.parse(JSON.stringify(this.mergedWorld[roomId]));
            }
        }

        // 2. 处理连接：在主世界房间添加通往模组房间的出口
        for (const conn of this.modConnections) {
            const targetRoom = worldData[conn.targetRoom];
            if (targetRoom) {
                if (!targetRoom.exits) targetRoom.exits = {};
                targetRoom.exits[conn.direction] = conn.modRoomId;
                console.log(`[ModLoader] 连接: ${conn.targetRoom} ${conn.direction} -> ${conn.modRoomId}`);
            } else {
                console.warn(`[ModLoader] 目标房间 ${conn.targetRoom} 不存在，无法连接 ${conn.modRoomId}`);
            }
        }

        return worldData;
    },

    // ============================================================
    //  将模组数据合并到角色模板
    // ============================================================
    applyToCharacters() {
        if (typeof CHARACTER_TEMPLATES !== 'undefined') {
            for (const charId in this.mergedCharacters) {
                if (this.mergedCharacters.hasOwnProperty(charId)) {
                    CHARACTER_TEMPLATES[charId] = this.mergedCharacters[charId];
                }
            }
        }
    },

    // ============================================================
    //  将模组数据合并到物品模板
    // ============================================================
    applyToItems() {
        if (typeof ITEM_TEMPLATES !== 'undefined') {
            for (const itemId in this.mergedItems) {
                if (this.mergedItems.hasOwnProperty(itemId)) {
                    ITEM_TEMPLATES[itemId] = this.mergedItems[itemId];
                }
            }
        }
    },

    // ============================================================
    //  获取已加载模组列表（用于UI显示）
    // ============================================================
    getModList() {
        return this.mods.map(mod => ({
            id: mod.config.id,
            name: mod.config.name,
            version: mod.config.version,
            author: mod.config.author,
            description: mod.config.description,
            enabled: mod.config.enabled
        }));
    }
};