// ============================================================
//  示例模组 - 角色/NPC 数据
//  格式与主世界 CHARACTER_TEMPLATES 相同
//  NPC ID请使用唯一前缀，避免与主世界冲突
// ============================================================

const MOD_CHARACTER_TEMPLATES = {
    // 示例：村庄杂货铺老板
    shopkeeper_1: {
        id: "shopkeeper_1",
        name: "杂货铺老板",
        type: "npc",
        desc: "一个微胖的中年人，留着八字胡，正靠在柜台上打瞌睡。听到脚步声，他睁开了眼睛。",
        dialogue: [
            "欢迎光临！本店应有尽有！",
            "这些草药都是我亲自从山上采的，新鲜得很！",
            "最近山里不太平，你要买点什么防身？"
        ],
        repeatDialogue: [
            "还需要什么尽管说，价格公道！",
            "下次再来啊！"
        ],
        level: 1,
        hp: 10,
        maxHp: 10,
        atk: 1,
        def: 0,
        agi: 2,
        canTalk: true,
        canFight: false
    },

    // 示例：村庄路人
    villager_1: {
        id: "villager_1",
        name: "村民",
        type: "npc",
        desc: "一个穿着粗布衣服的村民，正蹲在井边洗衣服。他抬头看了你一眼，又继续忙活。",
        dialogue: [
            "你是从矿场那边来的？那边最近好像出了什么事。",
            "听说矿井里挖出了不干净的东西，好几个矿工都疯了。",
            "你要是没事，最好别往那边去。"
        ],
        repeatDialogue: [
            "小心点啊，年轻人。"
        ],
        level: 1,
        hp: 8,
        maxHp: 8,
        atk: 1,
        def: 0,
        agi: 2,
        canTalk: true,
        canFight: false
    },

    // 示例：异世界少女（与主世界角色属性功能相同的女性NPC）
    village_maiden: {
        id: "village_maiden",
        name: "异世界的少女",
        type: "npc",
        gender: "female",
        desc: "一位身穿淡蓝色连衣裙的少女，站在广场中央好奇地打量着你。她有着一头翠绿色的长发，皮肤白皙，蓝宝石般的眼睛闪烁着好奇的光芒。看到陌生人，她微微一惊，但并没有逃跑。",
        dialogue: [
            "你...你是什么人？我从没见过穿成你这样的人。",
            "你是从那个传送阵过来的吧？那个魔法阵偶尔会把其他世界的人带来这里。",
            "我们这个村庄很小，但很安全。你可以在这里休息一下。"
        ],
        repeatDialogue: [
            "你又要来找我说话了吗？",
            "别太靠近我哦。"
        ],
        level: 3,
        hp: 25,
        maxHp: 25,
        atk: 4,
        def: 2,
        agi: 8,
        exp: 15,
        canTalk: true,
        canFight: true,
        dismemberable: true,
        limbTemplates: [
            { id: 'mod_maiden_head', name: '头颅', count: 1 },
            { id: 'mod_maiden_torso', name: '躯干', count: 1 },
            { id: 'mod_maiden_leg', name: '腿', count: 2 },
            { id: 'mod_maiden_hand', name: '手', count: 2 },
            { id: 'mod_maiden_foot', name: '脚', count: 2 },
            { id: 'mod_maiden_breast', name: '乳房', count: 2 },
            { id: 'mod_maiden_arm', name: '手臂', count: 2 }
        ],
        drops: ["herb", "bread"],
        assaultStory: [
            "你一把抓住少女的手腕，她惊恐地瞪大了蓝色的眼睛。",
            "「放开我！你这个疯子！」她拼命挣扎，试图挣脱你的控制。",
            "但你的力量远超于她，你将她按倒在广场的青石板上。",
            "淡蓝色的连衣裙被你粗暴地掀开，露出她白皙的大腿。",
            "少女的眼泪夺眶而出，但她的挣扎却让你更加兴奋。",
            "你在她柔软的身体里释放了自己的欲望。"
        ]
    },

    // 示例：鸡（可互动的小动物）
    chicken_1: {
        id: "chicken_1",
        name: "母鸡",
        type: "npc",
        desc: "一只肥硕的母鸡，正在路边悠闲地啄食。它咯咯叫了两声，似乎并不怕人。",
        dialogue: [
            "咯咯咯～"
        ],
        repeatDialogue: [
            "咯咯～"
        ],
        level: 0,
        hp: 3,
        maxHp: 3,
        atk: 1,
        def: 0,
        agi: 5,
        canTalk: false,
        canFight: true,
        hostile: false,
        drops: ["mod_chicken_egg"]
    }
};