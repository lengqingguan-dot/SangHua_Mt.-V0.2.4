// ============================================================
//  game/balance.js - 等级、经验与基础数值的统一规则
//  新NPC只需填写 level；type 为 boss 时自动套用首领倍率。
// ============================================================

function getExpRequiredForLevel(level) {
    const lv = Math.max(1, Math.floor(level || 1));
    if (lv <= 5) return 20 + (lv - 1) * 15;       // 20 / 35 / 50 / 65 / 80
    if (lv <= 10) return 100 + (lv - 6) * 25;     // 100—200
    if (lv <= 20) return 240 + (lv - 11) * 40;    // 240—600
    return 660 + (lv - 21) * 60;                  // 21级后稳定线性增加
}

function getPlayerBaseStatsForLevel(level) {
    const lv = Math.max(1, Math.floor(level || 1));
    const gained = lv - 1;
    return {
        maxHp: 20 + gained * 6,
        maxSp: 10 + gained * 2,
        atk: 3 + gained * 2,
        def: 2 + gained,
        agi: 3 + Math.floor(gained / 2)
    };
}

function applyPlayerLevelBalance(player, preserveResourceRatio = true) {
    if (!player) return;
    const oldMaxHp = Math.max(1, player.maxHp || 1);
    const oldMaxSp = Math.max(1, player.maxSp || 1);
    const hpRatio = preserveResourceRatio ? Math.max(0, Math.min(1, (player.hp || 0) / oldMaxHp)) : 1;
    const spRatio = preserveResourceRatio ? Math.max(0, Math.min(1, (player.sp || 0) / oldMaxSp)) : 1;
    const stats = getPlayerBaseStatsForLevel(player.level);
    const hpModifier = player.equipment?.accessory?.maxHpPercent || 0;
    if (hpModifier) stats.maxHp = Math.max(1, Math.floor(stats.maxHp * (1 + hpModifier)));
    Object.assign(player, stats);
    player.hp = Math.max(1, Math.round(player.maxHp * hpRatio));
    player.sp = Math.max(0, Math.round(player.maxSp * spRatio));
    player.maxExp = getExpRequiredForLevel(player.level);
}

function getNpcStatsForLevel(level, isBoss = false) {
    const lv = Math.max(1, Math.floor(level || 1));
    const base = {
        maxHp: 18 + lv * 7,
        maxSp: 8 + lv * 3,
        atk: 2 + lv * 2,
        def: 1 + Math.floor(lv * 1.1),
        agi: 3 + Math.floor(lv / 2),
        exp: 6 + lv * 4
    };
    if (!isBoss) return base;
    return {
        maxHp: base.maxHp * 3,
        maxSp: base.maxSp * 2,
        atk: Math.round(base.atk * 1.2),
        def: Math.round(base.def * 1.15),
        agi: base.agi,
        exp: base.exp * 4
    };
}

function applyNpcLevelBalance(npc) {
    if (!npc || typeof npc !== 'object') return npc;
    const stats = getNpcStatsForLevel(npc.level || 1, npc.type === 'boss');
    npc.maxHp = stats.maxHp;
    npc.hp = npc.wounded ? Math.max(1, Math.floor(stats.maxHp * 0.2)) : stats.maxHp;
    npc.maxSp = stats.maxSp;
    npc.sp = stats.maxSp;
    npc.atk = stats.atk;
    npc.def = stats.def;
    npc.agi = stats.agi;
    npc.exp = npc.canFight ? stats.exp : 0;
    return npc;
}

function rebalanceAllCharacterTemplates() {
    if (typeof CHARACTER_TEMPLATES === 'undefined') return;
    Object.values(CHARACTER_TEMPLATES).forEach(applyNpcLevelBalance);
}

rebalanceAllCharacterTemplates();
