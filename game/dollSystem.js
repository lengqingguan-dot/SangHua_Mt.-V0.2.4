// ============================================================
//  game/dollSystem.js - 魔偶组装、属性与装备界面
// ============================================================

const MAGIC_DOLL_HEART_ID = 'magic_doll_heart';

const MAGIC_DOLL_SLOT_DEFS = {
    head:        { name: '头颅', part: 'head' },
    torso:       { name: '躯干', part: 'torso' },
    leftArm:     { name: '左手臂', part: 'arm' },
    rightArm:    { name: '右手臂', part: 'arm' },
    leftHand:    { name: '左手', part: 'hand' },
    rightHand:   { name: '右手', part: 'hand' },
    leftLeg:     { name: '左腿', part: 'leg' },
    rightLeg:    { name: '右腿', part: 'leg' },
    leftFoot:    { name: '左脚', part: 'foot' },
    rightFoot:   { name: '右脚', part: 'foot' },
    leftBreast:  { name: '左乳房', part: 'breast' },
    rightBreast: { name: '右乳房', part: 'breast' }
};

const MAGIC_DOLL_SLOT_KEYS = Object.keys(MAGIC_DOLL_SLOT_DEFS);

const MAGIC_DOLL_PART_STAT_RATES = {
    head:   { maxHp: 2,  atk: 0.5, def: 0.5,  agi: 0.5 },
    torso:  { maxHp: 12, atk: 0,   def: 1.5,  agi: 0 },
    arm:    { maxHp: 0,  atk: 1.5, def: 0.5,  agi: 0 },
    hand:   { maxHp: 0,  atk: 1,   def: 0,    agi: 0.75 },
    leg:    { maxHp: 3,  atk: 0,   def: 0.75, agi: 0.5 },
    foot:   { maxHp: 0,  atk: 0,   def: 0.25, agi: 1 },
    breast: { maxHp: 4,  atk: 0,   def: 0.5,  agi: 0 }
};

function createEmptyMagicDollSlots() {
    return MAGIC_DOLL_SLOT_KEYS.reduce((slots, key) => { slots[key] = null; return slots; }, {});
}

function getMagicDollState() {
    if (!gameState.player.magicDoll) gameState.player.magicDoll = { slots: createEmptyMagicDollSlots() };
    if (!gameState.player.magicDoll.slots) gameState.player.magicDoll.slots = createEmptyMagicDollSlots();
    MAGIC_DOLL_SLOT_KEYS.forEach(key => {
        if (!(key in gameState.player.magicDoll.slots)) gameState.player.magicDoll.slots[key] = null;
    });
    return gameState.player.magicDoll;
}

function hasMagicDollHeart() {
    return !!(gameState.player && gameState.player.inventory && gameState.player.inventory.some(item => item && item.id === MAGIC_DOLL_HEART_ID));
}

function inferMagicDollLimbPart(item) {
    if (!item || item.type !== 'limb' || (item.id && item.id.includes('corpse'))) return null;
    if (item.limbPart && MAGIC_DOLL_PART_STAT_RATES[item.limbPart]) return item.limbPart;
    const id = String(item.id || '').toLowerCase();
    const name = String(item.name || '');
    const checks = [
        ['breast', /(?:^|_)breast(?:_|$)/, /乳房/],
        ['torso', /(?:^|_)torso(?:_|$)/, /躯干/],
        ['head', /(?:^|_)head(?:_|$)/, /头颅|的头$/],
        ['arm', /(?:^|_)arm(?:_|$)/, /手臂/],
        ['hand', /(?:^|_)hand(?:_|$)/, /(?:^|的)手(?:（|$)/],
        ['leg', /(?:^|_)leg(?:_|$)/, /(?:^|的)腿$/],
        ['foot', /(?:^|_)foot(?:_|$)/, /(?:^|的)脚(?:（|$)/]
    ];
    const match = checks.find(([, idPattern, namePattern]) => idPattern.test(id) || namePattern.test(name));
    return match ? match[0] : null;
}

function getMagicDollLimbScore(item) {
    if (!item) return 0;
    if (Number.isFinite(Number(item.score))) return Math.max(0, Math.min(100, Number(item.score)));
    const id = String(item.id || '');
    if (typeof CHARACTER_TEMPLATES !== 'undefined') {
        const ownerId = Object.keys(CHARACTER_TEMPLATES)
            .sort((a, b) => b.length - a.length)
            .find(characterId => id === characterId || id.startsWith(`${characterId}_`));
        if (ownerId) {
            const level = Math.max(1, Number(CHARACTER_TEMPLATES[ownerId].level) || 1);
            return Math.min(100, 30 + level * 2);
        }
    }
    const rarityScores = { normal: 25, good: 55, rare: 77, epic: 90, legendary: 97, mythic: 100 };
    return rarityScores[item.rarity] || 35;
}

function getMagicDollLimbPower(item) {
    return 1 + Math.floor(getMagicDollLimbScore(item) / 10);
}

function getMagicDollLimbStats(item, expectedPart) {
    const part = inferMagicDollLimbPart(item);
    if (!part || (expectedPart && part !== expectedPart)) return null;
    const power = getMagicDollLimbPower(item);
    const rates = MAGIC_DOLL_PART_STAT_RATES[part];
    return {
        part,
        score: getMagicDollLimbScore(item),
        power,
        maxHp: rates.maxHp * power,
        atk: rates.atk * power,
        def: rates.def * power,
        agi: rates.agi * power
    };
}

function calculateMagicDollStats() {
    const slots = getMagicDollState().slots;
    const totals = { maxHp: 0, atk: 0, def: 0, agi: 0 };
    MAGIC_DOLL_SLOT_KEYS.forEach(slotKey => {
        const item = slots[slotKey];
        if (!item) return;
        const stats = getMagicDollLimbStats(item, MAGIC_DOLL_SLOT_DEFS[slotKey].part);
        if (!stats) return;
        totals.maxHp += stats.maxHp;
        totals.atk += stats.atk;
        totals.def += stats.def;
        totals.agi += stats.agi;
    });
    return { maxHp: Math.round(totals.maxHp), atk: Math.round(totals.atk), def: Math.round(totals.def), agi: Math.round(totals.agi) };
}

function getMissingMagicDollSlots() {
    const slots = getMagicDollState().slots;
    return MAGIC_DOLL_SLOT_KEYS.filter(slotKey => !slots[slotKey]);
}

function isMagicDollComplete() {
    return hasMagicDollHeart() && getMissingMagicDollSlots().length === 0;
}

function buildMagicDollBattleAlly(index) {
    if (!isMagicDollComplete()) return null;
    const stats = calculateMagicDollStats();
    return {
        index, npcId: 'assembled_magic_doll', name: '拼合魔偶',
        currentHp: stats.maxHp, maxHp: stats.maxHp, sp: 0, maxSp: 0,
        atk: stats.atk, def: stats.def, agi: stats.agi,
        baseAtk: stats.atk, baseDef: stats.def, baseAgi: stats.agi,
        drops: [], exp: 0, level: 0,
        _ally: true, _magicDoll: true, _dead: false, _corpseSpawned: false
    };
}

function equipMagicDollLimb(slotKey, inventoryIndex) {
    const slotDef = MAGIC_DOLL_SLOT_DEFS[slotKey];
    const item = gameState.player.inventory[inventoryIndex];
    if (!hasMagicDollHeart() || !slotDef || !item) return;
    if (inferMagicDollLimbPart(item) !== slotDef.part) {
        print(`<span style="color:#ff8888;">这件肢体无法安装到${slotDef.name}位置。</span>`);
        return;
    }
    const doll = getMagicDollState();
    const previous = doll.slots[slotKey];
    gameState.player.inventory.splice(inventoryIndex, 1);
    if (previous) gameState.player.inventory.push(previous);
    doll.slots[slotKey] = item;
    print(`<span style="color:#cc99ff;">魔偶之心发出微光，「${item.name}」已经安装到${slotDef.name}。</span>`);
    showMagicDollLimbPicker(slotKey);
}

function unequipMagicDollLimb(slotKey) {
    const doll = getMagicDollState();
    const item = doll.slots[slotKey];
    if (!item) return;
    gameState.player.inventory.push(item);
    doll.slots[slotKey] = null;
    print(`<span style="color:#aaa0bd;">你从魔偶上取下了「${item.name}」。</span>`);
    showMagicDollLimbPicker(slotKey);
}

function getMagicDollPartColor(slotKey) {
    const item = getMagicDollState().slots[slotKey];
    return item ? getRarityColor(item.rarity || scoreToQuality(getMagicDollLimbScore(item))) : '#27303b';
}

// 轮廓与交互区域均由原图逐像素生成；这里不再维护近似的手绘轮廓。
function setMagicDollRegionHover(slotKey, active, element) {
    const panel = element && element.closest('.magic-doll-canvas');
    const label = panel && panel.querySelector('.magic-doll-hover-label');
    const highlight = panel && panel.querySelector(`[data-doll-highlight="${slotKey}"]`);
    if (highlight) highlight.classList.toggle('is-active', active);
    if (label) label.textContent = active ? MAGIC_DOLL_SLOT_DEFS[slotKey].name : '移动光标查看部位';
}

function getMagicDollVisualImage(slotKey, physicalSlot) {
    const item = getMagicDollState().slots[slotKey];
    const customImage = item && (item.dollImage || (item.dollVisual && item.dollVisual.image));
    return customImage || MAGIC_DOLL_DEFAULT_VISUALS[physicalSlot].image;
}

function getMagicDollHitPath(slotKey, physicalSlot) {
    const item = getMagicDollState().slots[slotKey];
    return (item && (item.dollHitPath || (item.dollVisual && item.dollVisual.hitPath))) || MAGIC_DOLL_PIXEL_PATHS[physicalSlot];
}

function renderMagicDollSvg() {
    const renderOrder = ['torso', 'leftArm', 'rightArm', 'leftHand', 'rightHand', 'leftLeg', 'rightLeg', 'leftFoot', 'rightFoot', 'leftBreast', 'rightBreast', 'head'];
    // 正面人物的身体左右与观察者相反：画面左侧对应魔偶右侧装备位。
    const mirroredPath = {
        leftArm: 'rightArm', rightArm: 'leftArm', leftHand: 'rightHand', rightHand: 'leftHand',
        leftLeg: 'rightLeg', rightLeg: 'leftLeg', leftFoot: 'rightFoot', rightFoot: 'leftFoot',
        leftBreast: 'rightBreast', rightBreast: 'leftBreast'
    };
    const layers = renderOrder.map(slotKey => {
        const physicalSlot = mirroredPath[slotKey] || slotKey;
        const image = getMagicDollVisualImage(slotKey, physicalSlot);
        return `<image class="magic-doll-part" href="${image}" width="${MAGIC_DOLL_IMAGE_WIDTH}" height="${MAGIC_DOLL_IMAGE_HEIGHT}"></image>
            <image class="magic-doll-part-highlight" data-doll-highlight="${slotKey}" href="${image}" width="${MAGIC_DOLL_IMAGE_WIDTH}" height="${MAGIC_DOLL_IMAGE_HEIGHT}" filter="url(#magic-doll-yellow-highlight)"></image>`;
    }).join('');
    const regions = renderOrder.map(slotKey => {
        const physicalSlot = mirroredPath[slotKey] || slotKey;
        return `<path class="magic-doll-pixel-region" data-doll-slot="${slotKey}" d="${getMagicDollHitPath(slotKey, physicalSlot)}" onmouseenter="setMagicDollRegionHover('${slotKey}', true, this)" onmouseleave="setMagicDollRegionHover('${slotKey}', false, this)" onclick="showMagicDollLimbPicker('${slotKey}')"><title>${MAGIC_DOLL_SLOT_DEFS[slotKey].name}</title></path>`;
    }).join('');
    return `<svg class="magic-doll-figure" viewBox="0 0 ${MAGIC_DOLL_IMAGE_WIDTH} ${MAGIC_DOLL_IMAGE_HEIGHT}" role="img" aria-label="魔偶肢体装备图" preserveAspectRatio="xMidYMid meet">
        <defs><filter id="magic-doll-yellow-highlight" color-interpolation-filters="sRGB"><feFlood flood-color="#ffd230" flood-opacity="0.38" result="yellow"></feFlood><feComposite in="yellow" in2="SourceAlpha" operator="in"></feComposite></filter></defs>
        ${layers}
        ${regions}
        <path class="magic-doll-breast-divider" d="M425 500V581"></path>
    </svg>`;
}

function renderMagicDollStatsSummary() {
    const stats = calculateMagicDollStats();
    const missing = getMissingMagicDollSlots();
    const stateText = missing.length === 0 ? '已完整组装，可参加战斗' : `尚缺少 ${missing.length} 个部位`;
    return `<div class="magic-doll-state ${missing.length === 0 ? 'magic-doll-state--ready' : ''}">${stateText}</div>
        <div class="equipment-summary magic-doll-summary"><div>生命<b>${stats.maxHp}</b></div><div>攻击<b>${stats.atk}</b></div><div>防御<b>${stats.def}</b></div><div>灵巧<b>${stats.agi}</b></div></div>`;
}

function renderMagicDollInterface() {
    if (!hasMagicDollHeart()) return '';
    const slots = getMagicDollState().slots;
    const equippedCount = MAGIC_DOLL_SLOT_KEYS.filter(key => slots[key]).length;
    return `<div class="magic-doll-panel">
        <div class="panel-section-label magic-doll-heading"><span>💜 魔偶</span><small>${equippedCount}/12</small></div>
        <div class="magic-doll-layout">
            <div class="magic-doll-canvas">${renderMagicDollSvg()}<div id="magic-doll-hover-label" class="magic-doll-hover-label">移动光标查看部位</div></div>
            <div class="magic-doll-overview"><div class="detail-card__desc">点击身体部位，为魔偶安装或替换对应肢体。所有十二个部位全部安装后，魔偶才会协助战斗。</div>${renderMagicDollStatsSummary()}</div>
        </div>
    </div>`;
}

function renderMagicDollItemStats(item, part) {
    const stats = getMagicDollLimbStats(item, part);
    if (!stats) return '';
    const signed = value => value ? `+${Math.round(value * 100) / 100}` : '—';
    return `<div class="magic-doll-limb-stats"><span>评分 <b>${stats.score}</b></span><span>生命 <b>${signed(stats.maxHp)}</b></span><span>攻击 <b>${signed(stats.atk)}</b></span><span>防御 <b>${signed(stats.def)}</b></span><span>灵巧 <b>${signed(stats.agi)}</b></span></div>`;
}

function showMagicDollLimbPicker(slotKey) {
    if (!hasMagicDollHeart()) { showEquipmentPanel(); return; }
    const slotDef = MAGIC_DOLL_SLOT_DEFS[slotKey];
    if (!slotDef) return;
    const current = getMagicDollState().slots[slotKey];
    const candidates = gameState.player.inventory.map((item, index) => ({ item, index })).filter(entry => inferMagicDollLimbPart(entry.item) === slotDef.part);
    let side = `<div class="magic-doll-picker"><div class="panel-section-label">${slotDef.name}</div>`;
    if (current) {
        side += `<div class="magic-doll-current" style="--item-rarity:${getMagicDollPartColor(slotKey)}"><small>当前安装</small><strong>${getInventoryDisplayName(current)}</strong>${renderMagicDollItemStats(current, slotDef.part)}<button type="button" onclick="unequipMagicDollLimb('${slotKey}')">取下</button></div>`;
    } else {
        side += `<div class="detail-empty detail-empty--compact">该部位尚未安装肢体</div>`;
    }
    side += `<div class="panel-section-label">可替换肢体</div><div class="magic-doll-candidates">`;
    if (candidates.length === 0) side += `<div class="detail-empty detail-empty--compact">物品栏中没有对应肢体</div>`;
    candidates.forEach(({ item, index }) => {
        const color = getRarityColor(item.rarity || scoreToQuality(getMagicDollLimbScore(item)));
        side += `<button type="button" class="magic-doll-candidate" style="--item-rarity:${color}" onclick="equipMagicDollLimb('${slotKey}',${index})"><span>${getInventoryDisplayName(item)}</span>${renderMagicDollItemStats(item, slotDef.part)}</button>`;
    });
    side += `</div></div>`;
    const html = makeTitle('魔偶肢体替换') + `<div class="magic-doll-panel magic-doll-panel--picker"><div class="magic-doll-layout"><div class="magic-doll-canvas">${renderMagicDollSvg()}<div id="magic-doll-hover-label" class="magic-doll-hover-label">${slotDef.name}</div></div>${side}</div>${renderMagicDollStatsSummary()}</div>` + makePanelFooter('showEquipmentPanel()', '返回装备栏', '←');
    UI.setDetail(html);
    currentPanel = 'magic_doll_picker';
}
