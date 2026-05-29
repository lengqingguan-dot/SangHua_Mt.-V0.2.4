// ============================================================
//  game/story.js - 剧情/任务数据定义
//  所有剧情事件、主线/支线任务的统一数据源
//  触发条件 + 剧情文本 + 完成条件 + 回调
// ============================================================

const STORIES = {

    // ==================== 剧情事件 ====================

    // 开场动画
    intro_opening: {
        id: 'intro_opening',
        type: 'event',
        trigger: { type: 'first_enter', room: 'mine_deep', flag: 'firstTimeEntered' },
        story: [
            "序章-夜出桑华山",
            "矿道深处只有镐尖敲击岩壁的声音。一下，又一下，沉闷得像心跳。",
            "空气里浮着石粉，吸进肺里很痛。你直起腰，脖颈的汗顺着脊背滑下去。",
            "监工的影子在远处晃了晃。没人说话，都低下头继续挖着。",
            "你握紧镐柄往下敲去。石壁迸裂，碎片飞溅，手上的镐子因为贫血而不断打滑。",
            "痛苦，无尽的痛苦。饥饿啃噬着你的身体，疲惫席卷着你的精神。",
            "但是你又一次举起镐子。",
            "不知过了多久，你终于砸出了一个像样的石块。",
            "你不知道你还能活多久，但也许这种生活似乎会持续到你的生命尽头。"
        ],
        onStart() {
            UI.setOverlay(true);
            clearOutput();
        },
        onComplete() {
            gameState.firstTimeEntered = false;
            waitingForName = true;
            UI.setOverlay(false);
            print(`<span style="color: #e6d5a8; font-weight: bold;">═══════════════════════════</span>`);
            print(`<span style="color: #e6d5a8; font-weight: bold;">你是谁？</span>`);
            print(`<span style="color: #888;">请在下方指令栏中输入你的名字。</span>`);
            print(`<span style="color: #888;">若留空则默认名为「散华」。</span>`);
            print(`<span style="color: #e6d5a8; font-weight: bold;">═══════════════════════════</span>`);
            print("");
            UI.elements.cmdInput.placeholder = "输入你的名字后回车...";
            UI.elements.cmdInput.focus();
        }
    },

    // 血色宝石触发莉娅娜攻击
    blood_gem_liana: {
        id: 'blood_gem_liana',
        type: 'event',
        trigger: { type: 'equip_and_enter', item: 'blood_gem', room: 'training_ground', npc_alive: 'liana' },
        story: [
            "莉娅娜注意到了你身上的血色宝石！",
            "她的红色瞳孔骤然收缩，眉头紧锁，手不自觉地按在了剑柄上。",
            "一种说不清的不详感从心底涌起，驱使着她想要摧毁你。",
            "「这东西...让我不舒服。」她低声说道，眼神变得危险起来。",
            "莉娅娜拔出长剑，向你冲来！"
        ],
        onStart() { startBattle('liana'); }
    },

    // 结局动画
    ending_escape: {
        id: 'ending_escape',
        type: 'event',
        trigger: { type: 'enter_room', room: 'mountain_path_14', flag_not_set: 'endingPlayed' },
        story: [
            "矿场甩在身后了。", "", "你不知道自己跑了多远。脚下是野地，杂草绊着靴子，露水打湿了裤脚。夜风从山口灌进来，贴着汗透的脊背，凉得像一瓢冷水。", "",
            "你停下来，弯着腰喘气。肺里还残着矿道的石粉，每吸一口气都像在磨砂纸。心跳撞着耳膜，咚咚的，盖过了风声。", "",
            "这一夜的事——你记得每一帧，但连不起来。门是怎么开的，那些是怎么倒下的。", "",
            "你只记得铁锈味——不是梯子上的那种锈。是热的、血的气味。", "",
            "远处有什么声音。你猛地回头，但什么也没有。只有风，只有草，白惨惨地躺在月光底下，脚下的路一直通向你再也回不去的那个井口。", "",
            "你不知道清洗什么时候来临。你甚至不知道什么是灭杀法术。你只知道桑华山会被抹掉。矿道，工棚，鞭子，草席，咳嗽整夜的人，睡着睡着就没了声息的人——全都会被抹掉。", "",
            "还有那些你没来得及杀的人。", "还有那些你已经杀了的人。", "",
            "你蹲下去，把脸埋进膝盖里。手指还在抖。不是因为累，不是因为怕。是因为你的身体比你更先知道——从今晚开始，有些东西不一样了。", "",
            "你听见山在沉默。", "三百年了，它一直沉默。被改名的时候沉默，被挖开的时候沉默，血渗进岩层的时候沉默。现在它还在沉默。", "",
            "你站起来。膝盖上的布料洇湿了两小块，不知道是露水还是汗。", "",
            "矿场的围墙黑黢黢地趴在月光底下，像一条黑蛇，高不可攀，昨天晚上下工你望着它，觉得自己一辈子都不会出去了。", "",
            "但是你翻过去了。", "",
            "身后，桑华山蹲伏在夜色里，灰黄色的岩体泛着冷光。你离开了。没有回头。", "",
            "自由了？也许吧。"
        ],
        onStart() {
            gameState.gameFlags.endingPlayed = true;
            UI.setOverlay(true);
            clearDetailPanel();
            currentPanel = null;
        },
        onComplete() {
            const endingRoom = gameState.world["mountain_path_14"];
            if (endingRoom) {
                if (!endingRoom.items) endingRoom.items = [];
                if (!endingRoom.items.includes("karen_town")) endingRoom.items.push("karen_town");
                endingRoom.desc = "山路的尽头，一片开阔的野地展现在眼前。\n你已经远离了桑华山，矿场的围墙消失在夜色中。\n不远处，你看到了一个小镇的轮廓——那是卡伦镇。\n北边是来的路，前方是未知的自由。";
            }
            UI.setOverlay(false);
            print(`<span style="color: #66ff66;">你成功逃离了桑华山矿场！</span>`);
            look();
            setTimeout(() => { updateMinimap(); updateSceneInfo(); }, 100);
        }
    },

    // 卡伦镇到达
    karen_town_arrival: {
        id: 'karen_town_arrival',
        type: 'event',
        trigger: { type: 'use_item', item: 'karen_town' },
        story: [
            "你向卡伦镇走去...", "",
            "你成功逃离了桑华山矿场！", "主线任务：逃离桑华山矿场 已完成", "",
            "目前的内容到这里就结束了！感谢游玩。",
            "因为现在ai迭代十分快，可能几个月后更新的ai，编程能力比我们现在用的又会强上不少。",
            "因此作者也想好好沉淀一下，更多的是想做一个有更丰富内涵的游戏，而不是简单的瑟瑟。",
            "不过如果朋友们想要做游戏的模组，还算喜欢这种游戏类型的，欢迎加入discord群组。我们一起讨论技术，或者更多创作思路。",
            "再次感谢大家的支持！discord群聊详见作品简介。"
        ],
        onStart() {
            UI.setOverlay(true);
            clearDetailPanel();
            currentPanel = null;
        },
        onComplete() {
            gameState.player.location = 'road';
            if (!gameState.gameFlags) gameState.gameFlags = {};
            gameState.gameFlags.roadEntered = true;
            StoryEngine.markQuestProgress('quest_night_escape', 0);
            UI.setOverlay(false);
            look();
            updateMinimap();
            updateSceneInfo();
        }
    },

    // ==================== 主线任务 ====================

    // 主线任务1 - 不喜欢你，还有你的石头（触发条件：输入名字后触发）
    quest_surface: {
        id: 'quest_surface',
        type: 'main',
        name: '主线任务1：不喜欢你，还有你的石头',
        trigger: { type: 'flag', flag: 'name_set' },
        conditions: {
            type: 'single',
            condType: 'enter_room',
            condValue: 'mine_exit',
            label: '到达地面（二号矿井口）'
        },
        description: '离开这个地方，到地面上。',
        rewards: { exp: 20 }
    },

    // 主线任务2 - 夜出桑华山
    quest_night_escape: {
        id: 'quest_night_escape',
        type: 'main',
        name: '主线任务2：夜出桑华山',
        trigger: { type: 'quest_complete', quest: 'quest_surface' },
        conditions: {
            type: 'single',
            condType: 'enter_room',
            condValue: 'mountain_path_14',
            label: '到达山路尽头'
        },
        description: '这些牢笼不是为人打造的，它们关不住你。',
        rewards: { exp: 100 }
    },

    // ==================== 支线任务 ====================

    // 支线1 - 血红色的眼睛
    quest_blood_eyes: {
        id: 'quest_blood_eyes',
        type: 'side',
        name: '支线任务：血红色的眼睛',
        trigger: { type: 'first_talk', npc: 'tired_miner' },
        conditions: {
            type: 'single',
            condType: 'read_item',
            condValue: 'miner_note',
            label: '阅读"染血的字条"'
        },
        startStory: [
            "疲惫的矿工拜托你：「孩子，你能帮我去四号矿井看看吗，我有位朋友在那。」",
            "「他脸上有一道很长的疤，瘦高个。」",
            "「如果找到他，回来和我说一声，行吗？」"
        ],
        completeStory: [
            "你讲述了在北侧矿道发现的一切...",
            "矿工沉默了很久，最终只是点了点头。",
            "「谢谢...至少我知道了...」"
        ],
        description: '去四号矿井看看，找到脸上带疤的工友。',
        rewards: { exp: 30, item: 'bread' }
    },

    // 支线2 - 清洗
    quest_purge_order: {
        id: 'quest_purge_order',
        type: 'side',
        name: '支线任务：清洗',
        trigger: { type: 'has_item', item: 'urgent_order' },
        conditions: {
            type: 'single',
            condType: 'read_item',
            condValue: 'urgent_order',
            label: '阅读"加急密令"'
        },
        description: '看看密令内容。',
        rewards: { exp: 40 }
    },

    // 支线3 - 这是谁的秘密基地
    quest_secret_base: {
        id: 'quest_secret_base',
        type: 'side',
        name: '支线任务：这是谁的秘密基地',
        trigger: { type: 'enter_room', room: 'forest_4_center' },
        conditions: {
            type: 'single',
            condType: 'use_item',
            condValue: 'teleport_circle',
            label: '使用传送阵'
        },
        description: '扫开落叶堆，探索地下。',
        rewards: { exp: 50 }
    },

    // 支线4 - 你是敌人，还是朋友？
    quest_friend_or_foe: {
        id: 'quest_friend_or_foe',
        type: 'side',
        name: '支线任务：你是敌人，还是朋友？',
        trigger: { type: 'enter_room', room: 'hut_floor1' },
        conditions: {
            type: 'single',
            condType: 'first_talk',
            condValue: 'serena',
            label: '首次与瑟蕾娜·紫雾对话'
        },
        description: '木屋中的神秘法师...',
        rewards: { item: 'magic_gem' }  // 魔镜（占位符，后续替换）
    },

    // 支线5 - 兰德尔家族雕像重建工作
    quest_statue_rebuild: {
        id: 'quest_statue_rebuild',
        type: 'side',
        name: '支线任务：兰德尔家族雕像重建工作',
        trigger: {
            type: 'composite_trigger',
            operator: 'all',
            triggers: [
                { type: 'flag', flag: 'statue_pushed' },  // 推倒了雕像
                { type: 'npc_not_defeated', npc: 'sophie' }  // 索菲未死亡
            ]
        },
        conditions: {
            type: 'composite', operator: 'all',
            subConditions: [
                { type: 'has_item', item: 'cecilia_head_broken', label: '被玩坏的塞西莉亚的头颅' },
                { type: 'has_item', item: 'cecilia_tongue', label: '塞西莉亚的舌头' },
                { type: 'has_item_count', item: 'cecilia_foot', count: 2, label: '塞西莉亚的脚×2' },
                { type: 'has_item', item: 'isabella_torso', label: '伊莎贝拉的躯干' },
                { type: 'has_item_count', item: 'isabella_breast', count: 2, label: '伊莎贝拉的乳房×2' },
                { type: 'has_item', item: 'isabella_head', label: '伊莎贝拉的头颅' },
                { type: 'has_item_count', item: 'elena_leg', count: 2, label: '艾莲娜的腿×2' },
                { type: 'has_item_count', item: 'elena_foot', count: 2, label: '艾莲娜的脚×2' },
                { type: 'has_item_count', item: 'isabella_arm', count: 2, label: '伊莎贝拉的手臂×2' },
                { type: 'has_item_count', item: 'isabella_hand', count: 2, label: '伊莎贝拉的手×2' },
                { type: 'has_item', item: 'knight_greatsword', label: '骑士大剑' },
                { type: 'interact_with', item: 'randolph_statue_fallen', label: '与雕像底座交互' }
            ]
        },
        description: '收集指定肢体部位，在雕像底座重建兰德尔家族的雕像。',
        rewards: { item: 'statue_obedient' }  // 雕像【顺从】（后续创建）
    }
};