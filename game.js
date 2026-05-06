// ============================================================
//  《夜出桑华山》 — 单人 MUD 核心
//  小地图可点击移动，无出口的格子自动隐藏
// ============================================================
console.log('items.js loaded:', typeof createItemsFromTemplates);
console.log('world.js loaded:', typeof getWorldData);
console.log('character.js loaded:', typeof getAllCharacterTemplateIds);

// 房间编号映射（开发者测试用）
const ROOM_ID_MAP = {
    1: 'mine_deep',           // 二号矿井深处
    2: 'mine_tunnel',         // 矿道
    3: 'north_tunnel',        // 北侧矿道
    4: 'tunnel_exit',         // 二号矿道出口
    5: 'mine_exit',           // 二号矿井口
    6: 'stone_road',          // 石子路1
    7: 'stone_road_2',        // 石子路2
    8: 'mine_exit_1',         // 一号矿井口
    9: 'tunnel_exit_1',       // 一号矿道出口
    10: 'north_tunnel_1',     // 北侧矿道（一号矿道）
    11: 'tunnel_1',           // 矿道（一号矿道中段）
    12: 'mine_deep_1',        // 一号矿道深处
    13: 'stone_road_3',       // 石子路3
    14: 'stone_road_4',       // 石子路4
    15: 'mine_exit_3',        // 三号矿井口
    16: 'tunnel_exit_3',      // 三号矿道出口
    17: 'north_tunnel_3',     // 北侧矿道（三号矿道）
    18: 'tunnel_3',           // 矿道（三号矿道中段）
    19: 'mine_deep_3',        // 三号矿道深处
    20: 'stone_road_5',       // 石子路5
    21: 'stone_road_6',       // 石子路6
    22: 'mine_exit_4',        // 四号矿井口
    23: 'tunnel_exit_4',      // 四号矿道出口
    24: 'tunnel_4_north',     // 四号矿道北
    25: 'tunnel_4_east',      // 四号矿道东
    26: 'tunnel_4_west',      // 四号矿道西
    27: 'tunnel_4_west_1',    // 西侧矿道1
    28: 'tunnel_4_west_2',    // 西侧矿道2
    29: 'tunnel_4_west_3',    // 西侧矿道3
    30: 'tunnel_4_west_4',    // 西侧矿道4
    31: 'tunnel_4_west_5',    // 西侧矿道5
    32: 'tunnel_4_west_6',    // 西侧矿道6
    33: 'tunnel_4_west_7',    // 西侧矿道7
    34: 'tunnel_4_south',     // 四号矿道南
    35: 'stone_road_7',        // 石子路7（四号矿井口东侧）
    36: 'stone_road_8',        // 石子路8
    37: 'stone_road_9',        // 石子路9（通往食堂）
    38: 'canteen_gate',        // 食堂大门
    39: 'canteen_hall',        // 食堂大厅
    40: 'kitchen',             // 厨房
    41: 'stone_road_10',       // 石子路10（通往宿舍）
    42: 'dormitory_gate',      // 宿舍大门
    43: 'stone_road_11',       // 石子路11（一号矿井口西侧）
    44: 'stone_road_12',       // 石子路12
    45: 'mine_gate',           // 矿场大门
    46: 'path_1',              // 小路1
    47: 'path_2',              // 小路2
    48: 'side_gate',           // 侧门
    49: 'stone_road_13',       // 石子路13
    50: 'stone_road_14',       // 石子路14
    51: 'knight_gate',         // 骑士住所大门
    52: 'training_ground',     // 训练场
    53: 'knight_house',        // 骑士住所
    54: 'stable',              // 马厩
    // 森林区域（55-114）
    55: 'forest_start',        // 森林起点
    56: 'forest_1_e1',         // 森林1行东1
    57: 'forest_1_e2',         // 森林1行东2
    58: 'forest_1_e3',         // 森林1行东3
    59: 'forest_1_e4',         // 森林1行东4
    60: 'forest_1_w1',         // 森林1行西1
    61: 'forest_1_w2',         // 森林1行西2
    62: 'forest_1_w3',         // 森林1行西3
    63: 'forest_1_w4',         // 森林1行西4
    64: 'forest_2_center',     // 森林2行中心
    65: 'forest_2_e1',         // 森林2行东1
    66: 'forest_2_e2',         // 森林2行东2
    67: 'forest_2_e3',         // 森林2行东3
    68: 'forest_2_e4',         // 森林2行东4
    69: 'forest_2_w1',         // 森林2行西1
    70: 'forest_2_w2',         // 森林2行西2
    71: 'forest_2_w3',         // 森林2行西3
    72: 'forest_2_w4',         // 森林2行西4
    73: 'forest_3_center',     // 森林3行中心
    74: 'forest_3_e1',         // 森林3行东1
    75: 'forest_3_e2',         // 森林3行东2
    76: 'forest_3_e3',         // 森林3行东3
    77: 'forest_3_e4',         // 森林3行东4
    78: 'forest_3_w1',         // 森林3行西1
    79: 'forest_3_w2',         // 森林3行西2
    80: 'forest_3_w3',         // 森林3行西3
    81: 'forest_3_w4',         // 森林3行西4
    82: 'forest_4_center',     // 森林4行中心
    83: 'forest_4_e1',         // 森林4行东1
    84: 'forest_4_e2',         // 森林4行东2
    85: 'forest_4_e3',         // 森林4行东3
    86: 'forest_4_e4',         // 森林4行东4
    87: 'forest_4_w1',         // 森林4行西1
    88: 'forest_4_w2',         // 森林4行西2
    89: 'forest_4_w3',         // 森林4行西3
    90: 'forest_4_w4',         // 森林4行西4
    91: 'deep_forest_1_center', // 深林1行中心
    92: 'deep_forest_1_e1',    // 深林1行东1
    93: 'deep_forest_1_e2',    // 深林1行东2
    94: 'deep_forest_1_e3',    // 深林1行东3
    95: 'deep_forest_1_w1',    // 深林1行西1
    96: 'deep_forest_1_w2',    // 深林1行西2
    97: 'deep_forest_1_w3',    // 深林1行西3
    98: 'deep_forest_2_center', // 深林2行中心
    99: 'deep_forest_2_e1',    // 深林2行东1
    100: 'deep_forest_2_e2',    // 深林2行东2
    101: 'deep_forest_2_w1',   // 深林2行西1
    102: 'deep_forest_2_w2',   // 深林2行西2
    103: 'deep_forest_3_center', // 深林3行中心
    104: 'deep_forest_3_e1',   // 深林3行东1
    105: 'deep_forest_3_w1',   // 深林3行西1
    106: 'cliff',                  // 悬崖
    107: 'hut_floor1',              // 木屋一层
    // 山路区域 (107-126)
    108: 'mountain_path_1',         // 山路1
    109: 'mountain_path_2',         // 山路2
    110: 'mountain_path_3',         // 山路3
    111: 'mountain_path_4',         // 山路4
    112: 'mansion_gate',            // 伯爵宅邸大门
    113: 'fence_gate',              // 围栏门
    114: 'garden_center',           // 花园中心
    114: 'garden_south',            // 花园南侧
    115: 'garden_north',            // 花园北侧
    116: 'greenhouse',              // 温室
    117: 'mansion_back_door',       // 伯爵宅邸后门
    118: 'corridor_center',         // 一层走廊中心
    119: 'corridor_west',           // 一层走廊西侧
    120: 'corridor_west_2',         // 一层走廊西侧第二间
    121: 'corridor_north',          // 一层走廊北侧
    122: 'corridor_north_2',        // 一层走廊北侧第二间
    123: 'corridor_south',          // 一层走廊南侧
    124: 'corridor_south_2',        // 一层走廊南侧第二间
    125: 'mansion_hall',            // 宅邸大厅
    126: 'mansion_front_yard',      // 宅邸前院
    // 二层走廊 (127-131)
    127: 'second_floor_north',      // 二层走廊北侧
    128: 'second_floor_1',          // 二层走廊房间1
    129: 'second_floor_2',          // 二层走廊房间2
    130: 'second_floor_3',          // 二层走廊房间3
    131: 'second_floor_4',          // 二层走廊房间4（最南侧）
    // 宅邸功能房间（132-136）
    132: 'maid_room',               // 女仆房间
    133: 'dining_room',             // 用餐室
    134: 'mansion_kitchen',         // 厨房
    135: 'reception_room',          // 会客室
    136: 'bathroom',                // 卫生间
    137: 'storage_room',            // 储藏室
    138: 'terrace',                 // 露台
    139: 'countess_bedroom',        // 伯爵夫人卧室
    140: 'daughter_bedroom',        // 伯爵女儿卧室
    141: 'study',                   // 书房
    142: 'third_floor_center',      // 三层走廊中心
    143: 'count_bedroom',           // 伯爵卧室
    144: 'third_floor_north',       // 三层走廊北侧
    145: 'attic',                   // 阁楼
    146: 'tutor_bedroom'             // 家庭教师卧室
};

// 获取房间编号对应的房间ID
function getRoomIdByNumber(num) {
    return ROOM_ID_MAP[num] || null;
}

// 开发者传送指令
function teleport(roomNumber) {
    const roomId = getRoomIdByNumber(roomNumber);
    if (!roomId) {
        print(`<span style="color: red;">无效的房间编号: ${roomNumber}</span>`);
        print(`<span style="color: #888;">可用编号: 1-${Object.keys(ROOM_ID_MAP).length}</span>`);
        return;
    }
    
    if (!gameState.world[roomId]) {
        print(`<span style="color: red;">房间数据不存在: ${roomId}</span>`);
        return;
    }
    
    gameState.player.location = roomId;
    clearOutput();
    print(`<span style="color: #aaffaa;">[开发者模式] 传送到房间 #${roomNumber}: ${gameState.world[roomId].name}</span>`);
    print("");
    look();
    updateMinimap();
    updateSceneInfo();
}

// -------------------- 游戏状态 --------------------

// 默认游戏状态，用于重置游戏
function getDefaultGameState() {
    return {
        player: {
            name: "散华",
            hp: 18,
            maxHp: 20,
            sp: 10,
            maxSp: 10,
            atk: 3,
            def: 2,
            agi: 3,
            level: 1,
            exp: 0,
            maxExp: 10,  // 升级所需经验（1级升2级需要10）
            location: "mine_deep",
            inventory: [],
            skills: ['hatred'],  // 初始技能：仇恨
            equipment: {
                weapon: createItemFromTemplate('pickaxe'),
                armor: createItemFromTemplate('miners_cloth'),
                accessory: null
            }
        },
        world: getWorldData(),  // 从 world.js 获取
        firstTimeEntered: true,  // 首次进入标记
        talkedNPCs: {},  // 记录已对话过的NPC {npcId: true}
        assaultedNPCs: {},  // 记录已被侵犯过的NPC {npcId: true}
        quests: {
            main: [
                {
                    id: "escape_mine",
                    name: "主线任务：逃离桑华山矿场",
                    description: "你被困在桑华山矿场中，必须找到出路逃离这个地狱般的地方。",
                    status: "active",
                    progress: "0/5",
                    objectives: [
                        "找到矿场侧门钥匙",
                        "找到矿场大门钥匙",
                        "击败守门的见习骑士",
                        "打开矿场大门",
                        "逃离矿场"
                    ]
                }
            ],
            side: []
        },
        gameFlags: {}  // 游戏标志，用于触发特定事件
    };
}

// 初始游戏状态
let gameState = getDefaultGameState();

// 战斗状态
let battleState = {
    inBattle: false,
    enemies: [],  // 多个敌人 [{npcId, currentHp, maxHp, agi, atk, def, name}, ...]
    currentTurnIndex: 0,  // 当前行动者的索引
    turnOrder: [],  // 行动顺序 ['player' 或 enemy索引]
    round: 0,
    hatredUsed: false,  // 仇恨技能是否已在本次战斗中使用
    originalPlayerStats: null  // 战斗开始时玩家的原始属性
};

// 默认战斗状态，用于重置游戏
const DEFAULT_BATTLE_STATE = JSON.parse(JSON.stringify(battleState));

// -------------------- 面板状态管理 --------------------
// 始终保存主游戏输出内容（look、move等命令的输出）
let mainContent = '';
// 当前面板状态：null=主界面, 'inventory'=物品栏, 'equipment'=装备栏, 'status'=状态栏, 'detail'=详情页
let currentPanel = null;
// 详情页保存的前一个面板内容
let detailContent = '';
// 详情页来自哪个面板
let previousPanelType = null;
// 各面板的缓存内容
let inventoryContent = '';
let equipmentContent = '';
let statusContent = '';
let questsContent = '';
// 地面物品详情页的返回目标
let groundItemReturnTarget = '';
// NPC详情页对话的返回目标
let npcDialogueReturnTarget = '';
// 当前详情栏显示的物品/NPC ID
let currentDetailItem = null;
let currentDetailNPC = null;

// -------------------- DOM 元素 --------------------
const outputDiv = document.getElementById('output');
const cmdInput = document.getElementById('cmd-input');
const roomNameDisplay = document.getElementById('room-name-display');

// 小地图格子元素
let mapNorth = document.getElementById('map-north');
let mapSouth = document.getElementById('map-south');
let mapEast = document.getElementById('map-east');
let mapWest = document.getElementById('map-west');

let northRoomSpan = document.getElementById('north-room');
let southRoomSpan = document.getElementById('south-room');
let eastRoomSpan = document.getElementById('east-room');
let westRoomSpan = document.getElementById('west-room');


// -------------------- 辅助函数：输出文本 --------------------
function print(msg) {
    outputDiv.innerHTML += msg + '<br>';
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function clearOutput() {
    outputDiv.innerHTML = '';
}

// -------------------- 更新小地图 --------------------
function updateMinimap() {
    const currentLoc = gameState.player.location;
    const room = gameState.world[currentLoc];
    if (!room) return;

    roomNameDisplay.textContent = room.name;

    const centerRoomNameSpan = document.getElementById('current-room-name-on-map');
    if (centerRoomNameSpan) {
        centerRoomNameSpan.textContent = room.name;
    }

    const exits = room.exits || {};

    const getRoomName = (dir) => {
        const targetId = exits[dir];
        if (targetId && gameState.world[targetId]) {
            return gameState.world[targetId].name;
        }
        return null;
    };

    const directions = [
        { dir: 'north', cell: mapNorth, span: northRoomSpan },
        { dir: 'south', cell: mapSouth, span: southRoomSpan },
        { dir: 'east', cell: mapEast, span: eastRoomSpan },
        { dir: 'west', cell: mapWest, span: westRoomSpan }
    ];

    directions.forEach(({ dir, cell, span }) => {
        const roomName = getRoomName(dir);
        cell.removeEventListener('click', cell._clickHandler);
        
        if (roomName) {
            cell.classList.remove('empty');
            cell.classList.add('clickable');
            span.textContent = roomName;
            const handler = () => moveByButton(dir);
            cell._clickHandler = handler;
            cell.addEventListener('click', handler);
        } else {
            cell.classList.add('empty');
            cell.classList.remove('clickable');
            span.textContent = '—';
            cell._clickHandler = null;
        }
    });
}


// -------------------- 游戏逻辑：观察 --------------------
function look() {
    const loc = gameState.player.location;
    let room = gameState.world[loc];
    if (!room) {
        // 尝试重新加载世界数据
        gameState.world = getWorldData();
        room = gameState.world[loc];
        if (!room) {
            print(`<span style="color:red;">错误：当前位置「${loc}」不存在！</span>`);
            return;
        }
    }

    // 首次进入开局房间，显示开场动画
    if (gameState.firstTimeEntered && loc === 'mine_deep') {
        playIntroAnimation();
        return;
    }

    // 正常显示房间信息
    showRoomInfo(room);
    
    // 更新周围可见框
    updateSceneInfo();
}

// 检查是否是西侧矿道4-7区域（只有这些房间显示红色场景描述）
function isMine4Area(roomId) {
    // 只有西侧矿道4-7显示红色场景描述
    const redDescRooms = [
        'tunnel_4_west_4', 'tunnel_4_west_5', 'tunnel_4_west_6', 'tunnel_4_west_7'
    ];
    return redDescRooms.includes(roomId);
}

// 显示房间信息
function showRoomInfo(room) {
    const loc = gameState.player.location;
    const isMine4 = isMine4Area(loc);
    
    print('<br>'); // 空行分隔
    print(`<span style="color: #e6d5a8; font-weight: bold;">[ ${room.name} ]</span>`);
    
    // 四号矿道使用红色场景描述
    if (isMine4) {
        print(`<span style="color: #ff6666;">${room.desc}</span>`);
    } else {
        print(`<span class="scene-desc">${room.desc}</span>`);
    }

    const exits = room.exits;
    const exitNames = { north: '北', south: '南', east: '东', west: '西' };
    const exitList = Object.keys(exits).map(dir => exitNames[dir] || dir);
    if (exitList.length > 0) {
        print(`<span style="color: #aac7e0;">可通行方向: ${exitList.join('、')}</span>`);
    } else {
        print(`<span style="color: #aac7e0;">四周都是死路。</span>`);
    }
    
    // 更新主内容缓存
    mainContent = outputDiv.innerHTML;
    
    // 检测血色宝石：如果玩家进入训练场且装备了血色宝石，莉娅娜会攻击
    if (loc === 'training_ground' && room.npcs && room.npcs.includes('liana')) {
        const equippedAccessory = gameState.player.equipment.accessory;
        if (equippedAccessory && equippedAccessory.id === 'blood_gem') {
            // 延迟一点显示，让玩家先看到房间信息
            setTimeout(() => {
                print("");
                print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
                print(`<span style="color: #ff4444; font-weight: bold;">莉娅娜注意到了你身上的血色宝石！</span>`);
                print(`<span style="color: #ffaaaa;">她的红色瞳孔骤然收缩，眉头紧锁，手不自觉地按在了剑柄上。</span>`);
                print(`<span style="color: #ffaaaa;">一种说不清的不详感从心底涌起，驱使着她想要摧毁你。</span>`);
                print(`<span style="color: #ff6666;">「这东西...让我不舒服。」她低声说道，眼神变得危险起来。</span>`);
                print(`<span style="color: #ff4444;">莉娅娜拔出长剑，向你冲来！</span>`);
                print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
                print("");
                
                // 开始战斗
                startBattle('liana');
            }, 500);
        }
    }
}

// 是否正在等待用户输入名字
let waitingForName = false;

// ==================== 剧情Next按钮系统 ====================
let _storyNextCallback = null; // 点击Next时执行的回调

function showNextBtn(callback) {
    _storyNextCallback = callback;
    const btn = document.getElementById('story-next-btn');
    if (btn) btn.style.display = 'inline-block';
}

function hideNextBtn() {
    _storyNextCallback = null;
    const btn = document.getElementById('story-next-btn');
    if (btn) btn.style.display = 'none';
}

function onStoryNextClick() {
    if (typeof _storyNextCallback === 'function') {
        const cb = _storyNextCallback;
        _storyNextCallback = null; // 防止重复点击
        cb();
    }
}

// 根据文本字数计算剧情延时（毫秒）—— 已弃用，保留备用
function storyDelay(text, rate) {
    // 去除HTML标签，计算纯文字字数
    const plainText = text.replace(/<[^>]*>/g, '');
    const charCount = plainText.length;
    const delayMs = (charCount / rate) * 1000;
    return Math.max(delayMs, rate === 15 ? 800 : 300); // 速率15时最短800ms，其余300ms
}

// 开场动画
function playIntroAnimation() {
    const introLines = [
        "序章-夜出桑华山",
        "矿道深处只有镐尖敲击岩壁的声音。一下，又一下，沉闷得像心跳。",
        "空气里浮着石粉，吸进肺里很痛。你直起腰，脖颈的汗顺着脊背滑下去。",
        "监工的影子在远处晃了晃。没人说话，都低下头继续挖着。",
        "你握紧镐柄往下敲去。石壁迸裂，碎片飞溅，手上的镐子因为贫血而不断打滑。",
        "痛苦，无尽的痛苦。饥饿啃噬着你的身体，疲惫席卷着你的精神。",
        "但是你又一次举起镐子。",
        "不知过了多久，你终于砸出了一个像样的石块。",
        "你不知道你还能活多久，但也许这种生活似乎会持续到你的生命尽头。"
    ];
    
    // 显示遮罩，封锁所有交互
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    clearOutput();
    let lineIndex = 0;
    
    function showNextLine() {
        if (lineIndex < introLines.length) {
            if (lineIndex === 0) {
                print(`<span style="color: #e6d5a8; font-weight: bold;">${introLines[lineIndex]}</span>`);
            } else {
                print(`<span style="color: #e6d5a8;">${introLines[lineIndex]}</span>`);
            }
            print("");
            lineIndex++;
            setTimeout(showNextLine, 1300);
        } else {
            // 开场动画结束，进入设定名字环节
            gameState.firstTimeEntered = false;
            print(`<span style="color: #e6d5a8; font-weight: bold;">═══════════════════════════</span>`);
            print(`<span style="color: #e6d5a8; font-weight: bold;">你是谁？</span>`);
            print(`<span style="color: #888;">请在下方指令栏中输入你的名字。</span>`);
            print(`<span style="color: #888;">若留空则默认名为「散华」。</span>`);
            print(`<span style="color: #e6d5a8; font-weight: bold;">═══════════════════════════</span>`);
            print("");
            
            // 设置等待名字输入状态
            waitingForName = true;
            cmdInput.placeholder = "输入你的名字后回车...";
            cmdInput.focus();
            
            // 隐藏遮罩，允许用户在指令栏输入
            if (overlay) overlay.classList.remove('active');
        }
    }
    
    showNextLine();
}

// 处理名字输入
function processNameInput(name) {
    const trimmed = name.trim();
    if (trimmed === '') {
        gameState.player.name = '散华';
        print(`<span style="color: #e6d5a8;">你没有留下名字。从此，你便是「散华」。</span>`);
    } else {
        gameState.player.name = trimmed;
        print(`<span style="color: #e6d5a8;">「${trimmed}」——你念出了自己的名字。</span>`);
    }
    print("");
    
    // 恢复正常指令模式
    waitingForName = false;
    cmdInput.placeholder = "输入命令 (如 look, n, i)...";
    
    // 正式进入游戏
    const room = gameState.world[gameState.player.location];
    showRoomInfo(room);
    updateSceneInfo();
    updateMinimap();
}

// -------------------- 移动逻辑 --------------------
function move(direction) {
    const currentLoc = gameState.player.location;
    const room = gameState.world[currentLoc];
    if (!room) return;

    const dirMap = {
        'n': 'north', 's': 'south', 'e': 'east', 'w': 'west',
        'north': 'north', 'south': 'south', 'east': 'east', 'west': 'west'
    };
    const fullDir = dirMap[direction];
    if (!fullDir) {
        print(`无效的方向: ${direction}`);
        return;
    }

    const targetRoomId = room.exits[fullDir];
    if (!targetRoomId) {
        print(`那边没有路。`);
        return;
    }
    if (!gameState.world[targetRoomId]) {
        print(`目标房间数据错误。`);
        return;
    }

    // 检查矿场大门通行限制：从外部进入矿场大门时，需击败见习骑士并持有矿场大门钥匙
    if (targetRoomId === 'mine_gate') {
        // 检查石子路12是否有见习骑士存活
        const stoneRoad12 = gameState.world['stone_road_12'];
        const hasKnightsAlive = stoneRoad12 && stoneRoad12.npcs && stoneRoad12.npcs.some(npcId => npcId === 'apprentice_knight');
        const hasGateKey = gameState.player.inventory.some(item => item && item.id === 'mine_gate_key');

        if (hasKnightsAlive && !hasGateKey) {
            print("");
            print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
            print(`<span style="color: #ffaa66;">见习骑士拦住了你的去路。</span>`);
            print(`<span style="color: #888;">「站住！未经许可不得通过矿场大门！」</span>`);
            print(`<span style="color: #666;">（需要击败守门的见习骑士并取得矿场大门钥匙才能通行...）</span>`);
            print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
            return;
        }

        // 骑士已死但没钥匙
        if (!hasKnightsAlive && !hasGateKey) {
            print("");
            print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
            print(`<span style="color: #ffaa66;">矿场大门紧锁着。</span>`);
            print(`<span style="color: #888;">守门的骑士虽然已经不在了，但大门上还挂着一把沉重的铁锁。</span>`);
            print(`<span style="color: #666;">（你需要矿场大门钥匙才能打开大门...）</span>`);
            print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
            return;
        }

        // 有骑士存活且有钥匙 - 骑士仍会阻拦
        if (hasKnightsAlive && hasGateKey) {
            print("");
            print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
            print(`<span style="color: #ffaa66;">见习骑士拦住了你的去路。</span>`);
            print(`<span style="color: #888;">「就算你有钥匙也不行！没有骑士团的命令，谁都不能通过！」</span>`);
            print(`<span style="color: #666;">（必须先解决守门的见习骑士...）</span>`);
            print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
            return;
        }

        // 骑士已死且有钥匙 - 可以通过
    }

    // 检查伯爵宅邸大门：需要钥匙才能进入
    if (targetRoomId === 'mansion_gate') {
        const hasMansionKey = gameState.player.inventory.some(item => item && item.id === 'mansion_key');
        if (!hasMansionKey) {
            print("");
            print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
            print(`<span style="color: #ffaa66;">伯爵宅邸的大门紧闭着。</span>`);
            print(`<span style="color: #888;">沉重的橡木大门上挂着一把巨大的铁锁。</span>`);
            print(`<span style="color: #666;">（你需要伯爵宅邸钥匙才能进入...）</span>`);
            print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
            return;
        }
    }

    gameState.player.location = targetRoomId;

    const dirChinese = { north: '北', south: '南', east: '东', west: '西' };
    print(`你向${dirChinese[fullDir]}方走去……`);

    // 检查是否是结局路线
    if (targetRoomId === 'mountain_path_14') {
        // 检查gameFlags是否存在，如果不存在则初始化
        if (!gameState.gameFlags) {
            gameState.gameFlags = {};
        }
        // 只有当结局未播放时才触发
        if (!gameState.gameFlags.endingPlayed) {
            // 标记结局已播放
            gameState.gameFlags.endingPlayed = true;
            // 触发结局
            triggerEnding();
            return; // 结局触发后不继续执行
        }
    }

    look();
    updateMinimap();
    updateSceneInfo();
    
    // 检查新房间是否有发狂矿工，有则立即发起战斗（只有发狂矿工主动攻击）
    const newRoom = gameState.world[targetRoomId];
    if (newRoom && newRoom.npcs) {
        // 只有mad_miner（发狂矿工）和 mad_supervisor（发狂监工）会主动攻击
        const hostileNPCs = newRoom.npcs.filter(npcId => npcId === 'mad_miner' || npcId === 'mad_supervisor');
        
        if (hostileNPCs.length > 0) {
            // 立即显示遮罩，锁死所有按钮防止玩家逃跑
            const overlay = document.getElementById('block-overlay');
            if (overlay) overlay.classList.add('active');
            
            setTimeout(() => {
                print("");
                const madMiners = hostileNPCs.filter(id => id === 'mad_miner');
                const madSupervisors = hostileNPCs.filter(id => id === 'mad_supervisor');
                
                if (madMiners.length > 0 && madSupervisors.length > 0) {
                    print(`<span style="color: #ff6666;">${madMiners.length}个发狂矿工和${madSupervisors.length}个发狂监工发现了你，发出野兽般的嘶吼，挥舞着武器冲了上来！</span>`);
                } else if (madSupervisors.length > 0) {
                    if (madSupervisors.length === 1) {
                        print(`<span style="color: #ff6666;">发狂的监工发现了你，发出野兽般的嘶吼，挥舞着铁棍冲了上来！</span>`);
                    } else {
                        print(`<span style="color: #ff6666;">${madSupervisors.length}个发狂的监工发现了你，发出野兽般的嘶吼，挥舞着铁棍冲了上来！</span>`);
                    }
                } else {
                    if (madMiners.length === 1) {
                        print(`<span style="color: #ff6666;">发狂矿工发现了你，发出野兽般的嘶吼，挥舞着铁镐冲了上来！</span>`);
                    } else {
                        print(`<span style="color: #ff6666;">${madMiners.length}个发狂矿工发现了你，发出野兽般的嘶吼，挥舞着铁镐冲了上来！</span>`);
                    }
                }
                startMultiBattle(hostileNPCs);
            }, 800);
        }
    }
    
    // 西侧矿道特殊剧情处理
    handleWestTunnelStory(targetRoomId);
}

// 从按钮/小地图移动时，如果当前在面板状态，先关闭面板
function moveByButton(direction) {
    if (currentPanel !== null) {
        // 先关闭面板回到主界面
        closeCurrentPanel();
        // 延迟一下确保界面更新完成
        setTimeout(() => {
            move(direction);
        }, 50);
    } else {
        move(direction);
    }
}

// 关闭当前面板，回到主界面
function closeCurrentPanel() {
    const detailPanel = document.getElementById('detail-panel');
    
    if (currentPanel === 'inventory') {
        if (mainContent) {
            outputDiv.innerHTML = mainContent;
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    } else if (currentPanel === 'equipment') {
        if (mainContent) {
            outputDiv.innerHTML = mainContent;
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    } else if (currentPanel === 'status') {
        if (mainContent) {
            outputDiv.innerHTML = mainContent;
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    } else if (currentPanel === 'quests') {
        // 恢复详情栏默认内容
        detailPanel.innerHTML = '<span style="color: #888;">点击物品或NPC查看详情...</span>';
    } else if (currentPanel === 'detail') {
        // 从详情页返回
        if (detailContent) {
            outputDiv.innerHTML = detailContent;
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    } else if (currentPanel === 'ground_item') {
        // 从地面物品详情页返回
        if (groundItemReturnTarget) {
            outputDiv.innerHTML = groundItemReturnTarget;
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    } else if (currentPanel === 'npc_detail') {
        // 从NPC详情页返回
        if (mainContent) {
            outputDiv.innerHTML = mainContent;
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    }
    currentPanel = null;
    detailContent = '';
    updateSceneInfo();
}

// -------------------- 查看状态 --------------------
function showStatus() {
    const p = gameState.player;
    print(`<span style="color: #c3b38d;">👤 ${p.name}  |  ❤️ HP: ${p.hp}/${p.maxHp}  |  📍 ${gameState.world[p.location].name}</span>`);
}

// -------------------- 显示任务面板 --------------------
function showQuestsPanel() {
    const detailPanel = document.getElementById('detail-panel');
    let questsHtml = '';
    
    questsHtml += makeTitle('任务日志') + '<br>';
    
    // 显示主线任务
    const mainQuests = gameState.quests.main;
    if (mainQuests.length > 0) {
        questsHtml += `<span style="color: #ffaa66; font-weight: bold;">📜 主线任务</span><br>`;
        questsHtml += centerLine('───────') + '<br>';
        mainQuests.forEach(quest => {
            questsHtml += `<span style="color: #e6d5a8; font-weight: bold;">${quest.name}</span><br>`;
            questsHtml += `<span style="color: #b7c9e2;">${quest.description}</span><br>`;
            questsHtml += `<span style="color: #888;">状态: ${quest.status === 'active' ? '进行中' : '完成'}</span><br>`;
            if (quest.status === 'completed') {
                questsHtml += `<span style="color: #66ff66;">✅ 任务已完成</span><br>`;
            }
            questsHtml += '<br>';
        });
    }
    
    // 显示支线任务
    const sideQuests = gameState.quests.side;
    if (sideQuests.length > 0) {
        questsHtml += `<span style="color: #66aaff; font-weight: bold;">📜 支线任务</span><br>`;
        questsHtml += centerLine('───────') + '<br>';
        sideQuests.forEach(quest => {
            questsHtml += `<span style="color: #e6d5a8; font-weight: bold;">${quest.name}</span><br>`;
            questsHtml += `<span style="color: #b7c9e2;">${quest.description}</span><br>`;
            questsHtml += `<span style="color: #888;">状态: ${quest.status === 'active' ? '进行中' : '完成'}</span><br>`;
            questsHtml += '<br>';
        });
    } else {
        questsHtml += `<span style="color: #888;">当前没有支线任务</span><br>`;
    }
    
    questsHtml += centerLine('═══════') + '<br>';
    
    // 保存当前输出内容
    if (currentPanel === null) {
        mainContent = outputDiv.innerHTML;
    }
    
    // 显示任务内容到详情栏
    detailPanel.innerHTML = questsHtml;
    
    // 设置当前面板状态
    currentPanel = 'quests';
    detailContent = questsHtml;
}

// -------------------- 显示背包物品列表 --------------------
function showInventory() {
    const inv = gameState.player.inventory;
    if (inv.length === 0) {
        print("你的行囊空空如也。");
    } else {
        inv.forEach(item => {
            let emoji = '';
            if (item.type === 'weapon') emoji = '⚔️';
            else if (item.type === 'armor') emoji = '🛡️';
            else if (item.type === 'consumable') emoji = '🧪';
            else if (item.type === 'readable') emoji = '📖';
            else emoji = '📦';
            const itemHtml = `<span style="color: #b7c9e2; text-decoration: underline; cursor: pointer;" onclick="examineItemFromPanel('${item.id}')">${item.name}</span>`;
            print(`  ▫️ ${itemHtml} ${emoji}`);
        });
        print("提示：点击物品查看详情，详情页可装备/使用。");
    }
}

// -------------------- 命令解析 --------------------
function processCommand(cmd) {
    if (!cmd.trim()) return;

    const args = cmd.trim().toLowerCase().split(/\s+/);
    const action = args[0];

    print(`<span style="color: #aaa;">> ${cmd}</span>`);

    switch (action) {
        case 'help':
        case '?':
            print("════ 命 令 帮 助 ════");
            print(" look / l      - 观察周围");
            print(" n / s / e / w - 向北/南/东/西移动");
            print(" north / south / east / west");
            print(" i / inventory - 查看行囊");
            print(" hp / status   - 查看状态");
            print(" save / load   - 保存/读取进度 (也可用下方按钮)");
            print(" reset         - 重新开始");
            print(" tp <编号>     - 开发者传送 (测试用)");
            print(" exp <数值>    - 开发者经验 (测试用)");
            print("（也可以直接点击右侧小地图移动）");
            print("═══════════════════════");
            break;

        case 'look':
        case 'l':
            currentPanel = null;
            look();
            updateMinimap();
            break;

        case 'north':
        case 'n':
        case 'south':
        case 's':
        case 'east':
        case 'e':
        case 'west':
        case 'w':
            move(action);
            break;

        case 'i':
        case 'inventory':
            showInventory();
            break;

        case 'hp':
        case 'status':
            showStatus();
            break;

        case 'save':
            saveGame();
            break;

        case 'load':
            loadGame();
            break;

        case 'reset':
            resetGame();
            break;

        case 'tp':
            // 开发者传送指令: tp <房间编号>
            if (args[1]) {
                const roomNum = parseInt(args[1]);
                if (isNaN(roomNum)) {
                    print(`<span style="color: red;">请输入有效的房间编号（数字）</span>`);
                } else {
                    teleport(roomNum);
                }
            } else {
                print(`<span style="color: #888;">用法: tp <房间编号></span>`);
                print(`<span style="color: #888;">可用编号: 1-${Object.keys(ROOM_ID_MAP).length}</span>`);
                print(`<span style="color: #666;">1=二号矿井深处, 5=二号矿井口, 8=一号矿井口, 15=三号矿井口, 22=四号矿井口</span>`);
            }
            break;

        case 'exp':
            // 开发者经验指令: exp <经验值>
            if (args[1]) {
                const expAmount = parseInt(args[1]);
                if (isNaN(expAmount) || expAmount <= 0) {
                    print(`<span style="color: red;">请输入有效的经验值（正整数）</span>`);
                } else {
                    gameState.player.exp += expAmount;
                    print(`<span style="color: #aaffaa;">[开发者模式] 获得 ${expAmount} 经验值，当前经验值: ${gameState.player.exp}</span>`);
                    // 检查是否升级
                    checkLevelUp();
                }
            } else {
                print(`<span style="color: #888;">用法: exp <经验值></span>`);
            }
            break;

        default:
            print(`「${action}」是什么？输入 help 查看可用命令。`);
    }
}

// -------------------- 存档 / 读档 --------------------
async function saveGame() {
    try {
        const saveData = JSON.stringify(gameState);
        const fileName = `save_${Date.now()}.json`;
        const options = {
            suggestedName: fileName,
            types: [{
                description: '游戏存档',
                accept: { 'application/json': ['.json', '.sav'] }
            }]
        };
        const handle = await window.showSaveFilePicker(options);
        const writable = await handle.createWritable();
        await writable.write(saveData);
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

async function loadGame() {
    currentPanel = null;
    try {
        const options = {
            types: [{
                description: '游戏存档',
                accept: { 'application/json': ['.json', '.sav'] }
            }]
        };
        const [fileHandle] = await window.showOpenFilePicker(options);
        const file = await fileHandle.getFile();
        const saved = await file.text();
        if (!saved) {
            print("❌ 存档文件为空。");
            return false;
        }
        const loaded = JSON.parse(saved);
        gameState = loaded;
        
        // 重新加载世界数据，确保包含最新的房间定义
        const latestWorld = getWorldData();
        // 合并世界数据，保留已发现的地点和修改过的房间状态
        for (const roomId in latestWorld) {
            if (!gameState.world[roomId]) {
                gameState.world[roomId] = latestWorld[roomId];
            }
        }
        
        // 重新注册所有地面上的尸体到ITEM_TEMPLATES（使用createCorpse统一逻辑）
        for (const roomId in gameState.world) {
            const room = gameState.world[roomId];
            if (room && room.items) {
                room.items.forEach(itemId => {
                    if (itemId.includes('corpse') && !ITEM_TEMPLATES[itemId]) {
                        // 从itemId中提取npcId：corpse_{npcId}_{timestamp}_{index}
                        const parts = itemId.split('_');
                        // 跳过"corpse"前缀，提取npcId（可能包含下划线，如mad_supervisor）
                        let npcId = null;
                        for (const key in CHARACTER_TEMPLATES) {
                            if (itemId.includes(key)) {
                                npcId = key;
                                break;
                            }
                        }
                        if (npcId) {
                            const corpse = createCorpse(npcId, []);
                            corpse.id = itemId;
                            ITEM_TEMPLATES[itemId] = corpse;
                        }
                    }
                });
            }
        }
        
        // 读取存档后不再显示开场动画
        gameState.firstTimeEntered = false;
        waitingForName = false;
        cmdInput.placeholder = "输入命令 (如 look, n, i)...";
        clearOutput();
        print("📀 记忆复苏，你回到了桑华山的矿道中……");
        look();
        updateMinimap();
        return true;
    } catch (e) {
        print("❌ 存档损坏，无法读取。");
        return false;
    }
}

function resetGame() {
    currentPanel = null;
    if (confirm('一切将重新开始，确定吗？')) {
        gameState = {
            player: {
                name: "散华",
                hp: 18,
                maxHp: 20,
                atk: 3,
                def: 2,
                agi: 4,
                sp: 10,  // 技力
                maxSp: 10,  // 最大技力
                level: 1,
                exp: 0,
                maxExp: 10,  // 升级所需经验（1级升2级需要10）
                location: "mine_deep",
                inventory: [],
                equipment: {
                    weapon: createItemFromTemplate('pickaxe'),
                    armor: createItemFromTemplate('miners_cloth'),
                    accessory: null
                },
                skills: ["hatred"]  // 初始技能
            },
            world: getWorldData(),
            firstTimeEntered: true,
            talkedNPCs: {},
            quests: {
                main: [
                    {
                        id: "escape_mine",
                        name: "主线任务：逃离桑华山矿场",
                        description: "你被困在桑华山矿场中，必须找到出路逃离这个地狱般的地方。",
                        status: "active",
                        progress: "0/5",
                        objectives: [
                            "找到矿场侧门钥匙",
                            "找到矿场大门钥匙",
                            "击败守门的见习骑士",
                            "打开矿场大门",
                            "逃离矿场"
                        ]
                    }
                ],
                side: []
            }
        };
        clearOutput();
        waitingForName = false;
        cmdInput.placeholder = "输入命令 (如 look, n, i)...";
        print("⚒️ 桑华山的阴冷再次包裹了你。你必须逃出去，然后复仇。");
        look();
        updateMinimap();
    }
}

// -------------------- 界面交互 --------------------
function sendCommand() {
    const input = cmdInput.value;
    cmdInput.value = '';
    
    // 如果正在等待名字输入
    if (waitingForName) {
        processNameInput(input);
        return;
    }
    
    processCommand(input);
}

cmdInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendCommand();
    }
});

// ==================== 物品系统辅助函数 ====================

function findItemById(itemId) {
    const invItem = gameState.player.inventory.find(item => item.id === itemId);
    if (invItem) return invItem;
    return null;
}

function getItemTypeName(type) {
    const map = {
        weapon: '武器',
        armor: '防具',
        consumable: '消耗品',
        readable: '读物',
        misc: '杂物'
    };
    return map[type] || type;
}

// 显示物品详情
function examineItemFromPanel(itemId) {
    const item = findItemById(itemId);
    if (!item) {
        printToDetail("物品不存在。");
        return;
    }
    
    const detailPanel = document.getElementById('detail-panel');
    let html = makeTitle('物品详情');
    html += `名称：${item.name}\n`;
    html += `类型：${getItemTypeName(item.type)}\n`;
    if (item.desc) {
        // 尸体和肢体描述用绿色另起一行
        if (item.story || item.milkItem || item.ingredientType || item.dismemberable) {
            html += `\n<span style="color: #66ff66;">${item.desc}</span>\n`;
        } else if (item.type === "consumable") {
            // 料理描述用红色另起一行
            html += `\n<span style="color: #ff6666;">${item.desc}</span>\n`;
        } else {
            html += `描述：${item.desc}\n`;
        }
    }
    if (item.atk) html += `攻击力：+${item.atk}\n`;
    if (item.def) html += `防御力：+${item.def}\n`;
    if (item.agi) html += `灵巧：+${item.agi}\n`;
    if (item.maxHpPercent && item.maxHpPercent < 0) html += `<span style="color: #ff6666;">诅咒：最大生命值 ${Math.round(item.maxHpPercent * 100)}%</span>\n`;
    if (item.effect) {
        if (item.effect === 'heal') html += `效果：恢复 ${item.value} 点生命\n`;
        else if (item.effect === 'maxHp') html += `<span style="color: #66ff66;">效果：永久提升生命值上限 ${item.value} 点</span>\n`;
        else if (item.effect === 'atk') html += `<span style="color: #66ff66;">效果：永久提升攻击力 ${item.value} 点</span>\n`;
        else if (item.effect === 'def') html += `<span style="color: #66ff66;">效果：永久提升防御力 ${item.value} 点</span>\n`;
        else if (item.effect === 'agi') html += `<span style="color: #66ff66;">效果：永久提升灵巧 ${item.value} 点</span>\n`;
        else if (item.effect === 'all') html += `<span style="color: #66ff66;">效果：永久提升所有属性 ${item.value} 点</span>\n`;
        else html += `效果：${item.effect}\n`;
    }
    html += centerLine();
    
    // 尸体特殊处理：可互动、可搜刮、可肢解
    if (item.id && item.id.includes('corpse')) {
        if (item.corpseStory || item.usable) {
            html += `<div><span style="color: #ff66aa; text-decoration: underline; cursor: pointer;" onclick="useCorpse('${item.id}')">🔞 互动</span></div>`;
        }
        if (item.loot && item.loot.length > 0) {
            html += `<div><span style="color: #ffdd44; text-decoration: underline; cursor: pointer;" onclick="lootCorpseFromInventory('${item.id}')">✨ 搜刮</span></div>`;
        }
        if (item.dismemberable) {
            html += `<div><span style="color: #ff6b6b; text-decoration: underline; cursor: pointer;" onclick="dismemberCorpseFromInventory('${item.id}')">🔪 肢解</span></div>`;
        }
    } else if (item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory') {
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="equipItemFromDetail('${item.id}')">⚔️ 装备并返回</span></div>`;
    } else if (item.type === 'consumable') {
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="useItemFromDetail('${item.id}')">🧪 使用并返回</span></div>`;
    } else if (item.type === 'readable') {
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="readItemFromDetail('${item.id}')">📖 阅读</span></div>`;
    } else if (item.id === 'removed_ladder' || (item.id && item.id.includes('removed_ladder') && item.id.includes('_dropped_'))) {
        // 撤走的梯子 - 可在四号矿道出口使用
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="useRemovedLadderFromInventory()">🪜 使用梯子</span></div>`;
    } else if (item.story) {
        // 肢体部位可以互动
        html += `<div><span style="color: #80e5ff; text-decoration: underline; cursor: pointer;" onclick="useLimb('${item.id}')">🔍 使用（互动）</span></div>`;
    } else if (item.milkItem) {
        // 乳房 - 需要在榨奶器旁使用
        html += `<div><span style="color: #888;">需在榨奶器旁使用</span></div>`;
    } else {
        html += `<div>此物品无法使用或装备。</div>`;
    }
    
    // 添加丢弃按钮（所有物品都可以丢弃）
    html += `<div><span style="color: #ff8888; text-decoration: underline; cursor: pointer;" onclick="dropItemFromInventory('${item.id}')">🗑️ 丢弃</span></div>`;
    
    // 检查是否有多个同名物品，显示全部丢弃按钮
    const sameNameCount = gameState.player.inventory.filter(i => i.name === item.name).length;
    if (sameNameCount > 1) {
        html += `<div><span style="color: #ff6666; text-decoration: underline; cursor: pointer;" onclick="dropAllItemsByName('${item.name}')">🗑️ 全部丢弃(${sameNameCount}个)</span></div>`;
    }
    
    // 返回按钮根据来源面板决定
    const returnAction = previousPanelType === 'equipment' ? 'showEquipmentPanel()' : 'showInventoryPanel()';
    html += `<div><span style="color: #aaa; cursor: pointer;" onclick="${returnAction}">↩️ 返回</span></div>`;
    
    detailPanel.innerHTML = html;
    currentPanel = 'item_detail';
}

// 显示已装备物品的详情
function examineEquippedItem(slotKey) {
    const item = gameState.player.equipment[slotKey];
    if (!item) {
        printToDetail("该槽位没有装备物品。");
        return;
    }
    
    const detailPanel = document.getElementById('detail-panel');
    let html = makeTitle('装备详情');
    html += `名称：${item.name}\n`;
    html += `类型：${getItemTypeName(item.type)}\n`;
    if (item.desc) {
        // 尸体和肢体描述用绿色另起一行
        if (item.story || item.milkItem || item.ingredientType || item.dismemberable) {
            html += `\n<span style="color: #66ff66;">${item.desc}</span>\n`;
        } else if (item.type === "consumable") {
            // 料理描述用红色另起一行
            html += `\n<span style="color: #ff6666;">${item.desc}</span>\n`;
        } else {
            html += `描述：${item.desc}\n`;
        }
    }
    if (item.atk) html += `攻击力：+${item.atk}\n`;
    if (item.def) html += `防御力：+${item.def}\n`;
    if (item.agi) html += `灵巧：+${item.agi}\n`;
    if (item.maxHpPercent && item.maxHpPercent < 0) html += `<span style="color: #ff6666;">诅咒：最大生命值 ${Math.round(item.maxHpPercent * 100)}%</span>\n`;
    html += centerLine();
    html += `<div><span style="color: #ffaa66; text-decoration: underline; cursor: pointer;" onclick="unequipItemFromDetail('${slotKey}')">⬇️ 卸下</span></div>`;
    html += `<div><span style="color: #aaa; cursor: pointer;" onclick="showEquipmentPanel()">↩️ 返回</span></div>`;
    
    detailPanel.innerHTML = html;
    currentPanel = 'equipped_detail';
}

// 装备物品
function equipItemFromDetail(itemId) {
    const itemIndex = gameState.player.inventory.findIndex(i => i.id === itemId);
    if (itemIndex === -1) {
        print("你没有这件物品。");
        return;
    }
    const item = gameState.player.inventory[itemIndex];
    
    if (item.type !== 'weapon' && item.type !== 'armor' && item.type !== 'accessory') {
        print(`「${item.name}」无法装备。`);
        return;
    }
    
    const slot = item.slot || (item.type === 'weapon' ? 'weapon' : item.type === 'armor' ? 'armor' : 'accessory');
    
    // 如果该槽位已有装备，先卸下
    const currentEquipped = gameState.player.equipment[slot];
    if (currentEquipped) {
        // 如果卸下的是诅咒物品，恢复最大生命值
        if (currentEquipped.maxHpPercent) {
            const oldMaxHp = gameState.player.maxHp;
            gameState.player.maxHp = Math.floor(gameState.player.maxHp / (1 + currentEquipped.maxHpPercent));
            if (gameState.player.hp > gameState.player.maxHp) {
                gameState.player.hp = gameState.player.maxHp;
            }
            print(`你卸下了「${currentEquipped.name}」，生命值上限恢复为 ${gameState.player.maxHp}。`);
        } else {
            print(`你卸下了「${currentEquipped.name}」。`);
        }
        gameState.player.inventory.push(currentEquipped);
    }
    
    // 从背包移除并装备
    gameState.player.inventory.splice(itemIndex, 1);
    gameState.player.equipment[slot] = item;
    
    // 处理诅咒物品效果（血色宝石）
    if (item.maxHpPercent && item.maxHpPercent < 0) {
        const oldMaxHp = gameState.player.maxHp;
        gameState.player.maxHp = Math.floor(gameState.player.maxHp * (1 + item.maxHpPercent));
        if (gameState.player.hp > gameState.player.maxHp) {
            gameState.player.hp = gameState.player.maxHp;
        }
        print(`<span style="color: #ff6666;">你装备了「${item.name}」。</span>`);
        print(`<span style="color: #ff6666;">诅咒生效！生命值上限从 ${oldMaxHp} 降低至 ${gameState.player.maxHp}。</span>`);
    } else {
        print(`你装备了「${item.name}」。`);
    }
    
    // 检测血色宝石：如果玩家装备了血色宝石且在训练场，莉娅娜会攻击
    if (item.id === 'blood_gem') {
        checkLianaAggression();
    }
    
    // 清空详情栏并刷新物品栏显示
    clearDetailPanel();
    showInventoryPanel();
}

// 检测莉娅娜是否会因血色宝石而攻击玩家
function checkLianaAggression() {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.npcs) return;
    
    // 检查是否在训练场且有莉娅娜
    if (gameState.player.location === 'training_ground' && room.npcs.includes('liana')) {
        // 检查莉娅娜是否还活着（没有被移除）
        const lianaInfo = getCharacterInfo('liana');
        if (!lianaInfo) return;
        
        print("");
        print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
        print(`<span style="color: #ff4444; font-weight: bold;">莉娅娜注意到了你身上的血色宝石！</span>`);
        print(`<span style="color: #ffaaaa;">她的红色瞳孔骤然收缩，眉头紧锁，手不自觉地按在了剑柄上。</span>`);
        print(`<span style="color: #ffaaaa;">一种说不清的不详感从心底涌起，驱使着她想要摧毁你。</span>`);
        print(`<span style="color: #ff6666;">「这东西...让我不舒服。」她低声说道，眼神变得危险起来。</span>`);
        print(`<span style="color: #ff4444;">莉娅娜拔出长剑，向你冲来！</span>`);
        print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
        print("");
        
        // 开始战斗
        startBattle('liana');
    }
}

// 使用物品
function useItemFromDetail(itemId) {
    // 特殊场景物品处理
    if (itemId === 'karen_town') {
        // 清空详情栏
        clearDetailPanel();
        currentPanel = null;
        print("");
        
        // 显示遮罩，封锁所有交互
        const overlay = document.getElementById('block-overlay');
        if (overlay) overlay.classList.add('active');
        
        // 传送到马路房间
        gameState.player.location = 'road';
        
        // 标记主线任务1完成
        const mainQuest = gameState.quests.main.find(q => q.id === "escape_mine");
        if (mainQuest) {
            mainQuest.status = "completed";
            mainQuest.progress = "5/5";
        }
        
        // 检查gameFlags是否存在，如果不存在则初始化
        if (!gameState.gameFlags) {
            gameState.gameFlags = {};
        }
        
        // 马路场景的开幕剧情
        const roadStory = [
            "你向卡伦镇走去...",
            "",
            "你成功逃离了桑华山矿场！",
            "主线任务：逃离桑华山矿场 已完成",
            "",
            "目前的内容到这里就结束了！感谢游玩。",
            "因为现在ai迭代十分快，可能几个月后更新的ai，编程能力比我们现在用的又会强上不少。",
            "因此作者也想好好沉淀一下，更多的是想做一个有更丰富内涵的游戏，而不是简单的瑟瑟。",
            "不过如果朋友们想要做游戏的模组，还算喜欢这种游戏类型的，欢迎加入discord群组。我们一起讨论技术，或者更多创作思路。",
            "再次感谢大家的支持！discord群聊详见作品简介。"
        ];
        
        print(`<span style="color: #aaa;">═══════════════════════════</span>`);
        print(`<span style="color: #e6d5a8; font-weight: bold;">卡伦镇郊外</span>`);
        print(`<span style="color: #aaa;">═══════════════════════════</span>`);
        print("");
        
        // 逐行延时输出
        let lineIndex = 0;
        function showNextRoadLine() {
            if (lineIndex < roadStory.length) {
                if (roadStory[lineIndex] === "") {
                    print("");
                } else if (lineIndex === 7 || lineIndex === 8) {
                    // 最后两行显示为完成状态
                    print(`<span style="color: #66ff66;">${roadStory[lineIndex]}</span>`);
                } else {
                    print(`<span style="color: #cccccc;">${roadStory[lineIndex]}</span>`);
                }
                outputDiv.scrollTop = outputDiv.scrollHeight;
                lineIndex++;
                setTimeout(showNextRoadLine, roadStory[lineIndex - 1] === "" ? 500 : 1300);
            } else {
                // 剧情结束，移除遮罩
                if (overlay) overlay.classList.remove('active');
                
                // 标记马路场景已进入
                gameState.gameFlags.roadEntered = true;
                
                // 显示当前房间
                look();
                // 更新小地图和场景信息
                updateMinimap();
                updateSceneInfo();
            }
        }
        showNextRoadLine();
        return;
    } else if (itemId === 'sanghuashan_mine') {
        // 传送到结尾山路房间
        print("");
        print(`<span style="color: #ff8844;">你进入了「桑华山矿场」...</span>`);
        print(`<span style="color: #ffaa66;">熟悉的场景在你眼前重现...</span>`);
        print("");
        
        // 切换到结尾山路房间
        gameState.player.location = 'mountain_path_14';
        
        // 确保结尾房间有卡伦镇物品
        const endingRoom = gameState.world["mountain_path_14"];
        if (endingRoom) {
            // 移除isEnding标记，避免重复触发结局
            delete endingRoom.isEnding;
            // 添加卡伦镇交互物品
            if (!endingRoom.items) endingRoom.items = [];
            if (!endingRoom.items.includes("karen_town")) {
                endingRoom.items.push("karen_town");
            }
            // 更新房间描述，提示有卡伦镇可以进入
            endingRoom.desc = "山路的尽头，一片开阔的野地展现在眼前。\n你已经远离了桑华山，矿场的围墙消失在夜色中。\n不远处，你看到了一个小镇的轮廓——那是卡伦镇。\n北边是来的路，前方是未知的自由。";
        }
        
        // 清空详情栏并显示新房间
        clearDetailPanel();
        currentPanel = null;
        look();
        // 更新小地图和场景信息
        updateMinimap();
        updateSceneInfo();
        return;
    }
    
    // 处理普通物品
    const item = findItemById(itemId);
    if (!item) {
        print("物品不存在。");
        return;
    }
    
    if (item.type === 'consumable' && item.effect === 'heal') {
        const p = gameState.player;
        const healAmount = item.value || 10;
        p.hp = Math.min(p.maxHp, p.hp + healAmount);
        print(`你使用了「${item.name}」，恢复了 ${healAmount} 点生命。`);
        removeItemFromInventory(itemId);
    } else if (item.type === 'consumable' && ['maxHp', 'atk', 'def', 'agi', 'all'].includes(item.effect)) {
        // 料理永久效果
        const p = gameState.player;
        const value = item.value || 0;
        
        print("");
        print(`<span style="color: #ff8844;">═══════════════════════════</span>`);
        print(`<span style="color: #ffdd44;">你食用了「${item.name}」...</span>`);
        
        switch (item.effect) {
            case 'maxHp':
                p.maxHp += value;
                p.hp += value;
                print(`<span style="color: #66ff66;">生命值上限永久提升 ${value} 点！</span>`);
                break;
            case 'atk':
                p.atk += value;
                print(`<span style="color: #66ff66;">攻击力永久提升 ${value} 点！</span>`);
                break;
            case 'def':
                p.def += value;
                print(`<span style="color: #66ff66;">防御力永久提升 ${value} 点！</span>`);
                break;
            case 'agi':
                p.agi += value;
                print(`<span style="color: #66ff66;">灵巧永久提升 ${value} 点！</span>`);
                break;
            case 'all':
                p.maxHp += value;
                p.hp += value;
                p.atk += value;
                p.def += value;
                p.agi += value;
                print(`<span style="color: #66ff66;">所有属性永久提升 ${value} 点！</span>`);
                break;
        }
        
        print(`<span style="color: #ff8844;">═══════════════════════════</span>`);
        print("");
        removeItemFromInventory(itemId);
    } else {
        print(`你使用了「${item.name}」，但似乎没什么效果。`);
    }
    
    // 清空详情栏并刷新物品栏显示
    clearDetailPanel();
    showInventoryPanel();
}

// 阅读物品（在主界面显示）
function readItemFromDetail(itemId) {
    const item = findItemById(itemId);
    if (!item) return;
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 染血的字条使用剧情模式（延时红色文字）
    if (itemId === 'miner_note' && item.content && Array.isArray(item.content)) {
        print(`你展开「${item.name}」……`);
        print("<br>");
        
        // 显示遮罩，封锁所有交互
        const overlay = document.getElementById('block-overlay');
        if (overlay) overlay.classList.add('active');
        
        let lineIndex = 0;
        function showNextLine() {
            if (lineIndex < item.content.length) {
                print(`<span class="story-text">${item.content[lineIndex]}</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
                lineIndex++;
                setTimeout(showNextLine, 1300);
            } else {
                // 剧情结束
                print("<br>");
                print(`<span style="color: #888;">────────────────</span>`);
                print(`<span style="color: #aaa; cursor: pointer;" onclick="showInventoryPanel()">↩️ 返回物品栏</span>`);
                if (overlay) overlay.classList.remove('active');
            }
        }
        showNextLine();
        return;
    }
    
    // 加急密令使用剧情模式（延时金色文字，体现王室威严）
    if (itemId === 'urgent_order' && item.content && Array.isArray(item.content)) {
        print(`你小心翼翼地拆开火漆封印，展开「${item.name}」……`);
        print("<br>");
        
        // 显示遮罩，封锁所有交互
        const overlay = document.getElementById('block-overlay');
        if (overlay) overlay.classList.add('active');
        
        let lineIndex = 0;
        function showNextOrderLine() {
            if (lineIndex < item.content.length) {
                // 密令使用金色文字显示
                print(`<span style="color: #ffdd44; font-family: serif;">${item.content[lineIndex]}</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
                lineIndex++;
                setTimeout(showNextOrderLine, 1300);
            } else {
                // 剧情结束
                print("<br>");
                print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
                print(`<span style="color: #ff6666;">你读完了这封密令，感到一阵寒意从脊背升起...</span>`);
                print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
                print(`<span style="color: #888;">────────────────</span>`);
                print(`<span style="color: #aaa; cursor: pointer;" onclick="showInventoryPanel()">↩️ 返回物品栏</span>`);
                if (overlay) overlay.classList.remove('active');
            }
        }
        showNextOrderLine();
        return;
    }
    
    // 普通读物直接显示
    print(`你翻开「${item.name}」……`);
    print("────────────────");
    if (item.content && Array.isArray(item.content)) {
        item.content.forEach(line => print(line));
    } else {
        print("（书页空白）");
    }
    print("────────────────");
    print(`<span style="color: #aaa; cursor: pointer;" onclick="showInventoryPanel()">↩️ 返回</span>`);
}

// 卸下装备
function unequipItemFromDetail(slotKey) {
    const item = gameState.player.equipment[slotKey];
    if (!item) {
        print("该槽位没有装备。");
        return;
    }
    
    // 如果卸下的是诅咒物品，恢复最大生命值
    if (item.maxHpPercent && item.maxHpPercent < 0) {
        const oldMaxHp = gameState.player.maxHp;
        gameState.player.maxHp = Math.floor(gameState.player.maxHp / (1 + item.maxHpPercent));
        // 确保当前血量不超过新的最大值
        if (gameState.player.hp > gameState.player.maxHp) {
            gameState.player.hp = gameState.player.maxHp;
        }
        gameState.player.inventory.push(item);
        gameState.player.equipment[slotKey] = null;
        print(`你卸下了「${item.name}」，生命值上限从 ${oldMaxHp} 恢复为 ${gameState.player.maxHp}。`);
    } else {
        gameState.player.inventory.push(item);
        gameState.player.equipment[slotKey] = null;
        print(`你卸下了「${item.name}」。`);
    }
    
    // 清空详情栏并刷新装备栏显示
    clearDetailPanel();
    showEquipmentPanel();
}

// 显示装备详情（供装备面板调用）
function displayEquipment() {
    const slots = [
        { key: 'weapon', name: '武器' },
        { key: 'armor', name: '防具' },
        { key: 'accessory', name: '饰品' }
    ];
    
    slots.forEach(slot => {
        const item = gameState.player.equipment[slot.key];
        let itemDisplay;
        if (item) {
            itemDisplay = `<span style="color: #b7c9e2; text-decoration: underline; cursor: pointer;" onclick="examineEquippedItem('${slot.key}')">${item.name}</span>`;
        } else {
            itemDisplay = '（空）';
        }
        print(`${slot.name}：${itemDisplay}`);
    });
    
    // 计算总攻击力和总防御力（使用统一函数）
    const totalAtk = getCharacterAttack(gameState.player);
    const totalDef = getCharacterDefense(gameState.player);
    const totalAgi = getCharacterAgility(gameState.player);
    
    print("═══════════════════════════════════════════════════════");
    print(`⚔️ 总攻击：${totalAtk}  |  🛡️ 总防御：${totalDef}  |  💨 总灵巧：${totalAgi}`);
    print("═══════════════════════════════════════════════════════");
    print("可装备物品（点击装备）：");
    const equippable = gameState.player.inventory.filter(item =>
        item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory'
    );
    if (equippable.length === 0) {
        print("  无");
    } else {
        equippable.forEach(item => {
            const equipSpan = `<span style="color: #b7c9e2; text-decoration: underline; cursor: pointer;" onclick="examineItemFromPanel('${item.id}')">${item.name}</span>`;
            print(`  ▫️ ${equipSpan}`);
        });
    }
}

// 从背包移除物品
function removeItemFromInventory(itemId) {
    const index = gameState.player.inventory.findIndex(item => item.id === itemId);
    if (index !== -1) {
        gameState.player.inventory.splice(index, 1);
        return true;
    }
    return false;
}

// 丢弃物品到地面
function dropItemFromInventory(itemId) {
    const item = findItemById(itemId);
    if (!item) {
        print("物品不存在。");
        return;
    }
    
    // 获取当前房间
    const currentLoc = gameState.player.location;
    const room = gameState.world[currentLoc];
    if (!room) {
        print("无法丢弃物品。");
        return;
    }
    
    // 从背包中移除物品
    const removed = removeItemFromInventory(itemId);
    if (!removed) {
        print("丢弃失败。");
        return;
    }
    
    // 生成唯一ID（避免冲突）
    const uniqueId = `${itemId}_dropped_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // 创建物品副本并设置新ID
    const droppedItem = JSON.parse(JSON.stringify(item));
    droppedItem.id = uniqueId;
    
    // 添加到房间物品列表
    if (!room.items) room.items = [];
    room.items.push(uniqueId);
    
    // 添加到物品模板（用于后续查找）
    ITEM_TEMPLATES[uniqueId] = droppedItem;
    
    // 清空详情栏并返回
    clearDetailPanel();
    currentPanel = null;
    print("");
    print(`你将「${item.name}」丢在了地上。`);
    
    // 更新周围可见框
    updateSceneInfo();
}

// 丢弃所有同名物品
function dropAllItemsByName(itemName) {
    const currentLoc = gameState.player.location;
    const room = gameState.world[currentLoc];
    if (!room) {
        print("无法丢弃物品。");
        return;
    }
    
    // 找到所有同名物品
    const itemsToDrop = gameState.player.inventory.filter(item => item.name === itemName);
    
    if (itemsToDrop.length === 0) {
        print("没有找到该物品。");
        return;
    }
    
    const dropCount = itemsToDrop.length;
    
    // 从背包中移除所有同名物品并丢弃到地面
    gameState.player.inventory = gameState.player.inventory.filter(item => item.name !== itemName);
    
    // 将物品添加到房间
    itemsToDrop.forEach(item => {
        const uniqueId = `${item.id}_dropped_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const droppedItem = JSON.parse(JSON.stringify(item));
        droppedItem.id = uniqueId;
        
        if (!room.items) room.items = [];
        room.items.push(uniqueId);
        ITEM_TEMPLATES[uniqueId] = droppedItem;
    });
    
    // 清空详情栏并返回
    clearDetailPanel();
    currentPanel = null;
    print("");
    print(`你将 ${dropCount} 个「${itemName}」丢在了地上。`);
    
    // 更新周围可见框
    updateSceneInfo();
}

// ==================== 面板切换函数 ====================

// 自适应宽度的分隔线
function centerLine() {
    return `<div style="border-top: 1px solid #ffffffff;margin:10px 0;"></div>`;
}

// 生成居中标题（左右用═══填充）
function makeTitle(text) {
    return `<div style="display: flex; justify-content: center; align-items: center;">
<span style="flex: 1; border-top: 1px solid #ffffffff; margin-right: 8px;"></span>
<span style="white-space: nowrap;">${text}</span>
<span style="flex: 1; border-top: 1px solid #ffffffff; margin-left: 8px;"></span>
</div>`;
}

// 切换物品栏面板
function showInventoryPanel() {
    if (currentPanel === 'inventory') {
        // 关闭物品栏，返回主界面
        clearDetailPanel();
        currentPanel = null;
    } else {
        // 打开物品栏
        const detailPanel = document.getElementById('detail-panel');
        let html = makeTitle('行囊物品');
        
        // 添加分类菜单（居中）
        html += `<div style="text-align: center;">`;
        html += generateInventoryCategoryMenu();
        html += `</div>`;
        
        const inv = gameState.player.inventory;
        if (inv.length === 0) {
            html += `你的行囊空空如也。\n`;
        } else {
            // 同名物品合并显示
            const nameCountMap = {};
            const nameIdMap = {};
            const nameOrder = [];
            inv.forEach(item => {
                if (nameCountMap[item.name]) {
                    nameCountMap[item.name]++;
                } else {
                    nameCountMap[item.name] = 1;
                    nameIdMap[item.name] = item.id;
                    nameOrder.push(item.name);
                }
            });
            nameOrder.forEach(name => {
                const count = nameCountMap[name];
                const itemId = nameIdMap[name];
                const item = inv.find(i => i.name === name);
                let emoji = '';
                if (item.type === 'weapon') emoji = '⚔️';
                else if (item.type === 'armor') emoji = '🛡️';
                else if (item.type === 'consumable') emoji = '🧪';
                else if (item.type === 'readable') emoji = '📖';
                else emoji = '📦';
                const displayName = count > 1 ? `${name}×${count}` : name;
                html += `  ▫️ <span style="color: #b7c9e2; text-decoration: underline; cursor: pointer;" onclick="examineItemFromPanel('${itemId}')">${displayName}</span> ${emoji}\n`;
            });
        }
        html += centerLine();
        html += `<div style="text-align: center;"><span style="color: #aaa; cursor: pointer;" onclick="showInventoryPanel()">↩️ 关闭</span></div>`;
        
        detailPanel.innerHTML = html;
        currentPanel = 'inventory';
    }
}

// 生成物品分类菜单 HTML（居中均匀分布）
function generateInventoryCategoryMenu() {
    let menuHtml = ``;
    menuHtml += `<span style="color: #b7c9e2; text-decoration: underline; cursor: pointer; margin: 0 10px;" onclick="showInventoryAll()">全部</span>`;
    menuHtml += `<span style="color: #b7c9e2; text-decoration: underline; cursor: pointer; margin: 0 10px;" onclick="showInventoryCategory('consumable')">消耗品</span>`;
    menuHtml += `<span style="color: #b7c9e2; text-decoration: underline; cursor: pointer; margin: 0 10px;" onclick="showInventoryCategory('important')">重要道具</span>`;
    menuHtml += `<span style="color: #b7c9e2; text-decoration: underline; cursor: pointer; margin: 0 10px;" onclick="showInventoryCategory('limb')">肢体</span>`;
    menuHtml += `<span style="color: #b7c9e2; text-decoration: underline; cursor: pointer; margin: 0 10px;" onclick="showInventoryCategory('misc')">杂物</span>\n`;
    menuHtml += centerLine();
    return menuHtml;
}

// 显示物品分类
function showInventoryCategory(category) {
    const detailPanel = document.getElementById('detail-panel');
    const categoryName = category === 'consumable' ? '消耗品' : category === 'important' ? '重要道具' : category === 'limb' ? '肢体' : '杂物';
    let html = makeTitle(`行囊物品 - ${categoryName}`);
    
    // 添加分类菜单（居中）
    html += `<div style="text-align: center;">`;
    html += generateInventoryCategoryMenu();
    html += `</div>`;
    
    const inv = gameState.player.inventory;
    let filteredItems = [];
    
    switch(category) {
        case 'consumable':
            filteredItems = inv.filter(item => item.type === 'consumable');
            break;
        case 'important':
            filteredItems = inv.filter(item => item.type === 'readable' || item.id.includes('key') || item.id.includes('note'));
            break;
        case 'limb':
            filteredItems = inv.filter(item => item.id.includes('corpse') || item.story || item.ingredientType || item.dismemberable || item.milkItem);
            break;
        case 'misc':
            filteredItems = inv.filter(item => item.type === 'misc' && !item.id.includes('corpse') && !item.story && !item.ingredientType && !item.dismemberable && !item.milkItem);
            break;
    }
    
    if (filteredItems.length === 0) {
        html += `该分类下没有物品。\n`;
    } else {
        html += `分类物品：\n`;
        // 同名物品合并显示
        const nameCountMap = {};
        const nameIdMap = {};
        const nameOrder = [];
        filteredItems.forEach(item => {
            if (nameCountMap[item.name]) {
                nameCountMap[item.name]++;
            } else {
                nameCountMap[item.name] = 1;
                nameIdMap[item.name] = item.id;
                nameOrder.push(item.name);
            }
        });
        nameOrder.forEach(name => {
            const count = nameCountMap[name];
            const itemId = nameIdMap[name];
            const item = filteredItems.find(i => i.name === name);
            let emoji = '';
            if (item.type === 'weapon') emoji = '⚔️';
            else if (item.type === 'armor') emoji = '🛡️';
            else if (item.type === 'consumable') emoji = '🧪';
            else if (item.type === 'readable') emoji = '📖';
            else emoji = '📦';
            const displayName = count > 1 ? `${name}×${count}` : name;
            html += `  ▫️ <span style="color: #b7c9e2; text-decoration: underline; cursor: pointer;" onclick="examineItemFromPanel('${itemId}')">${displayName}</span> ${emoji}\n`;
        });
    }
    html += centerLine();
    html += `<div style="text-align: center;"><span style="color: #aaa; cursor: pointer;" onclick="showInventoryPanel()">↩️ 返回物品栏</span></div>`;
    
    detailPanel.innerHTML = html;
    currentPanel = 'inventory';
}

// 显示全部物品
function showInventoryAll() {
    // 直接显示全部物品，不关闭当前面板
    const detailPanel = document.getElementById('detail-panel');
    let html = makeTitle('行囊物品');
    
    // 添加分类菜单（居中）
    html += `<div style="text-align: center;">`;
    html += generateInventoryCategoryMenu();
    html += `</div>`;
    
    const inv = gameState.player.inventory;
    if (inv.length === 0) {
        html += `你的行囊空空如也。\n`;
    } else {
        // 同名物品合并显示
        const nameCountMap = {};
        const nameIdMap = {};
        const nameOrder = [];
        inv.forEach(item => {
            if (nameCountMap[item.name]) {
                nameCountMap[item.name]++;
            } else {
                nameCountMap[item.name] = 1;
                nameIdMap[item.name] = item.id;
                nameOrder.push(item.name);
            }
        });
        nameOrder.forEach(name => {
            const count = nameCountMap[name];
            const itemId = nameIdMap[name];
            const item = inv.find(i => i.name === name);
            let emoji = '';
            if (item.type === 'weapon') emoji = '⚔️';
            else if (item.type === 'armor') emoji = '🛡️';
            else if (item.type === 'consumable') emoji = '🧪';
            else if (item.type === 'readable') emoji = '📖';
            else emoji = '📦';
            const displayName = count > 1 ? `${name}×${count}` : name;
            html += `  ▫️ <span style="color: #b7c9e2; text-decoration: underline; cursor: pointer;" onclick="examineItemFromPanel('${itemId}')">${displayName}</span> ${emoji}\n`;
        });
        html += `提示：点击物品查看详情\n`;
    }
    html += centerLine();
    html += `<div style="text-align: center;"><span style="color: #aaa; cursor: pointer;" onclick="showInventoryPanel()">↩️ 关闭</span></div>`;
    
    detailPanel.innerHTML = html;
    currentPanel = 'inventory';
}

// 切换装备栏面板
function showEquipmentPanel() {
    if (currentPanel === 'equipment') {
        // 关闭装备栏，返回主界面
        clearDetailPanel();
        currentPanel = null;
    } else {
        // 打开装备栏
        const detailPanel = document.getElementById('detail-panel');
        let html = makeTitle('当前装备');
        
        const slots = [
            { key: 'weapon', name: '武器' },
            { key: 'armor', name: '防具' },
            { key: 'accessory', name: '饰品' }
        ];
        
        slots.forEach(slot => {
            const item = gameState.player.equipment[slot.key];
            if (item) {
                html += `🔸 ${slot.name}：<span style="color: #b7c9e2; text-decoration: underline; cursor: pointer;" onclick="examineEquippedItem('${slot.key}')">${item.name}</span>\n`;
            } else {
                html += `🔸 ${slot.name}：<span style="color: #888;">（空）</span>\n`;
            }
        });
        
        // 计算总属性
        const totalAtk = getCharacterAttack(gameState.player);
        const totalDef = getCharacterDefense(gameState.player);
        const totalAgi = getCharacterAgility(gameState.player);
        
        html += centerLine();
        html += `⚔️ 总攻击：${totalAtk}  |  🛡️ 总防御：${totalDef}  |  💨 总灵巧：${totalAgi}`;
        html += centerLine();
        html += `可装备物品（点击装备）：\n`;
        
        const equippable = gameState.player.inventory.filter(item =>
            item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory'
        );
        if (equippable.length === 0) {
            html += `  <span style="color: #888;">无</span>\n`;
        } else {
            equippable.forEach(item => {
                html += `  ▫️ <span style="color: #b7c9e2; text-decoration: underline; cursor: pointer;" onclick="examineItemFromPanel('${item.id}')">${item.name}</span>\n`;
            });
        }
        html += centerLine();
        html += `<div style="text-align: center;"><span style="color: #aaa; cursor: pointer;" onclick="showEquipmentPanel()">↩️ 关闭</span></div>`;
        
        detailPanel.innerHTML = html;
        currentPanel = 'equipment';
    }
}

// 切换技能栏面板
function showSkillsPanel() {
    if (currentPanel === 'skills') {
        // 关闭技能栏，返回主界面
        clearDetailPanel();
        currentPanel = null;
    } else {
        // 打开技能栏
        const detailPanel = document.getElementById('detail-panel');
        let html = makeTitle('技能总览');
        
        const playerSkills = gameState.player.skills || [];
        if (playerSkills.length === 0) {
            html += `  <span style="color: #888;">暂无技能</span>\n`;
        } else {
            playerSkills.forEach(skillId => {
                const skill = skills[skillId];
                if (skill) {
                    html += `  ▫️ <span style="color: #b7c9e2; text-decoration: underline; cursor: pointer;" onclick="showSkillDetail('${skillId}')">${skill.name}</span> (SP: ${skill.cost})\n`;
                }
            });
        }
        html += centerLine();
        html += `<div style="text-align: center;"><span style="color: #aaa; cursor: pointer;" onclick="showSkillsPanel()">↩️ 关闭</span></div>`;
        
        detailPanel.innerHTML = html;
        currentPanel = 'skills';
    }
}

// 显示技能详情
function showSkillDetail(skillId) {
    const skill = skills[skillId];
    if (!skill) {
        print(`<span style="color: #ffaaaa;">技能不存在！</span>`);
        return;
    }
    
    const detailPanel = document.getElementById('detail-panel');
    let html = makeTitle('技能详情');
    html += `名称：${skill.name}\n`;
    html += `消耗：${skill.cost} SP\n`;
    html += `描述：${skill.description}\n`;
    html += centerLine();
    html += `<div style="text-align: center;"><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="showSkillsPanel()">↩️ 返回技能栏</span></div>`;
    
    detailPanel.innerHTML = html;
    currentPanel = 'skill_detail';
}

// 切换状态面板
function showStatusPanel() {
    if (currentPanel === 'status') {
        // 关闭状态栏，返回主界面
        clearDetailPanel();
        currentPanel = null;
    } else {
        // 打开状态栏
        const detailPanel = document.getElementById('detail-panel');
        const p = gameState.player;
        
        // 计算总属性（使用统一函数）
        const totalAtk = getCharacterAttack(p);
        const totalDef = getCharacterDefense(p);
        const totalAgi = getCharacterAgility(p);
        
        const currentSp = p.sp || 0;
        const maxSp = p.maxSp || 0;
        
        // 计算生命值进度
        const hpPercent = Math.floor((p.hp / p.maxHp) * 100);
        // 计算经验值进度
        const expPercent = Math.floor((p.exp / p.maxExp) * 100);
        
        let html = makeTitle('角色状态');
        html += `<div style="text-align: center;">👤 姓名: ${p.name}</div>`;
        html += centerLine();
        
        // 生命值进度条
        html += `<div style="text-align: center;">❤️ 生命：${p.hp}/${p.maxHp}</div>`;
        html += `<div style="text-align: center;">[${'█'.repeat(Math.floor(hpPercent / 10))}${'░'.repeat(10 - Math.floor(hpPercent / 10))}] ${hpPercent}%</div>`;
        
        // 技力值
        html += `<div style="text-align: center;">⚡ 技力：${currentSp}/${maxSp}</div>`;
        
        // 攻击力
        html += `<div style="text-align: center;">⚔️ 攻击：${totalAtk}</div>`;
        
        // 防御力
        html += `<div style="text-align: center;">🛡️ 防御：${totalDef}</div>`;
        
        // 灵巧
        html += `<div style="text-align: center;">💨 灵巧：${totalAgi}</div>`;
        
        // 等级
        html += `<div style="text-align: center;">⭐ 等级：${p.level}</div>`;
        
        // 经验值进度条
        html += `<div style="text-align: center;">📊 经验：${p.exp}/${p.maxExp}</div>`;
        html += `<div style="text-align: center;">[${'█'.repeat(Math.floor(expPercent / 10))}${'░'.repeat(10 - Math.floor(expPercent / 10))}] ${expPercent}%</div>`;
        
        html += centerLine();
        html += `<div style="text-align: center;"><span style="color: #9aabbb; font-style: italic;">多年矿场的折磨锤炼了你一身如钢铁般的肌肉，汗水的折射下闪着健硕的光辉。</span></div>`;
        html += `<div style="text-align: center;"><span style="color: #9aabbb; font-style: italic;">你英俊的、棱角分明的脸上毫无表情，而你的心中却永远燃烧着仇恨的怒火。</span></div>`;
        html += centerLine();
        html += `<div style="text-align: center;"><span style="color: #aaa; cursor: pointer;" onclick="showStatusPanel()">↩️ 关闭</span></div>`;
        
        detailPanel.innerHTML = html;
        currentPanel = 'status';
    }
}

// 清空输出区
function clearOutputWindow() {
    outputDiv.innerHTML = '';
    print("✨ 输出区已清空。");
    currentPanel = null;
}

// ==================== 周围可见框更新 ====================

function updateSceneInfo() {
    const sceneListDiv = document.getElementById('scene-items-list');
    if (!sceneListDiv) return;
    
    const loc = gameState.player.location;
    const room = gameState.world[loc];
    if (!room) {
        sceneListDiv.innerHTML = '— 暂无 —';
        return;
    }
    
    let html = '';
    
    // 显示房间内的NPC
    if (room.npcs && room.npcs.length > 0) {
        room.npcs.forEach(npcId => {
            const npc = getCharacterInfo(npcId);
            if (npc) {
                // 艾莎名字显示为绿色
                const npcColor = npc.hostile ? '#ff6666' : '#90ee90';
                html += `<div style="margin: 5px 0;">
                    <span style="cursor: pointer; color: ${npcColor};" onclick="showNPCInfo('${npcId}')">👤 ${npc.name}</span>
                </div>`;
            }
        });
    }
    
    // 显示房间内的物品（堆叠显示）
    let pickupableCount = 0;
    if (room.items && room.items.length > 0) {
        // 同名物品合并显示
        const nameCountMap = {};
        const nameItemMap = {};
        const nameOrder = [];
        const nameIdMap = {}; // 用于存储示例itemId
        const pickupableNames = new Set(); // 用于跟踪可拾取的物品名称
        
        room.items.forEach(itemId => {
            const item = getItemInfoById(itemId);
            if (item) {
                const itemName = item.name;
                // 检查是否可拾取
                const isUnpickupable = (itemId.includes('ladder') && item.usable && item.customAction && itemId !== 'removed_ladder') || itemId === 'dynamite' || itemId === 'heavy_wooden_door' || itemId.includes('medium_wooden_door') || itemId.includes('spiral_stairs') || itemId.includes('stairs_to_') || itemId === 'ladder_to_attic' || itemId === 'ladder_from_attic' || itemId === 'stove' || itemId === 'milker' || itemId === 'stairs_to_hut_floor2' || itemId === 'stairs_to_hut_floor1' || itemId === 'mansion_gate_door' || itemId === 'wooden_hut' || itemId === 'hut_door' || itemId === 'side_gate_door' || itemId.includes('randolph_statue') || itemId === 'stairs_from_cellar' || itemId === 'stone_wall' || item.notPickable;
                
                if (!isUnpickupable) {
                    pickupableNames.add(itemName);
                }
                
                if (nameCountMap[itemName]) {
                    nameCountMap[itemName]++;
                } else {
                    nameCountMap[itemName] = 1;
                    nameItemMap[itemName] = item;
                    nameIdMap[itemName] = itemId;
                    nameOrder.push(itemName);
                }
            }
        });
        
        pickupableCount = pickupableNames.size;
        
        nameOrder.forEach(name => {
            const count = nameCountMap[name];
            const item = nameItemMap[name];
            const itemId = nameIdMap[name];
            
            // 检查是否可拾取
            const isUnpickupable = (itemId.includes('ladder') && item.usable && item.customAction && itemId !== 'removed_ladder') || itemId === 'dynamite' || itemId === 'heavy_wooden_door' || itemId.includes('medium_wooden_door') || itemId.includes('spiral_stairs') || itemId.includes('stairs_to_') || itemId === 'ladder_to_attic' || itemId === 'ladder_from_attic' || itemId === 'stove' || itemId === 'milker' || itemId === 'stairs_to_hut_floor2' || itemId === 'stairs_to_hut_floor1' || itemId === 'mansion_gate_door' || itemId === 'wooden_hut' || itemId === 'hut_door' || itemId === 'side_gate_door' || itemId.includes('randolph_statue') || itemId === 'stairs_from_cellar' || itemId === 'stone_wall' || item.notPickable;
            
            let emoji = '';
            if (item.type === 'weapon') emoji = '⚔️';
            else if (item.type === 'armor') emoji = '🛡️';
            else if (item.type === 'consumable') emoji = '🧪';
            else if (item.type === 'readable') emoji = '📖';
            else emoji = '📦';
            
            const displayName = count > 1 ? `${name}×${count}` : name;
            let itemColor = isUnpickupable ? '#888888' : '#c0d0e0';
            html += `<div style="margin: 5px 0;">
                <span style="cursor: pointer; color: ${itemColor};" onclick="showGroundItemInfo('${itemId}')">${emoji} ${displayName}</span>
            </div>`;
        });
        
        // 只有有可拾取物品时才显示全部拾取按钮
        // 四号矿井口铁锁未被破坏时不显示全部拾取按钮
        const hasIronLock = room.items && room.items.some(id => id === 'iron_lock' || (getItemInfoById(id) && getItemInfoById(id).id === 'iron_lock'));
        const isMineExit4 = loc === 'mine_exit_4';
        if (pickupableCount > 0 && !(isMineExit4 && hasIronLock)) {
            html += `<div style="margin: 10px 0 5px 0; border-top: 1px dashed #4a5a6a; padding-top: 8px;">
                <span style="color: #aaffaa; text-decoration: underline; cursor: pointer; font-size: 13px;" onclick="pickupAllItems()">📥 全部拾取</span>
            </div>`;
        }
    }
    
    if (html === '') {
        sceneListDiv.innerHTML = '— 暂无 —';
    } else {
        sceneListDiv.innerHTML = html;
    }
}

// ==================== 详情栏系统 ====================

// 向详情栏输出内容
function printToDetail(content) {
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML += content;
        detailPanel.scrollTop = detailPanel.scrollHeight;
    }
}

// 清空详情栏
function clearDetailPanel() {
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = '<span style="color: #888;">点击物品或NPC查看详情...</span>';
    }
}

// 显示地面物品信息到详情栏
function showGroundItemInfo(itemId) {
    const item = getItemInfoById(itemId);
    if (!item) {
        printToDetail("找不到该物品信息。");
        return;
    }
    
    let html = '';
    html += makeTitle('物品详情');
    html += `名称：${item.name}\n`;
    html += `类型：${getItemTypeName(item.type)}\n`;
    if (item.desc) {
        // 尸体和肢体描述用绿色另起一行
        if (item.story || item.milkItem || item.ingredientType || item.dismemberable) {
            html += `\n<span style="color: #66ff66;">${item.desc}</span>\n`;
        } else if (item.type === "consumable") {
            // 料理描述用红色另起一行
            html += `\n<span style="color: #ff6666;">${item.desc}</span>\n`;
        } else {
            html += `描述：${item.desc}\n`;
        }
    }
    if (item.atk) html += `攻击力：+${item.atk}\n`;
    if (item.def) html += `防御力：+${item.def}\n`;
    if (item.effect) {
        if (item.effect === 'heal') html += `效果：恢复 ${item.value} 点生命\n`;
        else html += `效果：${item.effect}\n`;
    }
    html += centerLine();
    
    // 特殊物品：撤走的梯子（可拾取也可在特定位置使用）
    if (itemId === 'removed_ladder' || (itemId.includes('removed_ladder') && itemId.includes('_dropped_'))) {
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="useLadder('${itemId}')">🪜 使用</span></div>`;
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="pickupItem('${itemId}')">📦 拾取</span></div>`;
    } else if (itemId.includes('ladder') && item.usable && item.customAction && itemId !== 'ladder_to_attic' && itemId !== 'ladder_from_attic' && itemId !== 'basement_ladder_up') {
        // 其他木梯只能使用不能拾取（排除通往阁楼和阁楼内的木梯）
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="useLadder('${itemId}')">🪜 使用木梯</span></div>`;
    } else if (itemId === 'iron_lock') {
        // 铁锁：尝试破坏或使用钥匙
        const hasKey = gameState.player.inventory.some(item => item && item.id === 'mine_exit_4_key');
        if (hasKey) {
            html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="openIronLockWithKey('${itemId}')">🔑 使用四号矿井口钥匙</span></div>`;
        }
        html += `<div><span style="color: #ffaa66; text-decoration: underline; cursor: pointer;" onclick="breakLock('${itemId}')">⚔️ 破坏铁锁</span></div>`;
    } else if (itemId === 'heavy_wooden_door') {
        // 厚重的木门：尝试破坏
        html += `<div><span style="color: #ffaa66; text-decoration: underline; cursor: pointer;" onclick="breakHeavyDoor('${itemId}')">⚔️ 强行破门</span></div>`;
    } else if (itemId.includes('medium_wooden_door')) {
        // 中等木门：尝试破坏（伤害要求20）
        html += `<div><span style="color: #ffaa66; text-decoration: underline; cursor: pointer;" onclick="breakMediumDoor('${itemId}')">⚔️ 强行破门</span></div>`;
    } else if (itemId === 'spiral_stairs_north') {
        // 北侧旋转楼梯（一层→二层）
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'second_floor_north')">🪜 登上二层</span></div>`;
    } else if (itemId === 'spiral_stairs_north_2f') {
        // 北侧旋转楼梯（二层→一层）
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'corridor_north_2')">🪜 下到一层</span></div>`;
    } else if (itemId === 'spiral_stairs_south') {
        // 南侧旋转楼梯（一层→二层）
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'second_floor_4')">🪜 登上二层</span></div>`;
    } else if (itemId === 'spiral_stairs_south_2f') {
        // 南侧旋转楼梯（二层→一层）
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'corridor_south_2')">🪜 下到一层</span></div>`;
    } else if (itemId === 'stairs_to_third_floor') {
        // 通往三层的楼梯
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'third_floor_center')">🪜 登上三层</span></div>`;
    } else if (itemId === 'stairs_to_second_floor') {
        // 通往二层的楼梯（三层）
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'second_floor_4')">🪜 下到二层</span></div>`;
    } else if (itemId === 'ladder_to_attic') {
        // 通往阁楼的木梯（三层→阁楼）
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'attic')">🪜 爬上阁楼</span></div>`;
    } else if (itemId === 'ladder_from_attic') {
        // 阁楼内的木梯（阁楼→三层）
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'third_floor_north')">🪜 爬下三层</span></div>`;
    } else if (itemId === 'stairs_to_hut_floor2') {
        // 通往木屋二层的楼梯
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'hut_floor2')">🪜 登上二层</span></div>`;
    } else if (itemId === 'stairs_to_hut_floor1') {
        // 通往木屋一层的楼梯（二层）
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'hut_floor1')">🪜 下到一层</span></div>`;
    } else if (itemId === 'stairs_to_cellar') {
        // 通往酒窖的楼梯（一层→酒窖）
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'cellar_southeast')">🪜 下到酒窖</span></div>`;
    } else if (itemId === 'stairs_from_cellar') {
        // 通往一层的楼梯（酒窖→一层）
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'corridor_south_2')">🪜 回到一层</span></div>`;
    } else if (itemId.includes('mine_pit')) {
        // 矿坑：跳下
        html += `<div><span style="color: #ff6b6b; text-decoration: underline; cursor: pointer;" onclick="jumpIntoPit('${itemId}')">⬇️ 跳下</span></div>`;
    } else if (itemId === 'stone_wall') {
        // 石壁：挖掘
        html += `<div><span style="color: #ffaa66; text-decoration: underline; cursor: pointer;" onclick="mineStoneWall('${itemId}')">⛏️ 挖掘</span></div>`;
    } else if (itemId === 'stove') {
        // 炉灶：烹饪功能
        html += `<div><span style="color: #ff8844; text-decoration: underline; cursor: pointer;" onclick="useStove('${itemId}')">🍳 烹饪</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return; // 炉灶不需要继续下面的通用处理
    } else if (itemId === 'workbench') {
        // 工作台：制作功能
        html += `<div><span style="color: #88ccff; text-decoration: underline; cursor: pointer;" onclick="useWorkbench('${itemId}')">🔨 锻造</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return; // 工作台不需要继续下面的通用处理
    } else if (itemId === 'milker') {
        // 榨奶器：榨奶功能
        html += `<div><span style="color: #ffddaa; text-decoration: underline; cursor: pointer;" onclick="useMilker('${itemId}')">🥛 榨奶</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return; // 榨奶器不需要继续下面的通用处理
    } else if (itemId === 'dynamite') {
        // 雷管：炸开通道
        html += `<div><span style="color: #ff4444; text-decoration: underline; cursor: pointer;" onclick="useDynamite('${itemId}')">💥 使用雷管</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return; // 雷管不需要继续下面的通用处理
    } else if (itemId === 'side_gate_door') {
        // 矿场侧门：使用钥匙传送到森林
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="useSideGate('${itemId}')">🚪 使用钥匙开门</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return; // 侧门不需要继续下面的通用处理
    } else if (itemId === 'randolph_statue') {
        // 兰德尔一世雕像：尝试推倒
        html += `<div><span style="color: #ff6666; text-decoration: underline; cursor: pointer;" onclick="pushStatue('${itemId}')">💪 推倒雕像</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return; // 雕像不需要继续下面的通用处理
    } else if (itemId === 'mansion_gate_door') {
        // 伯爵宅邸大门：使用钥匙进入
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="useMansionGate('${itemId}')">🚪 使用钥匙开门</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return; // 伯爵宅邸大门不需要继续下面的通用处理
    } else if (itemId === 'wooden_hut') {
        // 木屋：点击进入
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="enterWoodenHut('${itemId}')">🏠 进入木屋</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return;
    } else if (itemId === 'hut_door') {
        // 木屋门：点击出去
        html += `<div><span style="color: #cc9966; text-decoration: underline; cursor: pointer;" onclick="exitHut('${itemId}')">🚪 出去</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return;
    } else if (itemId === 'karen_town') {
        // 卡伦镇：进入
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="useItemFromDetail('${itemId}')">🚶 进入</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return;
    } else if (itemId === 'sanghuashan_mine') {
        // 桑华山矿场：进入后返回山路
        html += `<div><span style="color: #ff8844; text-decoration: underline; cursor: pointer;" onclick="useItemFromDetail('${itemId}')">🚶 进入</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return;
    } else if (itemId === 'wardrobe') {
        // 壁橱：翻找功能
        html += `<div><span style="color: #aaccff; text-decoration: underline; cursor: pointer;" onclick="searchWardrobe('${itemId}')">🔍 翻找</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return;
    } else if (itemId === 'leaf_pile') {
        // 落叶堆：扫开
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="sweepLeafPile()">🍃 扫开落叶</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        currentDetailItem = itemId;
        const detailPanel2 = document.getElementById('detail-panel');
        if (detailPanel2) {
            detailPanel2.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return;
    } else if (itemId === 'tunnel_entrance') {
        // 地道：进入
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="enterTunnel()">🕳️ 进入地道</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        currentDetailItem = itemId;
        const detailPanel3 = document.getElementById('detail-panel');
        if (detailPanel3) {
            detailPanel3.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return;
    } else if (itemId === 'teleport_circle' || itemId === 'mod_teleport_circle') {
        // 传送阵：查看并传送
        html += `<div><span style="color: #6688ff; text-decoration: underline; cursor: pointer;" onclick="useTeleportCircle('${itemId}')">🌀 查看传送阵</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        currentDetailItem = itemId;
        const detailPanel4 = document.getElementById('detail-panel');
        if (detailPanel4) {
            detailPanel4.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return;
    } else if (itemId === 'basement_ladder_up') {
        // 地下室木梯上行
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="useSpiralStairs('${itemId}', 'forest_4_center')">🪜 爬上木梯回到森林</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        currentDetailItem = itemId;
        const detailPanel5 = document.getElementById('detail-panel');
        if (detailPanel5) {
            detailPanel5.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return;
    } else if (itemId === 'dynamite') {
        // 雷管：炸开通道
        html += `<div><span style="color: #ff4444; text-decoration: underline; cursor: pointer;" onclick="useDynamite('${itemId}')">💥 使用雷管</span></div>`;
        html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
        
        // 保存当前物品ID并更新详情栏
        currentDetailItem = itemId;
        const detailPanel = document.getElementById('detail-panel');
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'ground_item';
        return; // 炉灶不需要继续下面的通用处理
    } else if (itemId.includes('corpse')) {
        // 尸体：显示互动、搜刮、肢解、拾取四个选项
        if (item.corpseStory || item.usable) {
            html += `<div><span style="color: #ff66aa; text-decoration: underline; cursor: pointer;" onclick="useCorpseOnGround('${itemId}')">🔞 互动</span></div>`;
        }
        if (item.loot && item.loot.length > 0) {
            html += `<div><span style="color: #ffdd44; text-decoration: underline; cursor: pointer;" onclick="lootCorpse('${itemId}')">✨ 搜刮</span></div>`;
        }
        if (item.dismemberable) {
            html += `<div><span style="color: #ff6b6b; text-decoration: underline; cursor: pointer;" onclick="dismemberItem('${itemId}')">🔪 肢解</span></div>`;
        }
        // 检查是否可拾取
        if (!item.notPickable) {
            html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="pickupItem('${itemId}')">📦 拾取</span></div>`;
            // 检查是否有多个同名物品
            const sameItemCount = countSameItemsOnGround(item.name);
            if (sameItemCount > 1) {
                html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="pickupAllSameItems('${item.name}')">📥 全部拾取(${sameItemCount}个)</span></div>`;
            }
        }
    } else if (!item.notPickable) {
        // 普通物品显示拾取按钮
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="pickupItem('${itemId}')">✨ 拾取</span></div>`;
        // 检查是否有多个同名物品
        const sameItemCount = countSameItemsOnGround(item.name);
        if (sameItemCount > 1) {
            html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="pickupAllSameItems('${item.name}')">📥 全部拾取(${sameItemCount}个)</span></div>`;
        }
    }
    html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
    
    // 保存当前物品ID
    currentDetailItem = itemId;
    
    // 更新详情栏
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = html;
    }
    
    currentPanel = 'ground_item';
}

// 使用钥匙打开铁锁
function openIronLockWithKey(lockId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(lockId)) {
        print("铁锁已不存在。");
        return;
    }
    
    // 检查是否有钥匙
    const hasKey = gameState.player.inventory.some(item => item && item.id === 'mine_exit_4_key');
    if (!hasKey) {
        print("你没有四号矿井口钥匙。");
        return;
    }
    
    // 消耗钥匙
    removeItemFromInventory('mine_exit_4_key');
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`<span style="color: #aaffaa;">你将钥匙插入铁锁...</span>`);
    print("");
    
    // 显示遮罩
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    const storyLines = [
        "钥匙在锁孔中转动，发出清脆的咔嗒声。",
        "铁锁缓缓打开，锁链松脱，发出刺耳的金属摩擦声。"
    ];
    
    let storyIndex = 0;
    function showNextStoryLine() {
        if (storyIndex < storyLines.length) {
            print(`<span class="story-text">${storyLines[storyIndex]}</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
            storyIndex++;
            setTimeout(showNextStoryLine, 1300);
        } else {
            // 替换铁锁为破开的铁锁
            const lockIndex = room.items.indexOf(lockId);
            if (lockIndex > -1) {
                room.items.splice(lockIndex, 1);
                const brokenLockId = `broken_lock_${Date.now()}`;
                const brokenLock = createItemFromTemplate('broken_lock');
                if (brokenLock) {
                    brokenLock.id = brokenLockId;
                    ITEM_TEMPLATES[brokenLockId] = brokenLock;
                    room.items.push(brokenLockId);
                }
            }
            
            // 生成矿坑
            const pitId = `mine_pit_${Date.now()}`;
            const pitItem = {
                id: pitId,
                name: "矿坑",
                type: "misc",
                desc: "一个黑漆漆的矿坑，深不见底。可以跳下去，但可能会受伤。",
                usable: true,
                customAction: true,
                notPickable: true
            };
            ITEM_TEMPLATES[pitId] = pitItem;
            room.items.push(pitId);
            
            print("");
            print(`<span style="color: #aaffaa;">铁锁被打开了！矿坑暴露在月光下...</span>`);
            
            if (overlay) overlay.classList.remove('active');
            updateSceneInfo();
        }
    }
    showNextStoryLine();
}

// 挖掘石壁
function mineStoneWall(wallId) {
    const loc = gameState.player.location;
    const room = gameState.world[loc];
    if (!room || !room.items || !room.items.includes(wallId)) {
        print("石壁已不存在。");
        return;
    }
    
    // 检查是否装备了镐子
    const weapon = gameState.player.equipment.weapon;
    if (!weapon || weapon.id !== 'pickaxe') {
        print(`<span style="color: #ff6666;">你需要装备镐子才能挖掘石壁。</span>`);
        return;
    }
    
    // 随机掉落1-2个石块
    const stoneCount = Math.random() < 0.5 ? 1 : 2;
    
    print(`<span style="color: #aaa;">你举起镐头，对准石壁狠狠砸下——</span>`);
    print(`<span style="color: #aaa;">碎石飞溅，尘土弥漫。</span>`);
    
    for (let i = 0; i < stoneCount; i++) {
        const stone = createItemFromTemplate('stone');
        if (stone) {
            gameState.player.inventory.push(stone);
        }
    }
    
    const expGain = stoneCount;
    print(`<span style="color: #aaffaa;">你挖下了 ${stoneCount} 块石块。</span>`);
    print(`<span style="color: #ffdd44;">获得 ${expGain} 点经验。</span>`);
    
    gameState.player.exp += expGain;
    checkLevelUp();
    
    // 刷新面板
    clearDetailPanel();
    currentPanel = null;
    updateSceneInfo();
}

function breakLock(lockId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(lockId)) {
        print("铁锁已不存在。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 计算玩家最大伤害（基础攻击 + 武器攻击）
    const weapon = gameState.player.equipment.weapon;
    const baseAtk = gameState.player.atk || 1;
    const weaponAtk = weapon && weapon.atk ? weapon.atk : 0;
    const maxDamage = baseAtk + weaponAtk;
    
    print(`你握紧武器，用力砸向铁锁...`);
    print(`（你的最大伤害值：${maxDamage}）`);
    print("");
    
    // 伤害检定：需要达到20点伤害
    if (maxDamage >= 20) {
        // 破锁成功
        print(`<span style="color: #ff6666;">咔嚓一声巨响！</span>`);
        print(`铁锁在你的猛击下扭曲变形，锁梁断裂，铁链松脱，发出刺耳的金属摩擦声。`);
        print("");
        
        // 显示遮罩，延时剧情
        const overlay = document.getElementById('block-overlay');
        if (overlay) overlay.classList.add('active');
        
        // 替换铁锁为破开的铁锁
        const lockIndex = room.items.indexOf(lockId);
        if (lockIndex > -1) {
            room.items.splice(lockIndex, 1);
            // 创建破开的铁锁
            const brokenLockId = `broken_lock_${Date.now()}`;
            const brokenLock = createItemFromTemplate('broken_lock');
            if (brokenLock) {
                brokenLock.id = brokenLockId;
                ITEM_TEMPLATES[brokenLockId] = brokenLock;
                room.items.push(brokenLockId);
            }
        }
        
        // 延时剧情（与开场动画相同的颜色和延时）
        const storyLines = [
            "你侧耳倾听...",
            "矿道深处传来细细簌簌的响动，像是有什么东西在碎石中穿行。",
            "声音停下了，四周陷入死一般的寂静。",
            "你感觉到一股寒意从矿井深处涌出，那不是因为夜风。",
            "被破开的铁锁旁，黑漆漆的矿坑暴露在月光下..."
        ];
        
        let storyIndex = 0;
        function showNextStoryLine() {
            if (storyIndex < storyLines.length) {
                print(`<span class="story-text">${storyLines[storyIndex]}</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
                storyIndex++;
                setTimeout(showNextStoryLine, 1300);
            } else {
                // 生成矿坑道具
                const pitId = `mine_pit_${Date.now()}`;
                const pitItem = {
                    id: pitId,
                    name: "矿坑",
                    type: "misc",
                    desc: "一个黑漆漆的矿坑，深不见底。可以跳下去，但可能会受伤。",
                    usable: true,
                    customAction: true,
                    notPickable: true
                };
                ITEM_TEMPLATES[pitId] = pitItem;
                room.items.push(pitId);
                
                print("");
                print(`<span style="color: #aaffaa;">矿坑已经出现，你可以选择跳下...</span>`);
                
                // 关闭遮罩并更新场景
                if (overlay) overlay.classList.remove('active');
                updateSceneInfo();
            }
        }
        showNextStoryLine();
        
    } else {
        // 破锁失败
        print(`<span style="color: #888;">铛——</span>`);
        print(`你的攻击只是在铁锁上留下一道浅浅的痕迹，锁身纹丝不动。`);
        print(`<span style="color: #ffaaaa;">（需要更高的攻击力才能破坏这把铁锁...）</span>`);
    }
}

// 破坏厚重的木门
function breakHeavyDoor(doorId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(doorId)) {
        print("木门已不存在。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 计算玩家最大伤害（基础攻击 + 武器攻击）
    const weapon = gameState.player.equipment.weapon;
    const baseAtk = gameState.player.atk || 1;
    const weaponAtk = weapon && weapon.atk ? weapon.atk : 0;
    const maxDamage = baseAtk + weaponAtk;
    
    print(`你握紧武器，用力砸向厚重的木门...`);
    print(`（你的最大伤害值：${maxDamage}）`);
    print("");
    
    // 伤害检定：需要达到30点伤害
    if (maxDamage >= 30) {
        // 破门成功
        print(`<span style="color: #ff6666;">轰——！</span>`);
        print(`沉重的木门在你的猛击下碎裂开来，木屑飞溅，门锁崩断！`);
        print(`门后露出一条通往宅邸内部的走廊...`);
        print("");
        
        // 替换木门为被破坏的木门
        const doorIndex = room.items.indexOf(doorId);
        if (doorIndex > -1) {
            room.items.splice(doorIndex, 1);
            // 创建被破坏的木门
            const brokenDoorId = `broken_wooden_door_${Date.now()}`;
            const brokenDoor = createItemFromTemplate('broken_wooden_door');
            if (brokenDoor) {
                brokenDoor.id = brokenDoorId;
                ITEM_TEMPLATES[brokenDoorId] = brokenDoor;
                room.items.push(brokenDoorId);
            }
        }
        
        // 添加通往一层走廊的出口
        room.exits.west = 'corridor_center';
        
        // 更新一层走廊的出口
        const corridor = gameState.world['corridor_center'];
        if (corridor) {
            corridor.exits.east = 'mansion_back_door';
        }
        
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        print(`<span style="color: #aaffaa;">你成功破坏了木门，可以进入宅邸了！</span>`);
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        
        updateSceneInfo();
        updateMinimap();
        
    } else {
        // 破门失败
        print(`<span style="color: #888;">砰——</span>`);
        print(`你的攻击只是在木门上留下一道浅浅的凹痕，门身纹丝不动。`);
        print(`<span style="color: #ffaaaa;">（需要更高的攻击力才能破坏这扇木门...至少需要50点伤害）</span>`);
    }
}

// 破坏中等木门（伤害要求20）
function breakMediumDoor(doorId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(doorId)) {
        print("房门已不存在。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 计算玩家最大伤害（基础攻击 + 武器攻击）
    const weapon = gameState.player.equipment.weapon;
    const baseAtk = gameState.player.atk || 1;
    const weaponAtk = weapon && weapon.atk ? weapon.atk : 0;
    const maxDamage = baseAtk + weaponAtk;
    
    print(`你握紧武器，用力砸向紧锁的房门...`);
    print(`（你的最大伤害值：${maxDamage}）`);
    print("");
    
    // 伤害检定：需要达到20点伤害
    if (maxDamage >= 20) {
        // 破门成功
        print(`<span style="color: #ff6666;">咔嚓——！</span>`);
        print(`门锁在你的猛击下崩裂，房门被强行撞开！`);
        print(`门后露出一个昏暗的房间...`);
        print("");
        
        // 替换房门为被破坏的房门
        const doorIndex = room.items.indexOf(doorId);
        if (doorIndex > -1) {
            room.items.splice(doorIndex, 1);
            // 创建被破坏的房门
            const brokenDoorId = `broken_medium_door_${Date.now()}`;
            const brokenDoor = createItemFromTemplate('broken_medium_door');
            if (brokenDoor) {
                brokenDoor.id = brokenDoorId;
                ITEM_TEMPLATES[brokenDoorId] = brokenDoor;
                room.items.push(brokenDoorId);
            }
        }
        
        // 根据当前房间添加对应的东侧出口
        if (room.exits) {
            if (gameState.player.location === 'second_floor_1') {
                // 伯爵女儿东侧走廊 - 通往隐藏房间
                room.exits.east = 'hidden_room_cecilia';
                // 创建隐藏房间（如果不存在）
                if (!gameState.world['hidden_room_cecilia']) {
                    gameState.world['hidden_room_cecilia'] = {
                        name: "隐秘房间",
                        desc: "一个被隐藏的小房间，空气中弥漫着灰尘和霉味。\n这里堆放着一些旧家具和杂物，看起来很久没有人来过了。\n西侧是回到走廊的房门。",
                        exits: { west: 'second_floor_1' },
                        items: [],
                        npcs: []
                    };
                }
                print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
                print(`<span style="color: #aaffaa;">你成功破坏了房门，发现了一个隐藏房间！</span>`);
                print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
            } else if (gameState.player.location === 'second_floor_3') {
                // 伯爵夫人东侧走廊 - 通往秘密储藏室
                room.exits.east = 'secret_storage';
                // 创建秘密储藏室（如果不存在）
                if (!gameState.world['secret_storage']) {
                    gameState.world['secret_storage'] = {
                        name: "秘密储藏室",
                        desc: "一间隐秘的储藏室，货架上摆放着各种珍贵的物品。\n看来伯爵夫人把不少好东西都藏在了这里。\n西侧回到走廊。",
                        exits: { west: 'second_floor_3' },
                        items: ['healing_potion', 'healing_potion', 'coin', 'coin', 'coin'],
                        npcs: []
                    };
                }
                print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
                print(`<span style="color: #aaffaa;">你成功破坏了房门，发现了伯爵夫人的秘密储藏室！</span>`);
                print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
            }
        }
        
        updateSceneInfo();
        updateMinimap();
        
    } else {
        // 破门失败
        print(`<span style="color: #888;">砰——</span>`);
        print(`你的攻击在房门上留下一道凹痕，但门锁依然坚固。`);
        print(`<span style="color: #ffaaaa;">（需要更高的攻击力才能破坏这扇房门...至少需要20点伤害）</span>`);
    }
}

// 推倒兰德尔一世雕像
function pushStatue(statueId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(statueId)) {
        print("雕像已不存在。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 计算玩家最大伤害（基础攻击 + 武器攻击）
    const weapon = gameState.player.equipment.weapon;
    const baseAtk = gameState.player.atk || 1;
    const weaponAtk = weapon && weapon.atk ? weapon.atk : 0;
    const maxDamage = baseAtk + weaponAtk;
    
    print(`你握紧武器，用力砸向兰德尔一世的雕像...`);
    print(`（你的最大伤害值：${maxDamage}）`);
    print("");
    
    // 伤害检定：需要达到50点伤害
    if (maxDamage >= 50) {
        // 推倒成功
        print(`<span style="color: #ff6666;">轰——！！！</span>`);
        print(`沉重的青铜雕像在你的猛击下剧烈摇晃，底座的花岗岩出现裂痕！`);
        print(`你再次用力一击，雕像终于失去平衡，轰然倒塌！`);
        print(`青铜身躯砸在草坪上，发出震耳欲聋的巨响，矿镐权杖断裂在一旁。`);
        print(`底座碎裂，曾经威严的铭文如今被泥土掩盖...`);
        print("");
        
        // 替换雕像为倒塌的雕像
        const statueIndex = room.items.indexOf(statueId);
        if (statueIndex > -1) {
            room.items.splice(statueIndex, 1);
            // 创建倒塌的雕像
            const fallenStatueId = `randolph_statue_fallen_${Date.now()}`;
            const fallenStatue = createItemFromTemplate('randolph_statue_fallen');
            if (fallenStatue) {
                fallenStatue.id = fallenStatueId;
                ITEM_TEMPLATES[fallenStatueId] = fallenStatue;
                room.items.push(fallenStatueId);
            }
        }
        
        print(`<span style="color: #ff6666;">═══════════════════════════</span>`);
        print(`<span style="color: #ff6666;">兰德尔一世的雕像被你推倒了！</span>`);
        print(`<span style="color: #ff6666;">═══════════════════════════</span>`);
        
        updateSceneInfo();
        updateMinimap();
    } else {
        print(`<span style="color: #888;">砰——</span>`);
        print(`你的攻击在坚固的青铜雕像上留下一道浅浅的痕迹，但它纹丝不动。`);
        print(`<span style="color: #ffaaaa;">（需要更高的攻击力才能推倒雕像...至少需要50点伤害）</span>`);
    }
}

// 触发游戏结局
function triggerEnding() {
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 显示遮罩，封锁所有交互
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    // 结局剧情内容
    const endingStory = [
        "矿场甩在身后了。",
        "",
        "你不知道自己跑了多远。脚下是野地，杂草绊着靴子，露水打湿了裤脚。夜风从山口灌进来，贴着汗透的脊背，凉得像一瓢冷水。",
        "",
        "你停下来，弯着腰喘气。肺里还残着矿道的石粉，每吸一口气都像在磨砂纸。心跳撞着耳膜，咚咚的，盖过了风声。",
        "",
        "这一夜的事——你记得每一帧，但连不起来。门是怎么开的，那些是怎么倒下的。",
        "",
        "你只记得铁锈味——不是梯子上的那种锈。是热的、血的气味。",
        "",
        "远处有什么声音。你猛地回头，但什么也没有。只有风，只有草，白惨惨地躺在月光底下，脚下的路一直通向你再也回不去的那个井口。",
        "",
        "你不知道清洗什么时候来临。你甚至不知道什么是灭杀法术。你只知道桑华山会被抹掉。矿道，工棚，鞭子，草席，咳嗽整夜的人，睡着睡着就没了声息的人——全都会被抹掉。",
        "",
        "还有那些你没来得及杀的人。",
        "还有那些你已经杀了的人。",
        "",
        "你蹲下去，把脸埋进膝盖里。手指还在抖。不是因为累，不是因为怕。是因为你的身体比你更先知道——从今晚开始，有些东西不一样了。",
        "",
        "你听见山在沉默。",
        "三百年了，它一直沉默。被改名的时候沉默，被挖开的时候沉默，血渗进岩层的时候沉默。现在它还在沉默。",
        "",
        "你站起来。膝盖上的布料洇湿了两小块，不知道是露水还是汗。",
        "",
        "矿场的围墙黑黢黢地趴在月光底下，像一条黑蛇，高不可攀，昨天晚上下工你望着它，觉得自己一辈子都不会出去了。",
        "",
        "但是你翻过去了。",
        "",
        "身后，桑华山蹲伏在夜色里，灰黄色的岩体泛着冷光。你离开了。没有回头。",
        "",
        "自由了？也许吧。"
    ];
    
    print(`<span style="color: #aaa;">═══════════════════════════</span>`);
    
    // 逐行延时输出
    let lineIndex = 0;
    function showNextEndingLine() {
        if (lineIndex < endingStory.length) {
            if (endingStory[lineIndex] === "") {
                print("");
            } else {
                print(`<span style="color: #cccccc;">${endingStory[lineIndex]}</span>`);
            }
            outputDiv.scrollTop = outputDiv.scrollHeight;
            lineIndex++;
            setTimeout(showNextEndingLine, endingStory[lineIndex - 1] === "" ? 500 : 1300);
        } else {
            // 剧情结束，不重开游戏，而是在结尾房间添加可交互的"卡伦镇"物品
            print("");
            print(`<span style="color: #aaa;">═══════════════════════════</span>`);
            print(`<span style="color: #66ff66;">你成功逃离了桑华山矿场！</span>`);
            print(`<span style="color: #aaa;">═══════════════════════════</span>`);
            print("");
            
            // 移除遮罩
            if (overlay) overlay.classList.remove('active');
            
            // 在结尾房间添加"卡伦镇"可交互物品
            const endingRoom = gameState.world["mountain_path_14"];
            if (endingRoom) {
                // 移除isEnding标记，避免重复触发结局
                delete endingRoom.isEnding;
                // 添加卡伦镇交互物品
                if (!endingRoom.items) endingRoom.items = [];
                if (!endingRoom.items.includes("karen_town")) {
                    endingRoom.items.push("karen_town");
                }
                // 更新房间描述，提示有卡伦镇可以进入
                endingRoom.desc = "山路的尽头，一片开阔的野地展现在眼前。\n你已经远离了桑华山，矿场的围墙消失在夜色中。\n不远处，你看到了一个小镇的轮廓——那是卡伦镇。\n北边是来的路，前方是未知的自由。";
            }
            
            // 重新显示当前房间
            look();
            // 强制更新小地图和场景信息
            setTimeout(() => {
                updateMinimap();
                updateSceneInfo();
            }, 100);
        }
    }
    showNextEndingLine();
}

// 使用旋转楼梯
function useSpiralStairs(stairsId, targetRoomId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(stairsId)) {
        print("旋转楼梯已不存在。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 判断是上楼还是下楼
    const isGoingUp = stairsId.includes('north') && !stairsId.includes('2f') || 
                      stairsId.includes('south') && !stairsId.includes('2f');
    
    if (isGoingUp) {
        print(`<span style="color: #cc9966;">你踏上旋转楼梯，缓缓向上走去...</span>`);
    } else {
        print(`<span style="color: #cc9966;">你踏上旋转楼梯，缓缓向下走去...</span>`);
    }
    print("");
    
    // 传送到目标房间
    gameState.player.location = targetRoomId;
    look();
    updateMinimap();
    updateSceneInfo();
}

// 使用雷管炸开通道
function useDynamite(dynamiteId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(dynamiteId)) {
        print("雷管已不存在。");
        return;
    }
    
    // 检查是否在三号矿道深处
    if (gameState.player.location !== 'mine_deep_3') {
        print("这里没有什么需要炸开的东西。");
        return;
    }
    
    // 检查是否有火折子
    const hasTinder = gameState.player.inventory && gameState.player.inventory.some(item => item && item.id === 'tinder');
    if (!hasTinder) {
        print("你需要火折子来点燃雷管的引线。");
        print("<span style='color: #888;'>(去矿工宿舍找找看)</span>");
        return;
    }
    
    // 清空详情栏（成功后才清空）
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 显示爆炸剧情
    print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
    print(`<span style="color: #ffaa66;">你取出火折子，吹燃火星...</span>`);
    print(`<span style="color: #ff4444; font-weight: bold;">你点燃了雷管的引线...</span>`);
    print(`<span style="color: #ffaa66;">嘶嘶嘶——</span>`);
    print(`<span style="color: #ff4444; font-weight: bold;">轰！！！</span>`);
    print(`<span style="color: #ffaaaa;">巨大的爆炸声在矿道中回荡，烟尘四起，碎石飞溅！</span>`);
    print(`<span style="color: #aaffaa;">东边的岩壁被炸开了一个大洞，露出了一条通道！</span>`);
    print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
    print("");
    
    // 移除雷管
    const dynamiteIndex = room.items.indexOf(dynamiteId);
    if (dynamiteIndex > -1) {
        room.items.splice(dynamiteIndex, 1);
    }
    
    // 打通三号矿道深处到坍塌岩壁的通道
    room.exits.east = 'collapsed_wall';
    room.desc = "矿道在这里到达尽头，四周是裸露的煤层，地上堆放着一些废弃的矿车。\n角落里有一滩积水，水面倒映着头顶的岩壁，显得幽深而寂静。\n东边的岩壁被炸开了一个大洞，露出了一条通往四号矿道的通道。\n这里似乎还在开采中，但今晚没有工人。\n北边是三号矿道，东边是通往四号矿道的通道。";
    
    // 打通四号矿道-南到坍塌岩壁的通道
    const tunnel4South = gameState.world['tunnel_4_south'];
    if (tunnel4South) {
        tunnel4South.exits.west = 'collapsed_wall';
        // 更新描述
        tunnel4South.desc = tunnel4South.desc.replace('西侧是一堵坍塌的岩壁，似乎无法通行。', '西侧是通往三号矿道的通道。');
    }
    
    // 打通坍塌岩壁双向通道
    const collapsedWall = gameState.world['collapsed_wall'];
    if (collapsedWall) {
        collapsedWall.exits = { west: 'mine_deep_3', east: 'tunnel_4_south' };
        collapsedWall.desc = "一堵由松动岩石和碎石堆积而成的封堵墙已被炸开，露出了一条狭窄的通道。\n通道向东通往四号矿道-南，向西通往三号矿道深处。";
        collapsedWall.blocked = false;
    }
    
    // 获取各个四号矿道房间
    const tunnelExit4 = gameState.world['tunnel_exit_4'];
    const tunnel4North = gameState.world['tunnel_4_north'];
    const tunnel4East = gameState.world['tunnel_4_east'];
    const tunnel4West = gameState.world['tunnel_4_west'];
    
    // 计算并清除所有怪物，经验归玩家
    let totalExp = 0;
    let monstersKilled = 0;
    
    // 定义要清理怪物的房间列表（包括西侧矿道所有房间）
    const tunnel4Rooms = [tunnel4North, tunnel4East, tunnel4West, tunnel4South];
    
    // 添加西侧矿道1-3的怪物清理
    const tunnel4West1 = gameState.world['tunnel_4_west_1'];
    const tunnel4West2 = gameState.world['tunnel_4_west_2'];
    const tunnel4West3 = gameState.world['tunnel_4_west_3'];
    if (tunnel4West1) tunnel4Rooms.push(tunnel4West1);
    if (tunnel4West2) tunnel4Rooms.push(tunnel4West2);
    if (tunnel4West3) tunnel4Rooms.push(tunnel4West3);
    
    // 检查莉娅娜是否在训练场存活
    const trainingGround = gameState.world['training_ground'];
    const lianaAlive = trainingGround && trainingGround.npcs && trainingGround.npcs.includes('liana');
    
    // 清理所有四号矿道房间的怪物
    tunnel4Rooms.forEach(room => {
        if (room && room.npcs) {
            const monsters = room.npcs.filter(npc => npc.includes('mad_'));
            monsters.forEach((monster, index) => {
                const monsterInfo = getCharacterInfo(monster);
                if (monsterInfo && monsterInfo.exp) {
                    totalExp += monsterInfo.exp;
                    monstersKilled++;
                }
                
                // 如果莉娅娜活着，生成怪物尸体
                if (lianaAlive) {
                    const corpseId = `corpse_${monster}_${Date.now()}_${index}`;
                    const corpse = {
                        id: corpseId,
                        name: `${monsterInfo.name}的尸体`,
                        type: "misc",
                        desc: `一具被莉娅娜斩杀的${monsterInfo.name}的尸体，倒在血泊中。`,
                        loot: monsterInfo.drops ? [...monsterInfo.drops] : []
                    };
                    
                    // 尸体放到地上
                    if (!room.items) room.items = [];
                    room.items.push(corpseId);
                    
                    // 在物品模板中临时注册尸体
                    ITEM_TEMPLATES[corpseId] = corpse;
                }
            });
            // 移除怪物NPC
            room.npcs = room.npcs.filter(npc => !npc.includes('mad_'));
        }
    });
    
    if (lianaAlive && monstersKilled > 0) {
        print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
        print(`<span style="color: #ffaa66;">巨大的爆炸声惊动了整个矿道...</span>`);
        print(`<span style="color: #ffaa66;">你隐约听到了急促的脚步声从远处传来——有人被爆炸声吸引过来了！</span>`);
        print(`<span style="color: #ff4444;">紧接着是激烈的打斗声和金属碰撞声...</span>`);
        print(`<span style="color: #ffaa66;">似乎有人在四号矿道里与那些怪物战斗！</span>`);
        print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
        print("");
        
        // 从训练场移除莉娅娜
        const lianaIndex = trainingGround.npcs.indexOf('liana');
        if (lianaIndex > -1) {
            trainingGround.npcs.splice(lianaIndex, 1);
        }
        
        // 在四号矿道东（25号房间）生成莉娅娜的手和手臂
        if (tunnel4East) {
            if (!tunnel4East.items) tunnel4East.items = [];
            // 创建莉娅娜的手
            const handItem = createItemFromTemplate('liana_hand');
            if (handItem) {
                handItem.id = `liana_hand_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                ITEM_TEMPLATES[handItem.id] = handItem;
                tunnel4East.items.push(handItem.id);
            }
            // 创建莉娅娜的手臂
            const armItem = createItemFromTemplate('liana_arm');
            if (armItem) {
                armItem.id = `liana_arm_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                ITEM_TEMPLATES[armItem.id] = armItem;
                tunnel4East.items.push(armItem.id);
            }
        }
        
        print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
        print(`<span style="color: #ff4444; font-weight: bold;">打斗声渐渐平息...</span>`);
        print(`<span style="color: #ffaaaa;">矿道深处陷入了死一般的寂静。</span>`);
        print(`<span style="color: #ff6666;">${monstersKilled} 个怪物倒在了血泊中...</span>`);
        print(`<span style="color: #ffdd44;">你获得了 ${totalExp} 经验值。</span>`);
        print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
        print("");
        
        gameState.player.exp += totalExp;
        checkLevelUp();

        
        // 在四号矿道出口生成伤痕累累的莉娅娜
        if (tunnelExit4) {
            if (!tunnelExit4.npcs) tunnelExit4.npcs = [];
            tunnelExit4.npcs.push('liana_wounded');
        }
    } else if (monstersKilled > 0) {
        // 如果莉娅娜已死但还有怪物，只是普通清理
        print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
        print(`<span style="color: #ffaaaa;">爆炸的冲击波席卷了四号矿道...</span>`);
        print(`<span style="color: #ff6666;">${monstersKilled} 个怪物在爆炸中丧生！</span>`);
        print(`<span style="color: #ffdd44;">你获得了 ${totalExp} 经验值。</span>`);
        print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
        print("");
        
        gameState.player.exp += totalExp;
        checkLevelUp();
    }
    
    // 更新场景物品显示和小地图
    updateSceneInfo();
    updateMinimap();
    
    print(`<span style="color: #888;">（东边的通道已经打通，你现在可以向东进入四号矿道了）</span>`);
}

// 使用矿场侧门
function useSideGate(gateId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(gateId)) {
        print("侧门已不存在。");
        return;
    }
    
    // 检查玩家是否有侧门钥匙
    const hasKey = gameState.player.inventory.some(item => item && item.id === 'mine_side_key');
    
    if (!hasKey) {
        print("");
        print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
        print(`<span style="color: #ffaa66;">侧门被牢牢锁住。</span>`);
        print(`<span style="color: #888;">你需要矿场侧门钥匙才能打开这扇门。</span>`);
        print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
        return;
    }
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
    print(`<span style="color: #aaffaa;">你使用矿场侧门钥匙打开了铁门...</span>`);
    print(`<span style="color: #888;">生锈的门轴发出刺耳的吱呀声，门后是一条通往森林的小路。</span>`);
    print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
    print("");
    
    // 传送到森林起点
    gameState.player.location = 'forest_start';
    look();
    updateMinimap();
    updateSceneInfo();
}

// 使用伯爵宅邸大门
function useMansionGate(gateId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(gateId)) {
        print("大门已不存在。");
        return;
    }
    
    // 检查玩家是否有伯爵宅邸钥匙
    const hasKey = gameState.player.inventory.some(item => item && item.id === 'mansion_key');
    
    if (!hasKey) {
        print("");
        print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
        print(`<span style="color: #ffaa66;">大门被牢牢锁住。</span>`);
        print(`<span style="color: #888;">你需要伯爵宅邸钥匙才能打开这扇门。</span>`);
        print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
        return;
    }
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
    print(`<span style="color: #aaffaa;">你使用伯爵宅邸钥匙打开了沉重的大门...</span>`);
    print(`<span style="color: #888;">沉重的橡木门缓缓开启，露出宅邸内部的庭院。</span>`);
    print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
    print("");
    
    // 进入宅邸前院
    gameState.player.location = 'mansion_front_yard';
    look();
    updateMinimap();
    updateSceneInfo();
}

// 进入木屋
function enterWoodenHut(hutId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(hutId)) {
        print("木屋已不存在。");
        return;
    }
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`<span style="color: #cc9966;">═══════════════════════════</span>`);
    print(`<span style="color: #cc9966;">你推开了木屋的门...</span>`);
    print(`<span style="color: #888;">门轴发出吱呀的声响，一股陈旧的木头气味扑面而来。</span>`);
    print(`<span style="color: #cc9966;">═══════════════════════════</span>`);
    print("");
    
    // 传送到木屋一层
    gameState.player.location = 'hut_floor1';
    look();
    updateMinimap();
    updateSceneInfo();
}

// 从木屋出去
function exitHut(doorId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(doorId)) {
        print("门已不存在。");
        return;
    }
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`<span style="color: #cc9966;">═══════════════════════════</span>`);
    print(`<span style="color: #cc9966;">你推开了木屋的门...</span>`);
    print(`<span style="color: #888;">清新的空气扑面而来，你来到了悬崖边。</span>`);
    print(`<span style="color: #cc9966;">═══════════════════════════</span>`);
    print("");
    
    // 传送到悬崖
    gameState.player.location = 'cliff';
    look();
    updateMinimap();
    updateSceneInfo();
}

// 使用炉灶烹饪 - 两级菜单系统
function useStove(stoveId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(stoveId)) {
        print("炉灶已不存在。");
        return;
    }
    
    // 检查背包中是否有可烹饪的材料
    const player = gameState.player;
    const cookableItems = [];
    
    player.inventory.forEach((item, index) => {
        if (item && item.cookable) {
            cookableItems.push({ item, index });
        }
    });
    
    if (cookableItems.length === 0) {
        print("");
        print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
        print(`<span style="color: #ffaa66;">炉灶中的余烬发出微弱的红光...</span>`);
        print(`<span style="color: #888;">你翻遍了背包，但没有找到可以烹饪的食材。</span>`);
        print(`<span style="color: #666;">（提示：肢解尸体可以获得烹饪材料）</span>`);
        print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
        return;
    }
    
    // 按部位分类食材
    const ingredientsByType = {};
    cookableItems.forEach(({ item, index }) => {
        const type = item.ingredientType || 'other';
        if (!ingredientsByType[type]) {
            ingredientsByType[type] = [];
        }
        ingredientsByType[type].push({ item, index });
    });
    
    // 部位名称映射
    const typeNames = {
        'head': '头颅',
        'torso': '躯干',
        'leg': '腿',
        'arm': '手臂',
        'hand': '手',
        'foot': '脚',
        'breast': '乳房',
        'other': '其他'
    };
    
    // 显示第一级菜单 - 按部位分类
    let html = '';
    html += makeTitle('🍳 烹饪菜单');
    html += `<div style="color: #888; margin-bottom: 10px;">炉灶中的余烬散发着微弱的热量...</div>`;
    html += `<div style="color: #888; margin-bottom: 10px;">请选择要烹饪的部位类型：</div>`;
    html += centerLine();
    
    // 按部位类型显示菜单
    Object.keys(ingredientsByType).forEach(type => {
        const typeName = typeNames[type] || type;
        const count = ingredientsByType[type].length;
        html += `<div style="margin: 8px 0;">`;
        html += `<span style="color: #ffaa66; text-decoration: underline; cursor: pointer;" onclick="showCookingMenuByType('${type}')">`;
        html += `🍖 ${typeName} <span style="color: #888;">(${count}个)</span>`;
        html += `</span>`;
        html += `</div>`;
    });
    
    // 添加自定义模式选项
    html += `<div style="margin: 8px 0;">`;
    html += `<span style="color: #ffaa66; text-decoration: underline; cursor: pointer;" onclick="showCustomCookingMode()">`;
    html += `✨ 自定义模式 <span style="color: #888;">(自由组合)</span>`;
    html += `</span>`;
    html += `</div>`;
    
    html += centerLine();
    html += `<div style="color: #aaa; cursor: pointer; margin-top: 10px;" onclick="clearDetailPanel()">↩️ 返回</div>`;
    
    // 保存食材数据供后续使用
    window.cookingIngredients = ingredientsByType;
    
    // 更新详情栏
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = html;
    }
    currentPanel = 'cooking_menu';
}

// ========== 工作台锻造系统 ==========

// 工作台配方数据
const WORKBENCH_RECIPES = {
    furniture: {
        name: '家具',
        icon: '🪑',
        items: [
            {
                id: 'craft_wooden_table',
                name: '木桌',
                desc: '一张用矿场废木料打造的简陋木桌，桌面粗糙但结实耐用。',
                materials: ['stone×3', 'wood×2'],
                materialIds: [{ id: 'stone', count: 3 }, { id: 'wood', count: 2 }],
                resultEffect: '可放置在房间中作为装饰'
            },
            {
                id: 'craft_wooden_chair',
                name: '木椅',
                desc: '一把用木板拼凑的椅子，坐上去会吱呀作响，但总比蹲在地上强。',
                materials: ['wood×2', 'stone×1'],
                materialIds: [{ id: 'wood', count: 2 }, { id: 'stone', count: 1 }],
                resultEffect: '可放置在房间中作为装饰'
            },
            {
                id: 'craft_candle_holder',
                name: '烛台',
                desc: '一个用铁片弯折而成的烛台，插上蜡烛后能照亮整个房间。',
                materials: ['iron_ore×2', 'stone×1'],
                materialIds: [{ id: 'iron_ore', count: 2 }, { id: 'stone', count: 1 }],
                resultEffect: '可放置在房间中提供照明'
            },
            {
                id: 'craft_simple_bed',
                name: '简易床',
                desc: '一张用木板和稻草搭建的简易床铺，虽然简陋，但能让你不用睡在地上。',
                materials: ['wood×4', 'rag×2', 'stone×2'],
                materialIds: [{ id: 'wood', count: 4 }, { id: 'rag', count: 2 }, { id: 'stone', count: 2 }],
                resultEffect: '可放置在房间中供休息'
            }
        ]
    },
    weapons: {
        name: '武器',
        icon: '⚔️',
        items: [
            {
                id: 'craft_greatsword',
                name: '大剑',
                desc: '一柄沉重的大剑，剑身宽厚，劈砍力度惊人。需要双手握持，适合力量型战士。',
                atk: 15,
                agi: -2,
                materials: ['iron_ore×3', 'stone×2', 'wood×1'],
                materialIds: [{ id: 'iron_ore', count: 3 }, { id: 'stone', count: 2 }, { id: 'wood', count: 1 }],
                resultEffect: '攻击力+15，灵巧-2'
            },
            {
                id: 'craft_katana',
                name: '太刀',
                desc: '一柄弧度优美的长刀，刀身狭长锋利，适合快速斩击。轻盈的刀身让使用者灵活自如。',
                atk: 10,
                agi: 5,
                materials: ['iron_ore×2', 'wood×2'],
                materialIds: [{ id: 'iron_ore', count: 2 }, { id: 'wood', count: 2 }],
                resultEffect: '攻击力+10，灵巧+5'
            },
            {
                id: 'craft_iron_armor',
                name: '盔甲',
                desc: '一套用铁片铆接而成的简陋盔甲，虽然不够精美，但能有效抵御刀剑劈砍。',
                def: 8,
                agi: -3,
                materials: ['iron_ore×4', 'stone×1'],
                materialIds: [{ id: 'iron_ore', count: 4 }, { id: 'stone', count: 1 }],
                resultEffect: '防御力+8，灵巧-3'
            },
            {
                id: 'craft_leather_armor',
                name: '皮甲',
                desc: '一件用兽皮缝制的轻便皮甲，防护力虽不如铁甲，但胜在轻便灵活。',
                def: 4,
                agi: 2,
                materials: ['rag×3', 'stone×1'],
                materialIds: [{ id: 'rag', count: 3 }, { id: 'stone', count: 1 }],
                resultEffect: '防御力+4，灵巧+2'
            },
            {
                id: 'craft_bow',
                name: '弓箭',
                desc: '一把用弯曲木条和筋绳绑制的简易弓，配上削尖的箭矢，可以在远处攻击敌人。',
                atk: 8,
                agi: 3,
                materials: ['wood×3', 'rag×1', 'stone×2'],
                materialIds: [{ id: 'wood', count: 3 }, { id: 'rag', count: 1 }, { id: 'stone', count: 2 }],
                resultEffect: '攻击力+8，灵巧+3'
            }
        ]
    }
};

// 使用工作台
function useWorkbench(workbenchId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(workbenchId)) {
        print("工作台已不存在。");
        return;
    }
    
    // 显示第一级菜单 - 家具/武器分类
    let html = '';
    html += makeTitle('🔨 锻造菜单');
    html += `<div style="color: #888; margin-bottom: 10px;">工作台上摆满了工具和材料，铁锤和铁钳在火光下闪着冷光。</div>`;
    html += `<div style="color: #888; margin-bottom: 10px;">请选择要制作的类型：</div>`;
    html += centerLine();
    
    Object.keys(WORKBENCH_RECIPES).forEach(category => {
        const cat = WORKBENCH_RECIPES[category];
        html += `<div style="margin: 8px 0;">`;
        html += `<span style="color: #88ccff; text-decoration: underline; cursor: pointer;" onclick="showWorkbenchCategory('${category}')">`;
        html += `${cat.icon} ${cat.name} <span style="color: #888;">(${cat.items.length}种配方)</span>`;
        html += `</span>`;
        html += `</div>`;
    });
    
    html += centerLine();
    html += `<div style="color: #aaa; cursor: pointer; margin-top: 10px;" onclick="clearDetailPanel()">↩️ 返回</div>`;
    
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = html;
    }
    currentPanel = 'workbench_menu';
}

// 显示工作台分类下的配方列表
function showWorkbenchCategory(category) {
    const cat = WORKBENCH_RECIPES[category];
    if (!cat) return;
    
    const player = gameState.player;
    
    let html = '';
    html += makeTitle(`🔨 ${cat.name}`);
    html += `<div style="color: #888; margin-bottom: 10px;">点击配方名称开始锻造：</div>`;
    html += centerLine();
    
    cat.items.forEach(recipe => {
        // 检查玩家是否拥有足够的材料
        let hasAllMaterials = true;
        const materialStatus = recipe.materialIds.map(mat => {
            const count = player.inventory.filter(item => item && item.id === mat.id).length;
            const hasEnough = count >= mat.count;
            if (!hasEnough) hasAllMaterials = false;
            const matName = getItemInfoById(mat.id) ? getItemInfoById(mat.id).name : mat.id;
            return { name: matName, need: mat.count, have: count, enough: hasEnough };
        });
        
        // 显示效果文本
        let effectText = recipe.resultEffect || '';
        if (recipe.atk) effectText += ` | 攻击力+${recipe.atk}`;
        if (recipe.def) effectText += ` | 防御力+${recipe.def}`;
        if (recipe.agi) effectText += ` | 灵巧${recipe.agi > 0 ? '+' : ''}${recipe.agi}`;
        
        html += `<div style="margin: 10px 0; padding: 10px; background: #2a2a2a; border-radius: 4px; border-left: 3px solid ${hasAllMaterials ? '#88ccff' : '#555'};">`;
        html += `<div style="color: ${hasAllMaterials ? '#88ccff' : '#666'}; font-weight: bold; font-size: 14px; margin-bottom: 6px; ${hasAllMaterials ? 'cursor: pointer; text-decoration: underline;' : ''}" ${hasAllMaterials ? `onclick="startCraftingProcess('${category}', '${recipe.id}')"` : ''}>${cat.icon} ${recipe.name}</div>`;
        html += `<div style="color: #aaa; font-size: 12px; margin-bottom: 4px;">${recipe.desc}</div>`;
        html += `<div style="color: #66ff66; font-size: 11px; margin-bottom: 8px;">效果：${effectText}</div>`;
        
        // 显示所需材料
        html += `<div style="color: #888; font-size: 11px; margin-bottom: 4px;">所需材料：</div>`;
        html += `<div style="font-size: 11px; margin-left: 8px; margin-bottom: 8px;">`;
        materialStatus.forEach(mat => {
            html += `<span style="color: ${mat.enough ? '#66ff66' : '#ff6666'};">${mat.enough ? '✓' : '✗'} ${mat.name} ×${mat.need} (拥有${mat.have})</span>  `;
        });
        html += `</div>`;
        
        // 锻造按钮
        html += `<div style="margin-top: 6px;">`;
        if (hasAllMaterials) {
            html += `<span style="color: #88ccff; text-decoration: underline; cursor: pointer; padding: 4px 8px; background: #2a2a3a; border-radius: 3px;" onclick="startCraftingProcess('${category}', '${recipe.id}')">🔨 开始锻造</span>`;
        } else {
            html += `<span style="color: #555; padding: 4px 8px; background: #2a2a2a; border-radius: 3px; border: 1px solid #444;">🔨 材料不足</span>`;
        }
        html += `</div>`;
        html += `</div>`;
    });
    
    html += `<div style="border-top: 1px solid #444; margin: 10px 0;"></div>`;
    html += `<div style="color: #aaa; cursor: pointer; margin-top: 10px;" onclick="useWorkbench('workbench')">↩️ 返回上一级</div>`;
    
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = html;
    }
    currentPanel = 'workbench_category';
}

// 开始锻造流程
function startCraftingProcess(category, recipeId) {
    const cat = WORKBENCH_RECIPES[category];
    if (!cat) return;
    
    const recipe = cat.items.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const player = gameState.player;
    
    // 再次检查材料
    const missingMaterials = [];
    const materialIndices = [];
    
    recipe.materialIds.forEach(mat => {
        const foundIndices = [];
        player.inventory.forEach((item, index) => {
            if (item && item.id === mat.id && foundIndices.length < mat.count) {
                foundIndices.push(index);
            }
        });
        if (foundIndices.length < mat.count) {
            const matName = getItemInfoById(mat.id) ? getItemInfoById(mat.id).name : mat.id;
            missingMaterials.push(`${matName} ×${mat.count - foundIndices.length}`);
        }
        materialIndices.push(foundIndices);
    });
    
    if (missingMaterials.length > 0) {
        print(`<span style="color: #ff6666;">材料不足！缺少：${missingMaterials.join('、')}</span>`);
        return;
    }
    
    // 消耗材料
    materialIndices.forEach(indices => {
        // 倒序移除避免索引偏移
        indices.sort((a, b) => b - a).forEach(idx => {
            player.inventory.splice(idx, 1);
        });
    });
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`<span style="color: #88ccff;">═══════════════════════════</span>`);
    print(`<span style="color: #88ccff;">你站在工作台前，拿起铁锤和铁钳...</span>`);
    print(`<span style="color: #88ccff;">═══════════════════════════</span>`);
    print("");
    
    // 逐行输出锻造剧情
    const craftStory = [
        "你将材料一件件摆放在工作台上，仔细检查每一块铁矿石和木料。",
        "炉火重新燃起，铁钳夹住烧红的铁块，铁锤一下下砸落——",
        "叮！叮！叮！火星四溅，铁块在锤击下逐渐成形。",
        "你将锻造好的部件组合在一起，用砂石打磨锋刃...",
        "锻造完成了！一件崭新的作品诞生在你的手中。"
    ];
    
    let lineIndex = 0;
    function printNextCraftLine() {
        if (lineIndex < craftStory.length) {
            print(`<span style="color: #88ccff;">${craftStory[lineIndex]}</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
            lineIndex++;
            setTimeout(printNextCraftLine, 800);
        } else {
            // 锻造完成，生成物品
            const craftedItem = {
                id: recipe.id + '_' + Date.now(),
                name: recipe.name,
                type: recipe.atk ? 'weapon' : (recipe.def ? 'armor' : 'misc'),
                desc: recipe.desc,
                usable: true,
                customAction: true
            };
            
            if (recipe.atk) {
                craftedItem.atk = recipe.atk;
                craftedItem.slot = 'weapon';
            }
            if (recipe.def) {
                craftedItem.def = recipe.def;
                craftedItem.slot = 'armor';
            }
            if (recipe.agi) {
                craftedItem.agi = recipe.agi;
            }
            if (recipe.effect) {
                craftedItem.effect = recipe.effect;
                craftedItem.value = recipe.value;
            }
            
            player.inventory.push(craftedItem);
            
            print("");
            print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
            print(`<span style="color: #ffdd44; font-weight: bold;">🔨 锻造完成！</span>`);
            print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
            print("");
            print(`<span style="color: #ffdd44;">获得了「${recipe.name}」！</span>`);
            print(`<span style="color: #888;">${recipe.desc}</span>`);
            if (recipe.resultEffect) {
                print(`<span style="color: #66ff66;">效果：${recipe.resultEffect}</span>`);
            }
            print("");
            
            // 显示消耗的材料名
            const consumedNames = recipe.materialIds.map(mat => {
                const matInfo = getItemInfoById(mat.id);
                return matInfo ? `${matInfo.name}×${mat.count}` : `${mat.id}×${mat.count}`;
            });
            print(`<span style="color: #888;">（消耗了材料：${consumedNames.join('、')}）</span>`);
            
            updateSceneInfo();
        }
    }
    
    printNextCraftLine();
}

// 显示自定义烹饪模式
function showCustomCookingMode() {
    const player = gameState.player;
    
    // 获取背包中的所有肢体（可烹饪的物品）和辅料
    const limbs = [];
    const seasonings = [];
    
    player.inventory.forEach((item, index) => {
        if (item) {
            if (item.cookable) {
                limbs.push({ item, index });
            } else if (item.isSeasoning) {
                seasonings.push({ item, index });
            }
        }
    });
    
    // 检查是否有可用的食材
    if (limbs.length === 0) {
        print("你没有可用于烹饪的肢体。");
        return;
    }
    
    // 构建自定义模式界面
    let html = '';
    html += makeTitle('✨ 自定义烹饪模式');
    html += `<div style="color: #888; margin-bottom: 10px;">在这里，你可以自由组合食材和辅料，创造独特的料理。</div>`;
    html += centerLine();
    
    // 显示可用的肢体
    html += `<div style="margin-bottom: 15px;">`;
    html += `<div style="color: #ffaa66; font-weight: bold; margin-bottom: 5px;">选择肢体：</div>`;
    limbs.forEach(({ item, index }) => {
        html += `<div style="margin: 5px 0;">`;
        html += `<input type="checkbox" id="limb_${index}" value="${index}">`;
        html += `<label for="limb_${index}" style="color: #fff; margin-left: 5px;">${item.name}</label>`;
        html += `</div>`;
    });
    html += `</div>`;
    
    // 显示可用的辅料
    html += `<div style="margin-bottom: 15px;">`;
    html += `<div style="color: #ffaa66; font-weight: bold; margin-bottom: 5px;">选择辅料：</div>`;
    seasonings.forEach(({ item, index }) => {
        html += `<div style="margin: 5px 0;">`;
        html += `<input type="checkbox" id="seasoning_${index}" value="${index}">`;
        html += `<label for="seasoning_${index}" style="color: #fff; margin-left: 5px;">${item.name}</label>`;
        html += `</div>`;
    });
    html += `</div>`;
    
    // 输入菜名
    html += `<div style="margin-bottom: 10px;">`;
    html += `<div style="color: #ffaa66; font-weight: bold; margin-bottom: 5px;">菜名：</div>`;
    html += `<input type="text" id="dish_name" style="width: 90%; padding: 5px; background: #222; border: 1px solid #444; color: #fff;">`;
    html += `</div>`;
    
    // 输入制作步骤
    html += `<div style="margin-bottom: 10px;">`;
    html += `<div style="color: #ffaa66; font-weight: bold; margin-bottom: 5px;">制作步骤：</div>`;
    html += `<textarea id="cooking_steps" rows="4" style="width: 90%; padding: 5px; background: #222; border: 1px solid #444; color: #fff;"></textarea>`;
    html += `</div>`;
    
    // 输入制成后描述
    html += `<div style="margin-bottom: 15px;">`;
    html += `<div style="color: #ffaa66; font-weight: bold; margin-bottom: 5px;">制成后描述：</div>`;
    html += `<textarea id="dish_description" rows="3" style="width: 90%; padding: 5px; background: #222; border: 1px solid #444; color: #fff;"></textarea>`;
    html += `</div>`;
    
    // 按钮
    html += centerLine();
    html += `<div style="display: flex; justify-content: space-between; margin-top: 10px;">`;
    html += `<span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span>`;
    html += `<span style="color: #ffaa66; cursor: pointer; font-weight: bold;" onclick="createCustomDish()">✨ 生成料理</span>`;
    html += `</div>`;
    
    // 更新详情栏
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = html;
    }
    currentPanel = 'custom_cooking';
}

// 创建自定义料理
function createCustomDish() {
    const player = gameState.player;
    
    // 获取选中的肢体和辅料
    const selectedLimbs = [];
    const selectedSeasonings = [];
    
    // 收集选中的肢体
    player.inventory.forEach((item, index) => {
        const checkbox = document.getElementById(`limb_${index}`);
        if (checkbox && checkbox.checked) {
            selectedLimbs.push({ item, index });
        }
    });
    
    // 收集选中的辅料
    player.inventory.forEach((item, index) => {
        const checkbox = document.getElementById(`seasoning_${index}`);
        if (checkbox && checkbox.checked) {
            selectedSeasonings.push({ item, index });
        }
    });
    
    // 检查是否选择了至少一个肢体
    if (selectedLimbs.length === 0) {
        print("请至少选择一个肢体。");
        return;
    }
    
    // 获取输入的信息
    const dishName = document.getElementById('dish_name').value.trim();
    const cookingSteps = document.getElementById('cooking_steps').value.trim();
    const dishDescription = document.getElementById('dish_description').value.trim();
    
    // 检查输入是否完整
    if (!dishName) {
        print("请输入菜名。");
        return;
    }
    
    if (!cookingSteps) {
        print("请输入制作步骤。");
        return;
    }
    
    if (!dishDescription) {
        print("请输入制成后描述。");
        return;
    }
    
    // 移除选中的肢体和辅料
    const removedItems = [];
    
    // 移除肢体（按索引从大到小移除，避免索引变化）
    selectedLimbs.sort((a, b) => b.index - a.index).forEach(({ index }) => {
        removedItems.push(player.inventory[index]);
        player.inventory.splice(index, 1);
    });
    
    // 移除辅料（按索引从大到小移除，避免索引变化）
    selectedSeasonings.sort((a, b) => b.index - a.index).forEach(({ index }) => {
        removedItems.push(player.inventory[index]);
        player.inventory.splice(index, 1);
    });
    
    // 生成自定义料理
    const customDish = {
        id: 'custom_dish_' + Date.now(),
        name: dishName,
        type: 'consumable',
        desc: cookingSteps + '\n' + dishDescription,
        effect: null, // 不可使用
        value: 0,
        isCustom: true // 标记为自定义料理
    };
    
    // 添加料理到背包
    player.inventory.push(customDish);
    
    // 显示结果
    print("");
    print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
    print(`<span style="color: #ffaa66;">🍳 料理制作完成！</span>`);
    print(`<span style="color: #fff;">你成功制作了：${dishName}</span>`);
    print(`<span style="color: #888;">制作步骤：${cookingSteps}</span>`);
    print(`<span style="color: #888;">制成后描述：${dishDescription}</span>`);
    print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
    
    // 清除详情面板
    clearDetailPanel();
    
    // 更新场景信息
    updateSceneInfo();
}

// 显示第二级菜单 - 按部位类型显示具体料理
function showCookingMenuByType(type) {
    const ingredients = window.cookingIngredients ? window.cookingIngredients[type] : null;
    if (!ingredients || ingredients.length === 0) {
        print("该部位没有可烹饪的食材。");
        return;
    }
    
    const typeNames = {
        'head': '头颅',
        'torso': '躯干',
        'leg': '腿',
        'arm': '手臂',
        'hand': '手',
        'foot': '脚',
        'breast': '乳房',
        'other': '其他'
    };
    
    let html = '';
    html += makeTitle(`🍳 ${typeNames[type] || type}`);
    html += `<div style="color: #888; margin-bottom: 10px;">点击料理名称开始烹饪：</div>`;
    html += centerLine();
    
    ingredients.forEach(({ item, index }) => {
        // 获取料理结果信息
        const resultDishId = item.resultDish;
        const resultDish = resultDishId ? ITEM_TEMPLATES[resultDishId] : null;
        const dishName = resultDish ? resultDish.name : '未知料理';
        const ingredientsList = resultDish && resultDish.ingredients ? resultDish.ingredients : [item.name];
        
        // 检查辅料是否齐备
        const requiredSeasonings = resultDish && resultDish.seasonings ? resultDish.seasonings : [];
        const hasAllSeasonings = requiredSeasonings.every(sId => 
            gameState.player.inventory.some(inv => inv && inv.id === sId)
        );
        const missingNames = requiredSeasonings.filter(sId => 
            !gameState.player.inventory.some(inv => inv && inv.id === sId)
        ).map(sId => ITEM_TEMPLATES[sId] ? ITEM_TEMPLATES[sId].name : sId);
        
        html += `<div style="margin: 10px 0; padding: 10px; background: #2a2a2a; border-radius: 4px; border-left: 3px solid ${hasAllSeasonings ? '#ff8844' : '#666'};">`;
        // 高亮显示料理名称
        html += `<div style="color: ${hasAllSeasonings ? '#ffdd44' : '#888'}; font-weight: bold; font-size: 14px; margin-bottom: 6px; ${hasAllSeasonings ? 'cursor: pointer; text-decoration: underline;' : ''}" ${hasAllSeasonings ? `onclick="startCookingProcess(${index})"` : ''}>🍖 ${dishName}</div>`;
        // 显示配方
        html += `<div style="color: #888; font-size: 12px; margin-bottom: 4px;">配方：</div>`;
        html += `<div style="color: #aaa; font-size: 12px; margin-left: 8px; margin-bottom: 8px;">`;
        ingredientsList.forEach((ing, i) => {
            const isMain = i === 0;
            html += `<span style="${isMain ? 'color: #ffaa66;' : ''}">${ing}</span>${i < ingredientsList.length - 1 ? ' + ' : ''}`;
        });
        html += `</div>`;
        // 显示效果
        let effectText = '';
        if (resultDish) {
            switch (resultDish.effect) {
                case 'maxHp': effectText = `生命上限 +${resultDish.value}`; break;
                case 'atk': effectText = `攻击 +${resultDish.value}`; break;
                case 'def': effectText = `防御 +${resultDish.value}`; break;
                case 'agi': effectText = `灵巧 +${resultDish.value}`; break;
                case 'all': effectText = `全属性 +${resultDish.value}`; break;
            }
        }
        html += `<div style="color: #66ff66; font-size: 11px; margin-bottom: 8px;">效果：${effectText}</div>`;
        // 显示辅料需求
        if (requiredSeasonings.length > 0) {
            const seasoningHtml = requiredSeasonings.map(sId => {
                const sTemplate = ITEM_TEMPLATES[sId];
                const sName = sTemplate ? sTemplate.name : sId;
                const hasIt = gameState.player.inventory.some(inv => inv && inv.id === sId);
                return `<span style="color: ${hasIt ? '#66ff66' : '#ff6666'};">${hasIt ? '✓' : '✗'} ${sName}</span>`;
            }).join('  ');
            html += `<div style="color: #888; font-size: 11px; margin-bottom: 4px;">所需辅料：</div>`;
            html += `<div style="font-size: 11px; margin-left: 8px; margin-bottom: 8px;">${seasoningHtml}</div>`;
        }
        // 烹饪按钮 - 辅料不足时灰显
        html += `<div style="margin-top: 6px;">`;
        if (hasAllSeasonings) {
            html += `<span style="color: #ff6b6b; text-decoration: underline; cursor: pointer; padding: 4px 8px; background: #3a2a2a; border-radius: 3px;" onclick="startCookingProcess(${index})">🔥 开始烹饪</span>`;
        } else {
            html += `<span style="color: #555; padding: 4px 8px; background: #2a2a2a; border-radius: 3px; border: 1px solid #444;">🔥 材料不足</span>`;
            html += `<span style="color: #ff6666; font-size: 11px; margin-left: 8px;">缺少：${missingNames.join('、')}</span>`;
        }
        html += `</div>`;
        html += `</div>`;
    });
    
    html += `<div style="border-top: 1px solid #444; margin: 10px 0;"></div>`;
    html += `<div style="color: #aaa; cursor: pointer; margin-top: 10px;" onclick="useStove('stove')">↩️ 返回上一级</div>`;
    
    // 更新详情栏
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = html;
    }
    currentPanel = 'cooking_menu_detail';
}

// 开始烹饪流程
function startCookingProcess(inventoryIndex) {
    const player = gameState.player;
    const ingredient = player.inventory[inventoryIndex];
    
    if (!ingredient || !ingredient.cookable) {
        print("该物品无法烹饪。");
        return;
    }
    
    // 获取料理结果信息
    const resultDishId = ingredient.resultDish;
    if (!resultDishId) {
        print("该食材没有对应的料理配方。");
        return;
    }
    
    const resultDish = ITEM_TEMPLATES[resultDishId];
    if (!resultDish) {
        print("料理配方不存在。");
        return;
    }
    
    // 检查是否集齐所有辅料
    const requiredSeasonings = resultDish.seasonings || []; // 料理所需的辅料ID列表
    const missingSeasonings = [];
    const seasoningsToRemove = []; // 记录要消耗的辅料背包索引
    
    requiredSeasonings.forEach(seasoningId => {
        const foundIndex = player.inventory.findIndex((item, i) => 
            item && item.id === seasoningId && !seasoningsToRemove.includes(i)
        );
        if (foundIndex === -1) {
            const seasoningTemplate = ITEM_TEMPLATES[seasoningId];
            missingSeasonings.push(seasoningTemplate ? seasoningTemplate.name : seasoningId);
        } else {
            seasoningsToRemove.push(foundIndex);
        }
    });
    
    if (missingSeasonings.length > 0) {
        print("");
        print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
        print(`<span style="color: #ff6666;">材料不足，无法烹饪！</span>`);
        print(`<span style="color: #888;">缺少辅料：${missingSeasonings.join('、')}</span>`);
        print(`<span style="color: #ffaa66;">═══════════════════════════</span>`);
        return;
    }
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 显示烹饪开始
    print(`<span style="color: #ff8844;">═══════════════════════════</span>`);
    print(`<span style="color: #ff8844;">你开始烹饪 ${ingredient.name}...</span>`);
    print(`<span style="color: #ff8844;">═══════════════════════════</span>`);
    print("");
    
    // 从背包中移除食材
    player.inventory.splice(inventoryIndex, 1);
    
    // 记录需要烹饪后返回的辅料（如骑士大剑）
    const returnItems = resultDish.returnAfterCook ? [...resultDish.returnAfterCook] : [];
    cookingReturnItems = [];
    
    // 从背包中移除辅料（倒序移除，避免索引偏移），同时记录需要返回的物品
    seasoningsToRemove.sort((a, b) => b - a).forEach(idx => {
        const removedItem = player.inventory[idx];
        if (removedItem && returnItems.includes(removedItem.id)) {
            cookingReturnItems.push(removedItem);
            returnItems.splice(returnItems.indexOf(removedItem.id), 1);
        }
        player.inventory.splice(idx, 1);
    });
    
    // 获取烹饪剧情（数据源：items.js 中的 cookStory 字段）
    const cookStory = resultDish.cookStory;
    if (!cookStory || cookStory.length === 0) {
        // 无剧情直接完成烹饪
        completeCooking(ingredient, resultDish, resultDishId);
        return;
    }
    
    // 逐行输出烹饪剧情（点击Next驱动）
    let lineIndex = 0;
    function printNextLine() {
        if (lineIndex < cookStory.length) {
            print("<br>");
            print(`<span style="color: #ffaa66;">${cookStory[lineIndex]}</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
            lineIndex++;
            showNextBtn(printNextLine);
        } else {
            hideNextBtn();
            // 剧情输出完毕，完成烹饪
            completeCooking(ingredient, resultDish, resultDishId);
        }
    }
    
    // 开始逐行输出
    printNextLine();
}

// 当前烹饪中需要返回的物品
let cookingReturnItems = [];

// 完成烹饪
function completeCooking(ingredient, dishTemplate, dishId) {
    const player = gameState.player;
    
    // 创建料理物品
    const dish = {
        id: dishId,
        name: dishTemplate.name,
        type: dishTemplate.type,
        desc: dishTemplate.desc,
        effect: dishTemplate.effect,
        value: dishTemplate.value,
        usable: true,
        customAction: true
    };
    
    // 将料理添加到背包
    player.inventory.push(dish);
    
    print("");
    print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
    print(`<span style="color: #ffdd44; font-weight: bold;">🍖 烹饪完成！</span>`);
    print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
    print("");
    print(`<span style="color: #ffdd44;">获得了「${dishTemplate.name}」！</span>`);
    print(`<span style="color: #888;">${dishTemplate.desc}</span>`);
    
    // 显示效果
    let effectText = "";
    switch (dishTemplate.effect) {
        case "maxHp":
            effectText = `永久提升生命值上限 ${dishTemplate.value} 点`;
            break;
        case "atk":
            effectText = `永久提升攻击力 ${dishTemplate.value} 点`;
            break;
        case "def":
            effectText = `永久提升防御力 ${dishTemplate.value} 点`;
            break;
        case "agi":
            effectText = `永久提升灵巧 ${dishTemplate.value} 点`;
            break;
        case "all":
            effectText = `永久提升所有属性 ${dishTemplate.value} 点`;
            break;
        default:
            effectText = "【占位符：效果描述】";
    }
    print(`<span style="color: #66ff66;">效果：${effectText}</span>`);
    print("");
    print(`<span style="color: #888;">（消耗了 ${ingredient.name}）</span>`);
    // 显示辅料消耗
    if (dishTemplate.seasonings && dishTemplate.seasonings.length > 0) {
        const seasoningNames = dishTemplate.seasonings.map(sId => {
            const sTemplate = ITEM_TEMPLATES[sId];
            return sTemplate ? sTemplate.name : sId;
        });
        print(`<span style="color: #888;">（消耗了辅料：${seasoningNames.join('、')}）</span>`);
    }
    // 返回需要归还的辅料（如骑士大剑）
    if (cookingReturnItems.length > 0) {
        cookingReturnItems.forEach(item => {
            player.inventory.push(item);
            print(`<span style="color: #aaffaa;">「${item.name}」已归还到背包。</span>`);
        });
        cookingReturnItems = [];
    }
    
    // 更新场景信息
    updateSceneInfo();
}

// 跳入矿坑
function jumpIntoPit(pitId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(pitId)) {
        print("矿坑已不存在。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`你深吸一口气，纵身跃入黑漆漆的矿坑...`);
    print("");
    
    // 显示遮罩，封锁交互
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    setTimeout(() => {
        print(`<span class="story-text">身体在黑暗中急速下坠...</span>`);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }, 1300);
    
    setTimeout(() => {
        print(`<span class="story-text">碎石和岩壁擦过你的手臂，留下一道道血痕。</span>`);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }, 2600);
    
    setTimeout(() => {
        print(`<span class="story-text">砰！你重重地摔在坚硬的矿道地面上。</span>`);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }, 3900);
    
    setTimeout(() => {
        // 玩家受到10点伤害
        gameState.player.hp = Math.max(0, gameState.player.hp - 10);
        print(`<span style="color: #ff6666;">你受到了 10 点坠落伤害！</span>`);
        print(`<span style="color: #ff8888;">当前 HP: ${gameState.player.hp}/${gameState.player.maxHp}</span>`);
        outputDiv.scrollTop = outputDiv.scrollHeight;
        
        // 从当前房间移除矿坑
        const pitIndex = room.items.indexOf(pitId);
        if (pitIndex > -1) {
            room.items.splice(pitIndex, 1);
            delete ITEM_TEMPLATES[pitId];
        }
        
        // 传送到四号矿道出口
        gameState.player.location = 'tunnel_exit_4';
        
        print("");
        print(`<span style="color: #aaffaa;">你来到了四号矿道出口...</span>`);
        
        // 关闭遮罩并更新场景
        if (overlay) overlay.classList.remove('active');
        look();
        updateMinimap();
        updateSceneInfo();
    }, 5200);
}

// 使用木梯
function useLadder(ladderId) {
    const room = gameState.world[gameState.player.location];
    const hasSupervisor = room.npcs && room.npcs.includes('mine_supervisor');
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 撤走的梯子 - 四号矿道出口↔四号矿井口双向传送，不消耗
    if (ladderId === 'removed_ladder' || (ladderId.includes('removed_ladder') && ladderId.includes('_dropped_'))) {
        const currentLoc = gameState.player.location;
        
        // 检查是否在四号矿道出口或四号矿井口
        if (currentLoc !== 'tunnel_exit_4' && currentLoc !== 'mine_exit_4') {
            print(`<span style="color: #ffaa66;">这里无法使用撤走的梯子。</span>`);
            print(`<span style="color: #888;">（这架梯子只能在四号矿道出口或四号矿井口使用...）</span>`);
            return;
        }
        
        // 显示遮罩
        const overlay = document.getElementById('block-overlay');
        if (overlay) overlay.classList.add('active');
        
        // 从地下到地面
        if (currentLoc === 'tunnel_exit_4') {
            print(`你将撤走的梯子架在岩壁上...`);
            print(`<br>`);
            
            setTimeout(() => {
                print(`<span class="story-text">梯子稳稳地架在岩壁与地面之间。</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
            }, 1000);
            
            setTimeout(() => {
                print(`<span class="story-text">你顺着梯子向上爬去...</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
            }, 2300);
            
            setTimeout(() => {
                print(`<span class="story-text">头顶被封堵的木板被推开，月光洒落进来。</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
            }, 3600);
            
            setTimeout(() => {
                // 传送到四号矿井口（不消耗梯子）
                gameState.player.location = 'mine_exit_4';
                
                print("");
                print(`<span style="color: #aaffaa;">你来到了四号矿井口...</span>`);
                
                // 关闭遮罩并更新场景
                if (overlay) overlay.classList.remove('active');
                look();
                updateMinimap();
                updateSceneInfo();
            }, 4900);
        } 
        // 从地面到地下
        else if (currentLoc === 'mine_exit_4') {
            print(`你将撤走的梯子放入被破开的井口...`);
            print(`<br>`);
            
            setTimeout(() => {
                print(`<span class="story-text">梯子稳稳地架在井壁之间。</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
            }, 1000);
            
            setTimeout(() => {
                print(`<span class="story-text">你顺着梯子向下爬去...</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
            }, 2300);
            
            setTimeout(() => {
                print(`<span class="story-text">黑暗和腐臭的气息扑面而来。</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
            }, 3600);
            
            setTimeout(() => {
                // 传送到四号矿道出口（不消耗梯子）
                gameState.player.location = 'tunnel_exit_4';
                
                print("");
                print(`<span style="color: #aaffaa;">你来到了四号矿道出口...</span>`);
                
                // 关闭遮罩并更新场景
                if (overlay) overlay.classList.remove('active');
                look();
                updateMinimap();
                updateSceneInfo();
            }, 4900);
        }
        return;
    }
    
    // 地表木梯 - 二号矿井口下到矿道
    if (ladderId === 'ladder_surface') {
        print(`你顺着木梯爬下矿道...`);
        print(`<br>`);
        gameState.player.location = 'tunnel_exit';
        setTimeout(() => {
            look();
            updateMinimap();
            updateSceneInfo();
        }, 1000);
        return;
    }
    
    // 地表木梯 - 一号矿井口下到一号矿道
    if (ladderId === 'ladder_mine_exit_1') {
        print(`你顺着木梯爬下矿道...`);
        print(`<br>`);
        gameState.player.location = 'tunnel_exit_1';
        setTimeout(() => {
            look();
            updateMinimap();
            updateSceneInfo();
        }, 1000);
        return;
    }
    
    // 地下木梯 - 一号矿道出口爬上地面
    if (ladderId === 'ladder_1') {
        print(`你爬上木梯，推开头顶的石板...`);
        print(`<br>`);
        gameState.player.location = 'mine_exit_1';
        setTimeout(() => {
            look();
            updateMinimap();
            updateSceneInfo();
        }, 1000);
        return;
    }
    
    // 地表木梯 - 三号矿井口下到三号矿道
    if (ladderId === 'ladder_mine_exit_3') {
        print(`你顺着木梯爬下矿道...`);
        print(`<br>`);
        gameState.player.location = 'tunnel_exit_3';
        setTimeout(() => {
            look();
            updateMinimap();
            updateSceneInfo();
        }, 1000);
        return;
    }
    
    // 地下木梯 - 三号矿道出口爬上地面
    if (ladderId === 'ladder_3') {
        print(`你爬上木梯，推开头顶的石板...`);
        print(`<br>`);
        gameState.player.location = 'mine_exit_3';
        setTimeout(() => {
            look();
            updateMinimap();
            updateSceneInfo();
        }, 1000);
        return;
    }
    
    // 矿坑跳下
    if (ladderId.includes('mine_pit')) {
        return;
    }
    
    // 地下木梯 - 二号矿道出口，需要检查监工
    if (hasSupervisor) {
        const stoneCount = gameState.player.inventory.filter(item => item.id === 'stone').length;
        
        if (stoneCount < 99) {
            print(`<span style="color: #ff6666;">监工拦住了你：「石块不够！九十九块，一块都不能少！」</span>`);
            print(`<span style="color: #aaa;">你目前有 ${stoneCount} 块石块，还需要 ${99 - stoneCount} 块。</span>`);
            return;
        }
        
        // 消耗石块（移除99个）
        let removed = 0;
        gameState.player.inventory = gameState.player.inventory.filter(item => {
            if (item.id === 'stone' && removed < 99) {
                removed++;
                return false;
            }
            return true;
        });
        
        print(`你将 ${removed} 块石块交给监工。`);
        print(`<span style="color: #aaffaa;">监工挥了挥手：「滚吧，别让我再看见你。」</span>`);
        
        // 移除监工，不再阻拦
        const supervisorIndex = room.npcs.indexOf('mine_supervisor');
        if (supervisorIndex > -1) {
            room.npcs.splice(supervisorIndex, 1);
        }
    }
    
    print(`<br>`);
    print(`你爬上木梯，推开头顶的石板...`);
    print(`<br>`);
    
    // 移动到地表
    gameState.player.location = 'mine_exit';
    setTimeout(() => {
        look();
        updateMinimap();
        updateSceneInfo();
    }, 1500);
}

// 从背包中使用撤走的梯子
function useRemovedLadderFromInventory() {
    // 检查当前位置
    const currentLoc = gameState.player.location;
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 检查是否在四号矿道出口或四号矿井口
    if (currentLoc !== 'tunnel_exit_4' && currentLoc !== 'mine_exit_4') {
        print(`<span style="color: #ffaa66;">这里无法使用撤走的梯子。</span>`);
        print(`<span style="color: #888;">（这架梯子只能在四号矿道出口或四号矿井口使用...）</span>`);
        return;
    }
    
    // 显示遮罩
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    // 从地下到地面
    if (currentLoc === 'tunnel_exit_4') {
        print(`你将撤走的梯子架在岩壁上...`);
        print(`<br>`);
        
        setTimeout(() => {
            print(`<span class="story-text">梯子稳稳地架在岩壁与地面之间。</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }, 1000);
        
        setTimeout(() => {
            print(`<span class="story-text">你顺着梯子向上爬去...</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }, 2300);
        
        setTimeout(() => {
            print(`<span class="story-text">头顶被封堵的木板被推开，月光洒落进来。</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }, 3600);
        
        setTimeout(() => {
            // 传送到四号矿井口（不消耗梯子）
            gameState.player.location = 'mine_exit_4';
            
            print("");
            print(`<span style="color: #aaffaa;">你来到了四号矿井口...</span>`);
            
            // 关闭遮罩并更新场景
            if (overlay) overlay.classList.remove('active');
            look();
            updateMinimap();
            updateSceneInfo();
        }, 4900);
    }
    // 从地面到地下
    else if (currentLoc === 'mine_exit_4') {
        print(`你将撤走的梯子放入被破开的井口...`);
        print(`<br>`);
        
        setTimeout(() => {
            print(`<span class="story-text">梯子稳稳地架在井壁之间。</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }, 1000);
        
        setTimeout(() => {
            print(`<span class="story-text">你顺着梯子向下爬去...</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }, 2300);
        
        setTimeout(() => {
            print(`<span class="story-text">黑暗和腐臭的气息扑面而来。</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }, 3600);
        
        setTimeout(() => {
            // 传送到四号矿道出口（不消耗梯子）
            gameState.player.location = 'tunnel_exit_4';
            
            print("");
            print(`<span style="color: #aaffaa;">你来到了四号矿道出口...</span>`);
            
            // 关闭遮罩并更新场景
            if (overlay) overlay.classList.remove('active');
            look();
            updateMinimap();
            updateSceneInfo();
        }, 4900);
    }
}

// 使用肢体部位（必须在背包中才能使用）
function useLimb(itemId) {
    const item = findItemById(itemId);
    if (!item) {
        print("该物品不在行囊中，无法使用。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`你仔细端详着「${item.name}」...`);
    print("<br>");
    
    // 如果有剧情内容，延时逐行亮黄色输出
    if (item.story && item.story.length > 0) {
        // 显示遮罩，封锁所有交互
        const overlay = document.getElementById('block-overlay');
        if (overlay) overlay.classList.add('active');
        
        let lineIndex = 0;
        function showNextLine() {
            if (lineIndex < item.story.length) {
                print("<br>");
                print(`<span style="color: #ff4486;">${item.story[lineIndex]}</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
                lineIndex++;
                showNextBtn(showNextLine);
            } else {
                hideNextBtn();
                // 全部显示完毕后关闭遮罩
                if (overlay) overlay.classList.remove('active');
                
                // 处理使用后销毁并生成新物品
                if (item.onUseDestroy) {
                    const inv = gameState.player.inventory;
                    const idx = inv.indexOf(item);
                    if (idx !== -1) {
                        inv.splice(idx, 1);
                        print(`<span style="color: #ff6b6b;">「${item.name}」已损毁。</span>`);
                    }
                    if (item.onUseSpawn && item.onUseSpawn.length > 0) {
                        item.onUseSpawn.forEach(spawnId => {
                            const spawned = createItemFromTemplate(spawnId);
                            if (spawned) {
                                inv.push(spawned);
                                print(`<span style="color: #aaffaa;">✨ 获得了「${spawned.name}」</span>`);
                            }
                        });
                    }
                    showInventoryPanel();
                }
            }
        }
        showNextLine();
    } else {
        print(`<span style="color: #888;">【暂无剧情内容】</span>`);
        
        // 即使没有剧情，也处理使用后销毁
        if (item.onUseDestroy) {
            const inv = gameState.player.inventory;
            const idx = inv.indexOf(item);
            if (idx !== -1) {
                inv.splice(idx, 1);
                print(`<span style="color: #ff6b6b;">「${item.name}」已损毁。</span>`);
            }
            if (item.onUseSpawn && item.onUseSpawn.length > 0) {
                item.onUseSpawn.forEach(spawnId => {
                    const spawned = createItemFromTemplate(spawnId);
                    if (spawned) {
                        inv.push(spawned);
                        print(`<span style="color: #aaffaa;">✨ 获得了「${spawned.name}」</span>`);
                    }
                });
            }
            showInventoryPanel();
        }
    }
}

// 使用榨奶器
function useMilker(milkerId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(milkerId)) {
        print("榨奶器已不存在。");
        return;
    }
    
    // 检查背包中是否有可榨奶的乳房
    const player = gameState.player;
    const milkeableItems = [];
    
    player.inventory.forEach((item, index) => {
        if (item && item.milkItem) {
            const currentCount = item.milkedCount || 0;
            const maxCount = item.maxMilkCount || 1;
            if (currentCount < maxCount) {
                milkeableItems.push({ item, index });
            }
        }
    });
    
    if (milkeableItems.length === 0) {
        print("");
        print(`<span style="color: #ffddaa;">═══════════════════════════</span>`);
        print(`<span style="color: #ffddaa;">榨奶器静静地放在台面上...</span>`);
        print(`<span style="color: #888;">你翻遍了背包，但没有找到可以榨奶的乳房。</span>`);
        print(`<span style="color: #666;">（提示：肢解尸体获得的乳房可以用榨奶器榨奶）</span>`);
        print(`<span style="color: #ffddaa;">═══════════════════════════</span>`);
        return;
    }
    
    // 显示榨奶菜单
    let html = '';
    html += makeTitle('🥛 榨奶器');
    html += `<div style="color: #888; margin-bottom: 10px;">榨奶器准备就绪，请选择要榨奶的乳房：</div>`;
    html += centerLine();
    
    milkeableItems.forEach(({ item, index }) => {
        const currentCount = item.milkedCount || 0;
        const maxCount = item.maxMilkCount || 1;
        const milkTemplate = ITEM_TEMPLATES[item.milkItem];
        const milkName = milkTemplate ? milkTemplate.name : '乳汁';
        const remaining = maxCount - currentCount;
        
        html += `<div style="margin: 10px 0; padding: 10px; background: #2a2a2a; border-radius: 4px; border-left: 3px solid #ffddaa;">`;
        html += `<div style="color: #ffddaa; font-weight: bold; font-size: 14px; margin-bottom: 6px;">🥛 ${item.name}</div>`;
        html += `<div style="color: #888; font-size: 12px; margin-bottom: 4px;">产出：${milkName}（恢复 ${milkTemplate ? milkTemplate.value : '?'} 生命值）</div>`;
        html += `<div style="color: #aaa; font-size: 12px; margin-bottom: 8px;">剩余次数：${remaining}/${maxCount}</div>`;
        html += `<div style="margin-top: 6px;">`;
        html += `<span style="color: #ffddaa; text-decoration: underline; cursor: pointer; padding: 4px 8px; background: #3a3a2a; border-radius: 3px;" onclick="startMilkingProcess(${index})">🥛 开始榨奶</span>`;
        html += `</div>`;
        html += `</div>`;
        html += `</div>`;
    });
    html += centerLine();
    html += `<div style="color: #aaa; cursor: pointer; margin-top: 10px;" onclick="clearDetailPanel()">↩️ 返回</div>`;
    
    // 更新详情栏
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = html;
    }
    currentPanel = 'milking_menu';
}

// 开始榨奶过程
function startMilkingProcess(inventoryIndex) {
    const player = gameState.player;
    const breast = player.inventory[inventoryIndex];
    
    if (!breast || !breast.milkItem) {
        print("该物品无法榨奶。");
        return;
    }
    
    const currentCount = breast.milkedCount || 0;
    const maxCount = breast.maxMilkCount || 1;
    if (currentCount >= maxCount) {
        print(`「${breast.name}」已经被榨干了，已经没有奶了。`);
        return;
    }
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 显示榨奶开始
    print(`<span style="color: #ffddaa;">═══════════════════════════</span>`);
    print(`<span style="color: #ffddaa;">你将「${breast.name}」放入榨奶器...</span>`);
    print(`<span style="color: #ffddaa;">═══════════════════════════</span>`);
    print("");
    
    // 获取榨奶剧情（根据当前榨奶次数选择对应剧情）
    const milkStories = breast.milkStory || [["你启动了榨奶器..."]];
    const currentMilkCount = breast.milkedCount || 0;
    // milkStory 现在是嵌套数组，外层索引对应榨奶次数
    let milkStory;
    if (Array.isArray(milkStories[0])) {
        // 新格式：嵌套数组，按次数索引
        const storyIndex = Math.min(currentMilkCount, milkStories.length - 1);
        milkStory = milkStories[storyIndex];
    } else {
        // 旧格式兼容：平铺数组
        milkStory = milkStories;
    }
    
    // 逐行输出榨奶剧情（点击Next驱动）
    let lineIndex = 0;
    function printNextLine() {
        if (lineIndex < milkStory.length) {
            print("<br>");
            print(`<span style="color: #a8ff44;">${milkStory[lineIndex]}</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
            lineIndex++;
            showNextBtn(printNextLine);
        } else {
            hideNextBtn();
            // 剧情输出完毕，完成榨奶
            completeMilking(breast, inventoryIndex);
        }
    }
    
    // 开始逐行输出
    printNextLine();
}

// 完成榨奶
function completeMilking(breast, inventoryIndex) {
    const player = gameState.player;
    
    // 生成奶物品
    const milkItem = createItemFromTemplate(breast.milkItem);
    if (milkItem) {
        player.inventory.push(milkItem);
        
        // 更新榨奶计数
        breast.milkedCount = (breast.milkedCount || 0) + 1;
        const maxCount = breast.maxMilkCount || 1;
        const remaining = maxCount - breast.milkedCount;
        
        print("");
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        print(`<span style="color: #ffdd44; font-weight: bold;">🥛 榨奶完成！</span>`);
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        print("");
        print(`<span style="color: #ffdd44;">获得了「${milkItem.name}」！</span>`);
        if (remaining > 0) {
            print(`<span style="color: #888;">「${breast.name}」还可以榨奶 ${remaining} 次。</span>`);
        } else {
            print(`<span style="color: #888;">「${breast.name}」已经被榨干了。</span>`);
             // 榨干后替换为干瘪乳房
            if (breast.driedBreastId) {
                const driedBreast = createItemFromTemplate(breast.driedBreastId);
                if (driedBreast) {
                    // 删除原乳房，替换为干瘪乳房
                    player.inventory.splice(inventoryIndex, 1, driedBreast);
                    print(`<span style="color: #888;">「${breast.name}」已变为「${driedBreast.name}」。</span>`);
                }
            }
        }
    } else {
        print("榨奶失败了...");
    }
    
    // 更新物品栏
    showInventoryPanel();
}

// 使用榨奶器榨精
function useMilkerForSemen(milkerId) {
    const room = gameState.world[gameState.player.location];
    if (!room || !room.items || !room.items.includes(milkerId)) {
        print("榨奶器已不存在。");
        return;
    }
    
    // 检查背包中是否有可榨精的战马阴茎
    const player = gameState.player;
    const semenableItems = [];
    
    player.inventory.forEach((item, index) => {
        if (item && item.id === 'warhorse_penis') {
            semenableItems.push({ item, index });
        }
    });
    
    if (semenableItems.length === 0) {
        print("");
        print(`<span style="color: #ffddaa;">═══════════════════════════</span>`);
        print(`<span style="color: #ff88cc;">榨精器静静地放在台面上...</span>`);
        print(`<span style="color: #888;">你翻遍了背包，但没有找到可以榨精的战马阴茎。</span>`);
        print(`<span style="color: #666;">（提示：肢解骑士战马获得的阴茎可以用榨奶器榨精）</span>`);
        print(`<span style="color: #ffddaa;">═══════════════════════════</span>`);
        return;
    }
    
    // 显示榨精菜单
    let html = '';
    html += makeTitle('💦 榨精器');
    html += `<div style="color: #888; margin-bottom: 10px;">榨精器准备就绪，请选择要榨精的战马阴茎：</div>`;
    html += centerLine();
    
    semenableItems.forEach(({ item, index }) => {
        html += `<div style="margin: 10px 0; padding: 10px; background: #2a2a2a; border-radius: 4px; border-left: 3px solid #ff88cc;">
               <div style="color: #ff88cc; font-weight: bold; font-size: 14px; margin-bottom: 6px;">💦 ${item.name}</div>
               <div style="color: #888; font-size: 12px; margin-bottom: 8px;">产出：骑士战马精液</div>
               <div style="margin-top: 6px;">
                   <span style="color: #ff88cc; text-decoration: underline; cursor: pointer; padding: 4px 8px; background: #3a2a3a; border-radius: 3px;" onclick="startSemenProcess(${index})">💦 开始榨精</span>
               </div>
              </div>`;
    });
    
    html += centerLine();
    html += `<div style="color: #aaa; cursor: pointer; margin-top: 10px;" onclick="clearDetailPanel()">↩️ 返回</div>`;
    
    // 更新详情栏
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = html;
    }
    currentPanel = 'semening_menu';
}

// 开始榨精过程
function startSemenProcess(inventoryIndex) {
    const player = gameState.player;
    const penis = player.inventory[inventoryIndex];
    
    if (!penis || penis.id !== 'warhorse_penis') {
        print("该物品无法榨精。");
        return;
    }
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 显示榨精开始
    print(`<span style="color: #ff88cc;">═══════════════════════════</span>`);
    print(`<span style="color: #ff88cc;">你将「${penis.name}」放入榨精器...</span>`);
    print(`<span style="color: #ff88cc;">═══════════════════════════</span>`);
    print("");
    
    // 榨精剧情
    const semenStory = [
        "机器发出低沉的嗡鸣，模拟的按摩装置开始运作。",
        "战马的阴茎在机械刺激下逐渐充血勃起...",
        "榨精器的节奏性收缩、放松，模拟着母马的感受...",
        "很快，第一股精液被挤压出来——乳白色的液体带着浓烈的雄性气息，从接口处喷射而出，流入收集瓶里。",
        "精液量相当丰沛，一股一股地喷溅，榨精器持续工作了十几分钟..."
    ];
    
    // 逐行输出榨精剧情（点击Next驱动）
    let lineIndex = 0;
    function printNextLine() {
        if (lineIndex < semenStory.length) {
            print("<br>");
            print(`<span style="color: #ff88cc;">${semenStory[lineIndex]}</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
            lineIndex++;
            showNextBtn(printNextLine);
        } else {
            hideNextBtn();
            // 剧情输出完毕，完成榨精
            completeSemen(penis, inventoryIndex);
        }
    }
    
    // 开始逐行输出
    printNextLine();
}

// 完成榨精
function completeSemen(penis, inventoryIndex) {
    const player = gameState.player;
    
    // 生成精液物品
    const semenItem = createItemFromTemplate('knight_semen');
    if (semenItem) {
        player.inventory.push(semenItem);
        
        print("");
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        print(`<span style="color: #ff88cc; font-weight: bold;">💦 榨精完成！</span>`);
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        print("");
        print(`<span style="color: #ffdd44;">获得了「${semenItem.name}」！</span>`);
        print(`<span style="color: #888;">「${penis.name}」依然保持着完整的形态。</span>`);
    } else {
        print("榨精失败了...");
    }
    
    // 更新物品栏
    showInventoryPanel();
}

// 使用尸体（互动）
function useCorpse(itemId) {
    const item = findItemById(itemId);
    if (!item) {
        print("该物品不在行囊中，无法使用。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`你靠近了「${item.name}」...`);
    print("<br>");
    
    // 获取尸体剧情（数据源：items.js 中的 corpseStory 字段）
    const story = item.corpseStory;
    if (!story || story.length === 0) {
        print(`<span style="color: #888;">你与「${item.name}」的互动没有特别的事情发生。</span>`);
        return;
    }
    
    // 显示遮罩，封锁所有交互
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    // 逐行输出尸体剧情（点击Next驱动）
    let lineIndex = 0;
    function showNextCorpseLine() {
        if (lineIndex < story.length) {
            print("<br>");
            print(`<span style="color: #c444ff;">${story[lineIndex]}</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
            lineIndex++;
            showNextBtn(showNextCorpseLine);
        } else {
            hideNextBtn();
            // 全部显示完毕后关闭遮罩
            if (overlay) overlay.classList.remove('active');
            print("");
            print(`<span style="color: #888;">互动结束...</span>`);
        }
    }
    showNextCorpseLine();
}

// 在场景中直接使用尸体（互动）
function useCorpseOnGround(itemId) {
    const loc = gameState.player.location;
    const room = gameState.world[loc];
    if (!room || !room.items || !room.items.includes(itemId)) {
        print("该尸体已不在此处。");
        return;
    }
    
    const item = getItemInfoById(itemId);
    if (!item) {
        print("找不到该尸体信息。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`你靠近了地上的「${item.name}」...`);
    print("<br>");
    
    // 获取尸体剧情（数据源：items.js 中的 corpseStory 字段）
    const story = item.corpseStory;
    if (!story || story.length === 0) {
        print(`<span style="color: #888;">你与「${item.name}」的互动没有特别的事情发生。</span>`);
        return;
    }
    
    // 显示遮罩，封锁所有交互
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    // 逐行输出尸体剧情（点击Next驱动）
    let lineIndex = 0;
    function showNextCorpseLine() {
        if (lineIndex < story.length) {
            print("<br>");
            print(`<span style="color: #ff66aa;">${story[lineIndex]}</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
            lineIndex++;
            showNextBtn(showNextCorpseLine);
        } else {
            hideNextBtn();
            // 全部显示完毕后关闭遮罩
            if (overlay) overlay.classList.remove('active');
            print("");
            print(`<span style="color: #888;">互动结束...</span>`);
        }
    }
    showNextCorpseLine();
}

// 统计地面上同名物品的数量
function countSameItemsOnGround(itemName) {
    const loc = gameState.player.location;
    const room = gameState.world[loc];
    if (!room || !room.items) {
        return 0;
    }
    
    let count = 0;
    room.items.forEach(id => {
        const item = getItemInfoById(id);
        if (item && item.name === itemName) {
            count++;
        }
    });
    return count;
}

// 拾取地面上所有同名物品
function pickupAllSameItems(itemName) {
    const loc = gameState.player.location;
    const room = gameState.world[loc];
    if (!room || !room.items) {
        print("无法拾取。");
        return;
    }
    
    let count = 0;
    const itemsToPickup = [];
    
    room.items.forEach(id => {
        const item = getItemInfoById(id);
        if (item && item.name === itemName) {
            itemsToPickup.push(id);
        }
    });
    
    itemsToPickup.forEach(itemId => {
        const index = room.items.indexOf(itemId);
        if (index !== -1) {
            const item = getItemInfoById(itemId);
            if (item) {
                room.items.splice(index, 1);
                gameState.player.inventory.push(item);
                count++;
            }
        }
    });
    
    if (count > 0) {
        print(`<span style="color: #aaffaa;">你拾取了 ${count} 个「${itemName}」。</span>`);
        updateSceneInfo();
        showInventoryPanel();
    } else {
        print("没有找到该物品。");
    }
}

// 拾取物品
function pickupItem(itemId) {
    const loc = gameState.player.location;
    const room = gameState.world[loc];
    if (!room || !room.items) {
        print("无法拾取。");
        return;
    }
    
    // 检查是否为不可拾取物品
    const unpickupableItems = ['stove', 'milker', 'mansion_gate_door', 'heavy_wooden_door', 'wooden_hut', 'hut_door', 'side_gate_door', 'dynamite'];
    if (unpickupableItems.includes(itemId) || itemId.includes('spiral_stairs') || itemId.includes('stairs_to_') || itemId.includes('randolph_statue') || itemId.includes('medium_wooden_door') || itemId === 'ladder_to_attic' || itemId === 'ladder_from_attic' || itemId === 'stairs_from_cellar' || itemId === 'stairs_to_hut_floor2' || itemId === 'stairs_to_hut_floor1' || itemId === 'stone_wall') {
        print(`<span style="color: #ff6666;">这个物品无法拾取。</span>`);
        return;
    }
    
    const index = room.items.indexOf(itemId);
    if (index === -1) {
        print("该物品已不存在。");
        return;
    }
    
    const item = getItemInfoById(itemId);
    if (!item) return;
    
    // 从房间移除
    room.items.splice(index, 1);
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    
    // 尸体拾取时自动搜刮
    if (itemId.includes('corpse')) {
        print(`你拾取了「${item.name}」。`);
        
        // 自动搜刮loot
        if (item.loot && item.loot.length > 0) {
            print(`从尸体上搜刮到了：`);
            item.loot.forEach(lootId => {
                const lootItem = createItemFromTemplate(lootId);
                if (lootItem) {
                    gameState.player.inventory.push(lootItem);
                    print(`✨ ${lootItem.name}`);
                }
            });
        }
        
        // 将尸体（已清空loot）加入背包，保留肢解功能
        const corpseCopy = JSON.parse(JSON.stringify(item));
        corpseCopy.loot = []; // 清空loot表示已搜刮
        gameState.player.inventory.push(corpseCopy);
        print(`「${item.name}」已放入行囊。`);
    } else {
        // 普通物品直接拾取
        gameState.player.inventory.push(JSON.parse(JSON.stringify(item)));
        print(`你拾取了「${item.name}」。`);
    }
    
    // 从房间物品模板中移除
    delete ITEM_TEMPLATES[itemId];
    
    // 更新周围可见框（物品列表已变化）
    updateSceneInfo();
}

// 全部拾取 - 一键拾取房间中所有可拾取物品
function pickupAllItems() {
    const loc = gameState.player.location;
    const room = gameState.world[loc];
    if (!room || !room.items || room.items.length === 0) {
        print("这里没有可拾取的物品。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    
    // 收集所有可拾取的物品（排除不可拾取的特殊物品）
    const itemsToPickup = [];
    const itemsToKeep = [];
    
    room.items.forEach(itemId => {
        const item = getItemInfoById(itemId);
        if (item) {
            // 不可拾取物品
            if (item.notPickable) {
                itemsToKeep.push(itemId);
            }
            // 木梯等特殊物品不可拾取（撤走的梯子、阁楼木梯可以拾取）
            else if (itemId.includes('ladder') && item.usable && item.customAction && itemId !== 'removed_ladder') {
                itemsToKeep.push(itemId);
            } else if (itemId === 'ladder_to_attic' || itemId === 'ladder_from_attic') {
                // 阁楼相关木梯不可拾取
                itemsToKeep.push(itemId);
            }
            // 雷管不可拾取，只能原地使用
            else if (itemId === 'dynamite') {
                itemsToKeep.push(itemId);
            }
            // 厚重的木门、中等木门不可拾取
            else if (itemId === 'heavy_wooden_door' || itemId.includes('medium_wooden_door')) {
                itemsToKeep.push(itemId);
            }
            // 旋转楼梯、楼梯不可拾取（包括酒窖楼梯）
            else if (itemId.includes('spiral_stairs') || itemId.includes('stairs_to_') || itemId.includes('stairs_from_cellar')) {
                itemsToKeep.push(itemId);
            }
            // 矿坑不可拾取
            else if (itemId.includes('mine_pit')) {
                itemsToKeep.push(itemId);
            }
            // 炉灶不可拾取
            else if (itemId === 'stove') {
                itemsToKeep.push(itemId);
            }
            // 工作台不可拾取
            else if (itemId === 'workbench') {
                itemsToKeep.push(itemId);
            }
            // 榨奶器不可拾取
            else if (itemId === 'milker') {
                itemsToKeep.push(itemId);
            }
            // 壁橱不可拾取
            else if (itemId === 'wardrobe') {
                itemsToKeep.push(itemId);
            }
            // 伯爵宅邸大门不可拾取
            else if (itemId === 'mansion_gate_door') {
                itemsToKeep.push(itemId);
            }
            // 木屋和木屋门不可拾取
            else if (itemId === 'wooden_hut' || itemId === 'hut_door') {
                itemsToKeep.push(itemId);
            }
            // 石壁不可拾取
            else if (itemId === 'stone_wall') {
                itemsToKeep.push(itemId);
            }
            else {
                itemsToPickup.push({ id: itemId, item: item });
            }
        }
    });
    
    if (itemsToPickup.length === 0) {
        print("这里没有可拾取的物品。");
        return;
    }
    
    print("你开始搜刮周围的一切...");
    print("");
    
    // 逐个拾取物品
    itemsToPickup.forEach(({ id, item }) => {
        // 尸体搜刮
        if (item.searchable && item.loot && item.loot.length > 0) {
            print(`搜刮「${item.name}」，获得了：`);
            item.loot.forEach(lootId => {
                const lootItem = createItemFromTemplate(lootId);
                if (lootItem) {
                    gameState.player.inventory.push(lootItem);
                    print(`  ✨ ${lootItem.name}`);
                }
            });
            delete ITEM_TEMPLATES[id];
        } else {
            // 普通物品直接拾取
            gameState.player.inventory.push(JSON.parse(JSON.stringify(item)));
            print(`✨ 拾取了「${item.name}」`);
        }
    });
    
    // 更新房间物品列表（保留不可拾取的物品）
    room.items = itemsToKeep;
    
    print("");
    print(`共拾取了 ${itemsToPickup.length} 件物品。`);
    
    // 更新周围可见框
    updateSceneInfo();
}

// 从背包中搜刮尸体
function lootCorpseFromInventory(corpseId) {
    const inv = gameState.player.inventory;
    const index = inv.findIndex(item => item.id === corpseId);
    if (index === -1) {
        print("该尸体不在行囊中。");
        return;
    }
    
    const corpse = inv[index];
    if (!corpse.loot || corpse.loot.length === 0) {
        print("这具尸体已经被搜刮过了。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`你搜刮了「${corpse.name}」，获得了：`);
    corpse.loot.forEach(lootId => {
        const lootItem = createItemFromTemplate(lootId);
        if (lootItem) {
            gameState.player.inventory.push(lootItem);
            print(`✨ ${lootItem.name}`);
        }
    });
    
    // 清空尸体的loot，标记为已搜刮
    corpse.loot = [];
    print("");
    print(`「${corpse.name}」已被搜刮完毕。`);
    
    // 更新物品栏面板
    showInventoryPanel();
}

// 根据尸体ID查找对应的肢解模板（优先从角色模板读取）
function getLimbTemplatesForCorpse(corpseId) {
    // 遍历所有角色模板（主世界 + 模组），查找匹配的limbTemplates
    const allTemplates = { ...CHARACTER_TEMPLATES };
    // 合并模组角色模板
    if (typeof MOD_CHARACTER_TEMPLATES !== 'undefined') {
        Object.assign(allTemplates, MOD_CHARACTER_TEMPLATES);
    }
    
    // 按charId长度降序排列，优先匹配最长（最具体）的名称
    // 例如 "liana_wounded" 应优先于 "liana" 匹配
    const sortedEntries = Object.entries(allTemplates)
        .filter(([charId, charData]) => charData.limbTemplates && corpseId.includes(charId))
        .sort((a, b) => b[0].length - a[0].length);
    
    if (sortedEntries.length > 0) {
        return sortedEntries[0][1].limbTemplates;
    }
    
    // 如果没有匹配到，返回空数组
    return [];
}

// 从背包中肢解尸体 - 显示选择界面
function dismemberCorpseFromInventory(corpseId) {
    const inv = gameState.player.inventory;
    const index = inv.findIndex(item => item.id === corpseId);
    if (index === -1) {
        print("该尸体不在行囊中。");
        return;
    }
    
    const corpse = inv[index];
    if (!corpse.dismemberable) {
        print("这具尸体无法被肢解。");
        return;
    }
    
    // 自动搜刮：如果尸体还未搜刮，先执行搜刮
    if (corpse.loot && corpse.loot.length > 0) {
        print(`你搜刮了「${corpse.name}」，获得了：`);
        corpse.loot.forEach(lootId => {
            const lootItem = createItemFromTemplate(lootId);
            if (lootItem) {
                gameState.player.inventory.push(lootItem);
                print(`✨ ${lootItem.name}`);
            }
        });
        corpse.loot = [];
        print(`「${corpse.name}」已被搜刮完毕。`);
        print("");
    }
    
    // 清空详情栏
    clearDetailPanel();
    
    // 从角色模板读取肢体模板
    const limbTemplates = getLimbTemplatesForCorpse(corpseId);
    
    // 检查是否还有未肢解的肢体
    const hasRemainingLimbs = !corpse.dismemberedLimbs || limbTemplates.some(limb => !corpse.dismemberedLimbs.includes(limb.id));
    
    if (!hasRemainingLimbs) {
        print("这具尸体已经没有可以肢解的部位了。");
        return;
    }
    
    // 显示肢解选择界面（传入尸体对象以便后续更新）
    showDismemberPanel(corpse.name, limbTemplates, corpse, 'inventory');
}

// 显示肢解选择界面
function showDismemberPanel(corpseName, limbTemplates, corpseObj = null, source = 'inventory') {
    console.log('showDismemberPanel called', corpseName, corpseObj, source);
    const detailPanel = document.getElementById('detail-panel');
    let html = '';
    const dismemberedLimbs = corpseObj && corpseObj.dismemberedLimbs ? corpseObj.dismemberedLimbs : [];
    
    html += makeTitle('🔪 肢解选择');
    html += `<div style="color: #ff6b6b; margin-bottom: 10px;">选择要肢解下来的肢体：</div>`;
    html += `<div style="color: #888; font-size: 12px; margin-bottom: 15px;">（点击勾选或取消，默认全选；灰色为已肢解部位）</div>`;
    
    // 显示肢体选择列表
    limbTemplates.forEach((limb, index) => {
        const isDismembered = dismemberedLimbs.includes(limb.id);
        const limbTemplate = ITEM_TEMPLATES[limb.id];
        const limbDisplayName = limbTemplate ? limbTemplate.name : limb.name;
        html += `<div style="margin: 8px 0; display: flex; align-items: center;">`;
        if (isDismembered) {
            html += `<input type="checkbox" id="limb_check_${index}" disabled style="margin-right: 8px; opacity: 0.5;">`;
            html += `<label for="limb_check_${index}" style="color: #888;">`;
            html += `<span style="color: #666;">${limb.name} ✓</span>`;
        } else {
            html += `<input type="checkbox" id="limb_check_${index}" checked style="margin-right: 8px;">`;
            html += `<label for="limb_check_${index}" style="color: #fff;">`;
            html += `<span style="color: #ffaa66;">${limb.name}</span>`;
        }
        html += ` (${limb.count}个)`;
        html += `</label>`;
        html += `</div>`;
    });
    
    html += centerLine();
    
    // 全选/取消全选按钮
    html += `<div style="margin-bottom: 10px;">`;
    html += `<span style="color: #aaffaa; text-decoration: underline; cursor: pointer; margin-right: 20px;" onclick="toggleAllLimbCheckboxes(true)">✅ 全选</span>`;
    html += `<span style="color: #ff8888; text-decoration: underline; cursor: pointer;" onclick="toggleAllLimbCheckboxes(false)">❌ 取消全选</span>`;
    html += `</div>`;
    
    // 确认和返回按钮
    html += `<div style="display: flex; justify-content: space-between;">`;
    html += `<span style="color: #aaa; cursor: pointer;" onclick="cancelDismember()">↩️ 返回</span>`;
    
    // 保存尸体对象引用到全局变量以便确认函数使用
    window.currentDismemberCorpse = corpseObj;
    window.currentDismemberSource = source;
    window.currentDismemberLimbTemplates = limbTemplates;
    window.currentDismemberCorpseName = corpseName;
    
    html += `<span id="confirm-dismember-btn" style="color: #ff6b6b; cursor: pointer; font-weight: bold;">🔪 确认肢解</span>`;
    html += `</div>`;
    
    detailPanel.innerHTML = html;
    
    // 添加点击事件监听器
    document.getElementById('confirm-dismember-btn').addEventListener('click', function() {
        confirmDismember(window.currentDismemberCorpseName, window.currentDismemberLimbTemplates);
    }, { once: true });
    
    currentPanel = 'dismember';
}

// 切换全选状态
function toggleAllLimbCheckboxes(check) {
    const checkboxes = document.querySelectorAll('[id^="limb_check_"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = check;
    });
}

// 取消肢解
function cancelDismember() {
    clearDetailPanel();
    showInventoryPanel();
}

// 确认肢解
function confirmDismember(corpseName, limbTemplates) {
    console.log('confirmDismember called', corpseName);
    console.log('limbTemplates:', limbTemplates);
    
    // 收集选中的肢体（在清空详情面板之前）
    const selectedLimbs = [];
    const selectedLimbIds = []; // 用于记录已肢解的肢体
    limbTemplates.forEach((limb, index) => {
        const checkbox = document.getElementById(`limb_check_${index}`);
        console.log(`checkbox ${index}:`, checkbox ? checkbox.checked : 'not found');
        if (checkbox && checkbox.checked) {
            for (let i = 0; i < limb.count; i++) {
                selectedLimbs.push(limb.id);
            }
            selectedLimbIds.push(limb.id); // 用于记录已肢解的肢体
        }
    });
    console.log('selectedLimbs:', selectedLimbs);
    console.log('selectedLimbIds:', selectedLimbIds);
    
    if (selectedLimbs.length === 0) {
        print("请至少选择一个肢体。");
        return;
    }
    
    // 获取当前尸体对象和来源
    const corpseObj = window.currentDismemberCorpse;
    const source = window.currentDismemberSource;
    console.log('corpseObj:', corpseObj, 'source:', source);
    
    // 计算剩余的肢体类型数量
    const currentRemainingTypes = corpseObj && corpseObj.dismemberedLimbs ? 
        limbTemplates.filter(limb => !corpseObj.dismemberedLimbs.includes(limb.id)) : [...limbTemplates];
    const remainingTypesAfterThis = currentRemainingTypes.filter(limb => !selectedLimbIds.includes(limb.id)).length;
    console.log('currentRemainingTypes:', currentRemainingTypes.length, 'selectedLimbIds:', selectedLimbIds, 'remainingTypesAfterThis:', remainingTypesAfterThis);
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`你将「${corpseName}」肢解...`);
    print("");
    
    // 显示遮罩，封锁所有交互
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    let limbIndex = 0;
    
    console.log('Starting spawnNextLimb', selectedLimbs);
    
    function spawnNextLimb() {
        console.log('spawnNextLimb called, limbIndex:', limbIndex, 'selectedLimbs.length:', selectedLimbs.length);
        if (limbIndex < selectedLimbs.length) {
            const limbTemplateId = selectedLimbs[limbIndex];
            console.log('Creating limb:', limbTemplateId);
            const limbItem = createItemFromTemplate(limbTemplateId);
            console.log('limbItem:', limbItem);
            if (limbItem) {
                if (source === 'inventory') {
                    // 背包里的尸体：肢体放入背包
                    gameState.player.inventory.push(limbItem);
                    print(`✨ 获得了 ${limbItem.name}`);
                } else {
                    // 地面上的尸体：肢体生成到当前房间
                    const limbId = `${limbTemplateId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                    limbItem.id = limbId;
                    const loc = gameState.player.location;
                    const room = gameState.world[loc];
                    if (room && room.items) {
                        room.items.push(limbId);
                        ITEM_TEMPLATES[limbId] = limbItem;
                    }
                    print(`✨ ${limbItem.name} 掉落在地上`);
                }
            } else {
                print(`<span style="color: #ff6666;">错误：无法创建肢体 ${limbTemplateId}</span>`);
            }
            limbIndex++;
            setTimeout(spawnNextLimb, 800);
        } else {
            // 记录已肢解的肢体到尸体对象
            if (corpseObj) {
                if (!corpseObj.dismemberedLimbs) {
                    corpseObj.dismemberedLimbs = [];
                }
                selectedLimbIds.forEach(limbId => {
                    if (!corpseObj.dismemberedLimbs.includes(limbId)) {
                        corpseObj.dismemberedLimbs.push(limbId);
                    }
                });
                
                // 关闭尸体的互动功能
                delete corpseObj.corpseStory;
                delete corpseObj.usable;
            }
            
            // 检查是否只剩最后一种肢体，如果是则将尸体转化为该肢体
            if (corpseObj && remainingTypesAfterThis === 1) {
                // 找到剩余的那个肢体
                const remainingLimb = limbTemplates.find(limb => !corpseObj.dismemberedLimbs.includes(limb.id));
                if (remainingLimb) {
                    print(`<br><span style="color: #ff8866;">尸体已经被肢解得只剩下 ${remainingLimb.name} 了...</span>`);
                    
                    if (source === 'inventory') {
                        // 从背包移除尸体，添加肢体
                        const inventoryIndex = gameState.player.inventory.indexOf(corpseObj);
                        if (inventoryIndex !== -1) {
                            gameState.player.inventory.splice(inventoryIndex, 1);
                        }
                        // 根据count创建对应数量的肢体
                        for (let i = 0; i < remainingLimb.count; i++) {
                            const limbItem = createItemFromTemplate(remainingLimb.id);
                            if (limbItem) {
                                gameState.player.inventory.push(limbItem);
                            }
                        }
                        print(`<span style="color: #aaffaa;">尸体转化为了 ${remainingLimb.count} 个 ${remainingLimb.name}</span>`);
                    } else {
                        // 从地面移除尸体，添加肢体
                        const loc = gameState.player.location;
                        const room = gameState.world[loc];
                        if (room && room.items) {
                            const itemIndex = room.items.indexOf(corpseObj.id);
                            if (itemIndex !== -1) {
                                room.items.splice(itemIndex, 1);
                            }
                            // 根据count创建对应数量的肢体
                            for (let i = 0; i < remainingLimb.count; i++) {
                                const limbItem = createItemFromTemplate(remainingLimb.id);
                                if (limbItem) {
                                    const limbId = `${remainingLimb.id}_${Date.now()}_${i}_${Math.random().toString(36).substr(2, 9)}`;
                                    limbItem.id = limbId;
                                    room.items.push(limbId);
                                    ITEM_TEMPLATES[limbId] = limbItem;
                                }
                            }
                        }
                        print(`<span style="color: #aaffaa;">尸体转化为了 ${remainingLimb.count} 个 ${remainingLimb.name}</span>`);
                    }
                }
            }
            
            if (source === 'inventory') {
                print(`<br><span style="color: #888;">肢解完成，选中的部位已放入行囊。</span>`);
                if (overlay) overlay.classList.remove('active');
                showInventoryPanel();
            } else {
                print(`<br><span style="color: #888;">肢解完成，选中的部位掉落在地上。</span>`);
                if (overlay) overlay.classList.remove('active');
                updateSceneInfo();
            }
        }
    }
    
    spawnNextLimb();
}

// 地面尸体搜刮（不移除尸体，只获取loot）
function lootCorpse(itemId) {
    const item = ITEM_TEMPLATES[itemId];
    if (!item) {
        print("该物品已不存在。");
        return;
    }
    
    if (!item.loot || item.loot.length === 0) {
        print("这具尸体已经被搜刮过了。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`你搜刮了「${item.name}」，获得了：`);
    item.loot.forEach(lootId => {
        const lootItem = createItemFromTemplate(lootId);
        if (lootItem) {
            gameState.player.inventory.push(lootItem);
            print(`✨ ${lootItem.name}`);
        }
    });
    
    // 清空尸体的loot，标记为已搜刮
    item.loot = [];
    print("");
    print(`「${item.name}」已被搜刮完毕。`);
    
    // 更新周围可见框
    updateSceneInfo();
}

// 背包里尸体搜刮
function lootCorpseFromInventory(itemId) {
    const item = findItemById(itemId);
    if (!item) {
        print("该物品不在行囊中。");
        return;
    }
    
    if (!item.loot || item.loot.length === 0) {
        print("这具尸体已经被搜刮过了。");
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`你搜刮了行囊里的「${item.name}」，获得了：`);
    item.loot.forEach(lootId => {
        const lootItem = createItemFromTemplate(lootId);
        if (lootItem) {
            gameState.player.inventory.push(lootItem);
            print(`✨ ${lootItem.name}`);
        }
    });
    
    // 清空尸体的loot，标记为已搜刮
    item.loot = [];
    print("");
    print(`「${item.name}」已被搜刮完毕。`);
    
    // 刷新背包面板
    showInventoryPanel();
}

// 肢解地面尸体 - 显示选择界面
function dismemberItem(itemId) {
    const item = ITEM_TEMPLATES[itemId];
    if (!item) {
        print("该物品已不存在。");
        return;
    }
    
    // 自动搜刮：如果尸体还未搜刮，先执行搜刮
    if (item.loot && item.loot.length > 0) {
        print(`你搜刮了「${item.name}」，获得了：`);
        item.loot.forEach(lootId => {
            const lootItem = createItemFromTemplate(lootId);
            if (lootItem) {
                gameState.player.inventory.push(lootItem);
                print(`✨ ${lootItem.name}`);
            }
        });
        item.loot = [];
        print(`「${item.name}」已被搜刮完毕。`);
        print("");
    }
    
    // 清空详情栏
    clearDetailPanel();
    
    // 从角色模板读取肢体模板
    const limbTemplates = getLimbTemplatesForCorpse(itemId);
    
    // 检查是否还有未肢解的肢体
    const hasRemainingLimbs = !item.dismemberedLimbs || limbTemplates.some(limb => !item.dismemberedLimbs.includes(limb.id));
    
    if (!hasRemainingLimbs) {
        print("这具尸体已经没有可以肢解的部位了。");
        return;
    }
    
    // 显示肢解选择界面（传入尸体对象以便后续更新）
    showDismemberPanel(item.name, limbTemplates, item, 'ground');
}

// 从地面物品详情页返回
function backToMainFromGroundItem() {
    clearDetailPanel();
    currentPanel = null;
    updateSceneInfo();
}

// ==================== NPC 系统 ====================

// 获取角色信息（从模板）
function getCharacterInfo(templateId) {
    return CHARACTER_TEMPLATES[templateId] || null;
}

// 显示NPC详情到详情栏
function showNPCInfo(npcId) {
    const npc = getCharacterInfo(npcId);
    if (!npc) {
        printToDetail("找不到该角色信息。");
        return;
    }
    
    let html = '';
    html += makeTitle(npc.name);
    html += `类型：${getCharacterTypeName(npc.type)}\n`;
    if (npc.desc) html += `\n<span style="color: #80e5ff;">${npc.desc}</span>\n`;
    
    html += centerLine();
    
    if (npc.canTalk && npc.dialogue) {
        const genderText = npc.gender === 'female' ? '她' : '他';
        html += `<div><span style="color: #aaffaa; text-decoration: underline; cursor: pointer;" onclick="talkToNPCAction('${npcId}')">💬 与${genderText}交谈</span></div>`;
    }
    
    if (npc.canFight) {
        html += `<div><span style="color: #ffaaaa; text-decoration: underline; cursor: pointer;" onclick="attackNPC('${npcId}')">⚔️ 攻击</span></div>`;
    }
    
    // 侵犯选项（仅对女性NPC）
    if (npc.gender === 'female') {
        html += `<div><span style="color: #ff66aa; text-decoration: underline; cursor: pointer;" onclick="assaultNPC('${npcId}')">🔞 侵犯</span></div>`;
    }
    
    // 屠宰选项（可屠宰的NPC）
    if (npc.canSlaughter) {
        html += `<div><span style="color: #ff8844; text-decoration: underline; cursor: pointer;" onclick="slaughterNPC('${npcId}')">🔪 屠宰</span></div>`;
    }
    
    // 榨精选项（可榨精的NPC）
    if (npc.canMilk) {
        html += `<div><span style="color: #ff88cc; text-decoration: underline; cursor: pointer;" onclick="milkNPC('${npcId}')">💦 榨精</span></div>`;
    }
    
    html += `<div><span style="color: #aaa; cursor: pointer;" onclick="clearDetailPanel()">↩️ 返回</span></div>`;
    
    // 保存当前NPC ID
    currentDetailNPC = npcId;
    
    // 更新详情栏
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = html;
    }
    
    currentPanel = 'npc_detail';
}

// 与NPC对话
function talkToNPCAction(npcId) {
    const npc = getCharacterInfo(npcId);
    if (!npc || !npc.dialogue) {
        print(`${npc.name} 似乎不想和你说话。`);
        return;
    }
    
    // 清空详情栏并切换回主面板
    clearDetailPanel();
    currentPanel = null;
    
    // 显示遮罩，封锁所有交互
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    // 判断是否是第一次对话
    const isFirstTime = !gameState.talkedNPCs[npcId];
    
    // 判断是否已被侵犯过
    const isAssaulted = gameState.assaultedNPCs && gameState.assaultedNPCs[npcId];
    
    // 使用逐行延时显示对话
    let lineIndex = 0;
    let dialogues;
    if (isAssaulted && npc.assaultedDialogue) {
        dialogues = npc.assaultedDialogue;
    } else if (isFirstTime) {
        dialogues = npc.dialogue;
    } else {
        dialogues = npc.repeatDialogue || npc.dialogue;
    }
    
    // 标记为已对话
    if (isFirstTime) {
        gameState.talkedNPCs[npcId] = true;
    }
    
    function showNextDialogue() {
        if (lineIndex < dialogues.length) {
            print("<br>");
            print(`<span style="color: #ff8844;">${dialogues[lineIndex]}</span>`);
            outputDiv.scrollTop = outputDiv.scrollHeight;
            lineIndex++;
            showNextBtn(showNextDialogue);
        } else {
            hideNextBtn();
            // 对话结束，隐藏遮罩
            if (overlay) overlay.classList.remove('active');
        }
    }
    
    showNextDialogue();
}

// ==================== 回合制战斗系统 ====================

// 当前战斗中的敌人实例（用于快速查找）
let currentBattleEnemies = {};

// 技能定义
const skills = {
    hatred: {
        name: "仇恨",
        description: "释放后本场战斗攻击力翻倍，灵巧降低至0，防御降低50%（本场战斗只能使用一次）",
        cost: 10,  // 消耗10技力
        effect: function() {
            // 检查是否已在本次战斗中使用过
            if (battleState.hatredUsed) {
                print(`<span style="color: #ffaaaa;">仇恨技能已经在本场战斗中使用过了！</span>`);
                // 退还技力
                gameState.player.sp += this.cost;
                return false;
            }
            
            // 标记为已使用
            battleState.hatredUsed = true;
            
            // 攻击力翻倍
            gameState.player.atk *= 2;
            // 灵巧降低至0
            gameState.player.agi = 0;
            // 防御降低50%
            gameState.player.def *= 0.5;
            
            print(`<span style="color: #ff6666;">你释放了技能「仇恨」！</span>`);
            print(`<span style="color: #ff6666;">你的攻击力翻倍，灵巧降低至0，防御降低50%！</span>`);
            return true;
        }
    }
};

// 使用技能
function useSkill(skillId) {
    if (!battleState.inBattle) {
        print(`<span style="color: #ffaaaa;">战斗外无法使用技能！</span>`);
        return;
    }
    
    const skill = skills[skillId];
    if (!skill) {
        print(`<span style="color: #ffaaaa;">技能不存在！</span>`);
        return;
    }
    
    const currentSp = gameState.player.sp || 0;
    if (currentSp < skill.cost) {
        print(`<span style="color: #ffaaaa;">技力不足！</span>`);
        return;
    }
    
    // 消耗技力
    gameState.player.sp = Math.floor(currentSp - skill.cost);
    
    // 执行技能效果
    skill.effect();
    
    // 重新显示技能按钮，更新技力显示
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        let skillsHtml = '<h3>技能</h3>';
        if (gameState.player.skills && gameState.player.skills.length > 0) {
            skillsHtml += '<div class="skill-buttons">';
            gameState.player.skills.forEach(sId => {
                const s = skills[sId];
                if (s) {
                    const skillCurrentSp = gameState.player.sp || 0;
                    const skillMaxSp = gameState.player.maxSp || 0;
                    const disabled = skillCurrentSp < s.cost ? 'disabled' : '';
                    skillsHtml += `
                        <button class="skill-button ${disabled}" onclick="useSkill('${sId}')" ${disabled}>
                            <span class="skill-name">${s.name}</span>
                            <span class="skill-cost">SP: ${s.cost} (${skillCurrentSp}/${skillMaxSp})</span>
                            <span class="skill-desc">${s.description}</span>
                        </button>
                    `;
                }
            });
            skillsHtml += '</div>';
        } else {
            skillsHtml += '<p>暂无技能</p>';
        }
        detailPanel.innerHTML = skillsHtml;
    }
    
    // 显示当前玩家状态
    const updatedSp = gameState.player.sp || 0;
    const maxSp = gameState.player.maxSp || 0;
    print(`<span style="color: #aaffaa;">你的 HP: ${gameState.player.hp}/${gameState.player.maxHp} SP: ${updatedSp}/${maxSp}</span>`);
    print("");
}

// 西侧矿道特殊剧情处理
function handleWestTunnelStory(roomId) {
    // 西侧矿道剧情房间列表 - 进入时立即锁死所有按键，防止玩家冲太快
    const storyRooms = ['tunnel_4_west_4', 'tunnel_4_west_5', 'tunnel_4_west_6', 'tunnel_4_west_7'];
    const overlay = document.getElementById('block-overlay');
    
    if (storyRooms.includes(roomId)) {
        // 立即显示遮罩，锁死所有按键
        if (overlay) overlay.classList.add('active');
    }
    
    // 西侧矿道4 - 剧情模式，提示玩家返回
    if (roomId === 'tunnel_4_west_4') {
        setTimeout(() => {
            const storyLines = [
                "有什么东西在注视着你...",
                "内心的声音：快回去..."
            ];
            
            let index = 0;
            function showNextLine() {
                if (index < storyLines.length) {
                    print(`<span class="story-text">${storyLines[index]}</span>`);
                    outputDiv.scrollTop = outputDiv.scrollHeight;
                    index++;
                    setTimeout(showNextLine, 1300);
                } else {
                    if (overlay) overlay.classList.remove('active');
                    print("");
                    print(`<span style="color: #ffaa66;">不安感笼罩着你，或许应该原路返回...</span>`);
                }
            }
            showNextLine();
        }, 1200);
    }
    
    // 西侧矿道5 - 更强烈的提示
    if (roomId === 'tunnel_4_west_5') {
        setTimeout(() => {
            const storyLines = [
                "心跳加速，冷汗滑落...",
                "那个声音：快回去！最后的机会！"
            ];
            
            let index = 0;
            function showNextLine() {
                if (index < storyLines.length) {
                    print(`<span class="story-text">${storyLines[index]}</span>`);
                    outputDiv.scrollTop = outputDiv.scrollHeight;
                    index++;
                    setTimeout(showNextLine, 1300);
                } else {
                    if (overlay) overlay.classList.remove('active');
                    print("");
                    print(`<span style="color: #ff6666;">恐惧如潮水般涌来：回去！回去！</span>`);
                }
            }
            showNextLine();
        }, 1200);
    }
    
    // 西侧矿道6 - 血色宝石房间剧情
    if (roomId === 'tunnel_4_west_6') {
        setTimeout(() => {
            const storyLines = [
                "幻听开始在脑海中回响...",
                "低语...嘶吼...诅咒...哭喊...狂笑...",
                "回来...太迟了...回来...",
                "染血宝石...它在...等待着..."
            ];
            
            let index = 0;
            function showNextLine() {
                if (index < storyLines.length) {
                    print(`<span class="story-text">${storyLines[index]}</span>`);
                    outputDiv.scrollTop = outputDiv.scrollHeight;
                    index++;
                    setTimeout(showNextLine, 1300);
                } else {
                    if (overlay) overlay.classList.remove('active');
                    print("");
                    print(`<span style="color: #ff6666;">理智几近崩溃，你勉强保持着清醒...</span>`);
                    print(`<span style="color: #aaffaa;">地上有一颗散发着血色光芒的宝石...</span>`);
                }
            }
            showNextLine();
        }, 1200);
    }
    
    // 西侧矿道7 - 强制死亡（遮罩不解除）
    if (roomId === 'tunnel_4_west_7') {
        setTimeout(() => {
            const storyLines = [
                "有什么东西进入了你的身体...",
                "它在吞噬你的意识...",
                "双眼变得血红..."
            ];
            
            let index = 0;
            function showNextLine() {
                if (index < storyLines.length) {
                    print(`<span class="story-text">${storyLines[index]}</span>`);
                    outputDiv.scrollTop = outputDiv.scrollHeight;
                    index++;
                    setTimeout(showNextLine, 1300);
                } else {
                    print("");
                    print(`<span style="color: #ff0000; font-size: 18px;">你成为了疯疫的傀儡。</span>`);
                    outputDiv.scrollTop = outputDiv.scrollHeight;
                    
                    // 强制死亡
                    setTimeout(() => {
                        print("");
                        print(`<span style="color: #ff6666;">【死亡】你的意识永远消失在了黑暗之中...</span>`);
                        print(`<span style="color: #aaa;">（游戏将重新开始...）</span>`);
                        setTimeout(() => {
                            location.reload();
                        }, 3000);
                    }, 2000);
                }
            }
            showNextLine();
        }, 1200);
    }
}

// 开始多敌人战斗（根据灵巧决定行动顺序）
function startMultiBattle(npcIds) {
    if (!npcIds || npcIds.length === 0) return;
    
    // 显示遮罩
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    // 先显示主界面内容
    if (mainContent) {
        outputDiv.innerHTML = mainContent;
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
    
    print("");
    print(`═══════ ⚔️ 战斗开始 ═══════`);
    
    // 初始化敌人数据
    const enemies = [];
    npcIds.forEach((npcId, index) => {
        const npc = getCharacterInfo(npcId);
        if (npc && npc.canFight) {
            // 为每个敌人创建独立实例（即使有相同ID）
            const enemyInstance = {
                index: index,
                npcId: npcId,
                name: npc.name,
                currentHp: npc.hp,
                maxHp: npc.hp,
                atk: npc.atk,
                def: npc.def,
                agi: getCharacterAgility(npc),
                drops: npc.drops ? [...npc.drops] : [],
                exp: npc.exp || 0
            };
            enemies.push(enemyInstance);
            
            // 显示敌人信息
            print(`<span style="color: #ffaaaa;">敌人${index + 1}: ${npc.name} (HP:${npc.hp} ATK:${npc.atk} DEF:${npc.def} AGI:${enemyInstance.agi})</span>`);
        }
    });
    
    // 回满技力
    gameState.player.sp = Math.floor(gameState.player.maxSp || 10);
    const currentSp = gameState.player.sp || 0;
    const maxSp = gameState.player.maxSp || 10;
    print(`<span style="color: #aaffaa;">你 (HP:${gameState.player.hp}/${gameState.player.maxHp} SP:${currentSp}/${maxSp} ATK:${getCharacterAttack(gameState.player)} DEF:${getCharacterDefense(gameState.player)} AGI:${getCharacterAgility(gameState.player)})</span>`);
    print("────────────────────────────────");
    
    // 显示技能按钮
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        let skillsHtml = '<h3>技能</h3>';
        if (gameState.player.skills && gameState.player.skills.length > 0) {
            skillsHtml += '<div class="skill-buttons">';
            gameState.player.skills.forEach(skillId => {
                const skill = skills[skillId];
                if (skill) {
                    skillsHtml += `
                        <button class="skill-button" onclick="useSkill('${skillId}')">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-cost">SP: ${skill.cost}</span>
                            <span class="skill-desc">${skill.description}</span>
                        </button>
                    `;
                }
            });
            skillsHtml += '</div>';
        } else {
            skillsHtml += '<p>暂无技能</p>';
        }
        detailPanel.innerHTML = skillsHtml;
    }
    
    // 初始化战斗状态
    battleState = {
        inBattle: true,
        enemies: enemies,
        round: 1,
        currentTurnIndex: 0,
        turnOrder: [],  // 将在calculateTurnOrder中计算
        hatredUsed: false,  // 重置仇恨技能使用状态
        originalPlayerStats: {  // 保存玩家原始属性
            atk: gameState.player.atk,
            def: gameState.player.def,
            agi: gameState.player.agi
        }
    };
    
    // 计算行动顺序并开始第一回合
    setTimeout(() => {
        startNewRound();
    }, 800);
}

// 计算行动顺序（按灵巧排序）
function calculateTurnOrder() {
    const playerAgi = getCharacterAgility(gameState.player);
    
    // 收集所有参战者及其灵巧值
    const participants = [];
    
    // 玩家
    participants.push({ type: 'player', agi: playerAgi });
    
    // 所有存活的敌人
    battleState.enemies.forEach((enemy, index) => {
        if (enemy.currentHp > 0) {
            participants.push({ type: 'enemy', index: index, agi: enemy.agi });
        }
    });
    
    // 按灵巧排序（高灵巧先行动）
    // 当灵巧相等时：玩家 vs 怪物（玩家先手），怪物 vs 怪物（随机）
    participants.sort((a, b) => {
        if (a.agi !== b.agi) {
            return b.agi - a.agi;  // 高灵巧在前
        }
        // 灵巧相等
        if (a.type === 'player' && b.type === 'enemy') {
            return -1;  // 玩家先于敌人
        }
        if (a.type === 'enemy' && b.type === 'player') {
            return 1;  // 敌人后于玩家
        }
        // 都是怪物，随机排序
        return Math.random() - 0.5;
    });
    
    return participants.map(p => p.type === 'player' ? 'player' : p.index);
}

// 开始新回合
function startNewRound() {
    if (!battleState.inBattle) return;
    
    // 检查是否还有存活的敌人
    const aliveEnemies = battleState.enemies.filter(e => e.currentHp > 0);
    if (aliveEnemies.length === 0) {
        battleEnd(true);
        return;
    }
    
    // 检查玩家是否存活
    if (gameState.player.hp <= 0) {
        battleEnd(false);
        return;
    }
    
    print(`<span style="color: #ffdd44;">═══════════════════════════</span>`);
    print(`<span style="color: #ffdd44;">【第${battleState.round}回合】</span>`);
    
    // 计算本回合行动顺序
    battleState.turnOrder = calculateTurnOrder();
    battleState.currentTurnIndex = 0;
    
    // 显示行动顺序预览
    const orderNames = battleState.turnOrder.map(target => {
        if (target === 'player') return '你';
        return battleState.enemies[target].name;
    });
    print(`<span style="color: #888;">行动顺序: ${orderNames.join(' → ')}</span>`);
    print("");
    
    // 显示技能按钮
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        let skillsHtml = '<h3>技能</h3>';
        if (gameState.player.skills && gameState.player.skills.length > 0) {
            skillsHtml += '<div class="skill-buttons">';
            gameState.player.skills.forEach(skillId => {
                const skill = skills[skillId];
                if (skill) {
                    const skillCurrentSp = gameState.player.sp || 0;
                    const skillMaxSp = gameState.player.maxSp || 0;
                    const disabled = skillCurrentSp < skill.cost ? 'disabled' : '';
                    skillsHtml += `
                        <button class="skill-button ${disabled}" onclick="useSkill('${skillId}')" ${disabled}>
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-cost">SP: ${skill.cost} (${skillCurrentSp}/${skillMaxSp})</span>
                            <span class="skill-desc">${skill.description}</span>
                        </button>
                    `;
                }
            });
            skillsHtml += '</div>';
        } else {
            skillsHtml += '<p>暂无技能</p>';
        }
        detailPanel.innerHTML = skillsHtml;
    }
    
    // 开始执行行动
    setTimeout(() => {
        executeNextTurn();
    }, 600);
}

// 执行下一个行动
function executeNextTurn() {
    if (!battleState.inBattle) return;
    
    // 检查战斗是否结束
    const aliveEnemies = battleState.enemies.filter(e => e.currentHp > 0);
    if (aliveEnemies.length === 0) {
        battleEnd(true);
        return;
    }
    if (gameState.player.hp <= 0) {
        battleEnd(false);
        return;
    }
    
    // 检查是否还有未行动的单位
    if (battleState.currentTurnIndex >= battleState.turnOrder.length) {
        // 本回合结束，进入下一回合
        battleState.round++;
        setTimeout(() => {
            startNewRound();
        }, 800);
        return;
    }
    
    const currentTarget = battleState.turnOrder[battleState.currentTurnIndex];
    battleState.currentTurnIndex++;
    
    if (currentTarget === 'player') {
        // 玩家回合
        executePlayerTurn();
    } else {
        // 敌人回合
        executeEnemyTurn(currentTarget);
    }
}

// 执行玩家回合
function executePlayerTurn() {
    if (!battleState.inBattle) return;
    
    // 检查玩家是否还存活
    if (gameState.player.hp <= 0) {
        battleEnd(false);
        return;
    }
    
    // 选择第一个存活的敌人攻击
    const aliveEnemies = battleState.enemies.filter(e => e.currentHp > 0);
    if (aliveEnemies.length === 0) {
        battleEnd(true);
        return;
    }
    
    // 自动攻击第一个存活的敌人
    const targetEnemy = aliveEnemies[0];
    const playerAtk = getCharacterAttack(gameState.player);
    const enemyDef = targetEnemy.def;
    const enemyAgi = targetEnemy.agi;
    
    print(`<span style="color: #aaffaa;">→ 你的回合</span>`);
    print(`你选择攻击 ${targetEnemy.name}！`);
    
    // 判定闪避
    if (tryDodge(enemyAgi)) {
        print(`你的攻击被 ${targetEnemy.name} 闪避了！`);
    } else {
        const damage = calculateDamage(playerAtk, enemyDef);
        targetEnemy.currentHp = Math.max(0, targetEnemy.currentHp - damage);
        print(`你对 ${targetEnemy.name} 造成 <span style="color: #ff6666;">${damage}</span> 点伤害！`);
    }
    
    // 检查敌人是否死亡
    if (targetEnemy.currentHp <= 0) {
        print(`<span style="color: #ff8888;">${targetEnemy.name} 倒下了！</span>`);
    } else {
        print(`<span style="color: #ff8888;">${targetEnemy.name} HP: ${targetEnemy.currentHp}/${targetEnemy.maxHp}</span>`);
    }
    
    // 显示当前玩家状态
    const currentSp = gameState.player.sp || 0;
    const maxSp = gameState.player.maxSp || 0;
    print(`<span style="color: #aaffaa;">你的 HP: ${gameState.player.hp}/${gameState.player.maxHp} SP: ${currentSp}/${maxSp}</span>`);
    print("");
    
    // 显示技能按钮
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        let skillsHtml = '<h3>技能</h3>';
        if (gameState.player.skills && gameState.player.skills.length > 0) {
            skillsHtml += '<div class="skill-buttons">';
            gameState.player.skills.forEach(skillId => {
                const skill = skills[skillId];
                if (skill) {
                    const skillCurrentSp = gameState.player.sp || 0;
                    const skillMaxSp = gameState.player.maxSp || 0;
                    const disabled = skillCurrentSp < skill.cost ? 'disabled' : '';
                    skillsHtml += `
                        <button class="skill-button ${disabled}" onclick="useSkill('${skillId}')" ${disabled}>
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-cost">SP: ${skill.cost} (${skillCurrentSp}/${skillMaxSp})</span>
                            <span class="skill-desc">${skill.description}</span>
                        </button>
                    `;
                }
            });
            skillsHtml += '</div>';
        } else {
            skillsHtml += '<p>暂无技能</p>';
        }
        detailPanel.innerHTML = skillsHtml;
    }
    
    // 执行下一个行动
    setTimeout(() => {
        executeNextTurn();
    }, 1200);
}

// 执行敌人回合
function executeEnemyTurn(enemyIndex) {
    if (!battleState.inBattle) return;
    
    const enemy = battleState.enemies[enemyIndex];
    
    // 检查敌人是否还存活
    if (!enemy || enemy.currentHp <= 0) {
        executeNextTurn();
        return;
    }
    
    // 检查玩家是否存活
    if (gameState.player.hp <= 0) {
        battleEnd(false);
        return;
    }
    
    const playerDef = getCharacterDefense(gameState.player);
    const playerAgi = getCharacterAgility(gameState.player);
    
    print(`<span style="color: #ffaaaa;">→ ${enemy.name} 的回合</span>`);
    print(`${enemy.name} 向你发起攻击！`);
    
    // 判定闪避
    if (tryDodge(playerAgi)) {
        print(`${enemy.name} 的攻击被你闪避了！`);
    } else {
        const damage = calculateDamage(enemy.atk, playerDef);
        gameState.player.hp = Math.max(0, gameState.player.hp - damage);
        print(`${enemy.name} 对你造成 <span style="color: #ff6666;">${damage}</span> 点伤害！`);
    }
    
    // 检查玩家是否死亡
    if (gameState.player.hp <= 0) {
        print(`<span style="color: #ff6666;">你倒下了...</span>`);
        setTimeout(() => battleEnd(false), 1000);
        return;
    }
    
    const currentSp = gameState.player.sp || 0;
    const maxSp = gameState.player.maxSp || 0;
    print(`<span style="color: #aaffaa;">你的 HP: ${gameState.player.hp}/${gameState.player.maxHp} SP: ${currentSp}/${maxSp}</span>`);
    print("");
    
    // 执行下一个行动
    setTimeout(() => {
        executeNextTurn();
    }, 1200);
}

// 开始战斗（玩家主动发起，单敌人）- 保持兼容性
function startBattle(npcId) {
    startMultiBattle([npcId]);
}

// 战斗结束
function battleEnd(playerWon) {
    battleState.inBattle = false;
    
    // 恢复玩家原始属性（仇恨技能的效果）
    if (battleState.originalPlayerStats) {
        gameState.player.atk = battleState.originalPlayerStats.atk;
        gameState.player.def = battleState.originalPlayerStats.def;
        gameState.player.agi = battleState.originalPlayerStats.agi;
        battleState.originalPlayerStats = null;
    }
    
    print(`<span style="color: #ffdd44;">═══════════════════════════</span>`);
    
    if (playerWon) {
        print(`<span style="color: #aaffaa;">【胜利！】你击败了所有敌人！</span>`);
        
        const room = gameState.world[gameState.player.location];
        let totalExp = 0;
        const defeatedEnemies = [];
        
        // 为每个击败的敌人生成尸体
        battleState.enemies.forEach((enemy, index) => {
            const npc = getCharacterInfo(enemy.npcId);
            if (!npc) return;
            
            defeatedEnemies.push(enemy.npcId);
            
            // 瑟蕾娜特殊处理：不生成尸体，化为紫雾消散，掉落物直接生成到地面
            if (enemy.npcId === 'serena') {
                print(`<span style="color: #cc66ff;">"既然如此，就送你个宝贝。"</span>`);
                print(`<span style="color: #cc66ff;">瑟蕾娜的身躯化为一团淡紫色的雾气，在空中消散。</span>`);
                print(`<span style="color: #cc66ff;">地面上只留下了一个闪闪发亮的宝石。</span>`);
                if (enemy.drops && enemy.drops.length > 0 && room) {
                    enemy.drops.forEach((dropId, dropIndex) => {
                        const dropItem = createItemFromTemplate(dropId);
                        if (dropItem) {
                            const dropItemId = `drop_${dropId}_${Date.now()}_${dropIndex}`;
                            dropItem.id = dropItemId;
                            ITEM_TEMPLATES[dropItemId] = dropItem;
                            if (!room.items) room.items = [];
                            room.items.push(dropItemId);
                        }
                    });
                }
                totalExp += enemy.exp;
                return; // 跳过后面的尸体生成逻辑
            }
            
            // 使用createCorpse统一生成尸体（模板映射和属性定义均在item.js中）
            const drops = enemy.drops ? [...enemy.drops] : [];
            const corpseId = `corpse_${enemy.npcId}_${Date.now()}_${index}`;
            const corpse = createCorpse(enemy.npcId, drops);
            corpse.id = corpseId; // 使用带索引的唯一ID
            
            // 尸体放到地上
            if (room) {
                if (!room.items) room.items = [];
                room.items.push(corpseId);
            }
            
            // 在物品模板中临时注册尸体
            ITEM_TEMPLATES[corpseId] = corpse;
            
            print(`<span style="color: #888;">${enemy.name}的尸体倒在地上...</span>`);
            
            // 累加经验值
            totalExp += enemy.exp;
        });
        
        // 获取经验值
        if (totalExp > 0) {
            print("");
            print(`<span style="color: #ffdd44;">获得 ${totalExp} 点经验值！</span>`);
            gameState.player.exp += totalExp;
            
            // 检查升级
            checkLevelUp();
        }
        
        // 从房间移除所有被击败的NPC
        if (room && room.npcs) {
            defeatedEnemies.forEach(npcId => {
                const index = room.npcs.indexOf(npcId);
                if (index > -1) {
                    room.npcs.splice(index, 1);
                }
            });
        }
        
        // 更新周围可见框
        updateSceneInfo();
    } else {
        print(`<span style="color: #ff6666;">【失败...】你被击败了。</span>`);
        print(`<span style="color: #aaa;">（游戏将重新开始...）</span>`);
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
    
    // 隐藏遮罩
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.remove('active');
    
    // 清空技能面板
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) {
        detailPanel.innerHTML = '<span style="color: #888;">点击物品或NPC查看详情...</span>';
    }
    currentPanel = null;
}

// 检查并处理升级
function checkLevelUp() {
    const player = gameState.player;
    
    while (player.exp >= player.maxExp) {
        // 扣除经验
        player.exp -= player.maxExp;
        
        // 升级
        player.level++;
        
        // 提升所有基础属性20%
        const multiplier = 1.2;
        player.maxHp = Math.floor(player.maxHp * multiplier);
        player.hp = player.maxHp;  // 回满血
        player.atk = player.atk * multiplier;
        player.def = player.def * multiplier;
        player.agi = player.agi * multiplier;
        
        // 每升一级增加2技力
        player.maxSp = Math.floor(player.maxSp + 2);
        player.sp = player.maxSp;  // 回满技力
        
        // 提升下一级所需经验20%
        player.maxExp = Math.floor(player.maxExp * multiplier);
        
        // 显示升级信息
        print("");
        print(`<span style="color: #ffdd44;">═══════════════════════════</span>`);
        print(`<span style="color: #ffdd44; font-weight: bold;">【升级！】等级提升至 ${player.level}！</span>`);
        print(`<span style="color: #aaffaa;">生命值上限: ${player.maxHp}</span>`);
        print(`<span style="color: #aaffaa;">攻击力: ${Math.floor(player.atk)}</span>`);
        print(`<span style="color: #aaffaa;">防御力: ${Math.floor(player.def)}</span>`);
        print(`<span style="color: #aaffaa;">技力上限: ${player.maxSp}</span>`);
        print(`<span style="color: #aaffaa;">灵巧: ${Math.floor(player.agi)}</span>`);
        print(`<span style="color: #ffdd44;">下一级所需经验: ${player.maxExp}</span>`);
        print(`<span style="color: #ffdd44;">═══════════════════════════</span>`);
    }
    
    // 显示当前经验进度
    print(`<span style="color: #888;">当前经验: ${player.exp}/${player.maxExp}</span>`);
}

// 屠宰NPC（可屠宰的动物类NPC）
function slaughterNPC(npcId) {
    const npc = getCharacterInfo(npcId);
    if (!npc || !npc.canSlaughter) {
        print("无法屠宰。");
        return;
    }
    
    const room = gameState.world[gameState.player.location];
    if (!room || !room.npcs || !room.npcs.includes(npcId)) {
        print("这里没有可以屠宰的目标。");
        return;
    }
    
    // 清空详情栏
    clearDetailPanel();
    currentPanel = null;
    
    print("");
    print(`<span style="color: #ff8844;">═══════════════════════════</span>`);
    print(`<span style="color: #ff8844;">你举起了屠刀...</span>`);
    print(`<span style="color: #ff8844;">═══════════════════════════</span>`);
    
    // 从房间移除NPC
    const npcIndex = room.npcs.indexOf(npcId);
    if (npcIndex > -1) {
        room.npcs.splice(npcIndex, 1);
    }
    
    // 根据NPC类型生成掉落物
    if (npcId === 'warhorse') {
        print(`<span style="color: #ffaaaa;">战马发出一声悲鸣，倒在了血泊中...</span>`);
        print("");
        
        // 在地上生成物品
        const penisItem = createItemFromTemplate('warhorse_penis');
        const meatItem = createItemFromTemplate('warhorse_meat');
        const headItem = createItemFromTemplate('warhorse_head');
        
        if (penisItem) {
            ITEM_TEMPLATES[penisItem.id] = penisItem;
            room.items.push(penisItem.id);
            print(`<span style="color: #aaffaa;">骑士战马的阴茎掉落在了地上。</span>`);
        }
        if (meatItem) {
            ITEM_TEMPLATES[meatItem.id] = meatItem;
            room.items.push(meatItem.id);
            print(`<span style="color: #aaffaa;">一大块马肉掉落在了地上。</span>`);
        }
        if (headItem) {
            ITEM_TEMPLATES[headItem.id] = headItem;
            room.items.push(headItem.id);
            print(`<span style="color: #aaffaa;">骑士战马的马头掉落在了地上。</span>`);
        }
        
        // 更新房间描述
        room.desc = "一间用粗木搭建的马厩，空气中弥漫着干草和马粪的气味。\n几间隔栏中铺着厚厚的稻草，食槽里还残留着干草和燕麦。\n最里面的隔栏中残留着大片血迹，一匹战马曾在这里被屠宰。\n东侧通往训练场。";
    } else {
        // 通用屠宰处理：生成尸体到地上
        print(`<span style="color: #ffaaaa;">${npc.name}倒在了血泊中...</span>`);
        
        // 生成尸体
        const corpseId = `corpse_${npcId}_${Date.now()}`;
        const corpseTemplate = ITEM_TEMPLATES[`${npcId}_corpse`];
        let corpse;
        
        if (corpseTemplate) {
            corpse = {
                id: corpseId,
                name: corpseTemplate.name,
                type: "misc",
                desc: corpseTemplate.desc,
                loot: npc.drops ? [...npc.drops] : [],
                dismemberable: true,
                usable: true,
                customAction: true,
                corpseStory: corpseTemplate.corpseStory || []
            };
        } else {
            corpse = {
                id: corpseId,
                name: `${npc.name}的尸体`,
                type: "misc",
                desc: "一具倒在血泊中的尸体。",
                loot: npc.drops ? [...npc.drops] : [],
                dismemberable: npc.dismemberable || false,
                usable: true,
                customAction: true
            };
        }
        
        room.items.push(corpseId);
        ITEM_TEMPLATES[corpseId] = corpse;
        print(`<span style="color: #aaffaa;">${npc.name}的尸体掉落在了地上。</span>`);
    }
    
    // 更新场景信息
    updateSceneInfo();
}

// 榨精NPC
function milkNPC(npcId) {
    // 清空详情栏
    clearDetailPanel();
    
    // 获取当前房间和NPC
    const room = gameState.world[gameState.player.location];
    const npc = getCharacterInfo(npcId);
    
    if (!npc) {
        print("该生物已不存在。");
        return;
    }
    
    // 特殊处理：骑士战马榨精
    if (npcId === 'warhorse') {
        print("");
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        print(`<span style="color: #ff88cc;">你走向了${npc.name}...</span>`);
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        print("");
        
        // 榨精剧情
        const semenStory = [
            "战马不安地踢着蹄子，但它似乎明白你的意图。",
            "你熟练地制服了这匹强壮的战马，它的阴茎逐渐显露...",
            "在机械般的刺激下，战马的阴茎逐渐充血勃起...",
            "很快，第一股精液被挤压出来——乳白色的液体带着浓烈的雄性气息，从接口处喷射而出，流入收集瓶里。",
            "精液量相当丰沛，一股一股地喷溅，榨精器持续工作了十几分钟..."
        ];
        
        // 逐行输出榨精剧情（点击Next驱动）
        let lineIndex = 0;
        function printNextLine() {
            if (lineIndex < semenStory.length) {
                // 替换文本中的变量
                let text = semenStory[lineIndex].replace('\${npc.name}', npc.name);
                print("<br>");
                print(`<span style="color: #ff88cc;">${text}</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
                lineIndex++;
                showNextBtn(printNextLine);
            } else {
                hideNextBtn();
                // 剧情输出完毕，完成榨精
                completeMilkNPC(npcId);
            }
        }
        
        // 开始逐行输出
        printNextLine();
    }
    else {
        print(`目前无法对${npc.name}进行榨精。`);
    }
}

// 完成榨精NPC
function completeMilkNPC(npcId) {
    // 生成精液物品
    const semenItem = createItemFromTemplate('knight_semen');
    if (semenItem) {
        gameState.player.inventory.push(semenItem);
        
        print("");
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        print(`<span style="color: #ff88cc; font-weight: bold;">💦 榨精完成！</span>`);
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        print("");
        print(`<span style="color: #ffdd44;">获得了「${semenItem.name}」！</span>`);
        print(`<span style="color: #888;">你成功从骑士战马身上榨取了精液。</span>`);
    } else {
        print("榨精失败了...");
    }
    
    // 更新物品栏
    showInventoryPanel();
}

// 攻击NPC（入口函数）
function attackNPC(npcId) {
    if (battleState.inBattle) {
        print(`<span style="color: #ffaaaa;">战斗中无法执行其他操作！</span>`);
        return;
    }
    
    // 清空详情栏
    clearDetailPanel();

    // 特殊处理：攻击见习骑士时，拉到石子路12所有见习骑士一起战斗
    if (npcId === 'apprentice_knight' && gameState.player.location === 'stone_road_12') {
        const room = gameState.world['stone_road_12'];
        if (room && room.npcs) {
            const knightCount = room.npcs.filter(id => id === 'apprentice_knight').length;
            if (knightCount > 1) {
                print("");
                print(`<span style="color: #ff6666;">你向其中一名见习骑士挥出攻击，另一名见习骑士立刻拔剑迎了上来！</span>`);
                print(`<span style="color: #ff6666;">两名见习骑士并肩作战，同时向你发起攻击！</span>`);
                startMultiBattle(['apprentice_knight', 'apprentice_knight']);
                return;
            }
        }
    }

    startBattle(npcId);
}

// 侵犯NPC
function assaultNPC(npcId) {
    if (battleState.inBattle) {
        print(`<span style="color: #ffaaaa;">战斗中无法执行其他操作！</span>`);
        return;
    }
    
    const npc = getCharacterInfo(npcId);
    if (!npc) {
        print("找不到该角色。");
        return;
    }
    
    // 仅对女性NPC有效
    if (npc.gender !== 'female') {
        print("目标不符合条件。");
        return;
    }
    
    // 清空详情栏
    clearDetailPanel();
    
    // 计算成功率：(玩家基础攻击力 - NPC基础攻击力) * 10%
    const playerAtk = gameState.player.atk || 1;
    const npcAtk = npc.atk || 1;
    const successRate = (playerAtk - npcAtk) * 10;
    
    // 限制成功率在5%-95%之间
    const finalRate = Math.max(5, Math.min(95, successRate));
    
    // 进行判定
    const roll = Math.random() * 100;
    
    if (roll < finalRate) {
        // 成功
        print("");
        print(`<span style="color: #ff66aa;">═══════════════════════════</span>`);
        print(`<span style="color: #ff66aa; font-weight: bold;">侵犯成功！</span>`);
        print(`<span style="color: #888;">成功率: ${finalRate.toFixed(1)}% (判定: ${roll.toFixed(1)} < ${finalRate.toFixed(1)})</span>`);
        print(`<span style="color: #ff66aa;">═══════════════════════════</span>`);
        print("");
        
        // 显示遮罩，封锁所有交互
        const overlay = document.getElementById('block-overlay');
        if (overlay) overlay.classList.add('active');
        
        // 获取NPC的侵犯剧情（数据源：character.js 中的 assaultStory 字段）
        const story = npc.assaultStory;
        if (!story || story.length === 0) {
            print(`<span style="color: #888;">侵犯结束，没有什么特别的事情发生。</span>`);
            if (overlay) overlay.classList.remove('active');
            return;
        }
        
        // 逐行输出侵犯剧情（点击Next驱动）
        let lineIndex = 0;
        function showNextAssaultLine() {
            if (lineIndex < story.length) {
                print("<br>");
                print(`<span style="color: #ff44e3;">${story[lineIndex]}</span>`);
                outputDiv.scrollTop = outputDiv.scrollHeight;
                lineIndex++;
                showNextBtn(showNextAssaultLine);
            } else {
                hideNextBtn();
                // 全部显示完毕后关闭遮罩
                if (overlay) overlay.classList.remove('active');
                print("");
                print(`<span style="color: #ff66aa;">侵犯结束...</span>`);
                
                // 标记NPC已被侵犯
                if (!gameState.assaultedNPCs) gameState.assaultedNPCs = {};
                gameState.assaultedNPCs[npcId] = true;
            }
        }
        showNextAssaultLine();
    } else {
        // 失败，进入战斗
        print("");
        print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
        print(`<span style="color: #ff4444; font-weight: bold;">侵犯失败！</span>`);
        print(`<span style="color: #888;">成功率: ${finalRate.toFixed(1)}% (判定: ${roll.toFixed(1)} ≥ ${finalRate.toFixed(1)})</span>`);
        print(`<span style="color: #ff4444;">═══════════════════════════</span>`);
        print("");
        // 显示挣脱剧情
        const genderText = npc.gender === 'female' ? '她' : '他';
        print(`<span style="color: #ffaaaa;">你试图制服${npc.name}，但${genderText}拼命挣扎，一记肘击狠狠地撞在你的腹部！</span>`);
        print(`<span style="color: #ff6666;">${npc.name} 挣脱了你的控制，眼神中充满了愤怒和杀意！</span>`);
        print(`<span style="color: #ff4444; font-weight: bold;">${npc.name} 想要杀死你！</span>`);
        print("");
        startBattle(npcId);
    }
}

// 从详情栏返回（不再需要，会自动返回）
function backToMainFromNPC() {
    clearDetailPanel();
    currentPanel = null;
}

// 主菜单相关函数
async function startGame() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    
    // 加载模组
    if (typeof ModLoader !== 'undefined') {
        await ModLoader.loadAllMods();
        ModLoader.applyToCharacters();
        ModLoader.applyToItems();
    }
    
    // 重新初始化游戏
    initializeGame();
}

async function loadGameFromMenu() {
    // 加载模组
    if (typeof ModLoader !== 'undefined') {
        await ModLoader.loadAllMods();
        ModLoader.applyToCharacters();
        ModLoader.applyToItems();
    }
    
    if (await loadGame()) {
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('game-container').style.display = 'flex';
    }
}

function exitGame() {
    if (confirm("确定要退出游戏吗？")) {
        window.close();
    }
}

// 返回主菜单
function backToMainMenu() {
    document.getElementById('main-menu').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
}

// 初始化游戏
function initializeGame() {
    // 重置游戏状态
    gameState = getDefaultGameState();
    battleState = JSON.parse(JSON.stringify(DEFAULT_BATTLE_STATE));
    currentPanel = null;
    currentDetailItem = null;
    currentDetailNPC = null;
    
    // 清空输出窗口
    clearOutput();

    // 触发开场动画和取名环节
    look();
    
    // 更新UI
    updateMinimap();
    updateSceneInfo();
    
    // 重新聚焦输入框
    if (typeof cmdInput !== 'undefined') {
        cmdInput.focus();
    }
}

// 壁橱翻找功能
function searchWardrobe(itemId) {
    // 获取可选的辅料列表（不包括酒类）
    const availableIngredients = [
        "water", "mint", "oil", "salt", "star_anise", "cinnamon", "wild_pepper", 
        "vinegar", "rosemary", "bay_leaf", "soy_sauce", "black_pepper", 
        "olive_oil", "ginger", "scallion", "honey", "gelatin_sheet", "rose_petal", 
        "sugar", "egg", "milk", "vanilla_bean", "osmanthus", "cherry", "cream", 
        "nutmeg", "butter", "cheese", "red_date", "apple_wood_chips", "kelp", "lettuce",
        "lemon_juice", "wasabi_paste", "perilla_leaf", "thyme", "parsley"
    ];
    
    // 随机选择1-6个辅料
    const numItems = Math.floor(Math.random() * 6) + 1; // 1或2
    let foundItems = [];
    
    for (let i = 0; i < numItems; i++) {
        const randomIndex = Math.floor(Math.random() * availableIngredients.length);
        const item = availableIngredients[randomIndex];
        foundItems.push(item);
    }
    
    // 给玩家添加找到的物品
    foundItems.forEach(foundItem => {
        const item = createItemFromTemplate(foundItem);
        if (item) {
            gameState.player.inventory.push(item);
        }
    });
    
    // 显示结果
    let resultText = "你在壁橱里翻找了一番，找到了：";
    foundItems.forEach(item => {
        const itemInfo = getItemInfoById(item);
        if (itemInfo) {
            resultText += `\n- ${itemInfo.name}`;
        }
    });
    
    print(resultText);
    
    // 清除详情面板
    clearDetailPanel();
    
    // 更新场景信息
    updateSceneInfo();
}

// ==================== 落叶堆 / 地道 / 传送阵 ====================

// 扫开落叶堆，露出地道
function sweepLeafPile() {
    const loc = gameState.player.location;
    const room = gameState.world[loc];
    if (!room || !room.items) return;
    
    const leafIndex = room.items.findIndex(id => {
        const item = getItemInfoById(id);
        return item && item.id === 'leaf_pile';
    });
    if (leafIndex === -1) {
        print("这里没有落叶堆。");
        return;
    }
    
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 显示遮罩
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
    print(`<span style="color: #aaffaa;">你弯下腰，用力将厚厚的落叶堆推向两旁...</span>`);
    print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
    
    setTimeout(() => {
        // 移除落叶堆，添加地道入口
        room.items.splice(leafIndex, 1);
        const tunnelItem = createItemFromTemplate('tunnel_entrance');
        if (tunnelItem) {
            tunnelItem.id = 'tunnel_entrance';
            ITEM_TEMPLATES['tunnel_entrance'] = tunnelItem;
            room.items.push('tunnel_entrance');
        }
        
        // 更新房间描述
        room.desc = room.desc.replace(
            '地上堆积着厚厚的一层枯叶，看起来有些不自然。',
            '地上的落叶被你扫开，露出一个黑漆漆的地道入口。'
        );
        
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        print(`<span style="color: #aaffaa;">落叶被扫开了，露出一个隐蔽的地道入口！</span>`);
        print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
        
        if (overlay) overlay.classList.remove('active');
        updateSceneInfo();
        updateMinimap();
    }, 1500);
}

// 进入地道
function enterTunnel() {
    const loc = gameState.player.location;
    const room = gameState.world[loc];
    if (!room || !room.items) return;
    
    if (!room.items.includes('tunnel_entrance')) {
        print("这里没有地道入口。");
        return;
    }
    
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 显示遮罩
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
    print(`<span style="color: #aaffaa;">你小心翼翼地钻进了地道...</span>`);
    print(`<span style="color: #aaffaa;">═══════════════════════════</span>`);
    
    setTimeout(() => {
        // 传送到地下室
        gameState.player.location = 'basement';
        
        print("");
        print(`<span style="color: #aaffaa;">你来到了一间隐蔽的地下室...</span>`);
        
        if (overlay) overlay.classList.remove('active');
        look();
        updateMinimap();
        updateSceneInfo();
    }, 1500);
}

// 使用传送阵
function useTeleportCircle(itemId) {
    const loc = gameState.player.location;
    const room = gameState.world[loc];
    if (!room) return;
    
    // 判断是哪个传送阵
    const isBasement = loc === 'basement';
    const isModWorld = itemId === 'mod_teleport_circle';
    
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    print(`<span style="color: #6688ff;">═══════════════════════════</span>`);
    print(`<span style="color: #6688ff;">你走近传送阵，阵法中心的符文旋转得更快了...</span>`);
    print(`<span style="color: #6688ff;">═══════════════════════════</span>`);
    print("");
    
    if (isBasement) {
        // 地下室传送阵 - 显示已加载的mod列表
        const modList = ModLoader.getModList();
        
        if (modList.length === 0) {
            print(`<span style="color: #888;">传送阵微微发出光芒，但似乎没有连接到任何地方...</span>`);
            print(`<span style="color: #888;">（当前没有加载任何mod）</span>`);
            return;
        }
        
        print(`<span style="color: #6688ff;">传送阵感应到了以下维度的连接：</span>`);
        print("");
        
        const detailPanel = document.getElementById('detail-panel');
        let html = '';
        html += makeTitle('🌀 传送阵');
        html += `<div style="color: #6688ff; margin-bottom: 10px;">传送阵的符文闪烁着光芒，连接着以下mod世界：</div>`;
        html += centerLine();
        
        modList.forEach(mod => {
            // 找到mod的初始房间（连接到主世界的目标房间）
            const connections = ModLoader.modConnections;
            let entryRoom = null;
            for (const conn of connections) {
                // 任意连接都可以作为入口
                if (conn.targetRoom) {
                    entryRoom = conn;
                    break;
                }
            }
            
            const targetRoomName = entryRoom && gameState.world[entryRoom.targetRoom] 
                ? gameState.world[entryRoom.targetRoom].name 
                : '未知';
            
            html += `<div style="margin: 10px 0; padding: 10px; background: #1a1a2a; border-radius: 4px; border-left: 3px solid #6688ff;">`;
            html += `<div style="color: #88aaff; font-weight: bold; font-size: 14px; margin-bottom: 4px;">🌍 ${mod.name}</div>`;
            html += `<div style="color: #888; font-size: 12px; margin-bottom: 4px;">v${mod.version} - ${mod.author || '未知作者'}</div>`;
            html += `<div style="color: #aaa; font-size: 12px; margin-bottom: 8px;">${mod.description || '无描述'}</div>`;
            html += `<div style="margin-top: 6px;">`;
            // 找mod的入口房间
            const modRooms = Object.keys(ModLoader.mergedWorld);
            if (modRooms.length > 0) {
                const modEntryRoom = modRooms[0]; // 使用第一个房间作为入口
                html += `<span style="color: #6688ff; text-decoration: underline; cursor: pointer; padding: 4px 8px; background: #1a1a3a; border-radius: 3px;" onclick="teleportToMod('${modEntryRoom}')">🌀 传送前往</span>`;
            }
            html += `</div>`;
            html += `</div>`;
        });
        
        html += centerLine();
        html += `<div style="color: #aaa; cursor: pointer; margin-top: 10px;" onclick="clearDetailPanel()">↩️ 返回</div>`;
        
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'teleport_menu';
    } else if (isModWorld) {
        // mod世界传送阵 - 返回地下室
        const detailPanel = document.getElementById('detail-panel');
        let html = '';
        html += makeTitle('🌀 传送阵');
        html += `<div style="color: #6688ff; margin-bottom: 10px;">传送阵的符文闪烁着光芒，似乎可以将你传送回地下室...</div>`;
        html += centerLine();
        html += `<span style="color: #6688ff; text-decoration: underline; cursor: pointer; padding: 4px 8px; background: #1a1a3a; border-radius: 3px;" onclick="teleportToBasement()">🌀 传送回地下室</span>`;
        html += centerLine();
        html += `<div style="color: #aaa; cursor: pointer; margin-top: 10px;" onclick="clearDetailPanel()">↩️ 返回</div>`;
        
        if (detailPanel) {
            detailPanel.innerHTML = html;
        }
        currentPanel = 'teleport_menu';
    }
}

// 传送到mod世界
function teleportToMod(modRoomId) {
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 显示遮罩
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    print(`<span style="color: #6688ff;">═══════════════════════════</span>`);
    print(`<span style="color: #6688ff;">你踏入传送阵，符文爆发出耀眼的蓝色光芒...</span>`);
    print(`<span style="color: #6688ff;">═══════════════════════════</span>`);
    
    setTimeout(() => {
        // 传送到mod世界入口房间
        gameState.player.location = modRoomId;
        
        print(`<span style="color: #6688ff;">═══════════════════════════</span>`);
        print(`<span style="color: #aaffaa;">你来到了mod世界！</span>`);
        print(`<span style="color: #6688ff;">═══════════════════════════</span>`);
        
        if (overlay) overlay.classList.remove('active');
        look();
        updateMinimap();
        updateSceneInfo();
    }, 2000);
}

// 传送回地下室
function teleportToBasement() {
    clearDetailPanel();
    currentPanel = null;
    print("");
    
    // 显示遮罩
    const overlay = document.getElementById('block-overlay');
    if (overlay) overlay.classList.add('active');
    
    print(`<span style="color: #6688ff;">═══════════════════════════</span>`);
    print(`<span style="color: #6688ff;">你踏入传送阵，符文爆发出耀眼的蓝色光芒...</span>`);
    print(`<span style="color: #6688ff;">═══════════════════════════</span>`);

    setTimeout(() => {
        print(`<span class="story-text">光芒渐渐散去，熟悉的地下室出现在你面前。</span>`);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }, 2400);
    
    setTimeout(() => {
        gameState.player.location = 'basement';
        
        print(`<span style="color: #6688ff;">═══════════════════════════</span>`);
        print(`<span style="color: #aaffaa;">你回到了地下室！</span>`);
        print(`<span style="color: #6688ff;">═══════════════════════════</span>`);
        
        if (overlay) overlay.classList.remove('active');
        look();
        updateMinimap();
        updateSceneInfo();
    }, 3600);
}

// -------------------- 初始化 --------------------
window.onload = () => {
    // 如果存在主菜单元素，显示主菜单
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
        document.getElementById('game-container').style.display = 'none';
        mainMenu.style.display = 'block';
    } else {
        // 如果没有主菜单，则正常启动游戏
        look();
        updateMinimap();
        cmdInput.focus();
    }
};
