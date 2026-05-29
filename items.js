// ============================================================
//  物品数据库 - 所有物品的模板定义
//  修改这里的属性会影响新游戏和重置后的物品
// ============================================================

const ITEM_TEMPLATES = {
    // 武器
    pickaxe: {
        id: "pickaxe",
        name: "破镐头",
        type: "weapon",
        desc: "一把生锈的镐头，勉强能当武器。",
        atk: 4,
        agi: 2,
        slot: "weapon"
    },
    rusty_sword: {
        id: "rusty_sword",
        name: "生锈的铁剑",
        type: "weapon",
        desc: "剑刃布满锈迹，但总比空手强。",
        atk: 5,
        agi: 3,
        slot: "weapon"
    },
    broken_pickaxe: {
        id: "broken_pickaxe",
        name: "折断的镐头",
        type: "misc",
        desc: "一柄早已折断的镐头，木柄腐朽，铁头锈迹斑斑，显然已被遗弃多年。"
    },
    stick: {
        id: "iron_stick",
        name: "铁棍",
        type: "weapon",
        desc: "一根沉甸甸的铁棍，可以用来防身。",
        atk: 12,
        agi: 1,
        slot: "weapon"
    },
    
    // 防具
    leather_vest: {
        id: "leather_vest",
        name: "破皮背心",
        type: "armor",
        desc: "一件多处磨损的皮背心，提供微弱的防护。",
        def: 2,
        agi: 0,
        slot: "armor"
    },
    
    // 消耗品
    bread: {
        id: "bread",
        name: "干粮",
        type: "consumable",
        desc: "一块硬邦邦的黑面包，吃下去能恢复少许体力。",
        effect: "heal",
        value: 5
    },
    herb: {
        id: "herb",
        name: "止血草",
        type: "consumable",
        desc: "矿工们常用的草药，嚼碎敷在伤口上。",
        effect: "heal",
        value: 10
    },
    
    // 杂物
    tinder: {
        id: "tinder",
        name: "火折子",
        type: "misc",
        desc: "引火用的竹筒，在黑暗的矿道里或许有用。"
    },
    rag: {
        id: "rag",
        name: "破布",
        type: "misc",
        desc: "一块脏兮兮的破布，没什么用处。"
    },
    stone: {
        id: "stone",
        name: "石块",
        type: "misc",
        desc: "一块开采出的的石块，沉甸甸的。"
    },
    stone_wall: {
        id: "stone_wall",
        name: "石壁",
        type: "misc",
        desc: "一面粗糙的岩壁，上面布满了凿痕和裂缝。似乎可以挖掘出石块。",
        usable: true,
        customAction: true
    },
    leaf_pile: {
        id: "leaf_pile",
        name: "落叶堆",
        type: "misc",
        desc: "地上堆积着厚厚的一层枯叶，看起来有些不自然。\n似乎有人刻意用落叶掩盖了什么。",
        usable: true,
        customAction: true,
        notPickable: true
    },
    tunnel_entrance: {
        id: "tunnel_entrance",
        name: "地道",
        type: "misc",
        desc: "落叶被扫开后，露出一个黑漆漆的地道入口。\n一股潮湿的凉风从洞口涌出，隐约能听到水流的声音。",
        usable: true,
        customAction: true,
        notPickable: true
    },
    teleport_circle: {
        id: "teleport_circle",
        name: "传送阵",
        type: "misc",
        desc: "地面上刻着一个古老的魔法阵，散发着幽蓝色的光芒。\n阵法中心的符文不断旋转，似乎连接着某个未知的地方。",
        usable: true,
        customAction: true,
        notPickable: true
    },
    basement_ladder_up: {
        id: "basement_ladder_up",
        name: "木梯（上行）",
        type: "misc",
        desc: "一架通往森林的木梯，固定在地下室的天花板上。顺着它爬上去可以回到地面。",
        usable: true,
        customAction: true,
        notPickable: true
    },
    ladder: {
        id: "ladder",
        name: "木梯（上行）",
        type: "misc",
        desc: "一架通往地面的木梯，固定在矿道顶部。似乎需要搬够足够的石块作为「交代」才能离开...",
        usable: true,
        customAction: true
    },
    ladder_surface: {
        id: "ladder_surface",
        name: "木梯（下行）",
        type: "misc",
        desc: "一架通往地下的木梯，你可以顺着它回到矿道中。",
        usable: true,
        customAction: true
    },
    ladder_mine_exit_1: {
        id: "ladder_mine_exit_1",
        name: "木梯（下行）",
        type: "misc",
        desc: "一架通往地下的木梯，你可以顺着它进入一号矿道。",
        usable: true,
        customAction: true
    },
    ladder_1: {
        id: "ladder_1",
        name: "木梯（上行）",
        type: "misc",
        desc: "一架通往地面的木梯。",
        usable: true,
        customAction: true
    },
    ladder_mine_exit_3: {
        id: "ladder_mine_exit_3",
        name: "木梯（下行）",
        type: "misc",
        desc: "一架通往地下的木梯，你可以顺着它进入三号矿道。",
        usable: true,
        customAction: true
    },
    ladder_3: {
        id: "ladder_3",
        name: "木梯（上行）",
        type: "misc",
        desc: "一架通往地面的木梯。",
        usable: true,
        customAction: true
    },
    iron_ore: {
        id: "iron_ore",
        name: "铁矿石",
        type: "misc",
        desc: "一块暗红色的铁矿石，表面粗糙，沉甸甸的。"
    },
    rusty_tool: {
        id: "rusty_tool",
        name: "生锈的工具",
        type: "misc",
        desc: "一把早已锈迹斑斑的采矿工具，木柄腐朽，金属部分布满暗红色的锈迹。"
    },
    iron_lock: {
        id: "iron_lock",
        name: "铁锁",
        type: "misc",
        desc: "一把沉重的大铁锁，锁链缠绕在木板和铁丝网上，牢牢封锁着四号矿井口。锁身布满锈迹，看起来已经有些年头了。",
        usable: true,
        customAction: true
    },
    broken_lock: {
        id: "broken_lock",
        name: "被破开的铁锁",
        type: "misc",
        desc: "一把被破坏的大铁锁，锁身扭曲变形，锁梁被硬生生撬开，只剩下半截锁链无力地垂挂着。"
    },
    miners_cloth: {
        id: "miners_cloth",
        name: "矿工服",
        type: "armor",
        desc: "一件破旧的矿工服，满是补丁和汗渍。",
        def: 1,
        agi: 1,
        slot: "armor"
    },
    
    // 饰品
    blood_gem: {
        id: "blood_gem",
        name: "血色宝石",
        type: "accessory",
        desc: "一颗散发着诡异血色光芒的宝石，仿佛蕴含着某种邪恶的力量。据说这是疯疫的源头之一，佩戴它的人会获得超凡的敏捷，但生命力会被逐渐吞噬。",
        agi: 40,
        slot: "accessory",
        curse: true,  // 诅咒物品
        maxHpPercent: -0.4  // 减少40%最大生命值
    },
    
    // 读物（日记）
    diary1: {
        id: "diary1",
        name: "矿工日记·一",
        type: "readable",
        desc: "一本破旧的日记，封面上写着「桑华山矿场日志」。",
        content: [
            "『桑华山矿场日志』",
            "第一天：被押送到这鬼地方，监工说干满三年就放人。",
            "第三天：矿道塌方，死了两个人。没人管。",
            "第七天：听说北边有旧矿道可以通到山外……",
            "第十天：我决定今晚行动。如果我死了，希望有人能把这本日记带出去。"
        ]
    },
    
    // 尸体类（可拾取到背包，然后在背包中搜刮或肢解）
    corpse_miner: {
        id: "corpse_miner",
        name: "矿工的尸体",
        type: "misc",
        desc: "一个死去的矿工，脸上有一道醒目的疤痕，手里紧紧攥着什么东西。他的表情痛苦而决绝，仿佛临死前做出了什么重大的决定。可以拾取后在背包中搜刮。",
        loot: ["miner_note", "mine_exit_4_key"]
    },
    
    // 字条 - 关于疯疫的真相
    miner_note: {
        id: "miner_note",
        name: "染血的字条",
        type: "readable",
        desc: "一张皱巴巴的字条，上面沾着暗红色的血迹，字迹潦草但还能辨认。",
        content: [
            "『如果有人看到这张字条...』",
            "『西侧矿洞挖到了不该挖的东西。』",
            "『不知道是什么，但接触到它的人都疯了。』",
            "『眼睛变得血红，见人就杀...』",
            "『几乎所有工友都发狂了...』",
            "『我撤走了梯子，希望能挡住他们。』",
            "『已经用无线电通知了外面，让他们封锁矿洞。』",
            "『别让瘟疫蔓延出去...』",
            "『这是我唯一能做的了。』"
        ]
    },
    
    // 加急密令 - 搜刮特定尸体获得
    urgent_order: {
        id: "urgent_order",
        name: "加急密令",
        type: "readable",
        desc: "一封用火漆封口的正式公函，信封上印有王国王室的徽记，边缘烫着金边。火漆上的印章清晰可见，显示这是最高等级的机密文件。",
        usable: true,
        customAction: true,
        content: [
            "『致：桑华山矿场所有贵族人员』",
            "『发自：王国紧急事务委员会』",
            "『等级：绝密 · 加急』",
            "",
            "『王国已正式确认，桑华山四号矿坑爆发严重「疯疫」疫情。』",
            "『病原体来源不明，感染率接近百分之百，且无任何已知治愈方法。』",
            "『为防止疫情扩散至王国全境，委员会决定执行以下紧急措施：』",
            "",
            "『一、所有贵族人员须于接获此令后立即撤离矿场区域；』",
            "『二、平民、矿工及其他工作人员一律不得随贵族撤离；』",
            "『三、明日清晨，王国将派遣法师团对矿场进行大范围的净化术式；』",
            "『四、此次净化将无差别覆盖矿场所有区域，所有滞留人员将被视为已感染处理。』",
            "",
            "『望诸位贵族以王国大局为重，速速撤离。』",
            "『王国的决定虽然残酷，但这是为了防止更大的灾难。』",
            "",
            "『愿女神庇佑王国。』"
        ]
    },
    
    // 撤走的梯子 - 可以在四号矿道出口和四号矿井口之间双向传送
    removed_ladder: {
        id: "removed_ladder",
        name: "撤走的梯子",
        type: "misc",
        desc: "一架从其他矿道撤下来的木梯，虽然有些破旧但还能使用。据字条所说，这是为了封锁疯疫而撤走的。可以在四号矿道出口和四号矿井口之间来回传送。",
        usable: true,
        customAction: true
    },

    // 矿场侧门钥匙
    mine_side_key: {
        id: "mine_side_key",
        name: "矿场侧门钥匙",
        type: "important",
        desc: "一把黄铜制成的钥匙，上面刻着桑华山矿场的标记。据说可以打开矿场的侧门，那是逃离这座地狱的秘密通道之一。"
    },
    // 矿场大门钥匙
    mine_gate_key: {
        id: "mine_gate_key",
        name: "矿场大门钥匙",
        type: "important",
        desc: "一把沉重的铁钥匙，上面刻着桑华山矿场的徽记。这是矿场大门的钥匙，通常只有驻矿骑士的指挥官才拥有。"
    },
    // 四号矿井口铁锁钥匙
    mine_exit_4_key: {
        id: "mine_exit_4_key",
        name: "四号矿井口钥匙",
        type: "important",
        desc: "一把沾满血迹的铜钥匙，上面刻着四号矿井的标记。在北侧矿道一具矿工尸体手中发现的，或许可以用来打开四号矿井口的铁锁。"
    },
    // 男爵宅邸钥匙
    mansion_key: {
        id: "mansion_key",
        name: "男爵宅邸钥匙",
        type: "important",
        desc: "一把精致的银质钥匙，钥匙柄上雕刻着复杂的贵族纹章。这是进入桑华山男爵私人宅邸的唯一凭证。"
    },
    // 男爵宅邸大门（可交互，使用钥匙进入）
    mansion_gate_door: {
        id: "mansion_gate_door",
        name: "男爵宅邸大门",
        type: "misc",
        desc: "一座宏伟的石制大门，由厚重的橡木制成，表面镶嵌着铁艺花纹。需要使用男爵宅邸钥匙才能进入。",
        usable: true,
        customAction: true
    },
    // 兰德尔一世雕像（可推倒）
    randolph_statue: {
        id: "randolph_statue",
        name: "兰德尔一世雕像",
        type: "misc",
        desc: "雕像为超过真人两倍大小的青铜立像，底座用黑色花岗岩制成，底座正面刻着铭文：\n「维克多·兰德尔一世\n桑华山之主、矿场奠基者\n以铁与血铸就兰德尔荣耀」\n雕像姿态为站姿，左脚微微向前，右手高举矿镐权杖指向天空，左手按在腰间佩剑上，目光直视前方，表情冷酷而充满征服欲。斗篷被设计成被风吹起的动态效果，增加威严感。",
        usable: true,
        customAction: true,
        breakable: true,
        requiredDamage: 50
    },
    // 倒塌的兰德尔一世雕像
    randolph_statue_fallen: {
        id: "randolph_statue_fallen",
        name: "倒塌的兰德尔一世雕像",
        type: "misc",
        desc: "曾经威严的兰德尔一世雕像现在倒在草坪上，青铜身躯扭曲变形，矿镐权杖断裂在一旁。底座的花岗岩碎裂成几块，铭文依稀可辨，却再也无人敬畏。"
    },
    // 雷管
    dynamite: {
        id: "dynamite",
        name: "雷管",
        type: "misc",
        desc: "一捆用油纸包裹的雷管，旁边还有一段导火索。这是矿工用来爆破岩石的工具，威力足以炸开封堵的岩壁。",
        usable: true,
        customAction: true
    },
    // 侧门（可交互，使用钥匙传送到森林）
    side_gate_door: {
        id: "side_gate_door",
        name: "矿场侧门",
        type: "misc",
        desc: "一扇生锈的铁门，门上的油漆早已剥落。需要使用矿场侧门钥匙才能打开通往森林的秘密通道。",
        usable: true,
        customAction: true
    },
    // 厚重的木门（可破坏）
    heavy_wooden_door: {
        id: "heavy_wooden_door",
        name: "厚重的木门",
        type: "misc",
        desc: "一扇由厚重橡木制成的门，表面雕刻着精美的花纹。门锁看起来非常坚固，但也许可以用蛮力破坏...",
        usable: true,
        customAction: true
    },
    // 北侧旋转楼梯（一层→二层）
    spiral_stairs_north: {
        id: "spiral_stairs_north",
        name: "旋转楼梯（上行）",
        type: "misc",
        desc: "一座精美的螺旋形楼梯，扶手雕刻着复杂的花纹。楼梯盘旋向上，通往宅邸的二层。",
        usable: true,
        customAction: true
    },
    // 北侧旋转楼梯（二层→一层）
    spiral_stairs_north_2f: {
        id: "spiral_stairs_north_2f",
        name: "旋转楼梯（下行）",
        type: "misc",
        desc: "一座精美的螺旋形楼梯，扶手雕刻着复杂的花纹。楼梯盘旋向下，通往宅邸的一层。",
        usable: true,
        customAction: true
    },
    // 南侧旋转楼梯（一层→二层）
    spiral_stairs_south: {
        id: "spiral_stairs_south",
        name: "旋转楼梯（上行）",
        type: "misc",
        desc: "一座精美的螺旋形楼梯，扶手雕刻着复杂的花纹。楼梯盘旋向上，通往宅邸的二层。",
        usable: true,
        customAction: true
    },
    // 南侧旋转楼梯（二层→一层）
    spiral_stairs_south_2f: {
        id: "spiral_stairs_south_2f",
        name: "旋转楼梯（下行）",
        type: "misc",
        desc: "一座精美的螺旋形楼梯，扶手雕刻着复杂的花纹。楼梯盘旋向下，通往宅邸的一层。",
        usable: true,
        customAction: true
    },
    // 通往酒窖的楼梯（一层→酒窖）
    stairs_to_cellar: {
        id: "stairs_to_cellar",
        name: "楼梯（下行）",
        type: "misc",
        desc: "一个通往地下酒窖的石阶楼梯，楼梯两侧的墙壁上挂着昏暗的壁灯，空气中弥漫着陈年的酒香。",
        usable: true,
        customAction: true
    },
    // 通往一层的楼梯（酒窖→一层）
    stairs_from_cellar: {
        id: "stairs_from_cellar",
        name: "楼梯（上行）",
        type: "misc",
        desc: "一个通往宅邸一层的石阶楼梯，上方的光线隐约可见。",
        usable: true,
        customAction: true
    },
    // 通往三层的旋转楼梯（二层）
    stairs_to_third_floor: {
        id: "stairs_to_third_floor",
        name: "旋转楼梯（上行）",
        type: "misc",
        desc: "一座精美的螺旋形楼梯，扶手雕刻着复杂的花纹。楼梯盘旋向上，通往宅邸的三层。",
        usable: true,
        customAction: true
    },
    // 通往二层的旋转楼梯（三层）
    stairs_to_second_floor: {
        id: "stairs_to_second_floor",
        name: "旋转楼梯（下行）",
        type: "misc",
        desc: "一座精美的螺旋形楼梯，扶手雕刻着复杂的花纹。楼梯盘旋向下，通往宅邸的二层。",
        usable: true,
        customAction: true
    },
    // 通往阁楼的木梯（三层→阁楼）
    ladder_to_attic: {
        id: "ladder_to_attic",
        name: "木梯（上行）",
        type: "misc",
        desc: "一架陈旧的木梯，通向天花板上的阁楼。梯子看起来有些年头了，但还算结实。",
        usable: true,
        customAction: true
    },
    // 通往木屋二层的楼梯
    stairs_to_hut_floor2: {
        id: "stairs_to_hut_floor2",
        name: "楼梯（上行）",
        type: "misc",
        desc: "一个通往木屋二层的木质楼梯，楼梯有些老旧，踩上去会发出吱呀的声响。",
        usable: true,
        customAction: true
    },
    // 通往木屋一层的楼梯（二层）
    stairs_to_hut_floor1: {
        id: "stairs_to_hut_floor1",
        name: "楼梯（下行）",
        type: "misc",
        desc: "一个通往木屋一层的木质楼梯，楼梯有些老旧，踩上去会发出吱呀的声响。",
        usable: true,
        customAction: true
    },
    // 阁楼内的木梯（阁楼→三层）
    ladder_from_attic: {
        id: "ladder_from_attic",
        name: "木梯（下行）",
        type: "misc",
        desc: "一架陈旧的木梯，通向下方的三层走廊。",
        usable: true,
        customAction: true
    },
    // 被破坏的木门
    broken_wooden_door: {
        id: "broken_wooden_door",
        name: "被破坏的木门",
        type: "misc",
        desc: "一扇被破坏的橡木门，门板上布满了裂痕和凹痕，锁具已经完全损坏，无力地挂在门框上。"
    },
    // 中等木门（可破坏，伤害要求20）
    medium_wooden_door: {
        id: "medium_wooden_door",
        name: "紧锁的房门",
        type: "misc",
        desc: "一扇上锁的房门，看起来没有宅邸后门的木门那么厚重，但门锁依然坚固。也许可以用蛮力破坏...",
        usable: true,
        customAction: true
    },
    // 被破坏的房门
    broken_medium_door: {
        id: "broken_medium_door",
        name: "被破坏的房门",
        type: "misc",
        desc: "一扇被破坏的房门，锁具已经崩坏，门轴也松动了，无力地半开着。"
    },
    // 悬崖上的木屋
    wooden_hut: {
        id: "wooden_hut",
        name: "木屋",
        type: "misc",
        desc: "一座古老的木屋矗立在悬崖边缘，看起来已经有些年头了。木屋的门虚掩着，似乎可以进入。",
        usable: true,
        customAction: true
    },
    // 木屋门
    hut_door: {
        id: "hut_door",
        name: "木屋门",
        type: "misc",
        desc: "一扇老旧的木门，通向悬崖。",
        usable: true,
        customAction: true
    },
    // 雷管
    dynamite: {
        id: "dynamite",
        name: "雷管",
        type: "misc",
        desc: "一捆工业雷管，旁边还有一些引爆装置。这是矿工们用来爆破岩壁的工具，威力足以炸开厚重的岩石墙。\n在东边的岩壁上有一堆松动的封堵物，看起来可以用这个炸开。",
        usable: true,
        customAction: true
    },

    // ========== 厨房物品 ==========
    // 菜刀
    kitchen_knife: {
        id: "kitchen_knife",
        name: "菜刀",
        type: "weapon",
        desc: "一把厚重的厨用刀具，刀身宽阔，刃口锋利。原本是用来切菜的，但在这地方...它可能有其他用途。",
        atk: 8,
        agi: 0,
        slot: "weapon"
    },
    // 水果刀
    fruit_knife: {
        id: "fruit_knife",
        name: "水果刀",
        type: "weapon",
        desc: "一把小巧的水果刀，刀身轻薄但锋利。在这穷乡僻壤，水果是奢侈品，这把刀大概是某位监工的私人物品。",
        atk: 5,
        agi: 2,
        slot: "weapon"
    },
    // ========== 烹饪辅料 ==========
    water: {
        id: "water",
        name: "水",
        type: "misc",
        desc: "清澈的水，烹饪不可或缺的辅料。",
        isSeasoning: true
    },
    mint: {
        id: "mint",
        name: "薄荷",
        type: "misc",
        desc: "几片新鲜的薄荷叶，带有清凉的香气。",
        isSeasoning: true
    },
    oil: {
        id: "oil",
        name: "油",
        type: "misc",
        desc: "一小瓶食用油，煎炒必备。",
        isSeasoning: true
    },
    salt: {
        id: "salt",
        name: "盐",
        type: "misc",
        desc: "粗盐粒，最基础的调味料。",
        isSeasoning: true
    },
    star_anise: {
        id: "star_anise",
        name: "八角",
        type: "misc",
        desc: "干燥的八角茴香，浓郁甘甜的香气。",
        isSeasoning: true
    },
    cinnamon: {
        id: "cinnamon",
        name: "桂皮",
        type: "misc",
        desc: "一块粗糙的桂皮，温暖的木质辛香。",
        isSeasoning: true
    },
    wild_pepper: {
        id: "wild_pepper",
        name: "野山椒",
        type: "misc",
        desc: "几颗野山椒，辛辣刺鼻。",
        isSeasoning: true
    },

    vinegar: {
        id: "vinegar",
        name: "醋",
        type: "misc",
        desc: "一坛陈醋，酸香醇厚。",
        isSeasoning: true
    },
    red_wine: {
        id: "red_wine",
        name: "红酒",
        type: "misc",
        desc: "一瓶来自桑华山酒窖的深红色葡萄酒，采用当地特有的野生葡萄酿造，口感醇厚饱满，带有黑莓和李子的浓郁果香，单宁柔和，余味悠长。",
        isSeasoning: true
    },
    rosemary: {
        id: "rosemary",
        name: "迷迭香",
        type: "misc",
        desc: "几枝干燥的迷迭香，散发着清新的木质香气。",
        isSeasoning: true
    },
    bay_leaf: {
        id: "bay_leaf",
        name: "月桂叶",
        type: "misc",
        desc: "几片干燥的月桂叶，微苦而芳香。",
        isSeasoning: true
    },
    soy_sauce: {
        id: "soy_sauce",
        name: "酱油",
        type: "misc",
        desc: "一瓶深色酱油，鲜咸浓郁。",
        isSeasoning: true
    },
    black_pepper: {
        id: "black_pepper",
        name: "黑胡椒",
        type: "misc",
        desc: "研磨好的黑胡椒粒，辛辣芳香。",
        isSeasoning: true
    },
    olive_oil: {
        id: "olive_oil",
        name: "橄榄油",
        type: "misc",
        desc: "一瓶金黄色的橄榄油，口感醇厚。",
        isSeasoning: true
    },
    ginger: {
        id: "ginger",
        name: "姜片",
        type: "misc",
        desc: "几片生姜，辛辣暖胃。",
        isSeasoning: true
    },
    scallion: {
        id: "scallion",
        name: "葱",
        type: "misc",
        desc: "几根翠绿的小葱，辛香提味。",
        isSeasoning: true
    },
    honey: {
        id: "honey",
        name: "蜂蜜",
        type: "misc",
        desc: "一罐金色的蜂蜜，甘甜芬芳。",
        isSeasoning: true
    },
    gelatin_sheet: {
        id: "gelatin_sheet",
        name: "吉利丁片",
        type: "misc",
        desc: "几片透明的吉利丁片，用于凝固成型。",
        isSeasoning: true
    },
    // 新增烹饪辅料
    honey: {
        id: "honey",
        name: "蜂蜜",
        type: "misc",
        desc: "一罐金色的蜂蜜，甘甜芬芳。",
        isSeasoning: true
    },
    rose_petal: {
        id: "rose_petal",
        name: "玫瑰花瓣",
        type: "misc",
        desc: "几片新鲜的玫瑰花瓣，带着淡淡的芬芳。",
        isSeasoning: true
    },
    sugar: {
        id: "sugar",
        name: "糖",
        type: "misc",
        desc: "精制的蔗糖，甜味纯净。",
        isSeasoning: true
    },
    egg: {
        id: "egg",
        name: "鸡蛋",
        type: "misc",
        desc: "新鲜的鸡蛋，富含蛋白质。",
        isSeasoning: true
    },
    white_wine: {
        id: "white_wine",
        name: "白葡萄酒",
        type: "misc",
        desc: "一瓶来自桑华山酒窖的清澈白葡萄酒，选用高山泉水灌溉的白葡萄品种，口感清爽优雅，带有柑橘和梨的清新果香，酸度平衡，余味清爽。",
        isSeasoning: true
    },
    milk: {
        id: "milk",
        name: "牛奶",
        type: "misc",
        desc: "新鲜的牛奶，醇厚丝滑。",
        isSeasoning: true
    },
    vanilla_bean: {
        id: "vanilla_bean",
        name: "香草荚",
        type: "misc",
        desc: "一根香草荚，散发着浓郁的香草香气。",
        isSeasoning: true
    },
    osmanthus: {
        id: "osmanthus",
        name: "桂花",
        type: "misc",
        desc: "干燥的桂花，金黄芬芳。",
        isSeasoning: true
    },
    cherry: {
        id: "cherry",
        name: "樱桃",
        type: "misc",
        desc: "几颗新鲜的樱桃，甜美多汁。",
        isSeasoning: true
    },
    cream: {
        id: "cream",
        name: "奶油",
        type: "misc",
        desc: "新鲜的动物奶油，丝滑香浓。",
        isSeasoning: true
    },
    nutmeg: {
        id: "nutmeg",
        name: "肉豆蔻粉",
        type: "misc",
        desc: "研磨的肉豆蔻粉，温暖辛辣。",
        isSeasoning: true
    },
    butter: {
        id: "butter",
        name: "黄油",
        type: "misc",
        desc: "一块金黄色的黄油，香气浓郁。",
        isSeasoning: true
    },
    cheese: {
        id: "cheese",
        name: "芝士",
        type: "misc",
        desc: "一块成熟的芝士，浓郁醇厚。",
        isSeasoning: true
    },
    red_date: {
        id: "red_date",
        name: "红枣",
        type: "misc",
        desc: "几颗饱满的红枣，甘甜滋补。",
        isSeasoning: true
    },
    apple_wood_chips: {
        id: "apple_wood_chips",
        name: "苹果木屑",
        type: "misc",
        desc: "燃烧用的苹果木屑，增添烟熏风味。",
        isSeasoning: true
    },
    sake: {
        id: "sake",
        name: "清酒",
        type: "misc",
        desc: "一瓶清酒，清冽甘醇。",
        isSeasoning: true
    },
    kelp: {
        id: "kelp",
        name: "昆布",
        type: "misc",
        desc: "干燥的昆布片，提鲜增香。",
        isSeasoning: true
    },
    lettuce: {
        id: "lettuce",
        name: "生菜",
        type: "misc",
        desc: "几片新鲜的生菜，清脆爽口。",
        isSeasoning: true
    },
    // 新增用户要求的辅料
    knight_semen: {
        id: "knight_semen",
        name: "骑士战马精液",
        type: "misc",
        desc: "从骑士战马身上榨取的浓稠精液，散发着雄性气息。",
        isSeasoning: true
    },
    lemon_juice: {
        id: "lemon_juice",
        name: "柠檬汁",
        type: "misc",
        desc: "新鲜的柠檬汁，酸甜清香。",
        isSeasoning: true
    },
    wasabi_paste: {
        id: "wasabi_paste",
        name: "山葵酱",
        type: "misc",
        desc: "辛辣的山葵酱，具有独特的刺激性风味。",
        isSeasoning: true
    },
    perilla_leaf: {
        id: "perilla_leaf",
        name: "紫苏叶",
        type: "misc",
        desc: "新鲜的紫苏叶，具有独特的香气和风味。",
        isSeasoning: true
    },
    sake: {
        id: "sake",
        name: "清酒",
        type: "misc",
        desc: "清澈的清酒，口感温和醇厚。",
        isSeasoning: true
    },
    thyme: {
        id: "thyme",
        name: "百里香",
        type: "misc",
        desc: "干燥的百里香，散发着浓郁的香草气息。",
        isSeasoning: true
    },
    parsley: {
        id: "parsley",
        name: "欧芹碎",
        type: "misc",
        desc: "切碎的欧芹，具有清新的香气。",
        isSeasoning: true
    },
    huadiao_wine: {
        id: "huadiao_wine",
        name: "花雕酒",
        type: "misc",
        desc: "传统的花雕酒，色泽橙黄，香气馥郁。",
        isSeasoning: true
    },
    sherry: {
        id: "sherry",
        name: "雪莉酒",
        type: "misc",
        desc: "雪莉酒，口感醇厚，带有坚果和焦糖的风味。",
        isSeasoning: true
    },
    
    // 壁橱
    wardrobe: {
        id: "wardrobe",
        name: "壁橱",
        type: "misc",
        desc: "一个古旧的壁橱，看起来可以翻找一些东西。",
        usable: true,
        customAction: true,
        notPickable: true
    },

    // 炉灶
    stove: {
        id: "stove",
        name: "炉灶",
        type: "misc",
        desc: "一个用砖块砌成的简陋炉灶，里面还残留着余烬。可以用来烹饪食物...或者加热某些「特殊」的食材。",
        usable: true,
        customAction: true
    },

    // ========== 工作坊物品 ==========
    // 工作台（不可拾取，可交互，能制作武器）
    workbench: {
        id: "workbench",
        name: "工作台",
        type: "misc",
        desc: "一张厚重的铁匠工作台，台面上布满了锤击的凹痕和烧灼的黑色印记。\n台面上散落着一些铁片、铆钉和磨刀石，旁边还有一把铁钳和几根粗铁条。\n台面下方的架子上堆放着各种矿石原料和半成品武器。\n工作台一侧安装着一个简易的虎钳，另一侧摆放着一把沉重的铁锤。\n看起来可以用这里的工具和材料锻造武器。",
        usable: true,
        customAction: true,
        notPickable: true
    },

    // ========== 艾莎的肢体部位 ==========
    aisha_head: {
        id: "aisha_head",
        name: "艾莎的头颅",
        type: "limb",
        desc: "一颗带着野性美感的年轻女性头颅，属于监工艾莎·霍克。棕色短发因沾染了矿井的煤灰与鲜血而结成一簇簇硬块，碧绿色的瞳孔死不瞑目地睁着，残留着一种底层生存者特有的顽强与惊愕。由于常年在矿场风吹日晒，她的脸颊有着一种健康的浅麦色，唇瓣丰满且因死前的惊恐而微微张开。断面处露出粉红色的气管与深红的颈椎骨，鲜血顺着她那没有多余赘肉的脖颈边缘不断滴下。",
        usable: true,
        customAction: true,
        cookable: true,  // 可烹饪
        ingredientType: "head",  // 食材类型
        resultDish: "aisha_head_dish",
        story: [
            "你单手抓住艾莎还带着温热的头颅，棕色短发在指间纠缠，碧绿色的瞳孔依旧睁得很大。",
            "你狞笑着把她的头颅高高举起，然后猛地砸向坚硬的矿道地面。”砰！”第一下砸下去，头骨发出沉闷的撞击声，出现明显裂痕。",
            "你毫不停手，双手握住她的头颅，像砸西瓜一样一次又一次凶狠地砸向地面。”砰！砰！砰！”接连数下重砸后，艾莎的头骨终于碎裂，发出清脆的破裂声。鲜血和粉红色的脑浆从破碎的头骨裂口处涌出，溅得地面一片狼藉。",
            "她的碧绿色瞳孔在剧烈震动中逐渐扩散，曾经明媚野性的脸庞此刻彻底变形，半边头骨凹陷，脑浆混合鲜血不断从裂开的头骨中流出。",
            "你喘着粗气，把这颗已经被砸得稀烂的头颅翻过来，让那张血肉模糊的脸朝上。破碎的头骨裂口还在往外冒着脑浆和鲜血。",
            "你捏住她破碎的下巴，强行把她的嘴掰开，然后将早已勃起的肉棒对准她微微张开的嘴唇，猛地捅了进去。",
            "龟头直接顶进她温热湿滑的喉管，艾莎的舌头无力地伸出口腔，随着你的肉棒滑动着。你大力地抽插，每一下都深深捅到喉咙深处，带出混着鲜血和脑浆的黏液。",
            "你越插越狠，艾莎的脑袋已被砸烂，只剩下下半部分供你口交的口器。终于，在一阵剧烈的快感中，你狠狠地将滚烫浓稠的精液全部射进她被砸烂的口腔和喉管深处。",
            "大量白色精液混合着鲜血和脑浆从她破碎的嘴角、鼻孔甚至头骨裂口处溢出，顺着她血肉模糊的脸庞往下狂流。艾莎那张曾经明媚的浅麦色脸庞，此刻已彻底不成人形，被脑浆、鲜血和你的精液彻底沾满。",
        ],
        onUseDestroy: true,
        onUseSpawn: ["aisha_head_broken", "aisha_brain"]
    },
    aisha_head_broken: {
        id: "aisha_head_broken",
        name: "玩坏了的艾莎的头颅",
        type: "limb",
        desc: "已经被彻底玩坏的艾莎头颅，面目全非，再也无法辨认出曾经的模样。"
    },
    aisha_brain: {
        id: "aisha_brain",
        name: "艾莎的脑浆",
        type: "misc",
        desc: "从艾莎头颅中流出的脑浆，粘稠而恶臭。"
    },
    aisha_leg: {
        id: "aisha_leg",
        name: "艾莎的腿",
        type: "limb",
        desc: "一条笔直的腿，属于监工艾莎·霍克。浅麦色的皮肤紧致有光泽，大腿饱满圆润，小腿线条流畅。腿上覆着极细的淡金色汗毛，在血迹映衬下格外明显。膝盖圆润，断面露出大腿骨的白色横截面与层层粉红肌肉，鲜血沿着腿根流下，染湿了腿间的细毛。",
        cookable: true,
        ingredientType: "leg",
        resultDish: "aisha_leg_steak"
    },
    aisha_hand: {
        id: "aisha_hand",
        name: "艾莎的手",
        type: "limb",
        desc: "一只略显粗粝却有力的手，属于监工艾莎·霍克。手背皮肤是健康的浅麦色，指关节处因常年抓握矿镐和皮鞭而带着些许薄茧。指甲缝里残留着难以完全洗净的黑色煤屑，与掌心粉红细腻的肉形成对比。断面露出短促的腕骨与紧缩的筋膜，鲜血染红了指尖，让这双曾不断周旋于权势与劳动之间的手显得格外凄楚。",
        usable: true,
        customAction: true,
        cookable: true,  // 可烹饪
        ingredientType: "hand",  // 食材类型
        resultDish: "aisha_hand_dish",
        story: [
            "你拿起艾莎被切下的那只右手。这是一只略显粗粝却有力的手，手背是健康的浅麦色，指关节处因常年抓握矿镐和皮鞭而布满薄茧。但你很清楚，这只手远不止握过皮鞭——它曾经无数次在兰德尔家主的床上，熟练地握住男人的阴茎，为换取监工的位置而卖力地撸动。",
            "你把她的手掌包裹在自己已经勃起的肉棒上，那层薄薄的茧和掌心的温度带来一种熟悉的、带着淫靡记忆的粗糙快感。你握紧她的断手腕，强迫她的手指合拢，开始上下套弄。",
            "艾莎的断手虎口用力卡住你的棒身，中指和食指精准地摩擦着龟头，像她以前在兰德尔家主身下时那样，熟练地取悦男人。",
            "你看着这只曾同时握过皮鞭和男人阴茎的手，如今只能乖乖地为你服务。掌心残留的矿石粉和血迹混着你的前列腺液，变得又滑又黏。",
            "你越撸越快，那层因长期服侍男人而磨出的薄茧反复摩擦着你最敏感的地方，带来强烈的快感。艾莎的手指虽然无力，却仍保持着曾经讨好男人的本能弧度，像在无声地乞求你的赏赐。",
            "快感堆积到顶点时，你猛地按住她的手掌，把一股股浓稠滚烫的精液全部喷射在她的手心和指缝之间。白色液体顺着她曾经用来握鞭和握鸡巴的手指大股流下，把这只”能干”的手彻底玷污成一片狼藉。",
            "射精结束后，你松开她的断手，却发现她的手指还微微蜷曲着，保持着撸动的姿势，仿佛即使死了，这只手也依然记得如何服侍男人。"
        ]
    },
    aisha_breast: {
        id: "aisha_breast",
        name: "艾莎的乳房",
        type: "limb",
        desc: "一只B杯的、形状饱满的年轻乳房，属于监工艾莎·霍克。肤色是深浅不一的蜜色，乳晕呈健康的淡褐色，乳头小巧而挺立，质感硬实，像两颗未成熟的野果。由于长期穿着紧身皮质背心，胸部轮廓被挤压得非常紧凑，手感如同紧致的橡胶一般富有阻力。断面露出丰满的浅色脂肪层与暗红的胸肌，鲜血顺着弧线滴落，混合着矿坑中特有的硫磺与汗液气息。",
        cookable: true,
        ingredientType: "breast",
        resultDish: "aisha_breast_dish",
        milkItem: "aisha_milk",
        maxMilkCount: 2,
        milkStory: [
            [
                "机器发出低沉的嗡鸣，吸杯紧紧吸附在乳房上，节奏性地收缩、放松。艾莎的乳头被强行拉长，淡褐色的乳晕被吸得微微鼓起。很快，第一股乳汁被挤压出来——乳白色的液体带着淡淡的甜腥味，从乳头喷射而出，沿着透明的导管流进收集瓶里。乳汁量不算少，一股一股地喷溅，浅麦色的乳房随着机器的节奏不断颤动，乳肉被吸得变形又弹回，表面泛起一层细密的汗珠。",
                "机器持续工作了十几分钟。。。",
                "艾莎的乳房渐渐变得柔软，乳汁的喷射频率明显降低，但依然有乳白色的液体断断续续地流出。等到第一次榨乳结束，收集瓶里已经积了小半瓶温热的乳汁，而她的乳房明显瘪下去一些，乳头红肿挺立，表面布满被吸盘压出的浅浅红痕。"
            ],
            [
                "艾莎的乳房已经被榨过一次，乳肉变得更加松软，乳头被拉得更长。机器运转后，只挤出了零星几股乳汁，远比第一次稀薄且量少。乳白色的液体断断续续地滴落，而不是喷射，收集瓶里的液面上升得非常缓慢。浅麦色的乳房在吸杯里可怜地变形，乳肉被反复挤压得几乎扁平，表面泛起更多细小的红点。",
                "机器持续工作了十几分钟。。。",
                "乳汁越来越少，到后期几乎只剩下几滴稀薄的液体勉强从红肿的乳头渗出。艾莎的乳房此时已明显萎缩，原本饱满的形状变得干瘪而松垮，乳头红肿发亮，像两颗被榨干的残果。机器最终发出空转的嗡鸣声，吸杯松开时，她的乳房无力地垂下来，表面布满被反复吸压的红痕和细密的汗珠，只剩下一层薄薄的乳肉包裹着胸肌。"
            ]
        ],
        driedBreastId: "aisha_breast_dried"
    },
    aisha_breast_dried: {
        id: "aisha_breast_dried",
        name: "干瘪的艾莎的乳房",
        type: "limb",
        desc: "一只艾莎的B杯乳房，已经彻底干瘪。原本浅麦色、富有弹性的乳房现在像一只破败的破布袋，皮肤松松垮垮地皱在一起，表面布满细密的红痕和被吸杯勒出的圆形压痕。乳头肿胀得又红又长，乳晕颜色暗沉，乳房整体缩小了接近一半，摸上去软塌塌的，没有一丝弹性，只剩下干瘪的脂肪层和被反复抽吸后残留的空虚感。曾经这只嚣张跋扈的监工的乳房，现在已被彻底榨干、干瘪萎缩。"
    },
    aisha_arm: {
        id: "aisha_arm",
        name: "艾莎的手臂",
        type: "limb",
        desc: "一条紧致有力、线条分明的手臂，属于监工艾莎·霍克。皮肤呈现出诱人的蜜色，小臂上因挥动皮鞭监工而练就了柔韧的肌肉。手掌略显粗糙，虎口处有常年抓握矿镐或皮鞭留下的薄茧。断面露出鲜红且富有弹性的肌肉束，与白皙的手臂内侧形成了强烈的视觉反差，断口处还残留着未洗净的晶莹煤屑。",
        cookable: true,
        ingredientType: "arm",
        resultDish: "aisha_arm_dish"
    },
    aisha_foot: {
        id: "aisha_foot",
        name: "艾莎的脚",
        type: "limb",
        desc: "一只年轻女性的脚，属于监工艾莎·霍克。脚掌大小适中，脚背弧度优美，脚趾匀称整齐，脚底有薄薄的劳动茧，却依旧显得柔软，此刻已从矿工靴中脱下，穿着白色的棉袜。脚踝纤细，断面露出脚踝骨与粉色的肌腱，残留的血迹顺着脚背流到脚趾缝里。",
        usable: true,
        customAction: true,
        cookable: true,  // 可烹饪
        ingredientType: "foot",  // 食材类型
        resultDish: "aisha_foot_dish",
        story: [
            "你抓起艾莎被切下的那只浅麦色右脚。脚掌大小适中，脚背弧度优美，脚底却带着薄薄的劳动茧。这双脚不仅曾在矿道里奔走，更曾在兰德尔家主的私室里，被迫脱下矿工靴，为那个男人进行过无数次下贱的足交。",
            "你把她的双脚并拢捧在手里，想象着她以前如何跪在兰德尔家主面前，用这双脚讨好权贵。你将勃起的肉棒塞进她的脚心和脚趾间，那层厚厚的白色棉袜带来熟悉的柔软与细密摩擦感，正是她曾经用来取悦男人的技巧。",
            "你双手捧着她的小脚，开始大力前后抽插。棉袜很快被你的前列腺液浸湿，变得又滑又黏。你越插越用力，像在重现她以前为兰德尔家主足交时的场景。",
            "这双曾为别的男人卖力夹弄阴茎的脚，用脚底的薄茧反复摩擦着你的肉棒，带来强烈的快感。鲜血从脚踝断面不断渗出，混着你的液体，让她的脚底更加湿滑。你死死按住她的双脚，像操一个早已被调教好的性玩具一样猛烈抽插。",
            "快感爆发时，你用力把她的双脚紧紧夹在胯下，将大量滚烫浓稠的精液喷射在她的脚趾缝和脚心。白色液体大股大股渗进白色棉袜，彻底弄脏了这双曾经为权贵足交的脚。这双脚，从今以后只属于你一个人。"
        ]
    },
    aisha_torso: {
        id: "aisha_torso",
        name: "艾莎的躯干",
        type: "limb",
        desc: "这是一个充满野性的结实躯干，属于监工艾莎·霍克。小腹平坦，有着清晰的腹外斜肌线条。最醒目的是她那因常年攀爬矿坑而变得极其紧致挺翘的臀部，肌肉纤维密度极高，手感硬实且富有惊人的弹性。阴部修剪得并不整齐，浓密的深色阴毛覆盖着饱满的阴唇，穴口由于常年周旋于家主与监工之间而显得色情地微张，散发着一股混杂着汗水与原始体味的浓烈气息。",
        usable: true,
        customAction: true,
        cookable: true,  // 可烹饪
        ingredientType: "torso",  // 食材类型
        resultDish: "aisha_torso_dish",
        story: [
            "你把艾莎被切断的躯干粗暴地翻过来，按在木箱边缘，让她那因长期劳作而紧致挺翘的臀部高高抬起。",
            "她的阴部早已不再是处女该有的模样——粉褐色的阴唇饱满肥厚，穴口微微张开，带着常年被男人使用后的松软与淫靡。浓密的深色阴毛沾着汗水与体液，看起来既野性又下贱。",
            "你握住肉棒，对准她那早已湿润的阴道口，腰部猛地一挺，整根没入。几乎在插入的瞬间，艾莎的躯干就本能地做出了反应。",
            "她那长期被兰德尔家主私下玩弄、早已学会如何取悦男人的阴道，像条件反射般紧紧裹了上来，内壁层层叠叠地蠕动、收缩、吮吸，熟练而贪婪地迎合着你的肉棒。",
            "你冷笑一声，开始快速抽插。艾莎的躯干却比你更主动——每一次你顶到底，她的阴道就会本能地用力绞紧，像一条训练有素的母狗一样死死吸住你的龟头，穴口一张一合地吞吐，拼命想把你更深地拉进去。",
            "即使失去了头颅和四肢，她的腰肢仍在微微耸动，丰满紧致的臀部随着你的撞击而晃荡，像在主动讨好。",
            "你越操越狠，每一下都顶到最深处。艾莎的阴道却越来越湿滑，越来越用力地收缩，像一台被调教到极致的肉便器，疯狂地榨取着你的快感。",
            "终于，在她本能的剧烈迎合中，你低吼着将大量滚烫浓稠的精液深深射进她的子宫。浓白的精液混合着她的淫水，从饱满的阴唇边缘大量溢出，顺着她紧致的臀缝往下流，把曾经用来换取监工位置的下体彻底弄得一片狼藉。",
        ]
    },

    // ========== 艾莎的尸体 ==========
    aisha_corpse: {
        id: "aisha_corpse",
        name: "艾莎的尸体",
        type: "limb",
        desc: "艾莎浅麦色的皮肤上布满了搏斗后的汗水，在昏暗的灯火下泛着油亮的光。紧身的皮背心已被撕裂，那对结实且随着呼吸逐渐停止而凝固的乳房，由于肌肉的张力显得格外挺拔，乳尖由于死前的亢奋而硬实。她那双充满野性的绿瞳孔失去了焦点，大腿由于生前常年跨步而显得异常紧致，即便在死亡中也保持着一种蓄势待发的弹性，散发着一股混杂着汗水与煤烟的原始肉欲。",
        usable: true,
        customAction: true,
        dismemberable: true,
        loot: ["mine_side_key"],
        corpseStory: [
            "你把艾莎的尸体拖出来，平放在隐秘的角落。她依旧穿着那套作为监工的标志性服饰：一件紧身的深褐色皮质背心，被汗水和鲜血浸透后紧紧贴在身上，勾勒出她因长期劳作而结实却又丰满的胸部曲线。背心前襟的扣子早已在之前的挣扎中崩开几颗，露出大片浅麦色的乳沟和微微挺立的乳头。",
            "下身是一条同样紧身的矿工短裤，布料粗糙却被她丰满的臀部撑得紧绷，裤腰处挂着一串沉甸甸的黄铜钥匙——那是桑华山矿场侧门的钥匙，如今随着她的尸体微微晃动，发出细碎的金属碰撞声。短裤的拉链已被你粗暴地扯开，露出她褐色饱满的阴部。双腿上还残留着被撕破的黑色皮质护腿，边缘破损，沾满血迹和尘土。",
            "你分开她结实却柔软的双腿，握住早已勃起的肉棒，对准她那粉褐色饱满、早已不再是处女的阴唇，腰部猛地一挺，整根没入。",
            "艾莎冰冷的阴道依然保持着生前被调教过的紧致与湿润，内壁柔软地包裹着你，每一次抽插都发出黏腻的“滋咕”声。你大力撞击着她的下体，龟头一次次凶狠地顶到最深处，撞得她紧致的阴道壁不断收缩。她的浅麦色大腿随着你的撞击而晃动，撕破的皮质护腿边缘摩擦着你的腰侧。",
            "你双手扣住她被皮质背心半裹的腰肢，猛烈地抽送。艾莎的尸体被动地随着你的节奏前后摇晃，紧身背心下的B杯乳房上下颠簸，乳头因摩擦而微微挺立。你越操越狠，每一下都深深捅进她冰冷的子宫口，感受她死后仍残留的柔软弹性与被长期使用的熟练包裹感。",
            "“……这骚穴……生前被操得真他妈熟练。”",
            "你低声骂着，加快速度。艾莎的阴道虽然冰冷，却本能地层层叠叠地绞紧你的肉棒，像她以前在兰德尔家主身下取悦男人时那样，熟练地吮吸、收缩。鲜血混合着她死前的体液被你撞得四溅，顺着她浅麦色的大腿根和被撕开的短裤边缘往下流，把那串侧门钥匙也染上一层黏腻的红白。",
            "你把她的双腿扛在肩上，让她被撕破的短裤和皮质护腿残片更深地陷进肉里，更加凶狠地深入。龟头一次次撞击着她子宫最深处，艾莎的尸体像一具完美的肉便器，任由你肆意抽插。她的浅麦色皮肤因撞击而泛起红痕，粉褐色的阴唇被撑得红肿外翻，却依然紧紧咬住你的肉棒。",
            "快感越来越强烈。你死死按住她被皮质背心包裹的腰肢，猛地一挺，将滚烫浓稠的精液全部射进她冰冷的子宫深处。",
            "大量白色精液灌满她的体内，从红肿的阴唇边缘大股溢出，顺着她的大腿根、被撕开的短裤和那串晃动的钥匙狂流，把这具曾经飞扬跋扈的尸体彻底玷污成一片淫靡的狼藉。",
            "即使射精结束后，你依然没有拔出肉棒，继续让她冰冷的阴道轻轻包裹着你，感受着她尸体最后的余温、紧致。"
        ]
    },

    // ========== 莉娅娜的掉落物品 ==========
    // 骑士板甲
    knight_armor: {
        id: "knight_armor",
        name: "骑士板甲",
        type: "armor",
        desc: "莉娅娜身穿的银灰色全覆式板甲，甲片上刻有王国狮鹫徽记。虽然有些地方已经凹陷变形，但整体依然坚固。这是一件品质上乘的防具。",
        def: 15,
        agi: -2,  // 重甲降低灵巧
        slot: "armor"
    },
    // 骑士大剑
    knight_greatsword: {
        id: "knight_greatsword",
        name: "骑士大剑",
        type: "weapon",
        desc: "莉娅娜使用的长剑，剑身宽阔而锋利，剑柄缠着皮革。这是王国骑士团的标准配剑，专为斩杀敌人而设计。",
        atk: 18,
        agi: -1,  // 重武器略微降低灵巧
        slot: "weapon"
    },
    // 骑士徽记
    knight_emblem: {
        id: "knight_emblem",
        name: "骑士徽记",
        type: "accessory",
        desc: "一枚刻有王国狮鹫图案的金属徽章，是王国骑士团成员的身份象征。佩戴它可以提升一定防御力，但也可能引起某些人的敌意。",
        def: 3,
        slot: "accessory"
    },

    // 莉娅娜的尸体（雷管剧情后生成）
    liana_wounded_corpse: {
        id: "liana_wounded_corpse",
        name: "伤痕累累的莉娅娜的尸体",
        type: "limb",
        desc: "莉娅娜失去右臂的伤口依然在渗血，将她那布满抓痕与淤青的浅麦色躯干染得一片狼藉。她那因剧烈搏杀而充血、紧致如钢弦的肌肉在死后依然保持着惊人的弹性。硕大且硬实的乳房随着战损的衬衣裸露在外，顶端乳头因痛楚而凸起。她那双修长结实的大腿略微分开，大腿内侧那紧闭的阴道口的赤红色阴毛，此刻正被顺着胯部滑落的鲜血染得更加妖艳。",
        loot: ["knight_armor", "knight_greatsword", "knight_emblem", "mine_gate_key", "urgent_order"],
        dismemberable: true,
        usable: true,
        customAction: true,
        corpseStory: [
            "你将莉娅娜·冯·斯特兰伤痕累累的尸体拖出来，放在隐秘的角落。",
            "你跪在她双腿之间，粗暴地扯开她下身残破的护甲，露出她那被浓密深红色阴毛覆盖的阴部。即使身受重伤、失去右臂，她的双腿依旧修长有力，大腿内侧布满擦伤和干涸的血痕。",
            "你握住早已勃起的肉棒，对准她冰冷紧闭的阴道口，腰部猛地一挺，整根凶狠地贯穿到底。",
            "莉娅娜的尸体毫无反应。她的阴道早已冰冷，却仍保持着生前强健有力的紧致，内壁僵硬地包裹着你的肉棒。你开始大力抽插，每一下都狠狠撞进她最深处，龟头一次次顶到子宫口，发出沉闷而黏腻的撞击声。鲜血和残留的体液被你撞得重新渗出，顺着她沾满伤痕的大腿根缓缓流下。",
            "你双手扣住她仅剩的左臂和结实的腰肢，把她伤痕累累的身躯拉得更近，更加凶狠地抽送。她的修长大腿无力地摊开在两侧，被鲜血浸透的护腿残片摩擦着地面。失去右臂的肩膀断面随着你的撞击而微微晃动，露出里面白色的骨头和凝固的血肉。",
            "你越操越狠，感受着这位女骑士生前强健有力的阴道，如今却只能被动地、冰冷地任你侵犯。她的深红色阴毛被撞得凌乱，粉嫩的阴唇被撑得红肿外翻，干涸的鲜血被你重新带出，把交合处弄得一片狼藉。",
            "你把她仅剩的左臂按在头顶，更加凶猛地撞击，每一次抽插都让她的伤口渗出更多暗红的血丝。她的身体像一具毫无生气的战利品，任由你肆意抽插，没有任何反应，只有冰冷的紧致和沉重的肉感。",
            "快感越来越强烈。你死死按住她伤痕累累的腰肢，猛地一挺，将滚烫浓稠的精液全部射进她冰冷的子宫深处。",
            "大量白色精液灌满她的体内，从红肿的阴唇边缘大股溢出，混合着暗红的鲜血顺着她修长却布满伤痕的大腿根狂流不止，把这位曾经英武冷冽的女骑士彻底玷污成一片血与精液交织的狼藉。",
            "即使射精结束后，你依然没有拔出，而是继续让她紧致却冰冷的阴道轻轻包裹着你，感受着她尸体最后的余温和强健的僵硬收缩。"
        ]
    },

    // 莉娅娜的尸体（正常击杀）
    liana_corpse: {
        id: "liana_corpse",
        name: "莉娅娜的尸体",
        type: "limb",
        desc: "莉娅娜充满力量感的肉体，即便在死亡中也散发着一种令人不敢逼视的威慑力。她那头如深红火焰般的长发整齐地铺散开来，衬托出她那张线条硬朗、英气十足的脸庞。骑士的皮肤呈现出健康的浅麦色，细腻而紧致。那对丰满且极其坚挺的乳房由于紧实胸肌的托举，在平躺时依然保持着惊人的挺拔度，像两座隆起的雪山，顶端的暗褐色乳头如黑宝石般在冷空气中挺立。她那对比例完美的修长大腿自然并拢，肌肉轮廓线条分明，每一寸皮肤都充满了弹性，散发着一种混合了皮革、野草与健康女性体香的诱人芬芳。",
        usable: true,
        customAction: true,
        dismemberable: true,
        loot: ["knight_armor", "knight_greatsword", "knight_emblem", "mine_gate_key", "urgent_order"],
        corpseStory: [
            "你将莉娅娜·冯·斯特兰的尸体拖出来，放在隐秘的角落。",
            "她依然穿着那身银灰色的全覆式板甲，胸甲被鲜血染红，栗色长发散乱地铺在地面上。双臂无力地摊开在身侧，手指还保持着握剑时的姿态。红色瞳孔已经失去神采，却依旧睁得很大，带着临死前的震惊与不甘。强健却优雅的身躯此刻完全静止，只有胸甲下丰满的乳房随着你粗暴的动作微微晃动。",
            "你跪在她双腿之间，粗暴地扯开她下身的护甲残片，露出她那被浓密深红色阴毛覆盖的阴部。粉嫩厚实的阴唇还带着训练后的湿润与温度。",
            "你握住早已勃起的肉棒，对准她紧闭的阴道口，腰部猛地一挺，整根凶狠地贯穿到底。即使已经死亡，莉娅娜的阴道依旧强健有力，内壁本能地收缩，像生前握剑时那样死死裹住你的肉棒。你开始大力抽插，每一下都狠狠撞进她最深处，龟头一次次顶到子宫口，发出黏腻的撞击声。",
            "你双手扣住她结实的腰肢，把她强健的身躯拉得更近，让肉棒能更深地捅进她体内。莉娅娜的尸体随着你的撞击前后摇晃，银灰色的板甲发出细微的摩擦声，丰满的C罩杯乳房在胸甲残片下剧烈颠簸，暗褐色的乳头因摩擦而微微挺立。",
            "你越操越狠，感受着这位女骑士生前强健有力的阴道，如今却只能被动地任你侵犯。她的深红色阴毛被撞得凌乱，粉嫩的阴唇被撑得红肿外翻，鲜血混合着透明的体液被你带出，顺着她修长有力的大腿根往下流，染红了银灰色的护腿残片。",
            "你把她的一条强壮长腿扛在肩上，更加凶狠地深入。龟头一次次撞击着她子宫最深处，莉娅娜的尸体像一具完美的战利品肉便器，任由你肆意抽插。",
            "快感越来越强烈。你死死按住她结实的腰肢，猛地一挺，将滚烫浓稠的精液全部射进她冰冷的子宫深处。大量白色精液灌满她的体内，从红肿的阴唇边缘大股溢出，顺着她强健的大腿根和银灰色的板甲残片狂流，把这位曾经英武冷冽的女骑士玷污成一片淫靡的狼藉。",
            "即使射精结束后，你依然没有立刻拔出，而是继续让她紧致的阴道轻轻包裹着你，感受着她尸体最后的余温和强健的收缩。"
        ]
    },

    // ========== 莉娅娜的肢体部位 ==========
    liana_head: {
        id: "liana_head",
        name: "莉娅娜的头颅",
        type: "limb",
        desc: "一颗英气却充满诱惑的女性头颅，属于女骑士莉娅娜·冯·斯特兰。栗色长发被鲜血浸得湿漉漉，凌乱地贴在脸颊和脖颈断面上。红色的瞳孔睁得很大，残留着临死前的冷厉与一丝隐秘的惊恐。薄唇微微张开，露出湿润的舌尖，脖颈断面整齐有力，鲜血从粗壮的颈动脉喷溅后凝固成黏腻的暗红层，蜜色皮肤与血迹形成强烈的视觉刺激。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "head",
        resultDish: "liana_head_dish",
        story: [
            "你单手拎起莉娅娜那颗被斩断的头颅，栗色长发沾满鲜血，沉甸甸地垂在你指间，你粗暴地把尚未完全勃起的肉棒塞进她微微张开的薄唇。",
            "温暖紧窄的口腔瞬间包裹上来，你用力顶进喉咙深处，将她的头颅狠狠按在胯下。你双腿夹紧她那颗曾经高傲的头颅，像夹住一个战利品，感受肉棒在她喉管中迅速胀大。",
            "你不再用手，而是用大腿的力量不断夹紧她的脑袋，越夹越用力，仿佛要把这位女骑士最后的尊严彻底碾碎。",
            "随着你大腿肌肉的收缩，她口腔内的牙齿本能地紧咬，却只能徒劳地摩擦着你的肉棒。这种带着反抗的紧致，反而让你生出强烈的征服快感——曾经在战场上挥剑杀敌、不可一世的骑士，如今只剩下一颗被你夹在腿间、被迫为你口交的头颅。",
            "你越夹越紧，享受着这种彻底征服的快感。每一次大腿用力，都像在宣告：这颗高傲的头颅，现在只不过是你的玩具。",
            "快感迅速堆积到顶点。你猛地按住她的头，把浓稠滚烫的精液大股射进她喉管最深处。骑士的口腔像一个完美的容器，一滴不漏地接住了你所有的精液。",
            "射精结束后，你松开双腿，把这颗沾满鲜血和精液的头颅摆放在地上，粗暴地掰开她的嘴唇。只见她口中满是乳白色的浓稠精液，而那张曾经冷峻英气的脸庞上，还残留着临死前的恐慌与不甘。这种强烈的反差，让你涌起一股前所未有的征服快感。"
        ]
    },
    liana_torso: {
        id: "liana_torso",
        name: "莉娅娜的躯干",
        type: "limb",
        desc: "这个切断的躯干强健而充满肉欲，属于女骑士莉娅娜·冯·斯特兰。腰肢紧实有力，小腹平坦却能看到清晰的腹肌线条。阴道口覆盖着浓密卷曲的深红色阴毛，阴唇厚实饱满，颜色呈暗粉色，阴道口紧闭，掰开后内壁粉嫩湿润，能看到一层薄薄的透明黏液残留，仿佛她在战斗中因剧烈动作而分泌。会阴处裂开深深的伤痕，鲜血混合着阴道分泌物缓缓流出，散发出浓烈汗水、铁锈与女性淫液混合的强烈气味。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "torso",
        resultDish: "liana_torso_dish",
        story: [
            "你把莉娅娜被切断的强健躯干抱起来，翻转成正面朝下的姿势，让她那结实有力的腰肢和饱满紧致的臀部高高翘起。浓密的深红色阴毛下，那厚实有力的阴唇紧闭着，仿佛带着女骑士的骄傲。",
            "你握住肉棒，对准她那粉嫩却强健的阴道口，腰部猛地一挺，整根凶狠地捅到底。几乎在插入的瞬间，阴道内壁突然剧烈收缩，层层紧致的肌肉死死裹住你的肉棒，疯狂地吮吸、挤压、榨取。",
            "你试图控制节奏，却发现完全做不到。莉娅娜的阴道像一头饥渴的野兽，本能地蠕动、绞紧、吸吮，节奏越来越快。快感如潮水般涌来，你只坚持了不到一分钟，就在惊喘中第一次射精了。浓稠滚烫的精液大股大股喷射进她子宫深处。",
            "然而，莉娅娜的躯干并没有因此停下。她的阴道反而收缩得更加凶猛，像在贪婪地吞咽你的精液，同时用力挤压着尚未疲软的肉棒。",
            "你还没来得及拔出，肉棒竟然在她的疯狂榨取中迅速再次勃起，变得比刚才更加坚硬。你低吼着，双手死死扣住她强健的腰肢，开始疯狂撞击。但真正主导节奏的却是莉娅娜的躯干——那强有力的阴道一次次痉挛、绞紧，像一台不知疲倦的榨精机器，疯狂地吮吸着你的每一寸敏感部位。",
            "第二次、第三次……你一次次在她的体内射精，却始终无法拔出。每次射精后，她的阴道都会更加凶狠地收缩，把你迅速重新榨硬，然后继续疯狂吞吐。",
            "直到第四次射精后，你终于拔出了肉棒，但已经双腿发软。精液不断地从你的肉棒与她被操得红肿的阴唇边缘溢出，把你们交合的下半身弄得一片狼藉。",
            "即使如此，莉娅娜的躯干仍在轻轻痉挛，阴道深处还在本能地收缩，仿佛仍不满足，想要把你最后一滴精液也榨干。",
        ]
    },
    liana_leg: {
        id: "liana_leg",
        name: "莉娅娜的腿",
        type: "limb",
        desc: "一条修长强健的腿，属于女骑士莉娅娜·冯·斯特兰。肌肉饱满有力，大腿内侧皮肤特别细嫩，覆盖着极细的淡金色汗毛。断面露出粗大的腿骨与发达的粉红肌肉组织，鲜血大量涌出，顺着大腿根部缓缓流下，染湿了浓密的阴毛区域，留下黏腻的血痕。",
        cookable: true,
        ingredientType: "leg",
        resultDish: "liana_leg_steak"
    },
    liana_hand: {
        id: "liana_hand",
        name: "莉娅娜的手",
        type: "limb",
        desc: "一只强健却性感的手，属于女骑士莉娅娜·冯·斯特兰。手指粗壮有力，指关节突出，手指上涂着的亮红色指甲油表明了断手主人少女的身份。掌心布满厚厚的剑茧，摸上去依旧带着粗糙的摩擦感。手背青筋凸起，皮肤紧致。断口露出白色的掌骨与发达的粉红肌肉，鲜血缓慢渗出，让这双曾握剑的手现在只剩淫靡的血润光泽。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "hand",
        resultDish: "liana_hand_dish",
        story: [
            "你拿起莉娅娜那只被切下的强健右手，本想随意把她的手掌按在自己的肉棒上撸动，谁知当她的掌心刚一接触到滚烫的阴茎，就如同活过来一样，突然五指猛地收紧，死死抓住你的肉棒。",
            "莉娅娜的手掌像铁钳一样死死箍住你的阴茎，剑茧粗糙的掌心和强壮的手指用力收缩，力量大得惊人，仿佛她生前握剑时的全部力量都灌注在了这只断手上。",
            "你瞬间感到惊慌，惊恐地想要把她的手拽开，却发现越是用力，那只骑士断手反而握得越紧，粗糙的剑茧摩擦着你敏感的棒身，带来强烈的疼痛感与莫名的快感。",
            "你惊慌地咒骂着，却无法挣脱。莉娅娜的手就像一位至死不屈的骑士，宁死也要握紧武器。强健的手指死死扣住你的棒身，掌心用力挤压，青筋暴起的虎口紧紧箍着你的肉棒根部。",
            "疼痛与快感剧烈交织，你越是挣扎，那只断手就握得越紧。粗糙的剑茧反复摩擦着你的龟头，让你既惊恐又无法抑制的快感迅速堆积。",
            "终于，在惊慌、疼痛与强烈快感的共同冲击下，你再也忍不住，身体剧烈抽搐着射精了。滚烫浓稠的精液一股股喷射而出。白色液体顺着她强壮的手背和青筋凸起的手指大股流下，把这只曾经握剑杀敌的骑士之手彻底玷污。",
            "直到你射精结束后，那只断手才像是完成任务般，力量渐渐松懈。你这才惊魂未定地用力掰开她的手指，把这只依然沾满精液的骑士断手从自己的肉棒上拿了下来。"
        ]
    },
    liana_foot: {
        id: "liana_foot",
        name: "莉娅娜的脚",
        type: "limb",
        desc: "一只强壮却诱人的脚，属于女骑士莉娅娜·冯·斯特兰。脚掌宽厚，脚底布满厚茧，脚趾有力而性感，脚背青筋明显。脚踝粗壮有力，断面露出脚踝骨与坚韧的粉色肌腱，残留的血迹混着汗渍，让这只曾踏遍战场的脚现在沾满淫靡的血光。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "foot",
        resultDish: "liana_foot_dish",
        story: [
            "你抓起莉娅娜被切下的那只强壮有力的右脚，仰面躺在冰冷的地面上，把莉娅娜的这只断脚举到自己胯间。",
            "你用双手握住她的脚踝，像握着一面沉重的战盾，强行把她宽厚粗糙的脚掌按在自己完全勃起的肉棒上。然后，你开始用力让她的脚底来回踩踏你的肉棒。",
            "莉娅娜厚实的脚掌带着粗糙的茧和坚硬的脚底肉，沉重地死死踩在你的肉棒上。你双手按着她的脚踝，强迫她那只强壮的断脚用力向下碾压、踩踏、揉搓。脚底的厚茧和粗糙的摩擦感带来强烈的刺激，每一次踩踏都像女骑士在用脚底践踏你的尊严。",
            "你越踩越用力，把她的脚掌整个压在肉棒上，前后左右地碾动。脚趾有力地蜷曲，脚心宽厚的肉垫反复碾过你的龟头和棒身，带来一阵阵粗暴而沉重的快感，你的前列腺液把她强壮的脚底染得湿滑黏腻",
            "你一边喘着粗气，一边更加凶狠地按着她的断脚，脚底一次次用力碾压你的敏感部位，让她那只曾踩碎无数敌人的骑士之足，现在却只能卑贱地为你踩踏肉棒。",
            "终于，快感达到顶点。你死死按住莉娅娜的断脚，把她的整只脚掌用力踩在自己的肉棒上，随着一阵剧烈的抽搐，将大量滚烫浓稠的精液全部喷射出来。",
            "浓白的精液一股股喷溅在她宽厚的脚心、脚背、脚趾缝中，粘在脚心和你的小腹上。射精结束后，你依然没有松开她的脚，而是继续用她的脚底慢慢碾着疲软的肉棒和残留的精液，像在用女骑士的脚掌为你做最后的清理。"
        ]
    },
    liana_breast: {
        id: "liana_breast",
        name: "莉娅娜的乳房",
        type: "limb",
        desc: "一只被铠甲长期压迫却依然饱满挺拔的C杯乳房，属于女骑士莉娅娜·冯·斯特兰。没什么弹性，手感偏硬。蜜色皮肤光滑紧致，乳晕呈暗褐色，乳头小巧而坚挺，因死亡刺激而收缩，像两颗被晒干后微微硬起的葡萄。乳房形状圆润有力，断面露出乳腺组织与少量脂肪，鲜血从切口渗出。",
        cookable: true,
        ingredientType: "breast",
        resultDish: "liana_breast_dish",
        milkItem: "liana_milk",
        maxMilkCount: 3,
        milkStory: [
            [
                "莉娅娜被切下的一只C杯乳房被放入榨乳机，透明吸杯紧紧扣住她蜜色的乳肉。乳房形状饱满有力，暗褐色的乳晕和坚挺的乳头在吸力下迅速被拉长。机器启动后，乳汁很快被挤出，第一股颜色略带淡金，带着女骑士特有的汗水与铁锈混合的独特气息，喷射进收集瓶中，量不算少，却带着明显的野性张力。",
                "机器持续工作了十几分钟。。。",
                "乳肉在吸力下不断被拉扯、挤压，原本紧致的表面渐渐泛起一层细密的红痕，乳头被吸得又红又肿，乳晕边缘也因为反复刺激而微微肿胀。乳汁一股一股地被抽出来，带着淡淡的金属味和她生前战场上残留的汗香，收集瓶里的液体逐渐增多，最终得到了一瓶莉娅娜的鲜奶。"
            ],
            [
                "第二次榨乳开始时，莉娅娜的乳房已经明显不如第一次饱满。蜜色的乳肉在反复抽吸下开始出现松弛，乳头被吸得又红又肿，乳晕颜色加深。乳汁流出的速度明显变慢，颜色也变得更淡、更稀薄，断断续续地滴落，量只有第一次的一半左右，带着一丝被榨取后的疲惫感。",
                "机器持续工作了十几分钟。。。",
                "乳肉被反复拉扯后明显萎缩，表面布满细密的压痕和红肿，乳头肿胀得几乎变形，乳晕颜色暗沉无光。原本强健有力的乳房现在像被抽走一部分生命力，变得松软而干瘪，每一次吸杯的收缩都只能挤出少量稀薄的乳汁，发出微弱的滋滋声。最终得到了一瓶莉娅娜的鲜奶。"
            ],
            [
                "第三次榨乳时，莉娅娜的乳房已经接近干涸。乳肉被反复抽吸后严重萎缩，皮肤松松垮垮地皱在一起，乳头肿胀得几乎变形，乳晕暗沉无光。乳汁几乎只剩下几滴稀薄的液体，艰难地从乳头渗出，量少得可怜，颜色接近透明，带着一丝被彻底榨干后的空虚与苦涩。",
                "机器持续工作了十几分钟。。。",
                "乳肉已经完全塌陷，表面布满深深的皱纹和红肿压痕，乳头肿胀得又红又长，像两颗被反复虐待后干枯的果实。原本饱满有力的C杯乳房现在缩小了接近一半，只剩下松软干瘪的皮肤和残留的空虚脂肪层，每一次吸杯的收缩都只能挤出极少量的透明液体，发出微弱而空洞的滋滋声。乳汁几乎完全干涸。最终得到了一瓶莉娅娜的鲜奶。"
            ]
        ],
        driedBreastId: "liana_breast_dried"
    },
    liana_breast_dried: {
        id: "liana_breast_dried",
        name: "干瘪的莉娅娜的乳房",
        type: "limb",
        desc: "一只莉娅娜的C杯乳房，已经彻底干瘪。原本蜜色紧致、充满力量感的乳房现在皮肤皱巴巴地塌陷下去，表面布满细密的红痕和被吸杯勒出的圆形压痕。乳头肿胀得又红又长，乳晕颜色暗沉干枯，整个乳房缩小了接近一半，摸上去软塌无力，没有一丝弹性，只剩下被反复抽吸后残留的空虚脂肪层和干瘪的胸肌组织。曾经强健英武的女骑士的乳房，现在被彻底榨干、干瘪萎缩。像两团被遗弃的干肉袋，毫无生气地瘫软着。"
    },
    liana_arm: {
        id: "liana_arm",
        name: "莉娅娜的手臂",
        type: "limb",
        desc: "一条肌肉发达而充满力量感的手臂，属于女骑士莉娅娜·冯·斯特兰。皮肤呈现健康的蜜色，线条硬朗却带着女性特有的柔韧。小臂布满细小战斗伤痕，肱二头肌结实隆起。断面露出粗壮的臂骨与层层深粉色湿润肌肉，鲜血混着汗水流下，散发着战场上强烈的汗液与血腥混合的腥臊气息。",
        cookable: true,
        ingredientType: "arm",
        resultDish: "liana_arm_dish"
    },

    // ========== 骑士战马相关物品 ==========
    warhorse_penis: {
        id: "warhorse_penis",
        name: "骑士战马的阴茎",
        type: "misc",
        desc: "从骑士战马身上取下的阴茎，粗壮而骇人。长度惊人，表面布满粗大的血管，色泽深褐，散发着浓烈的雄性气息。",
        isSeasoning: true
    },
    warhorse_meat: {
        id: "warhorse_meat",
        name: "马肉",
        type: "misc",
        desc: "一大块从骑士战马身上割下的马肉，肉质紧实粗犷，颜色深红，散发着野性的血腥气息。",
        cookable: true,
        ingredientType: "leg",
        resultDish: "warhorse_meat_steak"
    },
    warhorse_head: {
        id: "warhorse_head",
        name: "骑士战马的马头",
        type: "misc",
        desc: "一颗被砍下的战马马头，曾经属于骑士团最勇猛的战马。鬃毛漆黑浓密，眼神已经黯淡无光，嘴唇微张露出坚固的牙齿。即使死后，仍散发着令人敬畏的气势。"
    },
    warhorse_meat_steak: {
        id: "warhorse_meat_steak",
        name: "马肉排",
        type: "consumable",
        desc: "用骑士战马的肉烹制的料理，肉质粗犷有力，带着野性的风味。食用后可永久提升攻击力。",
        effect: "atk",
        value: 2,
        ingredients: ["马肉", "盐", "迷迭香"],
        seasonings: ["salt", "rosemary"],
        cookStory: ["你将马肉放在炉灶上...", "肉质在高温下逐渐收紧...", "料理完成了，散发着粗犷的香气。"]
    },

    // ========== 塞西莉亚的肢体部位 ==========
    cecilia_head: {
        id: "cecilia_head",
        name: "塞西莉亚的头颅",
        type: "limb",
        desc: "一颗精致娇小的少女头颅，属于男爵女儿塞西莉亚·冯·兰德尔。乌黑的长发如瀑布般散乱，被鲜血浸湿后粘在苍白细腻的脸颊上。脸型小巧，眼睛大而圆润，睫毛又长又翘，嘴唇粉嫩薄薄地微微张开。脖颈断面细小整齐，鲜血从细嫩的颈部血管处喷溅后凝固成薄薄的暗红层，皮肤白得几乎透明，带着十八岁少女特有的稚嫩光泽。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "head",
        resultDish: "cecilia_head_dish",
        story: [
            "你单手托起塞西莉亚那颗娇小的头颅，像捧起一只精致洛丽塔娃娃的脑袋，把她乌黑的长发缠绕在自己手腕上固定住。",
            "你一只手拉出她粉嫩柔软的舌头，另一只手用匕首干净利落地将其整根割下。鲜血立刻从舌根涌出，顺着她的喉管滴落。你随手把那截还带着温度的粉嫩舌头扔到一旁。",
            "没有了舌头的阻碍，你把肉棒对准她粉嫩的喉管，尚软的肉棒轻轻一顶就整根滑进她狭小温暖的口腔。",
            "你像逗弄洋娃娃一样，慢慢前后摇晃她的头，让她的小嘴被动地套弄你的肉棒，牙齿在龟头上轻轻地摩擦。",
            "你的肉棒不断膨大，完全勃起时你的龟头直接整个穿出了男爵女儿的口腔，女孩的口水贴着你的肉棒流出，拉成丝状滴落下来。",
            "淫靡的口水帮助你更加顺利地滑动，你拉着黑色长发，断掉的头颅在你地肉棒上滑动，越来越快地刺激你的神经。",
            "你感觉你要高潮时，猛地将缠在手上的又黑又长的头发像勒马那样一拉，男爵女儿脖颈的断面紧紧地贴着你的下腹，你的龟头完全从娇小的口腔中探出。",
            "你再也无法忍耐，大量的精液喷涌而出，伴随着大量的口水从塞西莉亚的嘴中流下。",
            "她的头颅此刻就像一个人头精液喷泉，疯狂喷射着精液的龟头从口中探出，完全没有了一点贵家小姐的样子。",
            "肉棒疲软后，塞西莉亚的头颅甚至并没有因为失去支撑而脱落，你的龟头与她的喉管严丝合缝地卡住，成为了一体。",
            "你满意地将塞西莉亚地头发松开，任凭这个洋娃娃般的头颅挂在你的胯下，等待肉棒下一次挺立，这颗精致的、高雅的头颅再一次从口中喷出淫荡的精液。"
        ],
        onUseDestroy: true,
        onUseSpawn: ["cecilia_head_broken", "cecilia_tongue"]
    },
    cecilia_head_broken: {
        id: "cecilia_head_broken",
        name: "玩坏了的塞西莉亚的头颅",
        type: "limb",
        desc: "塞西莉亚那颗曾经精致娇小的头颅如今已彻底被玩坏。乌黑的长发被精液和口水打湿成一缕缕，黏糊糊地贴在苍白的小脸上。她的口腔大大张开，喉管被撑得变形，浓稠的白浊精液不断从被割掉舌头的血洞中缓缓溢出，顺着下巴滴落。这颗本该天真稚气的洛丽塔少女头颅，此刻彻底变为了一个被彻底灌满精液、狼藉不堪的淫靡便器。"
    },
    cecilia_tongue: {
        id: "cecilia_tongue",
        name: "塞西莉亚的舌头",
        type: "misc",
        desc: "塞西莉亚被完整拉出并割下的舌头。那截粉嫩柔软的小舌头小巧精致，表面还带着淡淡的粉色光泽，舌尖圆润，舌面细腻如婴儿般娇嫩。即使被切下，它依然保持着十八岁少女特有的柔软与稚气，舌根处残留着一小截鲜红的断面，微微渗着血丝。"
    },
    cecilia_torso: {
        id: "cecilia_torso",
        name: "塞西莉亚的躯干",
        type: "limb",
        desc: "这个被切断的躯干娇小而纤细，属于男爵女儿塞西莉亚·冯·兰德尔。腰肢极细，小腹平坦光滑，没有一丝赘肉。阴部没有一根杂毛，干净清爽。阴唇小巧紧闭，颜色呈浅粉色，阴道口非常狭窄而粉嫩，入口处褶皱细密，带着十八岁处女特有的紧致与稚嫩。躯干的肛门位于阴道口后方，同样小巧而粉嫩，褶皱细密整齐，如同一朵樱花。因为身体娇小，肛门显得格外紧致狭窄，几乎没有被开发过的痕迹，周围的皮肤细腻光滑，没有一丝皱纹或色素沉着。死亡后肛门微微松弛了一点，露出一点浅粉色的内壁，残留着少量透明的黏液与淡淡的体味。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "torso",
        resultDish: "cecilia_torso_dish",
        story: [
            "你抱起塞西莉亚那具娇小纤细的躯干，像抱起一只大型洛丽塔瓷娃娃，你撸动了一下你的肉棒让它变硬。",
            "你躺倒在地，整根粗硬的鸡巴便挤进了她紧致得几乎无法容纳的阴道，而她的阴道完全无法容纳你粗大的肉棒，你加大力气，直接将肉棒捅进了子宫中。",
            "你拿着失去四肢的躯干上下抽插，感受龟头不断进出子宫带来的紧致摩擦感。",
            "插入时你突然看见这个娇小的躯干上由于乳房被切下产生的两个血洞，感觉有失美感，将这个躯干旋转了一下，背对着你，旋转时，子宫正好为你的龟头提供了强烈的摩擦。",
            "你不再抽插，而是插入到最深，一直让你的龟头停留在塞西莉娅的子宫中，不停地旋转她的躯干，享受着子宫给予的别样快感。",
            "快感堆积到极限时，你将双腿立起，狠狠夹住躯干纤细的腰肢，把大量滚烫浓稠的精液全部喷射进她子宫最深处。",
            "失去四肢的躯干此刻正背对着你，随着你正在射精的肉棒的跳动而不断起伏着，接受着你的浓郁精液。",
            "当你想将肉棒退出时，紧致的阴道壁仿佛挽留一般拼命吸榨着你的肉棒，竟然让你的肉棒在阴道中再次勃起。",
            "你又用力插入塞西莉娅小小的子宫注入一发浓郁的精液，不断循环往复，直到子宫被你的精液几乎注满，白色液体从阴道中溢出来，你才恋恋不舍地拔出肉棒。",
            "躯干的小腹处鼓胀起来，你用手轻轻一按，白色的精液立马从阴道口喷射了出来。"
        ]
    },
    cecilia_leg: {
        id: "cecilia_leg",
        name: "塞西莉亚的腿",
        type: "limb",
        desc: "一条娇小纤细的腿，属于男爵女儿塞西莉亚·冯·兰德尔。长度适中却非常瘦弱，大腿圆润柔软，小腿细直。皮肤白皙细嫩，覆盖着几乎看不见的细软绒毛。大腿根部干净白嫩，断面露出细小的腿骨与柔软的粉红肌肉，鲜血顺着大腿根部缓缓流下，显得脆弱而诱人。",
        cookable: true,
        ingredientType: "leg",
        resultDish: "cecilia_leg_steak"
    },
    cecilia_foot: {
        id: "cecilia_foot",
        name: "塞西莉亚的脚",
        type: "limb",
        desc: "一只小巧可爱的脚，属于男爵女儿塞西莉亚·冯·兰德尔。脚掌小而精致，脚趾匀称整齐，脚背弧度柔美。脚上还穿着白色厚丝袜与黑色小皮鞋。被切下时丝袜与骨肉一齐应声而断，没有丝毫阻碍。丝袜被鲜血浸透后紧紧贴在皮肤上，脚底部分因穿小皮鞋而微微发红。断面露出细嫩的脚踝骨与粉色肌腱，就像一件精美的艺术品。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "foot",
        resultDish: "cecilia_foot_dish",
        story: [
            "你脱下断脚上还穿着的小皮鞋，把脱出的一只裹着白色厚丝袜的小脚并拢捧在手里。",
            "你把肉棒塞进她丝袜包裹的脚心和脚趾间，那层厚厚的白色丝袜带来一种柔软却带着细密纹路的奇妙摩擦感。你双手捧着她的小脚前后抽插，丝袜被前列腺液浸湿后变得又滑又黏。",
            "你拿起那双精致的小皮鞋凑到鼻尖前深吸一口气，少女特有的汗香与贵族的香水味不断刺激着你的肉棒与大脑。",
            "你越插越用力，白色的丝袜因为你的动作不断褪去，露出包裹着的娇嫩玉足。",
            "快感爆发时，你用她的双脚紧紧夹住自己的鸡巴，把大量滚烫的精液喷射在白色厚丝袜上，白色液体渗进丝袜纤维，顺着她小巧的脚趾缝和脚心大股流下，把原本纯洁的洛丽塔丝袜彻底弄脏。",
            "射精之后你看见面前摆放的精致的小皮鞋，你的肉棒罕见地又有了反应。你拿起小皮鞋套在肉棒上，看着它又不断膨大。",
            "你又拿起那只断足，将它穿进小皮鞋，让你的肉棒感受着塞西莉亚脚底的踩踏，小脚软嫩的触感和皮鞋坚硬的触感让你欲罢不能，快感又如通电一般通向全身。",
            "精液又一次喷射而出，射满了塞西莉亚断脚的脚底和小皮鞋内部，你给这只小脚穿好袜子，穿进小皮鞋。",
            "“吱呀”一声，精液从小皮鞋与断脚之间的空隙流出，沾满了小皮鞋和丝袜，把整只脚变得色情淫荡，你在手上把玩揉搓着这只小脚，欣赏着由你创作的又一件艺术品。"
        ]
    },
    cecilia_arm: {
        id: "cecilia_arm",
        name: "塞西莉亚的手臂",
        type: "limb",
        desc: "一条纤细柔弱的手臂，属于男爵女儿塞西莉亚·冯·兰德尔。皮肤白嫩如瓷，几乎没有一丝肌肉线条。手臂内侧特别细腻，能看到淡淡的蓝色血管。断面露出细小的臂骨与薄薄的粉色肌肉层，鲜血从切口轻轻流下，染红了原本洁白的皮肤。",
        cookable: true,
        ingredientType: "arm",
        resultDish: "cecilia_arm_dish"
    },
    cecilia_hand: {
        id: "cecilia_hand",
        name: "塞西莉亚的手",
        type: "limb",
        desc: "一只非常娇小细嫩的手，属于男爵女儿塞西莉亚·冯·兰德尔。手指纤细如玉，指甲修剪得圆润整齐，涂着淡淡的白色指甲油。掌心柔软无茧，皮肤白皙细腻。断口露出细小的手骨与粉嫩的肌肉，鲜血缓慢渗出，让这双曾优雅拿扇子或裙摆的手现在沾满血迹，显得格外脆弱。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "hand",
        resultDish: "cecilia_hand_dish",
        story: [
            "你将断手相对合拢，把已经完全勃起的肉棒塞进这对冰冷滑腻的掌心中，感受贵族少女从未干过重活的娇嫩手肉。",
            "你抓着塞西莉亚的手腕，让那双只细嫩的小手与你的手在肉柱上交替撸动，指尖划过冠状沟时带起一阵奇妙的冰冷触感。",
            "你将肉棒捅进断手的指缝中，在那些如葱根般的指根处疯狂摩擦，娇小的指骨因你的动作而发出轻微的碰撞声。",
            "由于这只手过于较小，几乎无法刺激你的龟头，你抓住断手的食指，用力一插，将这根白嫩的手指插入了你的马眼，剧烈的疼痛伴随着巨大的快感传来。",
            "你紧紧握着断手，让塞西莉亚的食指在你的尿道中抽插，拔出时整根手指都充满淫靡的腥臊气味。",
            "快感来临，你用力塞回手指，肉棒只是抽动了几下，一滴精液也没有射出，你感到憋得要命，将这只娇小的手拔了出来。",
            "巨大的快感与滚烫的精液终于得到了释放，猛烈喷射在塞西莉亚的娇小掌心与指缝间，大量白浊的液体流出她的手心，将这只白嫩的小手彻底玷污。"
        ]
    },
    cecilia_breast: {
        id: "cecilia_breast",
        name: "塞西莉亚的乳房",
        type: "limb",
        desc: "一只非常娇小的A罩杯乳房，属于男爵女儿塞西莉亚·冯·兰德尔。形状小巧挺拔，像两颗未完全成熟的嫩果，皮肤白皙细腻，乳晕呈浅粉色，乳头小而粉嫩，像两粒小小的樱桃。断面露出薄薄的脂肪层与粉嫩的乳腺组织，鲜血从切口渗出，让这只小小的乳房显得更加脆弱可怜。",
        cookable: true,
        ingredientType: "breast",
        resultDish: "cecilia_breast_dish",
        milkItem: "cecilia_milk",
        maxMilkCount: 1,
        milkStory: [
            [
                "塞西莉亚被切下的一只极小的A罩杯乳房被放入榨乳机，透明吸杯紧紧扣住她白皙稚嫩的乳肉。乳房形状小巧挺拔，像两颗未完全成熟的粉嫩果实，浅粉色的乳晕和细小乳头在吸力下迅速被拉长变形。机器启动后，乳汁很快被挤出，第一股颜色呈现出淡淡的粉白，带着少女特有的清甜奶香，喷射进收集瓶中。",
                "机器持续工作了十几分钟。。。",
                "小巧饱满的乳肉在强烈的负压下迅速萎缩，皮肤被吸得发红起皱，乳头被拉得又红又长，浅粉色的乳晕颜色逐渐变淡。乳汁流出的速度越来越慢，从最初的细流变成断断续续的滴落，最后几乎只剩下稀薄透明的液体艰难渗出。整个乳房在反复抽吸中迅速失去弹性，变得越来越松软干瘪，表面布满细密的红痕和被吸杯勒出的圆形压痕，最终得到了一瓶塞西莉亚的鲜奶。"
            ]
        ],
        driedBreastId: "cecilia_breast_dried"
    },
    cecilia_breast_dried: {
        id: "cecilia_breast_dried",
        name: "干瘪的塞西莉亚的乳房",
        type: "limb",
        desc: "一只塞西莉亚的A杯乳房，已经被彻底榨干，变得干瘪松弛。原本白皙细腻、像一颗粉嫩果实般的乳房现在严重萎缩，皮肤松松垮垮地皱成一团，表面布满细密的红痕和被吸杯勒出的圆形压痕。浅粉色的乳晕颜色变得暗淡，乳头肿胀得又红又长。"
    },

    // ========== 塞西莉亚的尸体 ==========
    cecilia_corpse: {
        id: "cecilia_corpse",
        name: "塞西莉亚的尸体",
        type: "limb",
        desc: "塞西莉亚的尸体。这个洛丽塔少女的娇小与稚嫩在这一刻凝固，长长的睫毛耷拉着，那双如珍珠的大眼睛似乎还透露着恐惧。尸体的皮肤白皙得没有任何瑕疵，触感软弹。那对如雪堆般洁白的小乳房由于极度的纯洁，在血泊中显得格格不入。她那双纤细的小脚还穿着精致的小皮鞋，脚踝细得仿佛一折即断。",
        usable: true,
        customAction: true,
        dismemberable: true,
        loot: ["urgent_order", "mansion_key", "lolita_dress", "white_thighhighs", "black_lolita_shoes"],
        corpseStory: [
            "你把塞西莉亚·冯·兰德尔那具完整而娇小的尸体抱起。她还保持着死亡前的模样。乌黑的长发如瀑布般垂落，散乱地披在你肩头。黑色洛丽塔裙装的层层蕾丝裙摆被你粗暴地掀到腰间，白色厚丝袜包裹着她纤细的大腿，黑色小皮鞋还穿在脚上，鞋面绣着小小的蝴蝶结，随着你的动作轻轻晃动。",
            "你双手托住她极细的腰肢，将这具轻盈的尸体整个抱起来，让她面对着你，双腿自然地分开缠在你腰侧。她的A罩杯娇小乳房被挤压在你胸前，隔着薄薄的蕾丝胸衣微微变形，浅粉色的乳头因死亡后的僵硬而微微挺立。",
            "你握住肉棒，对准她那粉嫩狭窄、从未被任何人侵犯过的处女阴道口，腰部猛地往上一挺——",
            "“滋……！”",
            "整根粗硬的肉棒凶狠地贯穿了她稚嫩的阴道。塞西莉亚的尸体猛地一颤，紧窄的内壁被硬生生撑开，鲜血立刻从交合处涌出，顺着她白色厚丝袜的大腿根往下流。",
            "你就这样站立着抱起她的尸体，开始大力抽插。每一次撞击都让塞西莉亚娇小的身体在你怀里上下颠簸。她那对A罩杯的小乳房在黑色蕾丝胸衣里剧烈晃动，像两颗柔软却脆弱的嫩果，随着你的抽插不断撞击你的胸膛，乳头在布料摩擦下变得更加挺立。",
            "她的四肢完全无力地垂挂着。纤细的双臂软绵绵地搭在你肩头，随着撞击而轻轻甩动；双腿被你架在腰侧，白色厚丝袜包裹的小腿和穿着黑色小皮鞋的脚丫在空中无助地晃荡，小皮鞋的鞋跟偶尔碰撞在一起，发出细微的”哒哒”声。",
            "塞西莉亚的脸上还保留着临死前的表情——那双又大又圆的黑色眼睛微微睁着，里面残留着极度的惊恐与不解，粉嫩的嘴唇微微张开，像在无声地发出最后的惊呼。乌黑的长发随着你的撞击不断甩动，偶尔扫过她的小脸，遮住她半边苍白而稚气的脸庞。",
            "你越操越狠，把这具完整娇小的尸体抱得更紧，像抱着一只大型的洛丽塔娃娃一样猛烈抽送。龟头一次次顶进她狭窄的子宫口，淫液不断流出，染湿了她白色的厚丝袜和小皮鞋。",
            "快感终于达到顶点。你死死抱紧她纤细的腰肢，将滚烫浓稠的精液全部射进她稚嫩的子宫深处。大量白色精液迅速灌满她小小的子宫，并从红肿的阴唇边缘大股溢出，顺着她白色厚丝袜的大腿根狂流不止，流到她娇小的臀部，滴落在裙子上。",
            "即使射精结束后，你依然没有把她放下，而是继续站立着抱住这具完整的尸体，让阴茎深深留在她体内，感受着她冰冷却依旧紧致的阴道轻轻收缩。塞西莉亚那张精致稚气的脸庞此刻紧贴着你的肩膀，黑色的大眼睛半睁着，粉嫩的嘴唇微微张开，像一个被彻底玩坏的、精致却破碎的洛丽塔娃娃。"
        ]
    },

    // ========== 塞西莉亚的掉落物 ==========
    lolita_dress: {
        id: "lolita_dress",
        name: "洛丽塔裙装",
        type: "armor",
        desc: "一套古典洛丽塔裙装：层层叠叠的黑色蕾丝裙摆搭配白色荷叶边，裙身点缀着精致的蝴蝶结。虽然沾染了些许血迹，但依然能看出其华贵的做工。",
        equipable: true,
        def: 1,
        slot: "body"
    },
    white_thighhighs: {
        id: "white_thighhighs",
        name: "白色厚丝袜",
        type: "armor",
        desc: "一双洁白的厚丝袜，质地柔软，能够包裹住纤细的大腿。虽然有些地方已经破损，但依然能感受到少女曾经穿着它时的纯真气息。",
        equipable: true,
        def: 0,
        agi: 1,
        slot: "legs"
    },
    black_lolita_shoes: {
        id: "black_lolita_shoes",
        name: "黑色洛丽塔皮鞋",
        type: "armor",
        desc: "一双精致的黑色小皮鞋，鞋面上绣着小小的蝴蝶结，散发着贵族少女特有的娇气与纯真。",
        equipable: true,
        def: 0,
        agi: 1,
        slot: "feet"
    },

    // ========== 伊莎贝拉的掉落物 ==========
    black_skirt: {
        id: "black_skirt",
        name: "黑色包臀裙",
        type: "armor",
        desc: "一件紧身的黑色包臀裙，裙摆短得几乎包不住臀部，完美展现穿着者的曲线。质地光滑，触感细腻。",
        equipable: true,
        def: 1,
        slot: "body"
    },
    black_lace_bra: {
        id: "black_lace_bra",
        name: "黑色蕾丝胸罩",
        type: "armor",
        desc: "一件精致的黑色蕾丝胸罩，边缘绣着细腻的花纹，散发着成熟女性特有的魅惑气息。",
        equipable: true,
        def: 0,
        slot: "body"
    },

    // ========== 伊莎贝拉的身体部位 ==========
    isabella_head: {
        id: "isabella_head",
        name: "伊莎贝拉的头颅",
        type: "limb",
        desc: "一颗充满成熟诱惑的女性头颅，属于男爵夫人伊莎贝拉·冯·兰德尔。金色波浪长发被鲜血浸湿，凌乱地贴在脸颊和脖颈上，散发着浓烈的香水味。脸型妩媚，五官精致而性感，嘴唇丰满红润，微微张开，露出湿润的舌尖。蓝色瞳孔还残留着临死前的震惊与不甘。脖颈断面整齐，鲜血从细嫩的颈部血管喷溅后凝固成黏腻的暗红层，皮肤白皙中带着十九岁少女特有的光泽。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "head",
        resultDish: "isabella_head_dish",
        story: [
            "你拎起伊莎贝拉沉重的、金色长发的头颅，将那张妩媚的脸蛋朝下，露出脖颈处那一圈还带着黏腻血迹、白皙肉感的断面。",
            "你撸动肉棒使其完全勃起，对准断面处那根深邃的喉管狠狠捅入，粗硕的肉棒直接没入喉道，将原本纤细的管壁撑到极限，你的龟头出现在头颅的口中。",
            "你双手按住头颅两侧，将这颗头颅像飞机杯一样大力按压抽插，感受龟头在湿润窄小的气管与食道间不断穿梭的顿挫感。",
            "伊莎贝拉丰满的唇瓣因喉道被粗暴占满而本能地张开，原本紧致的口腔被肉棒从内向外顶得微微变形。",
            "快感临近顶点时，你的双手用力按住伊莎贝拉那对丰满红润的嘴唇，合上因剧烈的抽插而微微张开的下巴，将这颗头颅彻底密封成一个精液容器。",
            "滚烫的精液一股脑喷射出来，浓稠的白色液体在密闭的颅腔内剧烈激荡，无处宣泄，最终由于巨大的压力，生生从她的鼻孔与眼眶中挤压喷出，流到红润的嘴唇上。",
            "你拔出肉棒，看着精液混着残血从脖颈断面处‘咕嘟’一声溢出。",
            "头颅最终掉落在地上，波浪金色卷发四散在地，鼻腔、双眼、嘴巴、喉管，任何一个孔窍中都流出浊白的精液，充满淫靡的气息。"
        ]
    },
    isabella_torso: {
        id: "isabella_torso",
        name: "伊莎贝拉的躯干",
        type: "limb",
        desc: "这个被切断的躯干丰满而充满肉欲，属于男爵夫人伊莎贝拉·冯·兰德尔。腰肢柔软却不失曲线，小腹平坦光滑，下身最醒目的是她那对极度丰满圆润的臀部——被黑色包臀裙残片紧紧勒住，臀肉饱满肥厚，像两团被长期压抑却随时想被男人狠狠揉捏的雪白蜜桃。臀瓣又圆又翘，皮肤细腻光滑，死亡后仍保持着惊人的弹性和重量。她的阴部同样丰满诱人：金色阴毛修剪得整整齐齐，覆盖在饱满肥厚的阴唇上方。阴唇厚实多汁，颜色呈深粉色，因为正在自慰而微微肿胀张开，阴道口狭窄却湿润得过分，能清楚看到内壁粉嫩的褶皱和一层厚厚的透明淫水——尽管仍是处女，那股被压抑多年的渴望却让大量黏滑的液体不断从穴口溢出。阴蒂小巧却挺立着，像一颗急于被吮吸的珍珠。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "torso",
        resultDish: "isabella_torso_dish",
        story: [
            "你将伊莎贝拉那具失去了头颅与四肢的、如同一块丰满白肉般的躯干横放在膝盖上。臀瓣由于失去了四肢的支撑而显得更加肥厚晃动，散发着浓郁的蜂蜜香水味与成熟女性特有的体香。",
            "你右手死死扣住她那对肥厚、雪白且因死后失禁而愈发滑腻的臀瓣，指尖深深陷进那层厚实的脂肪里，将胯间那根充血发紫的肉棒对准不断溢出淫水的肉穴狠狠捅入。",
            "肉棒瞬间被那一层层湿热紧致的褶皱包裹，由于她生前被压抑多年的渴望，阴道内壁分泌出的黏滑液体在你的剧烈抽送下发出‘滋滋’的搅动声，仿佛这具残躯还在贪婪地吮吸。",
            "你抓着这块沉重的白肉疯狂耸动，每一次撞击都让那肥厚的臀肉如浪花般剧烈颤动，龟头在湿红的阴道深处不断横冲直撞，最终直接射入了阴道中。",
            "你猛地拔出肉棒，带出一长串淫靡的拉丝，随后趁着肉棒还未疲软，对准后方那处从未被开发过的、紧皱而羞耻的肛门，借着阴道溢出的淫液用力插入。",
            "紧致的肛门被你强行撑开，死死箍住肉棒，产生与前方湿滑感截然不同的、近乎断裂的压迫感。",
            "你趴在她那依然温热丰腴的躯干上，在紧致的肛门中疯狂抽插，精液如火山喷发般尽数射入她那滚烫的直肠深处。",
            "你拔出肉棒，看着精液混从那两个并列的孔穴中同时流出，顺着她那肥厚雪白的臀缝滴落，曾经高不可攀的男爵夫人，此刻只剩下一块被你彻底灌满、玩弄的丰满肉块。"
        ]
    },
    isabella_leg: {
        id: "isabella_leg",
        name: "伊莎贝拉的腿",
        type: "limb",
        desc: "一条修长丰满的腿，属于男爵夫人伊莎贝拉·冯·兰德尔。被黑色丝袜紧紧包裹，大腿饱满圆润，小腿线条流畅，充满弹性。丝袜被鲜血浸透后贴在皮肤上，勾勒出诱人的曲线。断面露出粗壮的腿骨与丰厚的粉红肌肉，鲜血顺着大腿根部缓缓流下，把黑色丝袜染成妖艳的红黑。",
        cookable: true,
        ingredientType: "leg",
        resultDish: "isabella_leg_steak"
    },
    isabella_foot: {
        id: "isabella_foot",
        name: "伊莎贝拉的脚",
        type: "limb",
        desc: "一只被黑色薄丝袜包裹、穿着黑色高跟鞋的性感嫩脚，属于男爵夫人伊莎贝拉·冯·兰德尔。脚掌丰满，脚趾圆润，脚背弧度优美，脚踝纤细却肉感十足。黑色丝袜被鲜血浸湿后紧紧裹住脚背，脚底因长期穿高跟鞋而微微发红。断面露出粉嫩的脚踝骨与肌腱，周围包裹着的高级黑丝也整齐地断开。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "foot",
        resultDish: "isabella_foot_dish",
        story: [
            "你脱下断脚上那只性感的黑色高跟鞋，把脱出的一只裹着黑色薄丝袜的丰满玉足托在掌心。",
            "你将勃起的肉棒塞进她丝袜包裹的脚心与圆润的脚趾之间，黑色薄丝袜紧绷在丰满的脚肉上，带来一种丝滑且充满成熟肉感的极致挤压。",
            "你双手捧着这只肉感十足的脚前后抽插，薄薄的黑丝被前列腺液浸透后紧紧贴着娇嫩的皮肤，变得又滑又黏。",
            "你拿起那只细跟高跟鞋凑到鼻尖深吸一口气，十九岁少妇那浓烈的昂贵香水味混杂着脚底微红处的性感汗味，让肉棒更加肿胀不堪。",
            "你越插越用力，黑色的丝袜因为剧烈的动作顺着丰满的脚踝滑落大半，露出里面软嫩肥厚的性感脚底。",
            "快感爆发时，你用她丰润的脚死死夹住肉棒，将大量滚烫的精液猛烈喷射在黑色薄丝袜上。浓稠的白液渗入黑色的丝袜纤维中，顺着饱满的脚趾缝和肉感的脚心大股流下，白浊与黑丝交织，显得极度淫靡。",
            "射精之后，你看向面前摆放的那只尖锐性感的黑色高跟鞋，想象夫人死前正穿着它自慰，肉棒再次胀大。",
            "你拿起高跟鞋套在肉棒上，随后又抓起那只断足，强行将它重新塞进高跟鞋内。高跟鞋陡峭的弧度让丰满的脚心死死踩踏在肉棒上，软嫩肥厚的脚底肉与坚硬的皮革鞋底将肉棒死死夹在中间，冰火两重般的触感让快感如通电般传遍全身。",
            "精液再一次喷射而出，彻底灌满了高跟鞋的鞋尖与内部。你给这只沾满白浊的脚重新拉好黑丝，用力塞紧高跟鞋中。",
            "伴随着黏腻的“吧唧”声，白色的精液从黑色高跟鞋与黑丝断脚之间的空隙大量挤出，顺着高跟鞋的边缘滴落，你在手上把玩揉搓着这只被彻底弄脏的贵妇之脚，欣赏着这件充满肉欲的艺术品。"
        ]
    },
    isabella_arm: {
        id: "isabella_arm",
        name: "伊莎贝拉的手臂",
        type: "limb",
        desc: "一条圆润丰满的手臂，属于男爵夫人伊莎贝拉·冯·兰德尔。皮肤白皙紧致，线条柔美却带着成熟女性的肉感。手臂内侧特别细嫩。由于长期被紧身衣物包裹，这条手臂保留着一种被精心养护的奢靡质感，摸上去软弹而温暖，仿佛随时能溢出成熟女性的甜腻。断面露出粉红的肌肉层与白色臂骨，这条曾经只用来拥抱男爵或在丝绸床单上自慰的手臂，现在只是一个淫靡的残肢。",
        cookable: true,
        ingredientType: "arm",
        resultDish: "isabella_arm_dish"
    },
    isabella_hand: {
        id: "isabella_hand",
        name: "伊莎贝拉的手",
        type: "limb",
        desc: "一只丰满柔软的手，属于男爵夫人伊莎贝拉·冯·兰德尔。手指修长，指甲涂着深红色指甲油，仍然沾着自慰时产生的粘腻液体。掌心温暖细腻，没有一丝老茧。手背皮肤光滑，能看到淡淡的青色血管。断口露出粉嫩的肌肉与细小的手骨，鲜血缓慢渗出，让这双曾渴望抚摸男人身体的手现在只剩血润的色情光泽。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "hand",
        resultDish: "isabella_hand_dish",
        story: [
            "你拿起伊莎贝拉被切下的右手。这只手还带着她死前一刻自慰时留下的温度和黏腻。中指、无名指的指尖上沾满了她自己透明而浓稠的淫水，在深红色的指甲油映衬下闪着淫靡的光泽。",
            "你把这只断手翻转过来，半跪在地上，让那两根刚刚还在她自己阴道里疯狂抽插的、沾满淫水的手指朝上，对准自己的肛门。",
            "你深吸一口气，腰部猛地向后一沉——那两根曾经在她自己骚穴里疯狂自慰的手指，就这样带着她温热的体液，粗暴地捅进了你的肛门。你倒吸一口凉气，却立刻感觉到强烈的快感。",
            "伊莎贝拉的手指修长而柔软，你趴在了地上，用力按着她的手腕，让那两根手指在你的直肠里快速抽插，精准地按压着前列腺。",
            "你一边自己撸动肉棒，一边疯狂地用她的断手操着自己的屁眼。那两根手指带着她浓稠的淫水，在你的肠道里搅动，每一次按压前列腺都带来一阵几乎要射出来的强烈快感。",
            "你越插越深，越插越快，像要把她死前自慰的淫荡全部转移到自己身上。终于，在前列腺被她自慰手指反复刺激下，你发出低沉的喘息，肉棒剧烈跳动。",
            "滚烫浓稠的精液大股大股喷射而出，全部射在地上。射精结束后，你仍然没有立刻拔出她的手指，而是继续让那两根自慰过的手指深深插在自己肛门里，轻轻按压着仍在跳动的前列腺，享受着余韵。"
        ]
    },
    isabella_breast: {
        id: "isabella_breast",
        name: "伊莎贝拉的乳房",
        type: "limb",
        desc: "一只饱满挺拔的D罩杯乳房，属于男爵夫人伊莎贝拉·冯·兰德尔。皮肤白皙细腻，乳晕呈诱人的浅褐色，乳头较大而敏感，像两颗随时等待被吮吸的熟透肉珠。乳房手感如同棉花一样软弹，沉甸甸的，充满成熟女性的重量与弹性。断面露出丰厚的脂肪层与粉嫩乳腺，鲜血从切口渗出，让这对被黑色包臀裙紧勒了许久的丰乳显得更加淫靡。",
        cookable: true,
        ingredientType: "breast",
        resultDish: "isabella_breast_dish",
        milkItem: "isabella_milk",
        maxMilkCount: 4,
        milkStory: [
            [
                "伊莎贝拉被切下的那只饱满挺拔的D罩杯乳房被放入榨乳机，透明吸杯紧紧扣住她白皙丰润的乳肉。乳房沉甸甸的，充满成熟少妇特有的重量与柔软弹性，浅褐色的乳晕和较大敏感的乳头在吸力下迅速被拉长。机器启动后，乳汁很快被挤出，第一股颜色呈现出浓郁的乳白，带着她生前压抑已久的甜腻体香，喷射进收集瓶中，量颇为丰沛。",
                "机器持续工作了十几分钟。。。",
                "乳肉在强烈的负压下一次次被拉扯得扁平又鼓起，表面泛起一层细密的红痕，乳头被吸得又红又肿，浅褐色的乳晕颜色逐渐加深。原本沉甸甸充满弹性的D杯乳房在反复抽吸中渐渐失去最初的饱满，乳肉开始出现轻微松弛，每一次吸杯的收缩都带出更多浓稠的乳汁，发出黏腻的滋滋声响。乳汁颜色从浓白逐渐转为略带金黄的色泽，带着一丝成熟女性特有的甜腻气息，最终得到了一瓶伊莎贝拉的鲜奶。"
            ],
            [
                "第二次榨乳，伊莎贝拉的乳房依然保持着明显的饱满。白皙丰润的乳肉在反复抽吸下只是微微松软，乳头被吸得又红又肿，乳晕颜色略微加深。乳汁流出的速度有所减慢，但依然稳定，颜色变得稍淡，却仍有浓郁的甜腻感，带着一丝被榨取后的疲惫却依旧丰沛的余韵。",
                "机器持续工作了十几分钟。。。",
                "乳肉被反复拉扯后出现轻微的松弛，表面布满细密的压痕和浅浅的红肿，乳头肿胀得较为明显，但整体仍保持着可观的体积和弹性。原本沉甸甸充满弹性的D杯乳房现在只是稍显疲软，每一次吸杯的收缩都还能挤出较多乳汁，发出黏腻的滋滋声。乳汁颜色转为淡金偏白，带着一丝淡淡的甜腻与疲惫，余量似乎依然充足。最终得到了一瓶伊莎贝拉的鲜奶。"
            ],
            [
                "第三次榨乳时，伊莎贝拉的乳房已经开始明显萎缩。白皙丰润的乳肉在反复抽吸下严重松软，乳头被吸得又红又长，乳晕颜色加深暗沉。乳汁流出的速度大幅减慢，颜色变得稀薄，带着明显的枯竭感。",
                "机器持续工作了十几分钟。。。",
                "乳肉被反复拉扯后明显萎缩，表面布满细密的压痕和红肿，乳头肿胀得几乎变形，乳晕颜色暗沉无光。原本沉甸甸充满弹性的D杯乳房现在明显干瘪，每一次吸杯的收缩都只能挤出少量稀薄的乳汁，发出微弱的滋滋声。乳汁颜色接近半透明，带着一丝淡淡的甜味。最终得到了一瓶伊莎贝拉的鲜奶。"
            ],
            [
                "第四次榨乳时，伊莎贝拉的乳房已经接近完全干涸。乳肉被反复抽吸后严重塌陷，皮肤松松垮垮地皱在一起，乳头肿胀得又红又长，乳晕暗沉无光。乳汁几乎只剩下几滴稀薄的液体，艰难地从乳头渗出，量少得可怜，颜色接近透明，带着一丝被彻底榨干后的空虚与苦涩。",
                "机器持续工作了十几分钟。。。",
                "乳肉已经完全塌陷，表面布满深深的皱纹和红肿压痕，乳头肿胀得又红又长。原本饱满柔软的D杯乳房现在缩小了接近一半，只剩下软塌塌的空虚皮肤和残留的薄薄脂肪层，每一次吸杯的收缩都只能挤出极少量的透明液体，发出微弱而空洞的滋滋声。乳汁几乎完全干涸。最终得到了一瓶伊莎贝拉的鲜奶。"
            ]
        ],
        driedBreastId: "isabella_breast_dried"
    },
    isabella_breast_dried: {
        id: "isabella_breast_dried",
        name: "干瘪的伊莎贝拉的乳房",
        type: "limb",
        desc: "一只伊莎贝拉的D杯乳房，已经被彻底榨干，变得干瘪松弛。原本白皙丰润、充满成熟女性重量与弹性的乳房，现在却严重萎缩，皮肤松松垮垮地皱成一团。你盯着这只干瘪的乳房，心中涌起一丝难以置信——原本那对被黑色包臀裙紧勒得呼之欲出、充满淫靡重量与弹性的贵妇巨乳，竟然也会像如今这样枯竭干瘪，只剩下一团毫无生气的干肉袋。"
    },

    // ========== 伊莎贝拉的尸体 ==========
    isabella_corpse: {
        id: "isabella_corpse",
        name: "伊莎贝拉的尸体",
        type: "limb",
        desc: "伊莎贝拉的尸体倒在血泊中，那张曾经充满欲望的脸庞上还残留着错愕。金色长发被鲜血染红，黑色包臀裙下的身躯已经冰冷。可以拾取后在背包中搜刮或肢解。",
        usable: true,
        customAction: true,
        dismemberable: true,
        loot: ["urgent_order", "mansion_key", "black_skirt"],
        corpseStory: [
            "你把伊莎贝拉·冯·兰德尔那具完整而火辣的尸体抱起。她依旧穿着那套性感的黑色包臀裙，裙摆被掀到腰间，紧紧勒在丰满圆润的臀部上，勾勒出极具肉感的曲线。黑色薄丝袜包裹着她修长丰满的双腿，丝袜边缘被鲜血微微浸染，却依然紧贴着她白皙饱满的大腿，散发出成熟少妇特有的淫靡光泽。高跟鞋还穿在脚上，细长的鞋跟勉强触地。",
            "你双手从背后穿过她的腋下，猛地抓住她那对沉甸甸的D罩杯丰满乳房。乳房又软又弹，充满成熟女性的重量与弹性，你五指深深陷进乳肉里，几乎要把这对被黑色包臀裙紧勒了许久的巨乳完全掌握在掌心。乳晕呈诱人的浅褐色，乳头因死亡后的刺激而微微挺立。",
            "你就这样站立着把她的尸体整个抱起来，让她背对着你，双腿自然地被你架开。然后，你握住早已勃起的肉棒，对准她那丰满多汁、早已湿润的阴道口，腰部猛地往上一挺。",
            "整根粗硬的肉棒凶狠地贯穿了她饥渴的阴道。即使已经死亡，伊莎贝拉的阴道依旧淫荡而贪婪，厚实肥美的阴唇紧紧裹住你的肉棒，内壁层层叠叠地蠕动，像生前自慰时那样本能地吮吸、收缩。你双手用力抓着她那对沉甸甸的D罩杯乳房，开始猛烈地站立后入抽插。",
            "每一次撞击都让伊莎贝拉丰满的乳房在你掌心剧烈晃动，乳肉从指缝间溢出，软弹而沉重。你五指用力揉捏着这对巨乳，把玩着这两团极品肉球，乳头被你拇指和食指反复捻弄，挺立得更加淫靡。她的金色波浪长发随着撞击剧烈甩动，散发出浓烈的香水味。",
            "你用力抓着乳房将伊莎贝拉的尸体整个提起，她的四肢完全无力地垂挂着。修长丰满的双腿被你架在腰侧，黑色丝袜包裹的大腿根随着你的抽插不断晃荡，高跟鞋的鞋尖在空中无助地晃动；她的双手软绵绵地垂在身侧，指甲涂着深红色的指甲油，随着身体的撞击轻轻摆动，像在死后依然渴求着男人的抚摸。",
            "她的表情依旧带着生前淫荡而饥渴的模样。蓝色瞳孔半睁着，眼神迷离而空洞，丰满红润的嘴唇微微张开，像在发出无声的浪叫。脸颊上还残留着死前自慰时留下的潮红，嘴角甚至微微上翘，带着一种满足却又贪婪的淫靡神情。",
            "你越操越狠，双手死死抓着她那对沉甸甸的D罩杯乳房，像两只把手一样用力揉捏、拉扯，把乳肉挤压得变形又弹回。肉棒一次次凶狠地撞进她丰满湿滑的阴道深处，发出黏腻而响亮的撞击声。伊莎贝拉的尸体被动却淫荡地迎合着你，每一次撞击都让她的丰满臀部剧烈颤动，黑色丝袜被鲜血和淫水浸透，紧紧贴在饱满的大腿上。",
            "快感终于达到顶点。你死死抓住她那对被揉得变形却依旧软弹的巨乳，腰部猛地一挺，将滚烫浓稠的精液全部射进她冰冷却淫荡的子宫深处。",
            "大量白色精液灌满她的体内，从红肿肥厚的阴唇边缘大股溢出，顺着她黑色丝袜包裹的大腿根流到穿着黑色高跟鞋的美脚上。即使射精结束后，你依然没有把她放下，而是继续站立着抱住这具完整的尸体，让阴茎深深留在她体内，双手继续用力揉捏着她那对沉甸甸、沾满汗水的D罩杯乳房，感受着她死后依旧淫荡而贪婪的肉体余温。"
        ]
    },

    // ========== 索菲的掉落物 ==========
    maid_uniform: {
        id: "maid_uniform",
        name: "女仆服",
        type: "armor",
        desc: "一套略显宽大的女仆装，黑白相间的配色，裙摆下缘沾着些许水渍和皂角的痕迹。虽然朴素，但能看出曾经的整洁。",
        equipable: true,
        def: 1,
        slot: "body"
    },

    // ========== 索菲的身体部位 ==========
    sophie_head: {
        id: "sophie_head",
        name: "索菲的头颅",
        type: "limb",
        desc: "一颗因长期卑微生活而显得清瘦的少女头颅，属于女仆索菲·贝克。亚麻色的长发干枯且毛躁，凌乱地盖住大半张脸。她的皮肤呈现出一种不见阳光的病态粉白，睫毛颤抖着合拢，浅灰色的瞳孔在眼睑下隐约可见。嘴唇因常年紧闭而显得苍白单薄。脖颈断口极其细小，露出纤细的颈椎和由于缺乏营养而略显苍白的肌肉组织，鲜血缓慢地渗出，在那截脆弱的脖颈上留下凄惨的红痕。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "head",
        resultDish: "sophie_head_dish",
        story: [
            "你用温热的湿毛巾小心翼翼地擦拭索菲脸上的血污，五指轻柔地梳理她那头干枯、因缺乏营养而毫无光泽的亚麻色长发，将散乱的发丝别至耳后，露出她那张因常年劳作而显得苍白、清瘦的小脸。",
            "你举起女仆的头颅，亲吻她那双因对死亡的恐惧而微微颤抖、尚未完全合拢的苍白嘴唇，接着放到胯下，用她的嘴唇轻轻亲吻你的龟头，令肉棒完全勃起。",
            "你将勃起的肉棒极其缓慢地抵入她单薄、微张的唇瓣，动作轻微且谨慎，唯恐粗鲁的冲撞会弄坏她那纤细、脆弱的下颌骨。",
            "在缓慢的推入中，你始终用掌心托住她的后脑，指尖温柔地摩挲着她的耳垂，感受着她口腔内壁那由于卑微而显得格外紧致的包容。",
            "射精时，你紧紧将这颗头颅按在下腹，让滚烫的精液猛烈地填满她的喉管，随后抽出肉棒，将张开的口腔合上。像是在奖赏她从未有过的‘听话’。"
        ]
    },
    sophie_torso: {
        id: "sophie_torso",
        name: "索菲的躯干",
        type: "limb",
        desc: "这个瘦弱、苍白且明显营养不良的躯干属于女仆索菲·贝克。肋骨在单薄的皮肉下若隐若现，小腹因长期的顺从而显得卑微地凹陷。最显著的特征是她那布满红痕的膝盖和由于常年卑躬屈膝而显得瘦弱的臀部，臀肉并不丰满，甚至能摸到骨感，皮肤上带着长年穿着粗布衣物磨出的红印。阴部修剪得极为简陋，由于常年压抑，阴道口紧紧闭合，但在死亡的冲击下，却透着一种被动且纯净的湿意。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "torso",
        resultDish: "sophie_torso_dish",
        story: [
            "你仰面躺在潮湿的木地板上，粗壮而充血的肉棒在胯间狰狞地跳动。你伸出双手，抓紧索菲那具失去了四肢的轻盈躯干，将它在半空中倒转过来。",
            "你按住她那对瘦削的胯骨，将这具躯干当作一个人肉飞机杯，对准脖颈断面中心那处窄小、粉红的喉管用力插了进去。由于索菲长期营养不良，她的食道极窄，肉棒插入的瞬间，你清晰地感觉到那层薄薄的管壁被撑到了近乎透明的极限。",
            "你发力将躯干向下深扎，肉棒完全没入她的胸腔内部。你每抽插一次，管腔内的组织液与残留的鲜血就会顺着肉茎‘噗滋’一声挤压出来，溅落在你平坦的小腹上。",
            "你双手抓握住索菲的胸腔肋骨，疯狂地拉动这具躯干上下抽插。她那对布满红痕的大腿断面在空中无助地晃动，随着你的每一次抽送，原本单薄的胸腔发出沉闷的肉体碰撞声。",
            "在欲望爆发的临界点，你猛地坐起身，双手死死抓握她的臀部，将肉棒最深处抵住她胸腔内的软组织。随着一阵低吼，滚烫的精液如喷泉般尽数灌进那根窄小的喉管里。",
            "你拔出阴茎，看着精液混着残血从喉管中流出，索菲那具本就瘦弱的残躯此刻被白色的淫液涂抹得一团糟，精液在胸口的两个血洞中隐约可见。",
            "收拾完毕后，你随手将这具被用坏的躯体扔到一边，欣赏着它在月光下呈现出的那种卑微、残缺且淫靡的绝望美感。"
        ]
    },
    sophie_leg: {
        id: "sophie_leg",
        name: "索菲的腿",
        type: "limb",
        desc: "一条苍白、带有明显红痕的细腿，属于女仆索菲·贝克。膝盖处的老茧与由于过度跪地导致的暗沉色素沉着，在惨白的皮肤上显得格外刺眼。大腿内侧异常白皙细嫩，与膝盖的粗糙形成强烈的感官冲突。断面处露出细小的股骨与粉白的肌肉组织，由于常年劳累，肌肉在死后依然保持着一种僵硬的弧度，鲜血顺着苍白的腿部流下，将这条常年跪在冰冷地砖上的腿浸染得妖艳而凄凉。",
        cookable: true,
        ingredientType: "leg",
        resultDish: "sophie_leg_steak"
    },
    sophie_foot: {
        id: "sophie_foot",
        name: "索菲的脚",
        type: "limb",
        desc: "一只细小、包裹在女仆硬皮鞋中的脚，属于女仆索菲·贝克。脚掌瘦弱，脚趾因为长期穿着不合脚的旧鞋而略微蜷曲。脚后跟有明显的皴裂伤痕，脚踝纤细得仿佛一折即断。断面露出细嫩的踝骨，鲜血滴落在苍白的脚背上，散发着一股常年劳作后的、带着淡淡冷水气息的酸涩味。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "foot",
        resultDish: "sophie_foot_dish",
        story: [
            "你将这只冰冷的小脚紧贴在自己温暖的胸口，用体温去化解她脚趾缝间残留的寒意，动作轻缓得像是在照料一件珍贵的残损瓷器。",
            "你将阴茎抵在她瘦弱的足弓处，借着她脚心那点微红的汗渍和柔软的皮肤，进行规律而舒缓的摩擦。你避开了她那些薄薄的茧子，只专注于安抚这只疲惫的足尖。",
            "你低头含住她那圆润却略显苍白的脚趾，一根一根地吮吸，用舌尖拨弄着她纤细的脚踝骨，试图用这种方式抹平她生前在府邸长廊里无休止奔走的劳累。",
            "在高潮爆发的前夕，你把肉棒埋进这只细小的脚丫，龟头从脚趾间由于营养不良而显得骨感明显的缝隙中探出，享受那种紧致而卑微的包容。",
            "滚烫的精液溅落在她皴裂的脚心中。你没有立刻移开，而是用手掌将温热的精液抹匀，覆盖住那些由于劳作留下的累累伤痕。",
            "你看着这只终于‘休息’下来的小脚，在淫靡的白浊包裹下显得不再那么凄苦，仿佛这位女仆在死后的残缺中，终于得到了她梦寐以求的救赎。"
        ]
    },
    sophie_arm: {
        id: "sophie_arm",
        name: "索菲的手臂",
        type: "limb",
        desc: "一条纤细得近乎病态的粉白色手臂，属于女仆索菲·贝克。手臂上没有任何多余的肉，甚至能清晰地看到皮肤下淡紫色的静脉血管。由于长期搬运重物，细长的手臂内侧有几处淤青和长期紧绷留下的肌肉拉伤痕迹。两端的断面露出细小的肩骨与尺骨，粉白色的肌肉纤维由于生前的恐惧而紧缩，散发着一股廉价肥皂与淡淡的霉味。",
        cookable: true,
        ingredientType: "arm",
        resultDish: "sophie_arm_dish"
    },
    sophie_hand: {
        id: "sophie_hand",
        name: "索菲的手",
        type: "limb",
        desc: "一只娇小却布满劳作痕迹的的手，属于女仆索菲·贝克。手背皮肤因长期接触冷水而干裂，指节微肿，生着紫红色的冻疮。掌心布满了长期握紧抹布与刷子磨出的厚茧，指甲秃得露出肉红色的指尖。断面露出细弱的腕骨与苍白的筋膜，这双曾卑微地擦拭贵族皮鞋的手，此刻在血泊中呈现出一种近乎麻木的静谧感。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "hand",
        resultDish: "sophie_hand_dish",
        story: [
            "你轻轻呼出一口热气，试图温暖这对因常年浸泡冷水而变得冰凉生硬的小手，动作中带着一种近乎病态的怜爱。",
            "你将这只小手弯曲，抓握着你的肉棒，再借助她掌心那些冻裂的伤痕，感受一种充满生活艰辛的、粗粝却厚实的摩擦感，使肉棒快速地勃起。",
            "你抓着她的指尖，引导这双曾不断擦拭地板、洗涤衣物的小手，以一种极慢的速度在肉茎上滑动，仿佛在教导这位卑微的女仆如何通过服侍来换取片刻的安宁。",
            "你渐渐加快速度，让这只从未触碰过男人肉棒地小手体验着如何给主人带来极大的快感。",
            "你的肉棒在这青涩的服侍中逐渐抽动起来，随着高潮的来临，将精液射在她那干裂、生有厚茧的掌心里。随后你像涂抹高级护手霜一样，用手指将精液仔细地揉搓在她的小手上中。",
            "你看着这双被精液‘滋润’后的手，那层令人心疼的粗糙似乎被暂时掩盖了，显出一种被宠幸后的、扭曲的润泽感。"
        ]
    },
    sophie_breast: {
        id: "sophie_breast",
        name: "索菲的乳房",
        type: "limb",
        desc: "一只单薄、稚嫩且带着病态粉白的A杯乳房，属于女仆索菲·贝克。由于长期营养不良和繁重的家务劳作，胸部发育得较晚，仅有A罩杯的大小。乳晕呈现出极浅的淡红色，边缘模糊，乳头细小且由于死亡的寒冷而变得硬实，透着一种未被开垦的青涩感。皮肤白得近乎透明，能清晰地看到细小的淡紫色静脉在乳房表面延伸。断面露出薄薄的粉白色脂肪层与紧贴肋骨的胸肌，鲜血从切口处缓慢渗出，散发着一股淡淡的、混合了血水与廉价皂荚的酸涩气息。",
        cookable: true,
        ingredientType: "breast",
        resultDish: "sophie_breast_dish"
    },

    // ========== 索菲的尸体 ==========
    sophie_corpse: {
        id: "sophie_corpse",
        name: "索菲的尸体",
        type: "limb",
        desc: "索菲的尸体，身体单薄得令人心惊。她那亚麻色的长发凌乱地覆盖着半张苍白的脸，像是一朵枯萎的白花。由于常年不见阳光，她的皮肤呈现出一种近乎透明的粉白，青色的血管在皮肤下若隐若现。那对生满冻疮与厚茧的双手死死抓着破旧的女仆裙摆，露出红肿的老茧膝盖。她由于营养不良而显得瘦削的胸部微微塌陷，透着一种被彻底剥削后的、卑微的破碎感。",
        usable: true,
        customAction: true,
        dismemberable: true,
        corpseStory: [
            "你把索菲·贝克那具瘦弱的尸体压在冰冷的木地板上。她仰面躺着，亚麻色的长发凌乱地铺散在地面，苍白的小脸微微侧向一旁，浅灰色的眼睛半睁着，眼神空洞而麻木。宽大的粗布女仆裙被你粗暴地撕开，露出她因长期跪地而红肿、布满厚茧的膝盖，以及那对单薄的A杯乳房。",
            "你跪在她双腿之间，双手按住她纤细的肩膀，把她瘦弱的身体完全压在身下，然后握住肉棒，对准她那粉嫩紧闭、从未被任何人侵犯过的处女阴道口，腰部猛地一沉，整根粗硬的肉棒猛地插入了她稚嫩的阴道。",
            "索菲的尸体毫无反应。极度狭窄的阴道被硬生生撕开，鲜血立刻从交合处涌出，顺着她苍白的大腿根缓缓流下，染湿了粗布女仆裙的下摆。",
            "你开始大力抽插，每一下都深深捅进她冰冷紧致的体内。索菲那对单薄的A杯乳房被压扁在地面，淡粉色的乳晕和细小的乳头因摩擦而微微挺立。她的四肢完全无力地摊开在地面：纤细的双臂软绵绵地垂在身体两侧，手指因长期劳作而生着冻疮和厚茧，随着撞击轻轻颤动；双腿被你强行分开，红肿的膝盖和因跪地磨出的老茧在地板上摩擦，脚掌瘦弱苍白，脚趾微微蜷曲。",
            "她的表情依旧是那副麻木而卑微的模样——头颅侧着，浅灰色的眼睛空洞地望着前方，苍白的小脸紧贴着冰冷的地面，嘴唇微微张开，却没有发出任何声音。",
            "你越操越狠，双手死死按住她瘦弱的肩膀，把她整个身体压在身下猛烈撞击。肉棒一次次顶进她稚嫩的子宫口，鲜血和透明的体液被撞得四溅，染湿了她粗布女仆裙的下摆和红肿的膝盖。索菲那对单薄的乳房被你胸膛压得微微变形，随着每一次撞击而轻轻摩擦你的皮肤。",
            "快感终于达到顶点。你死死压住她纤细的身体，将滚烫浓稠的精液全部射进她冰冷的子宫深处。大量白色精液迅速灌满她小小的体内，从红肿的阴唇边缘大股溢出，顺着她苍白的大腿根和红肿的膝盖狂流不止，把她粗布女仆裙的下摆彻底弄脏。",
            "即使射精结束后，你依然没有立刻起身，而是继续压在她瘦弱的尸体上，让阴茎深深留在她略微回暖的阴道里，感受着她最后残留的紧致。索菲·贝克，这个永远卑微柔弱的女仆，此刻只是一具被彻底侵犯、精液从阴道不断溢出的尸体，静静地躺在你身下。"
        ]
    },

    // ========== 艾莲娜的掉落物 ==========
    music_score: {
        id: "music_score",
        name: "乐谱",
        type: "readable",
        desc: "一张泛黄的乐谱，上面用工整的笔迹记录着一首古老的桑华山民谣。乐谱的空白处还有艾莲娜自己的批注，字迹优雅而精致。",
        readable: true,
        content: "《桑华山的月光》\n\n桑华山的月光，洒在山路上，\n小溪在山间流过，送走我的悲伤。\n风从山脊吹过，带来她的呼唤，\n我梦中的美丽月亮，何时才能照亮我的彷徨？\n\n——艾莲娜·冯·罗森堡 整理"
    },

    // ========== 艾莲娜的身体部位 ==========
    elena_head: {
        id: "elena_head",
        name: "艾莲娜的头颅",
        type: "limb",
        desc: "一颗冷艳高贵的女性头颅，属于家庭教师艾莲娜·冯·罗森堡。银色长卷发被鲜血浸湿，凌乱地贴在脸颊和脖颈上，依然保持着优雅的波浪。脸型精致，青色瞳孔睁得很大，残留着临死前冰冷的震惊与不甘。鼻梁高挺，嘴唇薄而红润，微微抿着，像仍在维护最后的尊严。脖颈断面整齐，鲜血从细嫩的颈部血管喷溅后凝固成薄薄的暗红层，皮肤白皙如瓷，带着贵族特有的冷白光泽。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "head",
        resultDish: "elena_head_dish",
        story: [
            "你单手拎起艾莲娜·冯·罗森堡那颗还带着余温的头颅。银色长卷发如瀑布般垂落，沾满鲜血后却依然保持着冰冷高贵的波浪弧度。青色瞳孔半睁着，里面残留着临死前最后的震惊与不甘。",
            "你把她的头颅按在膝盖上，另一只手抽出匕首。刀刃贴着她精致白皙的耳根，慢慢用力切割。耳廓被整片割下，鲜血立刻从切口狂涌而出，顺着银色长发往下流。你随手把那只完整的耳朵扔到一边，像扔掉一件无关紧要的饰品。",
            "耳洞暴露出来——一个血淋淋的小洞，直通颅腔。你用手指粗暴地抠开伤口，把洞口撑得更大。温热的脑组织隐约可见，带着淡淡的血腥与她生前残留的墨水清香。",
            "你握住完全勃起的肉棒，对准那只被割开的耳洞，腰部猛地一挺。",
            "龟头挤进狭窄的耳道，粗暴地顶开柔软的脑组织。艾莲娜的头颅在你手里剧烈颤抖，青色瞳孔瞬间放大，像在无声尖叫。你继续用力推进，肉棒一路捅进她的大脑，感受着温热、柔软却又带着弹性的脑髓被强行撑开、撕裂的触感。",
            "每一次抽插，都能清楚感觉到龟头在脑组织里搅动，带出混着鲜血和脑浆的黏腻液体，顺着她的耳根和银色长发往下狂流。",
            "你像操一个活人一样大力抽插，把她的头颅当做专属的脑肉飞机杯。银色长卷发被鲜血和脑浆彻底打湿，贴在她冷艳的脸颊上。青色瞳孔因为剧烈震动而不断晃动，瞳孔逐渐扩散，嘴角有透明的脑液混合口水溢出。",
            "快感越来越强烈。你死死按住她的后脑，把肉棒整根没入耳洞最深处，龟头直接顶在脑髓深处。终于，你将滚烫浓稠的精液全部射进她的脑腔。大量白色精液与粉红色的脑组织混合在一起，从割开的耳洞、鼻孔、甚至微微张开的双眼里同时溢出，顺着她高贵的脸庞往下流淌。",
            "射精结束后，你慢慢拔出肉棒。艾莲娜的耳洞已经被撑得变形，混着精液和脑浆的白色黏液像泉水一样不断涌出。她的青色瞳孔彻底失去焦点，银色长卷发被彻底玷污成一团血与精液的混合物。"
        ],
        onUseDestroy: true,
        onUseSpawn: ["elena_head_broken", "elena_ear"]
    },
    elena_head_broken: {
        id: "elena_head_broken",
        name: "玩坏了的艾莲娜的头颅",
        type: "limb",
        desc: "艾莲娜那颗曾经高贵冷艳的头颅如今彻底毁坏。右耳被粗暴割掉后留下的洞口大大张开，里面混杂着白色精液和粉红脑浆，不断从耳洞、鼻孔和眼眶中缓慢溢出，顺着银色长卷发滴落。青色瞳孔已经完全扩散，眼神空洞而呆滞，曾经拒人于千里之外的冰山美人头颅，此刻成为了一个被彻底玩坏、脑子灌满精液的淫靡便器。"
    },
    elena_ear: {
        id: "elena_ear",
        name: "艾莲娜的耳朵",
        type: "misc",
        desc: "艾莲娜被整只割下的右耳。耳廓小巧精致，线条流畅如最细腻的瓷器雕塑，边缘圆润柔美，没有一丝瑕疵。皮肤白皙细嫩得近乎透明，在烛光下泛着冷玉般的光泽，耳垂饱满圆润，带着贵族女性特有的娇贵。曾经这位优雅庄重的女贵族用它来创作无数美妙的音乐。即使被残忍地从头颅上切下，它依然保持着一种冰冷而高贵的美感，仿佛随时能被镶嵌成一件珍贵的饰物。"
    },
    elena_torso: {
        id: "elena_torso",
        name: "艾莲娜的躯干",
        type: "limb",
        desc: "这是一个白皙且线条匀称的躯干，属于家庭教师艾莲娜·冯·罗森堡。脊椎笔直，肩膀平整，透着一种即便在死亡中也未曾崩塌的严谨感。皮肤呈现出一种冷调的象牙白，腹部平坦且肌肉松软。由于长期保持端正的授课姿态，她的腰肢显得修长且紧致。臀部轮廓清瘦，皮肤细腻得如同一张从未被玷污的白纸。阴部修剪得极为整齐，淡粉色的阴唇在死亡的僵硬下紧紧合拢。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "torso",
        resultDish: "elena_torso_dish",
        story: [
            "你抬起这副躯干，毫不怜惜地翻转过来，让她丰润却紧致的臀部朝上。",
            "你吐了口唾沫在手上，粗暴地抹在她那细密整齐的肛门褶皱上，然后握住早已充血发紫的肉棒，对准那处从未被开发过的窄小入口，腰部猛地向前一挺。",
            "“滋——！”肉棒带着蛮横的力量强行挤开她紧闭的肛门，粗大的龟头瞬间将那圈粉嫩的褶皱撑得变形。艾莲娜的躯干在你手中剧烈一颤，原本紧致的肛门被硬生生撑开成一个圆洞，内壁的嫩肉被粗暴撕扯，鲜血立刻从交合处渗出，顺着她白皙的臀缝流下。",
            "你毫不停顿，双手死死扣住她纤细的腰肢，凶狠地整根没入。",
            "她的肛门极度紧窄，强健的括约肌本能地收缩，却只能更紧地勒住你的肉棒，带来近乎撕裂般的压迫快感。你每一次抽出都带出粉红的肠肉和鲜血，再狠狠捅到底，撞得她整个躯干都在颤抖。",
            "随着你的撞击越来越猛烈，艾莲娜的肛门逐渐承受不住这种残暴的侵犯。粉嫩的肠壁被反复摩擦、撕扯，原本紧致的穴口开始慢慢外翻。每一次抽出，都能看见她那被操得红肿外翻的肛门肉。",
            "你越操越狠，完全不顾她躯干的颤抖和不断涌出的鲜血。终于，在一阵剧烈的撞击后，你死死按住她的腰，把滚烫浓稠的精液全部射进她被操得稀烂的直肠深处。",
            "拔出肉棒的瞬间，艾莲娜的肛门已经彻底脱出。原本粉嫩紧致的菊花被操得完全外翻，红肿的肠肉翻卷着挂在穴口外面，混着浓稠的白浊精液和鲜血不停地往外滴落。",
            "曾经高贵端庄的家庭教师，此刻只剩下一截被操到肛门脱出的残缺躯干，狼藉而淫靡地躺在书桌上。",
        ]
    },
    elena_leg: {
        id: "elena_leg",
        name: "艾莲娜的腿",
        type: "limb",
        desc: "一条修长、笔直且皮肤如冷玉般光滑的冷白色大腿，属于家庭教师艾莲娜·冯·罗森堡。肌肉分布均匀，呈现出一种缺乏运动的松软感，皮肤在月光下泛着近乎透明的质感。由于长期坐在硬木椅上授课，大腿后侧的压痕在死后依然清晰。断面处露出白皙的股骨头与丰厚的红色肌肉层，鲜血顺着膝盖的弧线蜿蜒流下，衬托得那抹冷白更加病态。",
        cookable: true,
        ingredientType: "leg",
        resultDish: "elena_leg_steak"
    },
    elena_foot: {
        id: "elena_foot",
        name: "艾莲娜的脚",
        type: "limb",
        desc: "一只小巧、足弓优美且趾尖圆润的脚，属于家庭教师艾莲娜·冯·罗森堡。脚部皮肤极其细腻，没有任何行走留下的粗糙痕迹，脚踝纤细。由于常年包裹在考究的皮鞋里，脚趾呈现出一种微微内扣的优雅弧度，每颗脚趾上都细心地涂上了银灰色的指甲油。断面露出细嫩的脚踝骨，鲜血滴落在如白瓷般的脚背上，呈现出一种淫靡的美感。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "foot",
        resultDish: "elena_foot_dish",
        story: [
            "你单手托起艾莲娜被切下的那只纤细优雅的右脚。伸出舌头，从她冰凉的脚背开始，一寸一寸地舔舐。",
            "你张开嘴，将她圆润的脚趾一根一根含入口中，仔细吮吸、舔弄，用舌头卷着每一根脚趾缝，品尝她皮肤上残留的淡淡汗香与死亡后的凉意。",
            "你越舔越投入，舌头从脚趾舔到脚心，再从脚心舔回脚背，把这只高贵的脚舔得湿漉漉一片，反射着烛光。艾莲娜那只曾经端庄无比的脚，脚趾缝里全是你的口水。",
            "你的另一只手早已握住自己勃起的肉棒，开始快速上下撸动。你用嘴叼着、吮吸着她的大脚趾，一边加快手上的速度。",
            "快感越来越强烈，你把她的整只脚掌都按在自己脸上，舌头疯狂地舔遍每一寸皮肤，同时右手猛烈地撸动肉棒。",
            "终于，在一阵剧烈的抽搐中，你将这只玉足按在肉棒上，喘息着将浓稠滚烫的精液全部喷射在她被舔得湿滑的脚心中，再慢慢流出有着精美弧度的足弓，流到脚背和脚踝上。",
            "你重新开始舌头缓慢地舔着她沾满精液的脚趾，把自己的精液一点点涂抹在她曾经高贵的脚上，像在为这只冰山美人的脚做全套”清洗”。",
            "艾莲娜那只纤细优雅的脚，此刻已被你的口水和精液彻底玷污，闪着淫靡的光泽。"
        ]
    },
    elena_arm: {
        id: "elena_arm",
        name: "艾莲娜的手臂",
        type: "limb",
        desc: "一条匀称且皮肤如瓷器般光滑的冷白色手臂，属于家庭教师艾莲娜·冯·罗森堡。手臂线条柔顺，没有多余的脂肪或肌肉突起，由于长期处于室内，皮肤薄得可以看见下方淡青色的静脉血管。内侧皮肤异常娇嫩细腻。断面露出圆润的肩骨与紧致的粉红色肌肉纤维，断面处隐约散发着一股常年与书卷为伴的淡雅墨水味，与粘稠鲜血的铁锈味混杂在一起。",
        cookable: true,
        ingredientType: "arm",
        resultDish: "elena_arm_dish"
    },
    elena_hand: {
        id: "elena_hand",
        name: "艾莲娜的手",
        type: "limb",
        desc: "一只修长、骨节分明且极具艺术感的手，属于家庭教师艾莲娜·冯·罗森堡。手指纤细如葱根，指尖圆润，中指侧面带有长期握笔留下的微小硬茧。指甲修剪得极为整齐，涂着银灰色指甲油。断面露出细小的手骨与鲜红的肌腱，鲜血缓慢渗出，让这只曾用于翻阅古籍和弹奏乐器的手呈现出一种脆弱且狼藉的视觉冲击。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "hand",
        resultDish: "elena_hand_dish",
        story: [
            "你拿起艾莲娜那只被切下的修长右手。手指纤细而骨节分明，指甲依然保持着银灰色的完美光泽。",
            "你强行把这只曾经只用来翻书、弹琴、书写高雅诗句的手手掌翻向上方，像乞丐一样微微弯曲手指，让掌心朝天，做出标准的乞讨姿势。",
            "你用另一只手按住她的手腕，强迫她保持这个下贱的乞讨姿态，然后将完全勃起的肉棒抵在她冰凉的掌心上。",
            "“来，乞讨吧。”你低声嘲讽着，一边用龟头在她掌心慢慢摩擦，一边欣赏这位冰山美人高贵的手被迫摆出乞讨的样子。",
            "艾莲娜修长的手指因你的动作而微微颤抖，却无法合拢，只能被动地摊开，像在无声地哀求施舍。",
            "你越撸越快，让滚烫的龟头不断撞击她细腻的掌心和指根。你故意把肉棒对准她微微弯曲的指缝，像把精液当成赏赐一样，一下一下地抽打在她乞讨的手掌上。",
            "快感达到顶点时，你死死按住她的手腕，强迫她把乞讨的手掌抬得更高，掌心完全朝上。你猛烈喘息着将大量滚烫浓稠的精液全部喷射在她摊开的掌心里。",
            "浓白的精液一股股落在她高贵的掌心、指缝和指根处，迅速积成一小滩，溢出后顺着她纤细的手指往下滴落。",
            "射精结束后，你没有立刻松手，而是把她的手掌微微倾斜，让多余的精液缓缓从掌心边缘流出，浇灌到你翘起的肉棒上。",
            "艾莲娜那只曾经优雅无比的手，此刻正以最卑微的乞讨姿态，盛满了你的精液，在烛光下闪着淫靡的光泽。"
        ]
    },
    elena_breast: {
        id: "elena_breast",
        name: "艾莲娜的乳房",
        type: "limb",
        desc: "一只挺拔、丰满且手感软弹的C罩杯乳房，属于家庭教师艾莲娜·冯·罗森堡。形状呈现完美的半球形，由于长期被保守的衬衣束缚，乳房表面皮肤冷白且紧致。乳晕颜色极浅，乳头在死亡的寒冷中傲然凸起，像两颗晶莹的粉红色果实。断面露出粉白色的脂肪层与深处的肌肉，现在这位优雅的女人最私密的部位已经彻底暴露在你的目光下。",
        cookable: true,
        ingredientType: "breast",
        resultDish: "elena_breast_dish",
        milkItem: "elena_milk",
        maxMilkCount: 3,
        milkStory: [
            [
                "艾莲娜被切下的那只C罩杯乳房被放入榨乳机，透明吸杯紧紧扣住她冷白细腻的乳肉。乳房形状挺拔端庄，浅粉色的乳晕和乳头原本被保守衣物严密包裹，此刻却在吸力下迅速被拉长变形。机器启动后，乳汁很快被挤出，第一股颜色呈现出清澈的乳白，带着她生前长期压抑的清冷体香，喷射进收集瓶中。",
                "机器持续工作了十几分钟。。。",
                "乳肉在强烈的负压下一次次被拉扯得扁平又鼓起，表面泛起一层细密的红痕，乳头被吸得又红又肿，浅粉色的乳晕颜色逐渐加深。原本保守挺拔的C杯乳房在反复抽吸中渐渐失去最初的端庄，乳肉开始出现轻微松弛，每一次吸杯的收缩都带出更多乳汁，发出黏腻的滋滋声响。乳汁颜色从清白逐渐转为略带粉润的色泽，带着一丝从保守躯壳中被强行释放的隐秘甜香。最终得到了一瓶艾莲娜的鲜奶。"
            ],
            [
                "第二次榨乳开始，艾莲娜的乳房已经明显不如第一次饱满。冷白细腻的乳肉在反复抽吸下开始出现松软，乳头被吸得又红又肿，乳晕颜色加深。乳汁流出的速度有所减慢，但依然稳定，颜色变得稍淡，却仍带着一丝被压抑后突然释放的甜腻感，带着一丝从保守外壳中被强行榨取后的疲惫余韵。",
                "机器持续工作了十几分钟。。。",
                "乳肉被反复拉扯后出现轻微的松弛，表面布满细密的压痕和浅浅的红肿，乳头肿胀得较为明显，但整体仍保持着可观的体积和弹性。原本保守挺拔的C杯乳房现在只是稍显疲软，每一次吸杯的收缩都还能挤出较多乳汁，发出黏腻的滋滋声。乳汁颜色转为淡粉偏白，带着一丝隐秘的甜腻。最终得到了一瓶艾莲娜的鲜奶。"
            ],
            [
                "第三次榨乳时，艾莲娜的乳房已经开始明显萎缩。冷白细腻的乳肉在反复抽吸下严重松软，乳头被吸得又红又长，乳晕颜色加深暗沉。乳汁流出的速度大幅减慢，颜色变得稀薄，带着明显的枯竭感。",
                "机器持续工作了十几分钟。。。",
                "乳肉被反复拉扯后明显萎缩，表面布满细密的压痕和红肿，乳头肿胀得几乎变形，乳晕颜色暗沉无光。原本保守挺拔的C杯乳房现在明显干瘪，每一次吸杯的收缩都只能挤出少量稀薄的乳汁，发出微弱的滋滋声。乳汁颜色接近半透明。最终得到了一瓶艾莲娜的鲜奶。"
            ]
        ],
        driedBreastId: "elena_breast_dried"
    },
    elena_breast_dried: {
        id: "elena_breast_dried",
        name: "干瘪的艾莲娜的乳房",
        type: "limb",
        desc: "一只艾莲娜的C杯乳房，已经被彻底榨干。原本冷白细腻、被高领长裙严密包裹、始终保持着冰山般端庄的乳房，竟能够淫荡地喷出如此大量的乳汁。这只乳房如今皮肤松松垮垮地皱成一团，表面布满细密的红痕和被吸杯勒出的圆形压痕，浅粉色的乳晕颜色变得暗淡干枯，乳头肿胀得又红又长。"
    },


    // ========== 艾莲娜的尸体 ==========
    elena_corpse: {
        id: "elena_corpse",
        name: "艾莲娜的尸体",
        type: "limb",
        desc: "艾莲娜的尸体优雅而僵硬地保持着蜷曲的姿势，暗银色的发丝与冷艳的脸庞沾满了墨水与鲜血。她那象牙色的冷白皮在月光下透着一种禁欲的质感。即便死后，她的脊椎依然保持着端正的线条。那件素雅的长裙被暴力扯开，露出一对形状完美、冷白柔嫩的C罩杯乳房。她那双曾书写诗篇的手此刻无力地摊开，中指的茧子成了她知性身份最后的烙印。",
        usable: true,
        customAction: true,
        dismemberable: true,
        corpseStory: [
            "你把艾莲娜·冯·罗森堡那具冰冷的尸体抱起，轻轻放在附近一个干净的台面上。",
            "她面对着你，背部平躺在桌面，银色长卷发如瀑布般散开在木质桌面上，青色瞳孔半睁着，眼神空洞而失去焦距，高傲冷峻的脸庞还残留着临死前的震惊与不甘。保守的高领长裙被撕扯到腰间，露出她白皙细腻的上身和C罩杯挺拔的乳房。乳房形状完美，皮肤冷白如瓷，浅粉色的乳晕和乳头因死亡后的僵硬而微微挺立，在烛光下泛着冰冷的光泽。",
            "你分开她修长笔直的双腿，让她面对你敞开。她的四肢完全无力地垂在桌沿：纤细的双臂软绵绵地搭在身体两侧，手指还保持着生前握笔时的优雅弧度，指甲涂着浅粉色的指甲油；双腿被你架开后，保守长裙的残片堆在腰间，露出白皙的大腿和粉嫩紧闭的阴部。",
            "你握住早已勃起的肉棒，对准她那从未被任何人触碰过的粉嫩阴道口，腰部猛地一挺，整根粗硬的肉棒立刻贯入了她冰冷的处女阴道。",
            "几乎在插入的瞬间，艾莲娜的尸体猛地一颤。她冰冷紧致的阴道被硬生生撑开，鲜血立刻从交合处涌出，顺着她白皙的大腿根缓缓流下。她的下体突然失控，一股温热的尿液不受控制地喷涌而出。这位冰山美人竟然在死后失禁了。",
            "透明的尿液从她被撑开的阴道口周围大股喷溅出来，撒在你的肉棒上，甚至溅到你小腹和胸口。尿液带着她生前残留的淡淡体香和一丝淡淡的温热，淋湿了你整个下体，顺着你的阴茎根部往下流淌，把交合处弄得一片湿滑狼藉。",
            "你没有停顿，继续大力抽插。每一次撞击都让艾莲娜挺拔的C罩杯乳房在桌面上剧烈晃动，乳肉软弹却带着贵族特有的紧致，乳头因摩擦而更加挺立。她的四肢随着你的撞击而轻轻晃动：双臂无力地垂在桌沿，手指偶尔因撞击而微微抽动；双腿被你架在腰侧，白皙的大腿内侧沾满尿液，随着抽插而四处飞溅。",
            "她的表情依旧保持着生前的冷峻与高傲——青色瞳孔半睁着，眼神空洞却带着一丝残留的震惊，薄而红润的嘴唇微微张开，像在发出无声的抗议。银色长卷发被尿液和汗水打湿几缕，贴在脸颊上，把她那张曾经拒人于千里之外的冰山美人脸庞彻底弄得狼藉。",
            "你越操越狠，肉棒在她冰冷却依旧紧致的阴道里疯狂抽送，尿液依旧被撞得四溅，混合着鲜血和淫液把整个台面和她的干净长裙彻底弄湿。她的C罩杯乳房随着每一次撞击而上下颠簸，乳肉在你眼前晃出诱人的弧度，乳头更加挺立。", 
            "快感终于达到顶点。你死死按住她纤细的腰肢，将滚烫浓稠的精液全部射进她冰冷的子宫深处。大量白色精液灌满她的体内，从红肿的阴唇边缘大股溢出，混合着她失禁的尿液一起顺着大腿根流出，把她白皙的皮肤和长裙彻底弄脏。",
            "射精结束后，你依然没有拔出，而是继续把她完整的尸体压在桌面上，让阴茎深深留在她体内，感受着她冰冷却依旧紧致的阴道轻轻收缩，以及她失禁后残留在你身上的温热尿液。"
        ]
    },

    // ========== 瑟蕾娜的掉落物 ==========
    magic_gem: {
        id: "magic_gem",
        name: "魔导宝石",
        type: "accessory",
        desc: "一颗散发着淡紫色光芒的神秘宝石，内部仿佛有星云在流转。蕴含着强大的魔力，能够大幅提升佩戴者的战斗力。",
        equipable: true,
        slot: "accessory",
        effect: "boost",
        atkPercent: 0.5,  // 增加50%攻击
        defPercent: 0.5   // 增加50%防御
    },

    // ========== 瑟蕾娜的身体部位 ==========
    serena_head: {
        id: "serena_head",
        name: "瑟蕾娜的头颅",
        type: "misc",
        desc: "一颗优雅到近乎完美的女性头颅，属于法师瑟蕾娜·紫雾。淡紫色长发如丝绸般垂落，每一根发丝都带着无法言喻的流畅光泽，仿佛被最纯净的魔力洗练过。脸型精致高贵，青紫色的瞳孔半睁着，残留着深邃而摄人心魄的冷冽光辉。嘴唇丰满红润，微微张开。脖颈断面整齐，鲜血从细嫩的颈部血管渗出，却无法掩盖她那超越凡人的极致美感。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "head",
        story: [
            "【占位符：瑟蕾娜头颅剧情尚未开发】"
        ]
    },
    serena_torso: {
        id: "serena_torso",
        name: "瑟蕾娜的躯干",
        type: "misc",
        desc: "这个被切断的躯干即使失去四肢与乳房，仍不失优雅的美感，属于法师瑟蕾娜·紫雾。腰肢纤细柔韧，每一寸曲线都流畅到极致，像被最精妙的魔力雕琢出的完美弧度。小腹平坦光滑，皮肤白皙细腻得近乎透明，带着无法言喻的魔力美感。下身阴部同样拥有极致美感，阴毛稀疏柔软，呈淡紫银色，每一根都带着近乎艺术品的细腻光泽。阴唇饱满精致，颜色呈诱人的淡紫粉，形状完美只称，阴道口狭窄却微微张开，内壁粉嫩湿润，带着超越凡人的紧致。阴蒂小巧玲珑，隐藏在完美的曲线中，像一颗被魔力唤醒的露珠。肛门位于阴道后方，同样粉嫩紧致，褶皱细密整齐，周围皮肤白皙无痕，更衬托出她下身那份极致而摄人心魄的美感。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "meat",
        story: [
            "【占位符：瑟蕾娜躯干剧情尚未开发】"
        ]
    },
    serena_leg: {
        id: "serena_leg",
        name: "瑟蕾娜的腿",
        type: "misc",
        desc: "一条修长有力却优雅到极致的腿，属于法师瑟蕾娜·紫雾。皮肤白皙细腻，线条流畅得如同最完美的雕塑，每一次光线变化都带来不同的惊艳。腿部比例完美无瑕，带着魔力般的和谐与诱惑。断面露出腿骨与丰厚粉红肌肉，鲜血顺着大腿根部流下，却更凸显出这双腿超越凡人的极致美感。",
        cookable: true,
        ingredientType: "leg",
        resultDish: "serena_leg_steak"
    },
    serena_foot: {
        id: "serena_foot",
        name: "瑟蕾娜的脚",
        type: "misc",
        desc: "一只纤细却美得惊心动魄的脚，属于法师瑟蕾娜·紫雾。脚掌柔软，脚趾匀称修长，脚背弧度优美到近乎艺术品，脚踝线条精致得让人移不开眼。断面露出脚踝骨与粉色肌腱，鲜血渗出，却无法掩盖这双脚那份被魔力浸润般的极致优雅与美感。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "foot",
        resultDish: "serena_foot_dish",
        story: [
            "【占位符：瑟蕾娜的脚剧情尚未开发】"
        ]
    },
    serena_arm: {
        id: "serena_arm",
        name: "瑟蕾娜的手臂",
        type: "misc",
        desc: "一条修长丰满的手臂，属于法师瑟蕾娜·紫雾。皮肤白皙细腻得近乎透明，每一寸线条都流畅优雅，带着无法复制的魔力般的完美比例。手臂内侧曲线柔美到极致，仿佛被最温柔却最强大的力量塑造。断面露出粉红肌肉层与臂骨，鲜血流下，却无法破坏那份极致而摄人的美感。",
        cookable: true,
        ingredientType: "arm",
        resultDish: "serena_arm_dish"
    },
    serena_hand: {
        id: "serena_hand",
        name: "瑟蕾娜的手",
        type: "misc",
        desc: "一只修长优雅得令人屏息的手，属于法师瑟蕾娜·紫雾。手指纤细，指甲呈现完美的深紫色光泽，指尖线条流畅到极致，像被最精妙的魔力雕琢而成。掌心细腻柔软，每一条掌纹都带着近乎艺术品的完美弧度。断口露出粉嫩肌肉与白色手骨，鲜血渗出，却更衬托出这双手超越常人的极致美感与魔力韵味。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "hand",
        resultDish: "serena_hand_dish",
        story: [
            "【占位符：瑟蕾娜的手剧情尚未开发】"
        ]
    },
    serena_breast: {
        id: "serena_breast",
        name: "瑟蕾娜的乳房",
        type: "misc",
        desc: "一只饱满挺拔的D罩杯乳房，属于法师瑟蕾娜·紫雾。皮肤白皙细腻得近乎完美，乳晕呈诱人的淡紫粉色，乳头小巧敏感，形状圆润沉甸甸，每一寸曲线都带着魔力般的和谐与极致诱惑。断面露出丰厚脂肪层，鲜血渗出，却让这只乳房显得更加惊艳而充满魔力韵味。",
        cookable: true,
        ingredientType: "breast",
        resultDish: "serena_breast_dish",
        milkItem: "serena_milk",
        maxMilkCount: 3,
        milkStory: [
            "【占位符：瑟蕾娜乳房榨奶剧情尚未开发】"
        ]
    },

    // ========== 瑟蕾娜的尸体 ==========
    serena_corpse: {
        id: "serena_corpse",
        name: "瑟蕾娜的尸体",
        type: "misc",
        desc: "瑟蕾娜的尸体倒在血泊中，那张极度优雅的脸庞上还残留着一丝错愕。淡紫色长发失去了往日的光泽，深紫色长袍下的身躯已经冰冷。可以拾取后在背包中搜刮或肢解。",
        usable: true,
        customAction: true,
        dismemberable: true,
        corpseStory: [
            "【占位符：瑟蕾娜尸体互动剧情尚未开发】"
        ]
    },

    // ========== 料理（腿部） ==========
    aisha_leg_steak: {
        id: "aisha_leg_steak",
        name: "监工炭火烤腿",
        type: "consumable",
        desc: "由艾莎的腿制作而成的炭火烤腿，表皮呈焦黑色，淡金色的汗毛被燎得卷曲，切开后肉汁混着血水流出来，里面的肌肉还是粉红的，断面的大腿骨烤成了褐色，骨髓凝固成乳白色，散发着硫磺与烤肉混合的粗犷香气，腿根处的细毛被血染湿，贴在紧致的皮肤上。",
        effect: "maxHp",
        value: 10,
        ingredients: ["艾莎的腿","油","盐"],
        seasonings: ["oil","salt"],
        cookStory: [
            "你用手指插进腿根的断口，将粗盐抹在温热的肌肉缝里，淡金色的汗毛在血迹映衬下格外明显，断面露出的大腿骨白森森的，你用力揉搓让盐粒渗进肌肉纤维；",
            "你用铁签穿过脚踝，架在煤炉上，炭火烧到暗红，油脂滴下去发出滋滋的声响，每隔五分钟刷一层油，蜜色的皮肤贴上滚烫的铁条；",
            "你翻转着腿部，继续刷油烤制了二十分钟，直到表皮呈现焦黑色，断面的大腿骨烤成褐色，骨髓凝固。",
            "料理已完成！获得了“监工炭火烤腿”"
        ]
    },
    liana_leg_steak: {
        id: "liana_leg_steak",
        name: "骑士剑串烤腿",
        type: "consumable",
        desc: "由莉娅娜的腿制作而成的剑串烤腿，表皮金黄酥脆，她常用的大剑贯穿其中，断面露出粗大的腿骨与发达的粉红肌肉，大腿内侧的淡金色汗毛被炭火烤得卷曲，贴在腿根，散发着黄油的奶香与迷迭香的草本气息混合着血腥与战场汗液的腥臊气息。",
        effect: "atk",
        value: 2,
        ingredients: ["莉娅娜的腿","迷迭香","骑士大剑"],
        seasonings: ["rosemary","knight_greatsword"],
        returnAfterCook: ["knight_greatsword"],
        cookStory: [
            "你将那条修长强健的腿用她自己的长剑从断面穿刺，剑身穿过大腿，剑尖从小腿内侧穿出，断面露出粗大的腿骨与发达的粉红肌肉，你涂抹黄油，让油脂渗入肌肉纤维，撒上迷迭香碎；",
            "你将剑架在烤架上，炭火烤制，油脂滴落在板甲上发出滋滋声，大腿内侧细嫩的皮肉慢慢收紧；",
            "你不断转动长剑，让腿部均匀受热，直到表皮呈现金黄酥脆的色泽，淡金色的汗毛被燎得卷曲。",
            "料理已完成！获得了“骑士剑串烤腿”"
        ]
    },
    cecilia_leg_steak: {
        id: "cecilia_leg_steak",
        name: "千金白丝炖腿",
        type: "consumable",
        desc: "由塞西莉亚的腿制作而成的白丝炖腿，白色厚丝袜紧紧包裹着娇小纤细的腿，被牛奶炖得半透明湿润，呈现出温润的乳白色，大腿根部干净白嫩，小腿细直，断面的细小腿骨与柔软的粉红肌肉浸在浓稠的奶液里，散发着香草与牛奶的甜香混合着白色丝袜纤维特有的气息。",
        effect: "agi",
        value: 2,
        ingredients: ["塞西莉亚的腿","牛奶","香草荚"],
        seasonings: ["milk","vanilla_bean"],
        cookStory: [
            "你提起那条娇小纤细的腿，白色厚丝袜还完好地包裹着纤细的大腿，丝袜被鲜血浸透后紧紧贴在皮肤上呈现出淡粉色，你将腿放入陶锅；",
            "倒入牛奶和剖开的香草荚，牛奶淹没大腿，白色丝袜在奶液里慢慢被浸透，大腿根部干净白嫩的肌肤在奶液里若隐若现，断面的细小腿骨露出柔软的粉红肌肉；",
            "你用小火将这条腿慢炖四十分钟，牛奶变得浓稠，丝袜的纤维与奶液融合，散发出甜香。",
            "料理已完成！获得了“千金白丝炖腿”"
        ]
    },
    isabella_leg_steak: {
        id: "isabella_leg_steak",
        name: "贵妇黑丝炖腿",
        type: "consumable",
        desc: "由伊莎贝拉的腿制作而成的黑丝炖腿，黑色丝袜紧紧包裹着修长丰满的腿，被牛奶炖得半透明湿润，呈现出妖艳的红黑色，大腿饱满圆润，小腿线条流畅充满弹性，断面露出的粗壮腿骨与丰厚的粉红肌肉浸在浓稠的奶液里，散发着香草与牛奶的甜香混合着黑色丝袜与伊莎贝拉丰满肉腿的浓烈肉香的混合气息。",
        effect: "maxHp",
        value: 15,
        ingredients: ["伊莎贝拉的腿","牛奶","香草荚"],
        seasonings: ["milk","vanilla_bean"],
        cookStory: [
            "你提起那条修长丰满的腿，黑色丝袜被鲜血浸透后紧紧贴在皮肤上，勾勒出饱满圆润的大腿曲线，你将腿放入大陶锅；",
            "你倒入牛奶淹没大腿，加入剖开的香草荚，黑色丝袜在奶液里慢慢被浸透，大腿根部丰满的肌肤在奶液里若隐若现，断面露出粗壮的腿骨与丰厚的粉红肌肉；",
            "你用小火慢炖了一小时，牛奶变得浓稠，黑色丝袜的纤维与奶液融合，散发出甜香。",
            "料理已完成！获得了“贵妇黑丝炖腿”"
        ]
    },
    sophie_leg_steak: {
        id: "sophie_leg_steak",
        name: "女仆凉拌腿肉",
        type: "consumable",
        desc: "由索菲的腿制作而成的凉拌腿肉，切片摆放在翠绿的生菜上，膝盖处老茧硬化成深褐色的切片与大腿内侧病态粉白的细嫩肉片形成强烈的颜色对比，皮肤半干半湿透着柠檬汁的清香，断面露出细小的股骨与粉白的肌肉组织，散发着柠檬汁的酸爽混合着橄榄油的清香与风干肉的韧劲。",
        effect: "def",
        value: 2,
        ingredients: ["索菲的腿","柠檬汁","盐","橄榄油","生菜"],
        seasonings: ["lemon_juice","salt","olive_oil","lettuce"],
        cookStory: [
            "你将那条苍白的细腿平放，膝盖处的老茧与色素沉着清晰可见，大腿内侧异常白皙细嫩，你用粗盐分别涂抹两个部位，腌制三日；",
            "你将腿悬挂在阴凉处半风干，直到皮肤半干半湿，膝盖老茧硬化，大腿保持细嫩；",
            "你将风干好的腿肉切片摆盘，膝盖部位深色老茧切片与大腿内侧粉白细肉交错摆放，淋上柠檬汁和橄榄油，配以生菜垫底。",
            "料理已完成！获得了“女仆凉拌腿肉”"
        ]
    },
    elena_leg_steak: {
        id: "elena_leg_steak",
        name: "艾莲娜腿排",
        type: "consumable",
        desc: "用艾莲娜的腿烹制的料理，优雅而精致。食用后可永久提升攻击力。",
        effect: "atk",
        value: 3,
        ingredients: ["莉娅娜的脚","盐","姜片"],
        seasonings: ["salt","ginger"],
        cookStory: [
            "你将艾莲娜的腿放在炉灶上...",
            "教师的优雅双腿在火焰中起舞...",
            "【占位符：艾莲娜腿排烹饪剧情】",
            "料理完成了，充满知性的味道。"
        ]
    },
    serena_leg_steak: {
        id: "serena_leg_steak",
        name: "瑟蕾娜腿排",
        type: "consumable",
        desc: "用瑟蕾娜的腿烹制的料理，蕴含着魔力。食用后可永久提升所有属性。",
        effect: "all",
        value: 5,
        ingredients: ["莉娅娜的乳房","莉娅娜的鲜奶","蜂蜜","吉利丁片"],
        seasonings: ["liana_milk","honey","gelatin_sheet"],
        cookStory: [
            "你将瑟蕾娜的腿放在炉灶上...",
            "法师的腿部散发着魔力波动...",
            "【占位符：瑟蕾娜腿排烹饪剧情】",
            "料理完成了，魔力充盈。"
        ]
    },

    // ========== 料理（头部-占位符） ==========
    aisha_head_dish: {
        id: "aisha_head_dish",
        name: "监工碧眼浓汤",
        type: "consumable",
        desc: "由艾莎的头颅制作而成的碧眼浓汤，已经失去了脸颊的基本形状。汤色呈乳白色，两颗碧绿的眼珠变得乳白浑浊，像两颗煮老的鹌鹑蛋浮在汤面，嘴唇煮得发烂，露出煮成白色的牙龈，热气带着甜腥味往上飘，断面的颈椎骨露出苍白的截面，散发着矿井深处特有的潮湿与血腥混合的气息。",
        effect: "maxHp",
        value: 10,
        ingredients: ["艾莎的头颅","水","薄荷"],
        seasonings: ["water","mint"],
        cookStory: ["你将艾莎的头颅按进铁锅，水面刚好没过眉毛，手指插进她的短发里搓洗，扯掉结块的煤灰，血沫子浮上来，断面的粉红色气管与深红颈椎骨清晰可见，碧绿色的瞳孔在水里半睁着；", "你点上火，水开后转小火，炖四十分钟，期间用勺子不断撇去浮沫，直到嘴唇在水里慢慢张开，露出牙龈，气管口冒出细小的气泡，碧绿色的瞳孔逐渐变得浑浊；", "你加入薄荷，又炖了十分钟，让薄荷的清凉渗入头骨与面部肌肉。", "料理已完成！获得了“监工碧眼浓汤”"]
    },
    liana_head_dish: {
        id: "liana_head_dish",
        name: "骑士红酒炖首",
        type: "consumable",
        desc: "由莉娅娜的头颅制作而成的红酒炖首，已经没有脸的基本形状。栗色长发在红酒里漂浮如海藻，红色瞳孔被酒液泡得略微浑浊，不再锐利，薄唇染成酒红色彻底煮烂，微微张开，脖颈断面的粗壮的颈动脉管腔里灌满了暗红色的酒液，散发着红酒的醇香混合着肉香与战场汗液的浓烈气息。",
        effect: "atk",
        value: 2,
        ingredients: ["莉娅娜的头颅","红酒","迷迭香"],
        seasonings: ["red_wine","rosemary"],
        cookStory: ["你摘下那颗头颅上戴着的头盔，解开栗色长发的高马尾，让湿漉漉的发丝散开在案板上，手指插进头发里梳理，扯掉凝固的血块，红色瞳孔在灯光下还半睁着，映出冷厉的光；", "你将头颅放进陶罐，倒入红酒直至淹没下巴，酒液渗进断面的颈动脉管腔，染成更深的暗红，加入迷迭香，小火慢炖两小时；", "你不断用勺子舀起红酒浇淋她的脸颊，让酒香渗入头骨，薄唇在酒液里微微张开，露出烂熟的舌尖。", "料理已完成！获得了“骑士红酒炖首”"]
    },
    cecilia_head_dish: {
        id: "cecilia_head_dish",
        name: "千金蜜糖渍首",
        type: "consumable",
        desc: "由塞西莉亚的头颅制作而成的蜜糖渍首，乌黑亮丽的长发在琥珀色蜂蜜里如瀑布般缠绕漂浮，苍白细腻的脸颊泛着蜜糖的光泽，大而圆润的黑色眼睛像两颗浸泡在蜜液里的黑珍珠，睫毛又长又翘沾着蜜滴，粉嫩薄薄的嘴唇微张露出一点舌尖，脖颈断面的细小血管凝固成暗红色的蜜渍，散发着玫瑰与蜂蜜的甜香混合着十八岁少女特有的稚嫩体香。",
        effect: "agi",
        value: 2,
        ingredients: ["塞西莉亚的头颅","蜂蜜","玫瑰花瓣"],
        seasonings: ["honey","rose_petal"],
        cookStory: ["你捧起那颗精致娇小的头颅，解开乌黑长发的丝带，让发丝散开在瓷盘里，手指梳理头发，扯掉凝固的血块，苍白细腻的脸颊还带着稚气，大而圆润的黑色眼睛半睁着；", "你将头颅放入蜜罐，蜂蜜淹没至头顶，少女头颅的乌黑长发在琥珀色蜜液里漂浮如瀑布，粉嫩薄薄的嘴唇微张，蜜液渗进断面的细小颈骨；", "你撒上玫瑰花瓣，将罐子密封腌渍了三日，让蜜液充分渗入头骨，眼睛被蜜液泡得更加圆润湿润。", "料理已完成！获得了“千金蜜糖渍首”"]
    },
    isabella_head_dish: {
        id: "isabella_head_dish",
        name: "贵妇金发浓汤",
        type: "consumable",
        desc: "由伊莎贝拉的头颅制作而成的金发浓汤，汤色呈浓稠的乳白色，金色波浪长发漂浮在汤面如熔化的蜂蜜，蓝色瞳孔被奶油泡得略微浑浊，丰满红润的嘴唇微张露出湿润的舌尖，脖颈断面的血管凝固成暗红色的奶油渍，散发着白葡萄酒的醇香混合着浓烈香水与成熟女性体香的气息。",
        effect: "maxHp",
        value: 15,
        ingredients: ["伊莎贝拉的头颅", "奶油", "白葡萄酒", "肉豆蔻粉"],
        seasonings: ["cream", "white_wine", "nutmeg"],
        cookStory: ["你捧起那颗充满成熟诱惑的头颅，解开金色波浪长发，让发丝散开在汤锅里，手指梳理头发，扯掉凝固的血块，丰满红润的嘴唇还微张着，露出湿润的舌尖，蓝色瞳孔半睁着；", "你倒入白葡萄酒淹没至头颅的眉骨，加入奶油和肉豆蔻粉，大火烧开后转小火慢炖，金色长发在奶白色的汤液里翻滚如熔化的蜂蜜；", "你不断用勺子舀起汤汁浇淋她的脸颊，让奶油渗入头皮，炖煮一小时直到汤汁浓稠，头颅在汤里轻轻晃动。", "料理已完成！获得了“贵妇金发浓汤”"]
    },
    sophie_head_dish: {
        id: "sophie_head_dish",
        name: "女仆果木熏首",
        type: "consumable",
        desc: "由索菲的头颅制作而成的果木烟熏首，亚麻色长发干枯如稻草般缠绕在头颅周围却带着苹果木的清香，皮肤呈现出病态的粉白色且紧绷干裂，本苍白的眼珠已萎缩凹陷在眼窝里，苍白单薄的嘴唇干裂微张露出细小的牙齿，脖颈断面的纤细颈椎骨露出苍白的截面，散发着苹果木的清香混合着迷迭香的草本气息。",
        effect: "def",
        value: 2,
        ingredients: ["索菲的头颅", "苹果木屑", "盐", "迷迭香"],
        seasonings: ["apple_wood_chips", "salt", "rosemary"],
        cookStory: ["你将索菲那颗清瘦的头颅提起，亚麻色长发干枯毛躁如稻草，你用清水冲洗头发，扯掉凝固的血块，苍白单薄的脸颊还带着驯服的神情，浅灰色瞳孔半睁着露出眼底；", "你将头颅悬挂在通风处，用粗盐涂抹断面和脖颈，撒上迷迭香碎，让盐粒渗入纤细的颈椎；", "你用苹果木屑将头颅冷烟熏制七日，直到头皮紧绷如鼓皮，头发吸附木香的清甜，嘴唇干裂发白却透着淡淡的果香。", "料理已完成！获得了“女仆果木熏首”"]
    },
    elena_head_dish: {
        id: "elena_head_dish",
        name: "教师银丝清汤",
        type: "consumable",
        desc: "由艾莲娜的头颅制作而成的银丝清汤，汤色清亮透明，银色长卷发漂浮在汤面如瀑布般泛着冷冽光泽，青色瞳孔被汤汁泡得略微浑浊却依然冷艳，苍白如瓷的脸颊透着温润，薄唇微抿，脖颈断面的颈椎骨露出苍白的截面，散发着雪莉酒的醇香混合着清鸡汤的鲜美。",
        effect: "atk",
        value: 3,
        ingredients: ["艾莲娜的头颅","雪莉酒","鸡肉"],
        seasonings: ["sherry","chicken"],
        cookStory: ["你将那颗冷艳高贵的头颅捧起，银色长卷发如瀑布般散开，手指梳理发丝，扯掉凝固的血块，青色瞳孔半睁着映着冷光，你用鸡肉熬成的鸡汤冲洗苍白如瓷的脸颊；", "你将头颅放入砂锅，倒入清鸡汤淹没至眉骨，加入雪莉酒，小火慢炖三小时，让酒香渗入头骨，银色长发在汤里翻滚如丝；", "你不断舀起汤汁浇淋她的额头，直到头皮紧绷，薄唇微抿，汤面浮着一层清亮的油花。", "料理已完成！获得了“教师银丝清汤”"]
    },
    serena_head_dish: {
        id: "serena_head_dish",
        name: "瑟蕾娜头料理",
        type: "consumable",
        desc: "【占位符：瑟蕾娜头部料理描述】",
        effect: "all",
        value: 5,
        ingredients: ["莉娅娜的脚","盐","姜片"],
        seasonings: ["salt","ginger"],
        cookStory: ["【占位符：头部料理烹饪剧情】"]
    },

    // ========== 料理（躯干-占位符） ==========
    aisha_torso_dish: {
        id: "aisha_torso_dish",
        name: "监工血肉拼盘",
        type: "consumable",
        desc: "由艾莎的躯干制作而成的血肉拼盘，臀肉呈深红色，肌肉纤维致密，表面泛着血光，腹肌切块摆在周围像粉红色的砖块，中央的那团血肉还在渗出血水，阴毛粘在上面，穴口微张，散发着一股混杂着汗水与原始体味的浓烈野性腥甜，整体呈现出一种充满力量的野性美感，阴部的深色阴毛与浅麦色的皮肤形成对比。",
        effect: "maxHp",
        value: 20,
        ingredients: ["艾莎的躯干","盐"],
        seasonings: ["salt"],
        cookStory: ["你将躯干翻过来，屁股朝上，用刀沿着臀沟划下去，切下最肥美的臀尖肉，露出里面粉红的肉和白色的脂肪层，肌肉紧实回弹有力，那因常年攀爬矿坑而变得极其紧致挺翘的臀部肌肉纤维密度极高；", "你挖出一团阴部的血肉，放在盘子中央，那地方还张着，阴毛乱糟糟的，浓密的深色阴毛覆盖着饱满的阴唇，穴口由于常年周旋于家主与监工之间而显得色情地微张，散发着一股混杂着汗水与原始体味的浓烈气息；", "你撒上矿盐，用手指抹匀，让血水慢慢渗出来，腹肌切块摆在周围，臀肉呈扇形摆放。", "料理已完成！获得了“监工血肉拼盘”"]
    },
    liana_torso_dish: {
        id: "liana_torso_dish",
        name: "骑士马鞭蒸躯",
        type: "consumable",
        desc: "由莉娅娜的躯干与骑士战马的阴茎制作而成的马鞭蒸躯，骑士与她最爱的战马终于紧密地融合在了一起。骑士腰肢紧实有力，小腹平坦腹肌线条清晰，浓密的深红色阴毛覆盖着被撑开的暗红色阴道口，马阴茎的粉白海绵体插在阴道中，顶端露出宫颈口，散发着马腥与女性淫液混合的浓烈气息，会阴处裂开的伤痕渗出发白的肉汤，散发出一股肉香。",
        effect: "atk",
        value: 3,
        ingredients: ["莉娅娜的躯干","骑士战马的阴茎","姜片","葱"],
        seasonings: ["warhorse_penis","ginger","scallion"],
        cookStory: ["你将骑士战马那根粗大的马阴茎剥去外皮，露出粉白的海绵体，掰开莉娅娜紧闭的阴道口，将马阴茎用力深深插入，直到骑士的阴道完全将这根巨大的阴茎吞没，会阴处裂开的伤痕被撑开，渗出混合着淫液的血水；", "你将插入马鞭的躯干放入蒸锅，马阴茎的根部卡在阴道口，姜片和葱段铺在周围，大火蒸制，蒸汽中马阴茎在阴道内膨胀，与子宫内壁贴合；", "蒸一个小时后打开锅盖，马阴茎与阴道内壁粘连，抽出时带出透明的黏液，阴道口呈现被撑开后的暗红色。", "料理已完成！获得了“骑士马鞭蒸躯”"]
    },
    cecilia_torso_dish: {
        id: "cecilia_torso_dish",
        name: "千金酿奶蒸躯",
        type: "consumable",
        desc: "由塞西莉亚的躯干制作而成的酿奶蒸躯，腰肢极细小腹平坦光滑，处女阴部的浅粉色阴唇微张，从狭窄的阴道口里流出塞西莉亚自己的乳白色奶液，肛门处溢出玫瑰色的酱汁与透明黏液混合，紧致狭窄的肛口呈现被撑开后的浅粉色褶皱细密整齐，如同一朵樱花，散发着蜂蜜与玫瑰的甜香混合着处女阴部特有的稚嫩腥甜气息。",
        effect: "agi",
        value: 3,
        ingredients: ["塞西莉亚的躯干", "塞西莉亚的奶", "蜂蜜", "玫瑰花瓣"],
        seasonings: ["cecilia_milk", "honey", "rose_petal"],
        cookStory: ["你将那娇小而纤细的躯干平放，腰肢极细，小腹平坦光滑，你掰开处女紧闭的浅粉色阴唇，阴道口非常狭窄粉嫩，你将塞西莉亚的新鲜奶液与蜂蜜混合，用细管注入阴道深处，直到奶液从紧致的穴口溢出，又将捣碎的玫瑰花酱填入清洗后的肛门，那紧致狭窄的肛口被撑开，露出浅粉色的内壁；", "你将躯干放入蒸锅，奶液在处女阴道里受热蒸发，使阴道充满了奶味，玫瑰花酱在肛门里深入皮肤，与残留的透明黏液混合；", "你将塞西莉亚的躯干蒸制二十分钟，躯干的阴道口流出滚烫的奶液，肛门处溢出玫瑰色的酱汁，会阴处干净清爽的皮肤泛着蒸汽的红润。", "料理已完成！获得了“千金酿奶蒸躯”"]
    },
    isabella_torso_dish: {
        id: "isabella_torso_dish",
        name: "贵妇精液酿躯",
        type: "consumable",
        desc: "由伊莎贝拉的躯干、乳汁与骑士战马的精液制作而成的精液酿躯，腰肢柔软曲线明显，小腹平坦光滑，丰满的臀部被蒸得泛红，臀肉饱满肥厚像两团被蒸熟的雪白蜜桃，金色阴毛修剪得整整齐齐覆盖在上方，深粉色的阴唇微张，从狭窄的阴道口里流出凝固的奶白色精液与乳汁混合物，肛门处溢出玫瑰色的酱汁，散发着精液与乳汁混合的腥甜气息混合着成熟女性处女肉香与淫水的浓烈肉欲气息。",
        effect: "maxHp",
        value: 25,
        ingredients: ["伊莎贝拉的躯干", "伊莎贝拉的奶", "骑士战马精液", "红枣"],
        seasonings: ["isabella_milk", "knight_semen", "red_date"],
        cookStory: ["你将那丰满的躯干平放，腰肢柔软曲线明显，你掰开正在自慰而微微肿胀张开的深粉色阴唇，阴道口狭窄却湿润，能看到内壁粉嫩的褶皱和厚厚的透明淫水，你将精液与奶液混合，用细管注入阴道深处，直到混合液从紧致的穴口溢出；", "你将剩余的精奶混合物填入肛门，那紧致狭窄的肛口被撑开，露出浅粉色的内壁，再将剩余的精液奶液混合物灌入直肠；", "你将躯干放入蒸锅蒸制，阴道口和肛门处溢出凝固的奶白色粘稠汁液，丰满的臀部被蒸得泛红，臀肉饱满肥厚像两团雪白的蜜桃。", "料理已完成！获得了“贵妇精液酿躯”"]
    },
    sophie_torso_dish: {
        id: "sophie_torso_dish",
        name: "女仆香草腌躯",
        type: "consumable",
        desc: "由索菲的躯干制作而成的香草腌躯，肋骨在紧缩的皮肉下清晰可见如琴键，小腹凹陷处积着腌制的油脂，瘦弱的臀部骨感突出，皮肤呈现出浅褐色且紧绷，布满红痕的膝盖被腌制成深红色，阴部简陋修剪的亚麻色阴毛粘连在一起散发着香草气息，阴道口紧闭透着被动纯净的湿意，散发着百里香与月桂叶的清香混合着橄榄油的醇厚与风干肉的咸鲜。",
        effect: "def",
        value: 3,
        ingredients: ["索菲的躯干", "盐", "香草荚", "月桂叶", "橄榄油"],
        seasonings: ["salt", "vanilla_bean", "bay_leaf", "olive_oil"],
        cookStory: ["你将那瘦弱的躯干平放，肋骨在单薄的皮肉下若隐若现如琴键，你用橄榄油涂抹全身，特别是布满红痕的膝盖和骨感的臀部；", "你用粗盐、百里香和月桂叶涂抹躯干全身，让香料渗入阴道口紧闭的缝隙和简陋修剪的阴毛根部，腌制十五日；", "你将躯干悬挂风干，直到皮肉紧缩，肋骨轮廓清晰可见，臀部骨感突出，透着香草的气息。", "料理已完成！获得了“女仆香草腌躯”"]
    },
    elena_torso_dish: {
        id: "elena_torso_dish",
        name: "教师冷玉刺身",
        type: "consumable",
        desc: "由艾莲娜的躯干制作而成的冷玉刺身，切片薄如蝉翼摆放在翠绿的紫苏叶上，冷调的象牙白肌肤透着酱油的琥珀光泽，脊椎笔直如琴键，腰肢修长紧致，臀部清瘦轮廓清晰，淡粉色的阴唇摆在旁边，断面露出粉白的脂肪层与紧致的肌肉纤维，散发着山葵的辛辣混合着酱油的咸鲜与艾莲娜的特有气息。",
        effect: "atk",
        value: 4,
        ingredients: ["艾莲娜的躯干", "山葵酱", "酱油", "紫苏叶"],
        seasonings: ["wasabi_paste", "soy_sauce", "perilla_leaf"],
        cookStory: ["你将那白皙匀称的躯干平放，脊椎笔直，冷调的象牙白皮肤泛着光泽，你用薄刃沿着腰肢修长紧致的线条切下薄片，刀锋划过冷白的肌肤，露出粉红的肌肉纹理；", "你将切好的肉片摆放在紫苏叶上，腹部平坦的肌肉薄片与臀部清瘦的切片交错排列，淋上酱油，涂抹山葵酱在断面；", "你将躯干摆成侧卧姿态，切下淡粉色的阴唇，整齐修剪的阴毛沾上酱汁，摆在盘中，躯干冷白的皮肤透着酱油的琥珀色。", "料理已完成！获得了“教师冷玉刺身”"]
    },
    serena_torso_dish: {
        id: "serena_torso_dish",
        name: "瑟蕾娜躯干料理",
        type: "consumable",
        desc: "【占位符：瑟蕾娜躯干料理描述】",
        effect: "all",
        value: 8,
        ingredients: ["瑟蕾娜的躯干", "【占位符：辅料1】", "【占位符：辅料2】"],
        seasonings: ["ingredient_1", "ingredient_2"],
        cookStory: ["【占位符：躯干料理烹饪剧情】"]
    },

    // ========== 料理（手臂-占位符） ==========
    aisha_arm_dish: {
        id: "aisha_arm_dish",
        name: "监工葱香炖臂",
        type: "consumable",
        desc: "由艾莎的右臂制作而成的葱香炖臂，汤色乳白，肌肉纤维清晰可见，像一朵朵白色的花。虎口处的厚茧炖得发胀发白，骨肉已经分离，筋肉脱离骨头，断面露出鲜红且富有弹性的肌肉束，与软烂的手臂内侧形成强烈反差，散发着浓郁的肉香混着野葱的清香。",
        effect: "atk",
        value: 2,
        ingredients: ["艾莎的手臂","水","盐","葱"],
        seasonings: ["water","salt","scallion"],
        cookStory: ["你用菜刀把手臂剁成三段，骨头砸在锅底咚咚响，加水没过，大火烧开撇去血沫，肌肉纹理在汤里慢慢散开，像粉红色的花瓣，虎口处的厚茧在沸水里发胀；", "你加入野葱和粗盐，转小火慢炖两小时，肌肉纤维在汤里慢慢散开，直到虎口处的厚茧炖得发胀发白，断面的肌肉束鲜红且富有弹性；", "你关火焖了十分钟，让骨肉充分分离，汤汁变得乳白，骨头露出白色的截面。", "料理已完成！获得了“监工葱香炖臂”"]
    },
    liana_arm_dish: {
        id: "liana_arm_dish",
        name: "骑士肌纹烤臂",
        type: "consumable",
        desc: "由莉娅娜的右臂制作而成的肌纹烤臂，蜜色的皮肤焦黄油亮，小臂上布满的细小战斗伤痕清晰可见，肱二头肌结实隆起被烤得外焦里嫩，断面露出粗壮的臂骨与深粉色肌肉，散发着黑胡椒的辛辣混合着烤肉香与战场汗液的腥臊气息。",
        effect: "atk",
        value: 3,
        ingredients: ["莉娅娜的手臂","黑胡椒","橄榄油"],
        seasonings: ["black_pepper","olive_oil"],
        cookStory: ["你用菜刀剁开手臂，断面露出粗壮的臂骨与层层深粉色湿润肌肉，你将橄榄油涂抹在蜜色的皮肤上，撒上黑胡椒粗粒，指腹顺着战斗伤痕的纹路按摩，让调料渗进细小的伤疤里；", "你用铁签穿过肱二头肌，架在煤火上烤制，火焰舔舐着肌肉发达的手臂，表皮慢慢收紧，发出滋滋的声响；", "你不断翻转铁签，让手臂均匀受热，直到表皮呈现焦黄色，断面流出的汁液混着黑胡椒的辛辣味。", "料理已完成！获得了“骑士肌纹烤臂”"]
    },
    cecilia_arm_dish: {
        id: "cecilia_arm_dish",
        name: "千金酒浸藕臂",
        type: "consumable",
        desc: "由塞西莉亚的手臂制作而成的酒浸藕臂，皮肤白嫩透明如瓷，淡淡的蓝色血管在淡粉色的酒液里清晰可见，断面的细小臂骨与薄薄的粉色肌肉层浸在酒液里，手臂内侧特别细腻，散发着白葡萄酒的清香混合着少女肌肤淡淡的幽香，像一段浸泡在酒里的玉藕。",
        effect: "agi",
        value: 2,
        ingredients: ["塞西莉亚的手臂", "糖", "白葡萄酒"],
        seasonings: ["sugar", "white_wine"],
        cookStory: ["你提起那条纤细柔弱的手臂，皮肤白嫩如瓷能看到淡淡的蓝色血管，你将手臂洗净，断面的细小臂骨露出薄薄的粉色肌肉层，鲜血已经流尽；", "你将手臂放入玻璃罐，倒入白葡萄酒淹没，加入冰糖，酒液渗入薄薄的皮肤，手臂内侧的细腻血管在酒液里若隐若现；", "你将罐子密封七日，酒液变成淡粉色，手臂皮肤呈现出透明的玉色，骨骼清晰可见。", "料理已完成！获得了“千金酒浸藕臂”"]
    },
    isabella_arm_dish: {
        id: "isabella_arm_dish",
        name: "贵妇黄油烤臂",
        type: "consumable",
        desc: "由伊莎贝拉的手臂制作而成的黄油烤臂，表皮金黄油亮，酥脆中带着成熟女性的肉感，断面露出粉红的肌肉层与白色臂骨，被烤得外焦里嫩，散发着黄油的奶香混合着迷迭香的草本气息与烤熟的成熟女性肌肤特有的甜腻。",
        effect: "maxHp",
        value: 10,
        ingredients: ["伊莎贝拉的手臂", "黄油", "迷迭香", "黑胡椒"],
        seasonings: ["butter", "rosemary", "black_pepper"],
        cookStory: ["你提起那条圆润丰满的手臂，皮肤白皙紧致，线条柔美带着成熟女性的肉感，你用菜刀剁开，断面露出粉红的肌肉层与白色臂骨，鲜血已经流尽；", "你在手臂上涂抹融化的黄油，撒上黑胡椒和迷迭香，指腹按摩手臂内侧细嫩的肌肤，让油脂渗入被紧身衣物长期包裹的奢靡皮肤；", "你将伊莎贝拉的手臂架在铁架上烤制，黄油滴落发出滋滋声，直到表皮呈现金黄色，断面流出的肉汁混着黄油的奶香。", "料理已完成！获得了“贵妇黄油烤臂”"]
    },
    sophie_arm_dish: {
        id: "sophie_arm_dish",
        name: "女仆风干细臂",
        type: "consumable",
        desc: "由索菲的右臂制作而成的风干细臂，皮肤呈现出浅褐色紧绷如皮革，淡紫色的静脉在表面清晰可见如蛛网，淤青处变成深紫色的斑块，断面露出细小的肩骨与尺骨，粉白色的肌肉纤维紧缩成束，散发着黑胡椒的辛香混合着橄榄油的清香与风干肉特有的柴感。",
        effect: "def",
        value: 2,
        ingredients: ["索菲的手臂", "黑胡椒", "盐", "橄榄油"],
        seasonings: ["black_pepper", "salt", "olive_oil"],
        cookStory: ["你提起那条纤细病态的手臂，皮肤下淡紫色静脉清晰可见如蛛网，你用橄榄油涂抹，撒上粗盐和黑胡椒，让香料渗入皮肤每一处；", "你将手臂悬挂在干燥通风处，让山风吹拂，皮肤逐渐失去水分变得紧绷；", "风干二十日，直到皮肤紧绷如皮革，粉白色的肌肉纤维紧缩成细条，断面细小的肩骨与尺骨突出，透着香料的辛香。", "料理已完成！获得了“女仆风干细臂”"]
    },
    elena_arm_dish: {
        id: "elena_arm_dish",
        name: "教师黄油煎臂",
        type: "consumable",
        desc: "由艾莲娜的手臂制作而成的黄油煎臂，表皮金黄微脆，断面露出圆润的肩骨与紧致的粉红色肌肉纤维，肌肉分布均匀呈现出缺乏运动的松软感，散发着黄油的奶香混合着百里香的草本气息与海盐的咸鲜，同时散发着一股独属于艾莲娜的甜美肉香。",
        effect: "atk",
        value: 2,
        ingredients: ["艾莲娜的手臂", "黄油", "盐", "百里香"],
        seasonings: ["butter", "salt", "thyme"],
        cookStory: ["你提起那条匀称冷白色的手臂，皮肤如瓷器般光滑，淡青色静脉清晰可见，你用菜刀剁成三段，断面露出圆润的肩骨与紧致的粉红色肌肉纤维；", "你用热锅融化黄油，放入手臂段，撒上海盐，煎至两面金黄，百里香的香气渗入冷白的肌肤；", "你将煎至表皮微脆，断面流出的肉汁混着黄油的奶香，淡青色的静脉在热油中若隐若现。", "料理已完成！获得了“教师黄油煎臂”"]
    },
    serena_arm_dish: {
        id: "serena_arm_dish",
        name: "瑟蕾娜手臂料理",
        type: "consumable",
        desc: "【占位符：瑟蕾娜手臂料理描述】",
        effect: "all",
        value: 3,
        ingredients: ["瑟蕾娜的手臂", "【占位符：辅料1】", "【占位符：辅料2】"],
        seasonings: ["ingredient_1", "ingredient_2"],
        cookStory: ["【占位符：手臂料理烹饪剧情】"]
    },

    // ========== 料理（手-占位符） ==========
    aisha_hand_dish: {
        id: "aisha_hand_dish",
        name: "监工茴香卤爪",
        type: "consumable",
        desc: "由艾莎的手制作而成的茴香卤爪，卤成了深褐色，汤中香料与卤汁混合，散发出独特的茴香，薄茧部位变得软糯，指关节处的皮肤紧绷发亮，破开露出细嫩卤肉，手指微微蜷曲，像要抓住什么，还冒着热气，断面的腕骨露出短促的白色横截面，散发着矿井特有的粗犷与香料混合的气息。",
        effect: "agi",
        value: 1,
        ingredients: ["艾莎的手","八角","盐","水","桂皮"],
        seasonings: ["star_anise","salt","water","cinnamon"],
        cookStory: ["你把陶罐架在煤炉上，水开后放入八角桂皮，将断手五指张开插进卤汁，让液体渗进每一个指缝，泡软指甲；", "你调至小火，慢卤一个半小时，期间用木勺不断浇淋手背，使香料、手掌浸出液与卤汁混合，散发出独特的茴香，薄茧部位慢慢变得软糯；", "你关了火，让手在卤汁里浸泡了十分钟，直到指关节处的皮肤紧绷发亮，破开露出手指肉。", "料理已完成！获得了“监工茴香卤爪”"]
    },
    liana_hand_dish: {
        id: "liana_hand_dish",
        name: "骑士酱油卤爪",
        type: "consumable",
        desc: "由莉娅娜的手制作而成的酱油卤爪，亮红色的指甲油与深褐色的卤皮形成鲜明对比，指关节处的剑茧凸起发白，掌心的厚茧被卤得软糯，断面的白色掌骨与发达的白色肌肉浸在卤汁里，散发着酱油的咸香混合着金属与女性手汗的独特气息。",
        effect: "atk",
        value: 1,
        ingredients: ["莉娅娜的手","月桂叶","酱油"],
        seasonings: ["bay_leaf","soy_sauce"],
        cookStory: ["你握住那只涂着亮红色指甲油的手，手指粗壮有力，你用刷子仔细刷洗指缝，将指甲缝里的血污和铁锈洗净，亮红色的指甲油在灯光下闪闪发亮；", "你将手放进卤锅，加入月桂叶和酱油，大火烧开后转小火慢卤，指关节处的剑茧在卤汁里慢慢发胀，掌心的厚茧被卤汁泡得发白凸起；", "你不断翻动那只手，让卤汁充分渗入断面的掌骨缝隙，直到皮肤变成深褐色。", "料理已完成！获得了“骑士酱油卤爪”"]
    },
    cecilia_hand_dish: {
        id: "cecilia_hand_dish",
        name: "千金糖霜玉手",
        type: "consumable",
        desc: "由塞西莉亚的手制作而成的糖霜玉手，手指纤细如玉覆盖着洁白晶莹的糖霜脆壳，指甲上的白色指甲油与糖霜融为一体，断面的细小手骨与粉嫩肌肉被封在透明的糖壳里，手掌柔软无茧的纹理清晰可见，散发着焦糖与蛋清的甜香，整体像一件精致的易碎糖艺品。",
        effect: "agi",
        value: 1,
        ingredients: ["塞西莉亚的手", "糖", "鸡蛋"],
        seasonings: ["sugar", "egg"],
        cookStory: ["你握住那只非常娇小细嫩的手，手指纤细如玉，白色指甲油还完好无损，你用软刷轻轻刷洗掌心，将血迹洗净，露出柔软无茧的白皙细腻皮肤，断面的细小手骨露出粉白的截面；", "你将手用铁钩悬挂起来，淋上打发的蛋清，再撒上白糖，让糖粒均匀附着在纤细的手指和圆润的指甲上，断面粉嫩的肌肉被糖液包裹；", "你将这只淋上糖液的小手低温烘烤，直到糖霜凝固成白色的脆壳，手指变得像白玉雕塑般精致。", "料理已完成！获得了“千金糖霜玉手”"]
    },
    isabella_hand_dish: {
        id: "isabella_hand_dish",
        name: "贵妇蜜汁渍爪",
        type: "consumable",
        desc: "由伊莎贝拉的手制作而成的蜜汁渍爪，手爪呈透明的琥珀色，深红色指甲油在蜜液里闪闪发亮，手指修长饱满，断面粉嫩的肌肉与细小的手骨被封在蜂蜜里，掌心温暖细腻的纹理清晰可见，散发着蜂蜜的甜香混合着成熟女性手汗与自慰残留的淫靡气息。",
        effect: "maxHp",
        value: 5,
        ingredients: ["伊莎贝拉的手", "蜂蜜"],
        seasonings: ["honey"],
        cookStory: ["你握住那对丰满柔软的手，深红色指甲油还完好无损，指甲缝里残留着自慰时的粘腻液体，你将血迹洗净，露出温暖细腻的掌心；", "你将这只断手浸入蜂蜜罐，让蜂蜜充分包裹每一根修长的手指，融进自慰时的粘腻淫液。深红色指甲油在琥珀色的蜜液里闪闪发亮，断面粉嫩的肌肉与细小的手骨被蜜液包裹；", "你将罐子密封腌渍两日，让蜂蜜渗入断面的骨髓，这只手逐渐变得饱满透亮起来。", "料理已完成！获得了“贵妇蜜汁渍爪”"]
    },
    sophie_hand_dish: {
        id: "sophie_hand_dish",
        name: "女仆盐渍冻爪",
        type: "consumable",
        desc: "由索菲的右手制作而成的盐渍冻爪，手背皮肤紧绷呈灰白色，指节微肿处生着暗紫色的冻疮硬痂，掌心厚茧被盐渍得发白凸起如鳞片，指甲秃露出的肉红色指尖收缩干枯，断面的细弱腕骨露出苍白的筋膜，散发着清酒的米香混合着粗盐的咸鲜与姜片的辛辣气息。",
        effect: "def",
        value: 1,
        ingredients: ["索菲的手", "清酒", "盐", "姜片"],
        seasonings: ["sake", "salt", "ginger"],
        cookStory: ["你握住那只布满劳作痕迹的手，手背皮肤干裂如老树皮，指节微肿生着紫红色冻疮，你用清酒冲洗，将血迹洗净，露出掌心厚厚的茧和秃露的肉红色指尖；", "你将索菲的断手浸入盐罐，用粗盐覆盖每一根纤细的手指，特别是冻疮裂口和厚茧处，倒入清酒淹没，放入姜片；", "你将这只断手密封腌渍了十五日，直到皮肤收缩发硬，冻疮变成暗紫色的硬痂，手指蜷曲如鸡爪，透着清酒的米香。", "料理已完成！获得了“女仆盐渍冻爪”"]
    },
    elena_hand_dish: {
        id: "elena_hand_dish",
        name: "教师花雕浸爪",
        type: "consumable",
        desc: "由艾莲娜的手制作而成的花雕浸爪，皮肤呈现出透明的玉色温润发亮，银灰色指甲油在酒液浸泡后依然闪闪发亮，手指修长骨节分明，中指侧面的硬茧被酒泡得发白，指尖圆润，断面的细小手骨与鲜红肌腱被封在酒液中，散发着花雕酒的醇香混合着姜片的温暖与冰糖的甜润。",
        effect: "atk",
        value: 1,
        ingredients: ["艾莲娜的手", "花雕酒", "姜片", "糖"],
        seasonings: ["huadiao_wine", "ginger", "sugar"],
        cookStory: ["你握住那只修长骨节分明的手，银灰色指甲油完好无损，中指侧面的硬茧清晰可见，你将手放入瓷坛；", "你倒入花雕酒淹没这只断手，加入姜片和冰糖，密封腌渍十五日，让酒香渗入纤细的手指和断面的细小手骨，银灰色的指甲在酒液中闪闪发亮；", "启封时你拿出断手，手部皮肤呈现透明的玉色，指尖圆润，指节分明，透着温润的光泽。", "料理已完成！获得了“教师花雕浸爪”"]
    },
    serena_hand_dish: {
        id: "serena_hand_dish",
        name: "瑟蕾娜手料理",
        type: "consumable",
        desc: "【占位符：瑟蕾娜手料理描述】",
        effect: "all",
        value: 2,
        ingredients: ["瑟蕾娜的手", "【占位符：辅料1】", "【占位符：辅料2】"],
        seasonings: ["ingredient_1", "ingredient_2"],
        cookStory: ["【占位符：手料理烹饪剧情】"]
    },

    // ========== 料理（脚-占位符） ==========
    aisha_foot_dish: {
        id: "aisha_foot_dish",
        name: "监工薄荷炖足",
        type: "consumable",
        desc: "由艾莎的脚制作而成的薄荷炖足，脚趾变为乳白色，脚背的皮半透明，能看到底下青色的血管。汤汁清澈，带着薄荷的凉气和淡淡的醋香，脚底板的劳动茧被炖软了，呈现出一种病态的嫩红，脚踝断面露出白色的骨头碴子，散发着清淡的腥甜与薄荷混合的气息。",
        effect: "agi",
        value: 2,
        ingredients: ["艾莎的脚","水","醋","薄荷"],
        seasonings: ["water","vinegar","mint"],
        cookStory: ["你慢慢脱下那只被血浸透成粉红色的棉袜，剥去脚趾缝里的血痂，将脚放进陶锅，加清水和野薄荷，脚趾在水里慢慢张开，像五只小白鱼，脚踝处的断面露出粉色的肌腱；", "你用大火将水烧开，转小火炖半小时。之后你用手指揉搓她的脚底，直到把茧都搓软了，脚背的皮变得半透明；", "最后，你淋上一圈醋，关火静置，让薄荷的凉气渗入皮肉，汤汁变得清澈。", "料理已完成！获得了“监工薄荷炖足”"]
    },
    liana_foot_dish: {
        id: "liana_foot_dish",
        name: "骑士战靴蒸蹄",
        type: "consumable",
        desc: "由莉娅娜的脚制作而成的战靴蒸蹄，脚掌宽厚，脚底的厚茧被蒸得发白软糯，脚趾有力而性感地微微蜷曲，脚背筋道明显，脚踝断面露出白色的脚踝骨与坚韧的肌腱，散发着生姜的辛辣、混合着浓烈肉香与皮革的气息。",
        effect: "agi",
        value: 3,
        ingredients: ["莉娅娜的脚","盐","姜片"],
        seasonings: ["salt","ginger"],
        cookStory: ["你脱下那只穿着金属战靴的脚，脚底布满的厚茧还沾着战斗的血迹，你将脚洗净，脚踝粗壮有力，脚背青筋明显，用粗盐搓洗脚底的厚茧；", "你将断脚穿回战靴，放入蒸笼，铺上姜片，大火蒸四十分钟，蒸汽升腾中脚趾慢慢张开，脚底的厚茧被蒸得发白膨胀；", "你打开蒸笼，将断脚从炙热的战靴中取出，生姜的辛辣混着脚汗味与肉味飘出，脚踝断面的肌腱清晰可见。", "料理已完成！获得了“骑士战靴蒸蹄”"]
    },
    cecilia_foot_dish: {
        id: "cecilia_foot_dish",
        name: "千金白丝蒸蹄",
        type: "consumable",
        desc: "由塞西莉亚的脚制作而成的白丝蒸蹄，白色厚丝袜湿润透明地包裹着小巧精致的脚掌，像一层绸缎，黑色小皮鞋置于盘边作为装饰，脚底微微发红，脚趾匀称整齐的轮廓在丝袜下清晰可见，脚背弧度柔美，断面处丝袜与细嫩的脚踝骨粘连，散发着桂花的清香混合着皮革与少女脚汗的淡淡气息。",
        effect: "agi",
        value: 2,
        ingredients: ["塞西莉亚的脚", "桂花"],
        seasonings: ["osmanthus"],
        cookStory: ["你脱下那只黑色小皮鞋，露出穿着白色厚丝袜的小巧可爱的脚，脚掌小而精致，脚趾匀称整齐，你将脚连同丝袜一起放入蒸笼，丝袜被鲜血浸透后贴在脚背上；", "你为断脚撒上干桂花，大火蒸制三十分钟，蒸汽中白色厚丝袜变得湿润透明，能看到脚底微微发红的皮肤和脚背柔美的弧度；", "你蒸至丝袜与皮肤粘连，断面的细嫩脚踝骨与粉色肌腱在丝袜的包裹下若隐若现，黑色小皮鞋放在一旁作为点缀。", "料理已完成！获得了“千金白丝蒸蹄”"]
    },
    isabella_foot_dish: {
        id: "isabella_foot_dish",
        name: "贵妇黑丝焙蹄",
        type: "consumable",
        desc: "由伊莎贝拉的脚制作而成的高跟焙蹄，黑色薄丝袜湿润透明地包裹着丰满的脚掌，像一层黑纱，黑色高跟鞋装满芝士，置于盘边，脚趾圆润整齐，脚背弧度柔美，脚底糊满了芝士，断面处丝袜与粉嫩的脚踝骨粘连，散发着芝士的甜香混合着皮革、黑色丝袜与成熟女性脚汗与肉香的淫靡气息。",
        effect: "maxHp",
        value: 8,
        ingredients: ["伊莎贝拉的脚", "芝士"],
        seasonings: ["cheese"],
        cookStory: ["你脱下那只黑色高跟鞋，露出穿着黑色薄丝袜的性感嫩脚，脚掌丰满，脚趾圆润，你将脚连同丝袜一起放入烘箱，黑色丝袜被鲜血浸湿后紧紧裹住脚背；", "你在高跟鞋中撒入芝士碎，再将煮熟的肉脚穿入，大火烘焙四十分钟，热浪中中黑色薄丝袜变得湿润透明，能看到芝士慢慢化开，黏在鞋与脚之间，满溢出来；", "你将鞋与黑丝肉脚一同拿出冷却，拿下肉脚放在盘中，将芝士拉丝。", "料理已完成！获得了“贵妇黑丝焙蹄”"]
    },
    sophie_foot_dish: {
        id: "sophie_foot_dish",
        name: "女仆清酒浸蹄",
        type: "consumable",
        desc: "由索菲的脚制作而成的清酒浸蹄，皮肤呈现出透明的玉色紧绷发亮，脚后跟的皴裂伤痕被清酒泡得发白柔软，脚趾因长期穿不合脚的旧鞋而蜷曲变形却透着清酒的温润，脚踝纤细露出细嫩的踝骨与粉色的肌腱，散发着清酒的米香混合着昆布的鲜甜与姜片的温暖。",
        effect: "def",
        value: 1,
        ingredients: ["索菲的脚", "清酒", "昆布", "姜片"],
        seasonings: ["sake", "kelp", "ginger"],
        cookStory: ["你脱下那只不合脚的硬皮鞋，露出细小瘦弱的脚，脚后跟有明显的皴裂伤痕如沟壑，你将脚放入陶罐；", "你倒入清酒淹没索菲的断足，放入昆布和姜片，密封浸泡十日，让清酒渗入皴裂的脚跟和蜷曲的脚趾；", "十日后你将断脚取出时，皮肤呈现透明的玉色，清酒已将脚部的酸涩洗去，透着米香与海味。", "料理已完成！获得了“女仆清酒浸蹄”"]
    },
    elena_foot_dish: {
        id: "elena_foot_dish",
        name: "教师柠檬香煎蹄",
        type: "consumable",
        desc: "由艾莲娜的脚制作而成的柠檬香煎蹄，表皮金黄酥脆，冷白的皮肤泛着油光，脚趾修长匀称，脚背弧线优美，断面露出纤细的踝骨与紧致的肌肉，散发着黄油的奶香混合着柠檬汁的酸爽与欧芹的清香，同时透着艾莲娜特有的冷艳气息。",
        effect: "agi",
        value: 2,
        ingredients: ["艾莲娜的脚", "黄油", "柠檬汁", "欧芹碎"],
        seasonings: ["butter", "lemon_juice", "parsley"],
        cookStory: ["你提起那只冷白色的脚，皮肤如瓷器般光滑，脚趾修长匀称，脚背弧线优美，你用黄油涂抹整个脚部，让油脂渗入每一处肌肤；", "你将脚放入热锅，煎至表皮金黄酥脆，倒入柠檬汁，让酸味渗入冷白的肌肤，撒上欧芹碎，香气四溢；", "你将煎好的脚摆盘，脚趾微微蜷曲，脚背弧线优美，断面露出纤细的踝骨与紧致的肌肉，散发着诱人的香气。", "料理已完成！获得了“教师柠檬香煎蹄”"]
    },
    elena_leg_dish: {
        id: "elena_leg_dish",
        name: "教师香煎腿排",
        type: "consumable",
        desc: "由艾莲娜的右腿制作而成的香煎腿排，表皮金黄酥脆，皮肤泛着油光，腿排的肌肉分布均匀呈现出缺乏运动的松软感，大腿后侧的压痕在煎制后依然清晰可见，断面露出白皙的股骨头与丰厚的肌肉层，散发着十足的肉香、橄榄油的清香混合着黑胡椒的辛香。",
        effect: "atk",
        value: 3,
        ingredients: ["艾莲娜的腿", "橄榄油", "黑胡椒"],
        seasonings: ["olive_oil", "black_pepper"],
        cookStory: ["你将那条修长笔直的冷白色大腿平放，皮肤如冷玉般光滑，缺乏运动的松软感，你用菜刀切成厚片，大腿后侧的压痕清晰可见；", "你在热锅内倒入橄榄油，放入腿排，撒上黑胡椒，煎至两面金黄，迷迭香的香气渗入冷白的肌肤，断面露出白皙的股骨头与丰厚的红色肌肉层；", "你将腿排煎至表皮酥脆，肉质松软，油脂渗入皮肤之中，呈现出诱人的焦黄色。", "料理已完成！获得了“教师香煎腿排”"]
    },
    serena_foot_dish: {
        id: "serena_foot_dish",
        name: "瑟蕾娜脚料理",
        type: "consumable",
        desc: "【占位符：瑟蕾娜脚料理描述】",
        effect: "all",
        value: 3,
        ingredients: ["瑟蕾娜的脚", "【占位符：辅料1】", "【占位符：辅料2】"],
        seasonings: ["ingredient_1", "ingredient_2"],
        cookStory: ["【占位符：脚料理烹饪剧情】"]
    },

    // ========== 料理（乳房-占位符） ==========
    aisha_breast_dish: {
        id: "aisha_breast_dish",
        name: "监工野果煎乳",
        type: "consumable",
        desc: "由艾莎的乳房制作而成的野果煎乳，两面金黄，油脂在乳晕处积成一小洼，乳头煎成了深褐色，硬挺地立在金黄的油脂里，断面露出的脂肪层煎成了半透明，乳晕呈健康的淡褐色，散发着奶腥味混着焦香，旁边配着野山椒粉末，散发着奶香与辣味的混合气息。",
        effect: "maxHp",
        value: 15,
        ingredients: ["艾莎的乳房","盐","野山椒"],
        seasonings: ["salt","wild_pepper"],
        cookStory: ["你将铁锅烧到冒烟，倒入热油，用刀尖挑开断面的脂肪层，粉白的肉翻出来，手指按上去弹性还在，像按在绷紧的鼓面上，乳头硬邦邦地翘着像两颗小石子；", "你将艾莎的乳房扔进油锅中，乳房下锅瞬间油星炸开，你用铲子压住，慢慢煎，乳头逐渐煎成深褐色，硬挺地立在金黄的油脂里，油脂在乳晕处积成一小洼；", "你将乳房翻面，撒上捏碎的野山椒末，再煎三分钟，油脂从边缘渗出来，断面露出的脂肪层煎成了半透明，奶香混着辣味飘出来。", "料理已完成！获得了“监工野果煎乳”"]
    },
    liana_breast_dish: {
        id: "liana_breast_dish",
        name: "骑士奶冻",
        type: "consumable",
        desc: "由莉娅娜的乳房与乳汁制作而成的骑士奶冻，奶冻呈半透明的乳白色，那只被铠甲长期压迫的乳头小巧坚挺像一颗被晒干后微微硬起的葡萄挺立其上，暗褐色的乳晕清晰可见，断面露出的乳腺组织与少量脂肪浸在奶冻里，散发着蜂蜜的甜香混合着乳汁的腥甜与女性体味。",
        effect: "atk",
        value: 2,
        ingredients: ["莉娅娜的乳房","莉娅娜的鲜奶","蜂蜜","吉利丁片"],
        seasonings: ["liana_milk","honey","gelatin_sheet"],
        cookStory: ["你挤压那只C杯乳房，暗褐色的乳晕下乳腺组织被按压，你用力挤出残存的乳汁，只留下充满脂肪的乳房，乳头因刺激而更加坚挺收缩；", "你倒出一瓶莉娅娜的乳汁，将其加热，加入泡软的吉利丁片和蜂蜜，搅拌均匀后倒入模具，将那只乳房断面朝下浸入奶冻液中；", "你将奶冻冷藏凝固后取出，奶冻呈半透明的乳白色，乳房淹没其中，大乳晕的乳头挺立在奶冻之上。", "料理已完成！获得了“骑士奶冻”"]
    },
    cecilia_breast_dish: {
        id: "cecilia_breast_dish",
        name: "千金樱桃奶冻",
        type: "consumable",
        desc: "由塞西莉亚的乳房与乳汁制作而成的樱桃奶冻，奶冻呈透明的粉红色，那只非常娇小的A罩杯乳房埋藏其中像一颗未完全成熟的嫩果，乳头小而粉嫩像一粒浸在奶冻里的樱桃，浅粉色的乳晕清晰可见，断面露出的薄薄脂肪层与粉嫩乳腺组织被封在奶冻里，散发着樱桃的甜香混合着处女乳汁的腥甜与少女体香。",
        effect: "agi",
        value: 2,
        ingredients: ["塞西莉亚的乳房", "塞西莉亚的奶", "吉利丁片", "樱桃"],
        seasonings: ["cecilia_milk", "gelatin_sheet", "cherry"],
        cookStory: ["你挤压那只非常娇小的A罩杯乳房，浅粉色的乳晕下乳腺组织被按压，你用力挤出残存的处女乳汁，使乳房只剩下饱满的脂肪，乳汁呈乳白色略带清甜，乳头小而粉嫩像一粒樱桃；", "你将乳汁加热，加入泡软的吉利丁和樱桃糖浆，搅拌均匀后倒入模具，将那只娇小乳房断面朝下浸入奶冻液中，乳头朝上露出；", "你将奶冻与乳房冷藏凝固，奶冻呈透明的粉红色，粉红色乳头挺立在正中。", "料理已完成！获得了“千金樱桃奶冻”"]
    },
    isabella_breast_dish: {
        id: "isabella_breast_dish",
        name: "贵妇乳汁炖乳",
        type: "consumable",
        desc: "由伊莎贝拉的乳房与乳汁制作而成的乳汁炖乳，汤汁呈浓稠的乳白色，那只饱满挺拔的D罩杯乳房浮在奶液里，乳头较大而敏感像两颗浸泡在乳汁里的熟透肉珠，浅褐色的乳晕清晰可见，断面露出的丰厚脂肪层与粉嫩乳腺组织浸在奶液里，散发着红枣的甜香混合着成熟女性乳汁的腥甜与体香。",
        effect: "maxHp",
        value: 20,
        ingredients: ["伊莎贝拉的乳房", "伊莎贝拉的奶", "糖", "红枣"],
        seasonings: ["isabella_milk", "sugar", "red_date"],
        cookStory: ["你挤压那只大乳头的饱满挺拔的D罩杯乳房，浅褐色的乳晕下乳腺组织被按压，你用力挤出大量乳汁，让乳房仅剩饱满的脂肪，乳汁呈乳白色略带腥甜；", "你将伊莎贝拉的乳汁倒入砂锅，加入红枣和冰糖，放入那只乳房，乳汁淹没乳头，大火烧开后转小火慢炖，乳房在奶液里轻轻晃动；", "你炖煮了四十分钟，乳汁变得浓稠，乳房表皮呈现出温润的乳白色，断面露出的丰厚脂肪层与粉嫩乳腺浸在奶液里。", "料理已完成！获得了“贵妇乳汁炖乳”"]
    },
    sophie_breast_dish: {
        id: "sophie_breast_dish",
        name: "女仆蜜渍薄乳",
        type: "consumable",
        desc: "由索菲的乳房制作而成的蜜渍薄乳，乳房扁平的薄片浸泡在蜜液中，皮肤呈现出透明的琥珀色且紧绷，淡紫色的静脉清晰可见如蛛网，乳晕极浅的淡红色被蜜渍成深粉色，乳头细小硬实如两颗浸泡在蜜里的桂花蜜饯，断面露出薄薄的粉白色脂肪层与紧贴肋骨的胸肌，散发着蜂蜜的甜香混合着桂花的清香。",
        effect: "def",
        value: 2,
        ingredients: ["索菲的乳房", "蜂蜜", "桂花"],
        seasonings: ["honey", "osmanthus"],
        cookStory: ["你挤压那只单薄的A杯乳房想排出所有乳汁，却发现这只乳房实在贫瘠得一无所有。病态粉白的皮肤上淡紫色静脉清晰可见，极浅的淡红色乳晕边缘模糊，乳头细小硬实；", "你将乳房浸入蜜罐，用蜂蜜完全覆盖，撒上干桂花，让蜜液渗入薄薄的粉白色脂肪层与紧贴肋骨的胸肌；", "你将索菲的乳房密封蜜渍二十日，直到乳房扁平如薄片，皮肤呈现琥珀色，乳头变得硬实如两颗蜜饯后取出。", "料理已完成！获得了“女仆蜜渍薄乳”"]
    },
    elena_breast_dish: {
        id: "elena_breast_dish",
        name: "教师清酒冰酪",
        type: "consumable",
        desc: "由艾莲娜的乳房制作而成的清酒冰酪，冰酪呈透明的琥珀色，那只挺拔丰满的C罩杯乳房半埋其中如冷月下的玉雕，冷白的皮肤紧致，乳晕极浅颜色淡粉，乳头傲然凸起像两颗晶莹的粉红色果实被封在冰层中，断面露出粉白色的脂肪层与深处的肌肉，散发着清酒的米香混合着冰糖的甜润与乳房的脂肪气息。",
        effect: "atk",
        value: 3,
        ingredients: ["艾莲娜的乳房", "艾莲娜的奶", "清酒", "糖", "吉利丁片"],
        seasonings: ["elena_milk", "sake", "sugar", "gelatin_sheet"],
        cookStory: ["你挤压那只挺拔丰满的C罩杯乳房，冷白的皮肤紧致，乳晕极浅，你用力挤出剩余的乳汁，乳汁呈乳白色，乳头傲然凸起像粉红色果实；", "你将清酒加热，加入冰糖和泡软的吉利丁，搅拌均匀后倒入浅盘，放入那只乳房，乳汁与清酒混合，冷白的皮肤在酒液中若隐若现；", "你将冰酪冷藏凝固，乳房半埋在透明的冰酪中，如同冷月下的玉雕。", "料理已完成！获得了“教师清酒冰酪”"]
    },
    serena_breast_dish: {
        id: "serena_breast_dish",
        name: "瑟蕾娜乳料理",
        type: "consumable",
        desc: "【占位符：瑟蕾娜乳房料理描述】",
        effect: "all",
        value: 5,
        ingredients: ["瑟蕾娜的乳房", "【占位符：辅料1】", "【占位符：辅料2】"],
        seasonings: ["ingredient_1", "ingredient_2"],
        cookStory: ["【占位符：乳房料理烹饪剧情】"]
    },

    // ========== 乳房使用后生成的奶（全部恢复生命值） ==========
    aisha_milk: {
        id: "aisha_milk",
        name: "艾莎的奶",
        type: "consumable",
        desc: "从艾莎乳房中挤出的乳汁，带着一丝汗水的咸味。饮用后可恢复生命值。",
        effect: "heal",
        value: 15
    },
    liana_milk: {
        id: "liana_milk",
        name: "莉娅娜的奶",
        type: "consumable",
        desc: "从莉娅娜乳房中挤出的乳汁，口感浓烈而富有力量。饮用后可恢复生命值。",
        effect: "heal",
        value: 20
    },
    isabella_milk: {
        id: "isabella_milk",
        name: "伊莎贝拉的奶",
        type: "consumable",
        desc: "从伊莎贝拉乳房中挤出的乳汁，丰沛而浓郁。饮用后可恢复大量生命值。",
        effect: "heal",
        value: 25
    },
    cecilia_milk: {
        id: "cecilia_milk",
        name: "塞西莉亚的奶",
        type: "consumable",
        desc: "从塞西莉亚乳房中挤出的乳汁，带着少女特有的清甜。饮用后可恢复生命值。",
        effect: "heal",
        value: 10
    },
    sophie_milk: {
        id: "sophie_milk",
        name: "索菲的奶",
        type: "consumable",
        desc: "从索菲乳房中挤出的乳汁，虽然不多但口感朴实。饮用后可恢复少量生命值。",
        effect: "heal",
        value: 8
    },
    elena_milk: {
        id: "elena_milk",
        name: "艾莲娜的奶",
        type: "consumable",
        desc: "从艾莲娜乳房中挤出的乳汁，带着淡淡的书卷气息。饮用后可恢复生命值。",
        effect: "heal",
        value: 18
    },
    serena_milk: {
        id: "serena_milk",
        name: "瑟蕾娜的奶",
        type: "consumable",
        desc: "从瑟蕾娜乳房中挤出的乳汁，泛着淡淡的紫色荧光，蕴含着微弱的魔力。饮用后可恢复大量生命值。",
        effect: "heal",
        value: 30
    },

    // ========== 榨奶器 ==========
    milker: {
        id: "milker",
        name: "榨奶器",
        type: "misc",
        desc: "一台精致的金属榨奶器，由两个半球形吸杯和手柄组成。可以用来从乳房中榨取乳汁。",
        usable: true,
        customAction: true
    },
    
    // ========== 家具物品（不可拾取） ==========
    // 宅邸大厅家具
    grand_chandelier: {
        id: "grand_chandelier",
        name: "水晶吊灯",
        type: "misc",
        desc: "一盏巨大的水晶吊灯，悬挂在大厅的天花板上，光芒在四面八方的镜子上反射，让整个大厅亮如白昼。"
    },
    red_carpet: {
        id: "red_carpet",
        name: "红地毯",
        type: "misc",
        desc: "一条长长的红地毯，从大厅入口一直延伸到正前方的宝座。"
    },
    throne: {
        id: "throne",
        name: "宝座",
        type: "misc",
        desc: "一把华丽的宝座，位于大厅的正前方，彰显着主人的权威。"
    },
    
    // 男爵卧室家具
    four_post_bed: {
        id: "four_post_bed",
        name: "四柱床",
        type: "misc",
        desc: "一张巨大的四柱床，铺着天鹅绒被褥，显得奢华无比。"
    },
    tapestry: {
        id: "tapestry",
        name: "挂毯",
        type: "misc",
        desc: "一幅昂贵的挂毯，挂在卧室的墙上，描绘着美丽的风景。"
    },
    window_view: {
        id: "window_view",
        name: "观景窗",
        type: "misc",
        desc: "一扇大窗户，可以俯瞰整个宅邸的花园。"
    },
    
    // 男B夫人卧室家具
    canopy_bed: {
        id: "canopy_bed",
        name: "帷幔床",
        type: "misc",
        desc: "一张四柱床，挂着轻纱帐幔，显得典雅华贵。"
    },
    vanity_table: {
        id: "vanity_table",
        name: "梳妆台",
        type: "misc",
        desc: "一张精致的梳妆台，上面摆满了香水瓶和化妆品。"
    },
    floral_sofa: {
        id: "floral_sofa",
        name: "雕花沙发",
        type: "misc",
        desc: "一张精美的雕花沙发，位于房间的角落。"
    },
    
    // 女儿卧室家具
    pink_bed: {
        id: "pink_bed",
        name: "粉色床",
        type: "misc",
        desc: "一张粉色的床，床上铺着粉色的被褥，透露出房间主人的年龄。"
    },
    bookshelf: {
        id: "bookshelf",
        name: "书架",
        type: "misc",
        desc: "一个书架，上面摆满了诗集和小说。"
    },
    dressing_table: {
        id: "dressing_table",
        name: "梳妆桌",
        type: "misc",
        desc: "一张梳妆桌，上面放着几支鲜花。"
    },
    
    // 家庭教师卧室家具
    simple_bed: {
        id: "simple_bed",
        name: "单人床",
        type: "misc",
        desc: "一张简洁的单人床，位于房间的一侧。"
    },
    study_desk: {
        id: "study_desk",
        name: "书桌",
        type: "misc",
        desc: "一张书桌，上面摊开着一本未读完的书。"
    },
    world_map: {
        id: "world_map",
        name: "世界地图",
        type: "misc",
        desc: "一幅世界地图，挂在卧室的墙上。"
    },
    
    // 女仆房间家具
    humble_bed: {
        id: "humble_bed",
        name: "简陋床",
        type: "misc",
        desc: "一张简陋的单人床，位于房间的角落。"
    },
    small_cabinet: {
        id: "small_cabinet",
        name: "小储物柜",
        type: "misc",
        desc: "一个小小的储物柜，用来存放女仆的个人物品。"
    },
    
    // 书房家具
    bookcases: {
        id: "bookcases",
        name: "书架",
        type: "misc",
        desc: "四壁都是高耸的书架，摆满了各种典籍。"
    },
    leather_chair: {
        id: "leather_chair",
        name: "皮椅",
        type: "misc",
        desc: "一把舒适的皮椅，位于书桌后面。"
    },
    writing_desk: {
        id: "writing_desk",
        name: "写字台",
        type: "misc",
        desc: "一张宽大的写字台，上面放着羽毛笔和墨水。"
    },
    
    // 会客室家具
    sofa_set: {
        id: "sofa_set",
        name: "沙发组",
        type: "misc",
        desc: "一组舒适的沙发和扶手椅，围绕着壁炉摆放。"
    },
    tea_table: {
        id: "tea_table",
        name: "茶几",
        type: "misc",
        desc: "一张茶几，上面放着精致的茶具。"
    },
    fireplace: {
        id: "fireplace",
        name: "壁炉",
        type: "misc",
        desc: "一个温暖的壁炉，为房间提供热量。"
    },
    
    // 用餐室家具
    dining_table: {
        id: "dining_table",
        name: "餐桌",
        type: "misc",
        desc: "一张长长的橡木餐桌，周围环绕着高背椅。"
    },
    sideboard: {
        id: "sideboard",
        name: "餐边柜",
        type: "misc",
        desc: "一个餐边柜，上面摆放着精美的瓷器。"
    },
    high_back_chairs: {
        id: "high_back_chairs",
        name: "高背椅",
        type: "misc",
        desc: "一圈高背椅，围绕着餐桌摆放。"
    },
    
    // 厨房家具
    marble_counter: {
        id: "marble_counter",
        name: "大理石台面",
        type: "misc",
        desc: "一个大理石台面，用于准备食材和烹饪。"
    },
    copper_utensils: {
        id: "copper_utensils",
        name: "铜质炊具",
        type: "misc",
        desc: "一套铜质炊具，挂在厨房的墙上。"
    },
    fireplace_oven: {
        id: "fireplace_oven",
        name: "壁炉烤箱",
        type: "misc",
        desc: "一个巨大的壁炉，兼作烤箱使用。"
    },
    
    // 卫生间家具
    marble_bathtub: {
        id: "marble_bathtub",
        name: "大理石浴缸",
        type: "misc",
        desc: "一个大理石浴缸，干净整洁。"
    },
    copper_faucet: {
        id: "copper_faucet",
        name: "铜质水龙头",
        type: "misc",
        desc: "一个铜质水龙头，安装在浴缸上方。"
    },
    towel_rack: {
        id: "towel_rack",
        name: "毛巾架",
        type: "misc",
        desc: "一个毛巾架，上面挂着柔软的毛巾。"
    },
    
    // 储藏室家具
    shelves: {
        id: "shelves",
        name: "架子",
        type: "misc",
        desc: "一些架子，上面摆放着各种生活用品。"
    },
    wooden_crates: {
        id: "wooden_crates",
        name: "木箱",
        type: "misc",
        desc: "几个大木箱，堆在角落，里面装着换季的衣物和亚麻制品。"
    },
    
    // 露台家具
    wicker_chairs: {
        id: "wicker_chairs",
        name: "藤椅",
        type: "misc",
        desc: "几张藤椅，摆放在露台上。"
    },
    tea_table_terrace: {
        id: "tea_table_terrace",
        name: "露台茶几",
        type: "misc",
        desc: "一张茶几，摆放在露台上，是享受下午茶的好地方。"
    },
    
    // 阁楼家具
    old_furniture: {
        id: "old_furniture",
        name: "旧家具",
        type: "misc",
        desc: "一些废弃的旧家具，堆放在阁楼里。"
    },
    wooden_boxes: {
        id: "wooden_boxes",
        name: "木箱",
        type: "misc",
        desc: "几个大木箱，堆在角落，不知道里面装着什么。"
    },
    // 场景物品
    karen_town: {
        id: "karen_town",
        name: "卡伦镇",
        type: "scene",
        desc: "一个宁静的小镇，是你逃离矿场后的第一个目的地。",
        interactive: true,
        notPickable: true
    },
    sanghuashan_mine: {
        id: "sanghuashan_mine",
        name: "桑华山矿场",
        type: "scroll",
        desc: "你曾经被困的地方，现在已经成为你不堪回首的记忆。",
        usable: true,
        notPickable: true
    }
};

// 根据模板 ID 创建新物品对象（深拷贝，避免引用修改模板）
function createItemFromTemplate(templateId) {
    const template = ITEM_TEMPLATES[templateId];
    if (!template) {
        console.error(`物品模板 "${templateId}" 不存在！`);
        return null;
    }
    // 简单深拷贝（适用于当前数据结构，无函数和循环引用）
    return JSON.parse(JSON.stringify(template));
}

// NPC ID 到尸体模板 ID 的映射
// 未在此映射中列出的 NPC 将使用默认的 ${npcId}_corpse 命名规则
const CORPSE_TEMPLATE_MAP = {
    liana: 'liana_corpse',           // 正常莉娅娜
    liana_wounded: 'liana_wounded_corpse',   // 伤痕累累的莉娅娜
    cecilia: 'cecilia_corpse',
    isabella: 'isabella_corpse',
    sophie: 'sophie_corpse',
    elena: 'elena_corpse',
    aisha: 'aisha_corpse',
    mine_supervisor: null,        // 无预设模板，使用通用尸体+CHARACTER_TEMPLATES中文名
    apprentice_knight: null,      // 无预设模板，使用通用尸体+CHARACTER_TEMPLATES中文名
    mad_miner: null,              // 无预设模板，使用通用尸体+CHARACTER_TEMPLATES中文名
    mad_supervisor: null          // 无预设模板，使用通用尸体+CHARACTER_TEMPLATES中文名
};

    // 根据 NPC ID 创建尸体对象
    // npcId: NPC的ID，drops: 掉落物品ID数组，extraProps: 额外属性（如自定义name/desc/corpseStory）
    function createCorpse(npcId, drops = [], extraProps = {}) {
        // 优先使用映射表，映射值为null表示没有预设模板，将使用通用尸体
        const mappedTemplateId = CORPSE_TEMPLATE_MAP[npcId];
        // 如果映射表中有明确的模板ID（非null），则使用；否则尝试默认命名规则
        const corpseTemplateId = mappedTemplateId !== undefined ? mappedTemplateId : `${npcId}_corpse`;
        // corpseTemplateId为null表示没有预设模板，直接走通用尸体逻辑
        const template = corpseTemplateId ? ITEM_TEMPLATES[corpseTemplateId] : null;

        // 从CHARACTER_TEMPLATES获取中文名称
        const charTemplate = (typeof CHARACTER_TEMPLATES !== 'undefined') ? CHARACTER_TEMPLATES[npcId] : null;
        const chineseName = charTemplate ? charTemplate.name : null;

        if (!template) {
            // 没有预设模板时，创建通用尸体，优先使用CHARACTER_TEMPLATES中的中文名
            const corpseName = extraProps.name || (chineseName ? `${chineseName}的尸体` : `${npcId}的尸体`);
            return {
                id: `corpse_${npcId}_${Date.now()}`,
                name: corpseName,
                type: "misc",
                desc: extraProps.desc || (charTemplate ? `${charTemplate.desc || '一具倒在血泊中的尸体'}可以拾取后在背包中搜刮。` : "一具倒在血泊中的尸体，可以拾取后在背包中搜刮。"),
                loot: [...drops]
            };
        }

        return {
            id: `corpse_${npcId}_${Date.now()}`,
            name: extraProps.name || template.name,
            type: "misc",
            desc: extraProps.desc || template.desc,
            loot: [...drops],
            dismemberable: template.dismemberable || false,
            usable: true,
            customAction: true,
            corpseStory: extraProps.corpseStory || template.corpseStory || []
        };
    }

// 批量创建物品
function createItemsFromTemplates(templateIds) {
    return templateIds.map(id => createItemFromTemplate(id)).filter(item => item !== null);
}

// 获取所有物品模板的 ID 列表（供调试或未来扩展）
function getAllTemplateIds() {
    return Object.keys(ITEM_TEMPLATES);
}

// 根据ID获取物品名称
function getItemNameById(itemId) {
    const item = ITEM_TEMPLATES[itemId];
    return item ? item.name : itemId;
}

// 根据ID获取物品详情
function getItemInfoById(itemId) {
    return ITEM_TEMPLATES[itemId] || null;
}