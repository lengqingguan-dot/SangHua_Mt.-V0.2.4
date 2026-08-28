// ============================================================
//  items/items_char_mandorola.js - 曼德罗拉的肢体与尸体
//  品质统一为绿色（优良），与贫民窟女尸肢体结构一致
// ============================================================

const MANDOROLA_QUALITY = 'good';

Object.assign(ITEM_TEMPLATES, {

    mandorola_head: {
        id: "mandorola_head",
        name: "曼德罗拉的头",
        type: "limb",
        rarity: MANDOROLA_QUALITY,
        score: 68,
        desc: "一颗轮廓清晰锐利的女性头颅，来自曼德罗拉。极长的黑发披散在脸侧，金色瞳孔与苍白皮肤形成醒目的反差；五官冷峻而比例协调，细看之下只有少量不易察觉的瑕疵。"
    },

    mandorola_torso: {
        id: "mandorola_torso",
        name: "曼德罗拉的躯干",
        type: "limb",
        rarity: MANDOROLA_QUALITY,
        score: 68,
        desc: "一截纤细紧实的女性躯干，来自曼德罗拉。腰腹与背部覆盖着为潜行和短促爆发形成的薄实肌肉，黑衣之下的身体没有多余赘肉，整体比例干净利落。"
    },

    mandorola_leg: {
        id: "mandorola_leg",
        name: "曼德罗拉的腿",
        type: "limb",
        rarity: MANDOROLA_QUALITY,
        score: 68,
        desc: "一条细长有力的女性腿，来自曼德罗拉。大腿与小腿的肌肉分布极为利落，兼具爆发力与灵活性；长期在狭窄地道中移动也没有破坏流畅而出众的比例。"
    },

    mandorola_arm: {
        id: "mandorola_arm",
        name: "曼德罗拉的手臂",
        type: "limb",
        rarity: MANDOROLA_QUALITY,
        score: 68,
        desc: "一条纤细而富有力量的女性手臂，来自曼德罗拉。肩、肘与腕部比例精准，薄薄的肌肉足以迅速完成挥刀、格挡与攀爬动作；除训练痕迹外，几乎找不到影响轮廓的缺点。"
    },

    mandorola_hand: {
        id: "mandorola_hand",
        name: "曼德罗拉的手",
        type: "limb",
        rarity: MANDOROLA_QUALITY,
        score: 68,
        desc: "一只精巧灵活的女性手，来自曼德罗拉。手指细长，掌形窄小，指甲修剪得极短；掌心只有一层不影响触感的持刀薄茧，兼具美观与实用性。"
    },

    mandorola_foot: {
        id: "mandorola_foot",
        name: "曼德罗拉的脚",
        type: "limb",
        rarity: MANDOROLA_QUALITY,
        score: 68,
        desc: "一只窄小而轮廓出众的女性脚，来自曼德罗拉。它是36码，足弓清晰，脚趾整齐而抓地有力；长期潜行只在脚底留下均匀薄茧，没有破坏整体形态。"
    },

    mandorola_breast: {
        id: "mandorola_breast",
        name: "曼德罗拉的乳房",
        type: "limb",
        rarity: MANDOROLA_QUALITY,
        score: 68,
        desc: "一只小巧紧实的女性乳房，来自曼德罗拉。它是A罩杯，轮廓贴合不妨碍行动的纤细身形；外观整洁、比例自然，但没有特别醒目的特征。"
    }

});

// 生成曼德罗拉的尸体（可互动、可搜刮、可肢解、可拾取）
function generateMandorolaCorpse() {
    const uid = `corpse_mandorola_${Date.now()}`;

    const limbTemplates = [
        { id: 'mandorola_head', name: '头', count: 1 },
        { id: 'mandorola_torso', name: '躯干', count: 1 },
        { id: 'mandorola_leg', name: '腿', count: 2 },
        { id: 'mandorola_arm', name: '手臂', count: 2 },
        { id: 'mandorola_hand', name: '手', count: 2 },
        { id: 'mandorola_foot', name: '脚', count: 2 },
        { id: 'mandorola_breast', name: '乳房', count: 2 }
    ];

    const clone = (o) => JSON.parse(JSON.stringify(o));
    const generatedLimbs = {
        mandorola_head: [clone(ITEM_TEMPLATES['mandorola_head'])],
        mandorola_torso: [clone(ITEM_TEMPLATES['mandorola_torso'])],
        mandorola_leg: [clone(ITEM_TEMPLATES['mandorola_leg']), clone(ITEM_TEMPLATES['mandorola_leg'])],
        mandorola_arm: [clone(ITEM_TEMPLATES['mandorola_arm']), clone(ITEM_TEMPLATES['mandorola_arm'])],
        mandorola_hand: [clone(ITEM_TEMPLATES['mandorola_hand']), clone(ITEM_TEMPLATES['mandorola_hand'])],
        mandorola_foot: [clone(ITEM_TEMPLATES['mandorola_foot']), clone(ITEM_TEMPLATES['mandorola_foot'])],
        mandorola_breast: [clone(ITEM_TEMPLATES['mandorola_breast']), clone(ITEM_TEMPLATES['mandorola_breast'])]
    };

    const corpse = {
        id: uid,
        name: "曼德罗拉的尸体",
        type: "limb",
        desc: "一具少女的尸体。她倒在自己最熟悉的地道里，金色瞳孔已经没了光。黑发铺在湿冷的泥地上，像被谁随手泼开的一捧夜。",
        usable: true,
        customAction: true,
        dismemberable: true,
        loot: ["skull_key"],
        limbTemplates: limbTemplates,
        generatedLimbs: generatedLimbs,
        corpseStory: [
            "你蹲下来看曼德罗拉的尸体。",
            "她比活着的时候更安静，那张总是绷着的、随时准备翻脸的年轻面孔，此刻只剩下一种很淡的、近乎无辜的空白。",
            "那把曾抵住你喉咙的匕首不知滚到了哪里。地道里只剩你自己的呼吸声。"
        ]
    };
    ITEM_TEMPLATES[uid] = corpse;
    return corpse;
}
