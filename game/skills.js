// ============================================================
//  game/skills.js - 技能数据定义
//  与战斗逻辑分离，供面板和战斗系统共用
// ============================================================

const skills = {
    hatred: {
        name: "仇恨",
        description: "释放后本场战斗攻击力翻倍，灵巧降低至0，防御降低50%（本场战斗只能使用一次）",
        cost: 10,
        effect: function() {
            if (battleState.hatredUsed) {
                print(`<span style="color: #ffaaaa;">仇恨技能已经在本场战斗中使用过了！</span>`);
                gameState.player.sp += this.cost;
                return false;
            }
            battleState.hatredUsed = true;
            gameState.player.atk *= 2;
            gameState.player.agi = 0;
            gameState.player.def *= 0.5;
            print(`<span style="color: #ff6666;">你释放了技能「仇恨」！</span>`);
            print(`<span style="color: #ff6666;">你的攻击力翻倍，灵巧降低至0，防御降低50%！</span>`);
            return true;
        }
    }
};