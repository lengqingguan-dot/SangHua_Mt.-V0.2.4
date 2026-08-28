// ============================================================
//  items/items_char_huasha.js - 华沙（驿站老板）的肢体与尸体
//  品质统一为绿色（优良），脚码37，乳房B罩杯
//  所有成对肢体（腿/手臂/手/脚/乳房）共用同一模板
// ============================================================

const HUASHA_QUALITY = 'good';
const HUASHA_FOOT_SIZE = '37码';
const HUASHA_CUP = 'B罩杯';

Object.assign(ITEM_TEMPLATES, {

    huasha_head: {
        id: "huasha_head",
        name: "华沙的头",
        type: "limb",
        rarity: HUASHA_QUALITY,
        score: 75,
        desc: "一颗眉眼清秀的女性头颅，来自华沙。浅淡雀斑散落在鼻梁与脸颊，栗色长发从松开的麻花辫中披散下来；五官算不上华丽，却有一种清朗、耐看而协调的感觉。"
    },

    huasha_torso: {
        id: "huasha_torso",
        name: "华沙的躯干",
        type: "limb",
        rarity: HUASHA_QUALITY,
        score: 75,
        desc: "一截腰身细韧的女性躯干，来自华沙。肩背与腰腹保留着常年奔波形成的紧实感，身材比例自然；皮肤因久囚而略显苍白，却没有严重破坏整体轮廓。"
    },

    huasha_leg: {
        id: "huasha_leg",
        name: "华沙的腿",
        type: "limb",
        rarity: HUASHA_QUALITY,
        score: 75,
        desc: "一条结实耐用的女性腿，来自华沙。大腿与小腿带着长期赶路形成的紧致线条，膝部和脚踝附近留有少量旧磨痕；比例端正，但皮肤与轮廓都较为普通。"
    },

    huasha_arm: {
        id: "huasha_arm",
        name: "华沙的手臂",
        type: "limb",
        rarity: HUASHA_QUALITY,
        score: 75,
        desc: "一条匀称有力的女性手臂，来自华沙。小臂保留着执笔、牵马和搬运行李形成的薄实肌肉，手腕处有一圈镣铐留下的旧印，整体形态尚算完整。"
    },

    huasha_hand: {
        id: "huasha_hand",
        name: "华沙的手",
        type: "limb",
        rarity: HUASHA_QUALITY,
        score: 75,
        desc: "一只手型利落的女性手，来自华沙。指节分明，指腹和虎口留有执笔与握缰绳磨出的薄茧；手指仍显得灵活，但较明显的劳作痕迹削弱了细腻感。"
    },

    huasha_foot: {
        id: "huasha_foot",
        name: "华沙的脚",
        type: "limb",
        rarity: HUASHA_QUALITY,
        score: 75,
        desc: "一只清瘦匀称的女性脚，来自华沙。它是37码，脚背弧线自然，脚底留有长期行走形成的薄茧与几道淡褐旧痕；算不上娇嫩，却十分实用。"
    },

    huasha_breast: {
        id: "huasha_breast",
        name: "华沙的乳房",
        type: "limb",
        rarity: HUASHA_QUALITY,
        score: 75,
        desc: "一只轮廓柔和自然的女性乳房，来自华沙。它是B罩杯，体积适中，皮肤因牢狱生活略显苍白，但形态与弹性保存得较好，外观匀称而没有明显变形。"
    }

});

// 生成华沙的尸体（可互动、可搜刮、可肢解、可拾取）
function generateHuashaCorpse() {
    const uid = `corpse_huasha_${Date.now()}`;

    const limbTemplates = [
        { id: 'huasha_head', name: '头', count: 1 },
        { id: 'huasha_torso', name: '躯干', count: 1 },
        { id: 'huasha_leg', name: '腿', count: 2 },
        { id: 'huasha_arm', name: '手臂', count: 2 },
        { id: 'huasha_hand', name: '手', count: 2 },
        { id: 'huasha_foot', name: '脚', count: 2 },
        { id: 'huasha_breast', name: '乳房', count: 2 }
    ];

    const clone = (o) => JSON.parse(JSON.stringify(o));
    const generatedLimbs = {
        huasha_head: [clone(ITEM_TEMPLATES['huasha_head'])],
        huasha_torso: [clone(ITEM_TEMPLATES['huasha_torso'])],
        huasha_leg: [clone(ITEM_TEMPLATES['huasha_leg']), clone(ITEM_TEMPLATES['huasha_leg'])],
        huasha_arm: [clone(ITEM_TEMPLATES['huasha_arm']), clone(ITEM_TEMPLATES['huasha_arm'])],
        huasha_hand: [clone(ITEM_TEMPLATES['huasha_hand']), clone(ITEM_TEMPLATES['huasha_hand'])],
        huasha_foot: [clone(ITEM_TEMPLATES['huasha_foot']), clone(ITEM_TEMPLATES['huasha_foot'])],
        huasha_breast: [clone(ITEM_TEMPLATES['huasha_breast']), clone(ITEM_TEMPLATES['huasha_breast'])]
    };

    const corpse = {
        id: uid,
        name: "华沙的尸体",
        type: "limb",
        desc: "一具鬓发散乱的女子尸体，正是驿站老板华沙。她蜷在潮湿的牢道里，眼睛半睁着，到死都没能等到那个愿意带她离开的人。",
        usable: true,
        customAction: true,
        dismemberable: true,
        loot: ["bread"],
        limbTemplates: limbTemplates,
        generatedLimbs: generatedLimbs,
        corpseStory: [
            "你蹲下来看华沙的尸体。她的脸贴在冰冷的泥地上，散乱的长发掩住了半边眉眼。",
            "她生前总有力气高声招呼往来的旅人，此刻却安静得像一截被遗忘在角落里的旧木。",
            "你想起她说过的那些话——她想离开这里，想回驿站去。可终究，她没能走出这地牢。"
        ]
    };
    ITEM_TEMPLATES[uid] = corpse;
    return corpse;
}
