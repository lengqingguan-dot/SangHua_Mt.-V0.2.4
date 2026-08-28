// ============================================================
//  items/items_char_female_mage.js - 女魔法师随机肢体与尸体
//  评分、品质、脚码和罩杯沿用普通女性随机模板的概率。
// ============================================================

const FEMALE_MAGE_LIMB_NAMES = {
    head: '女魔法师的头', torso: '女魔法师的躯干',
    leg: '女魔法师的腿', arm: '女魔法师的手臂',
    hand: '女魔法师的手', foot: '女魔法师的脚',
    breast: '女魔法师的乳房'
};

const FEMALE_MAGE_LIMB_DESCS = {
    head: '她的面容仍残留着长期研习魔法造成的疲惫，发梢间夹着细小的结晶粉尘。',
    torso: '深色法袍已经破损，皮肤上分布着被失控魔力灼出的淡紫纹路。',
    leg: '常年在遗址中行走让腿部线条紧实，布料上沾满潮湿石屑。',
    arm: '手臂内侧留有繁复的施法刻痕，残余魔力正逐渐暗淡。',
    hand: '修长手指上沾着墨迹与结晶粉，指尖带有施法留下的薄茧。',
    foot: '脚背纤细，沾有暗道中的灰尘，踝侧残留一圈淡紫色魔力痕迹。',
    breast: '法袍下的组织带有细微魔力灼痕，残余的紫色光点正在缓慢消散。'
};

const FEMALE_MAGE_QUALITY_DESCS = {
    normal: '组织因魔力反噬而显得灰暗粗糙，残留能量几乎已经散尽。',
    good: '组织保存得较为完整，表面偶尔闪过微弱而稳定的紫色光点。',
    rare: '组织纹理清晰，细密魔力脉络仍在断面附近缓慢明灭。',
    epic: '组织呈现出晶莹质感，浓郁紫光沿着魔力脉络反复流动。',
    legendary: '组织几乎没有因死亡失去活性，强大魔力使其保持着温度与弹性。',
    mythic: '组织被纯粹魔力彻底重塑，血肉如半透明结晶般无瑕，散发出不属于凡物的辉光。'
};

function buildFemaleMageLimb(part, score, footSize, cup) {
    const rarity = scoreToQuality(score);
    let name = FEMALE_MAGE_LIMB_NAMES[part];
    if (part === 'foot') name += `（${footSize}）`;
    if (part === 'breast') name += `（${cup}）`;
    return {
        id: `female_mage_${part}`,
        name,
        type: 'limb',
        rarity,
        score,
        desc: `${FEMALE_MAGE_QUALITY_DESCS[rarity]}${FEMALE_MAGE_LIMB_DESCS[part]}肢体评分为 ${score}。`
    };
}

function generateFemaleMageCorpse() {
    const uid = `corpse_female_mage_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const footSize = rollGenericFootSize();
    const cup = rollGenericCup();
    const single = part => buildFemaleMageLimb(part, rollGenericScore(), footSize, cup);
    const pair = part => {
        const base = single(part);
        return [JSON.parse(JSON.stringify(base)), JSON.parse(JSON.stringify(base))];
    };
    const generatedLimbs = {
        head: [single('head')], torso: [single('torso')],
        leg: pair('leg'), arm: pair('arm'), hand: pair('hand'),
        foot: pair('foot'), breast: pair('breast')
    };
    const corpse = {
        id: uid,
        name: '女魔法师的尸体',
        type: 'limb',
        desc: '一具身穿破损深色法袍的女魔法师尸体。她身上的魔力纹路已经暗淡，只剩少量结晶粉末附着在衣褶间。',
        usable: true,
        customAction: true,
        dismemberable: true,
        loot: [],
        limbTemplates: [
            { id: 'head', name: '头', count: 1 },
            { id: 'torso', name: '躯干', count: 1 },
            { id: 'leg', name: '腿', count: 2 },
            { id: 'arm', name: '手臂', count: 2 },
            { id: 'hand', name: '手', count: 2 },
            { id: 'foot', name: `脚（${footSize}）`, count: 2 },
            { id: 'breast', name: `乳房（${cup}）`, count: 2 }
        ],
        generatedLimbs
    };
    ITEM_TEMPLATES[uid] = corpse;
    return corpse;
}
