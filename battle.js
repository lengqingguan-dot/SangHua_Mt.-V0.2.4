// 视图层 

const BattleUI = {
    logBattleStart: () => {
        print("");
        print(`═══════ ⚔️ 战斗开始 ═══════`);
    },
    
    logEnemyInfo: (index, name, hp, atk, def, agi) => {
        print(`<span style="color: #ffaaaa;">敌人${index + 1}: ${name} (HP:${hp} ATK:${atk} DEF:${def} AGI:${agi})</span>`);
    },
    
    logPlayerStatus: (hp, maxHp, sp, maxSp, atk, def, agi) => {
        print(`<span style="color: #aaffaa;">你 (HP:${hp}/${maxHp} SP:${sp}/${maxSp} ATK:${atk} DEF:${def} AGI:${agi})</span>`);
    },

    logDivider: () => {
        print("────────────────────────────────");
    },
    
    logRound: (round) => {
        print(`<span style="color: #ffdd44;">═══════════════════════════</span>`);
        print(`<span style="color: #ffdd44;">【第${round}回合】</span>`);
    },
    
    logTurnOrder: (orderNames) => {
        print(`<span style="color: #888;">行动顺序: ${orderNames.join(' → ')}</span>`);
        print("");
    },
    
    logTurnStart: (name, isPlayer) => {
        const color = isPlayer ? "#aaffaa" : "#ffaaaa";
        print(`<span style="color: ${color};">→ ${name} 的回合</span>`);
    },
    
    logAction: (attackerName, targetName) => {
        print(`${attackerName} 选择攻击 ${targetName}！`);
    },
    
    logDodge: (targetName, isPlayerTurn) => {
        print(`${isPlayerTurn ? '你的攻击被 ' + targetName + ' 闪避了' : targetName + ' 的攻击被你闪避了'}！`);
    },
    
    logDamage: (attackerName, targetName, damage) => {
        print(`${attackerName} 对 ${targetName} 造成 <span style="color: #ff6666;">${damage}</span> 点伤害！`);
    },
    
    logDeath: (name, isPlayer) => {
        const color = isPlayer ? "#ff6666" : "#ff8888";
        print(`<span style="color: ${color};">${name} ${isPlayer ? '倒下了...' : '倒下了！'}</span>`);
    },
    
    logEnemyHp: (name, hp, maxHp) => {
        print(`<span style="color: #ff8888;">${name} HP: ${hp}/${maxHp}</span>`);
    },

    logSkillUse: (skillName, effectDesc) => {
        print(`<span style="color: #ff6666;">你释放了技能「${skillName}」！</span>`);
        print(`<span style="color: #ff6666;">${effectDesc}</span>`);
    },
    
    logMessage: (msg, color = "#888") => {
        print(`<span style="color: ${color};">${msg}</span>`);
    },
    
    renderSkills: (skillsData, currentSp, maxSp, callbackName) => {
        if (!UI.elements.detailPanel) return;
        
        let html = '<h3>技能</h3>';
        if (skillsData && skillsData.length > 0) {
            html += '<div class="skill-buttons">';
            skillsData.forEach(s => {
                const disabled = currentSp < s.cost ? 'disabled' : '';
                html += `
                    <button class="skill-button ${disabled}" onclick="${callbackName}('${s.id}')" ${disabled}>
                        <span class="skill-name">${s.name}</span>
                        <span class="skill-cost">SP: ${s.cost} (${currentSp}/${maxSp})</span>
                        <span class="skill-desc">${s.description}</span>
                    </button>
                `;
            });
            html += '</div>';
        } else {
            html += '<p>暂无技能</p>';
        }
        UI.setDetail(html);
    },

    clearSkills: () => {
        if (UI.elements.detailPanel) UI.clearDetail();
    }
};


// 逻辑层 

const BattleSystem = {
    state: {
        inBattle: false,
        enemies: [],
        round: 0,
        currentTurnIndex: 0,
        turnOrder: [],
        activeEffects: {}, // 预留：Buff/Debuff 状态机
        originalPlayerStats: null
    },

    // 预留的硬编码技能库（未来应迁移至 JSON）
    skillsDict: {
        hatred: {
            id: "hatred",
            name: "仇恨",
            description: "释放后本场战斗攻击力翻倍，灵巧降低至0，防御降低50%（本场战斗只能使用一次）",
            cost: 10,
            effect: (system) => {
                if (system.state.activeEffects.hatred) {
                    BattleUI.logMessage("仇恨技能已经在本场战斗中使用过了！", "#ffaaaa");
                    return false;
                }
                system.state.activeEffects.hatred = true;
                gameState.player.atk *= 2;
                gameState.player.agi = 0;
                gameState.player.def *= 0.5;
                BattleUI.logSkillUse("仇恨", "你的攻击力翻倍，灵巧降低至0，防御降低50%！");
                return true;
            }
        }
    },

    start: function(npcIds) {
        if (!npcIds || npcIds.length === 0) return;
        
        UI.setOverlay(true);
        if (typeof mainContent !== 'undefined' && mainContent) UI.setOutputHtml(mainContent);
        
        BattleUI.logBattleStart();
        
        this.state = {
            inBattle: true,
            enemies: [],
            round: 1,
            currentTurnIndex: 0,
            turnOrder: [],
            activeEffects: {},
            originalPlayerStats: {
                atk: gameState.player.atk,
                def: gameState.player.def,
                agi: gameState.player.agi
            }
        };

        npcIds.forEach((npcId, index) => {
            const npc = getCharacterInfo(npcId);
            if (npc && npc.canFight) {
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
                this.state.enemies.push(enemyInstance);
                BattleUI.logEnemyInfo(index, npc.name, npc.hp, npc.atk, npc.def, enemyInstance.agi);
            }
        });

        // 重置玩家SP
        gameState.player.sp = Math.floor(gameState.player.maxSp || 10);
        
        BattleUI.logPlayerStatus(gameState.player.hp, gameState.player.maxHp, gameState.player.sp, gameState.player.maxSp, getCharacterAttack(gameState.player), getCharacterDefense(gameState.player), getCharacterAgility(gameState.player));
        BattleUI.logDivider();
        this.updateSkillPanel();

        setTimeout(() => this.startRound(), 800);
    },

    startRound: function() {
        if (!this.state.inBattle) return;
        if (this.checkBattleEnd()) return;

        BattleUI.logRound(this.state.round);
        this.state.turnOrder = this.calculateTurnOrder();
        this.state.currentTurnIndex = 0;

        const orderNames = this.state.turnOrder.map(t => t === 'player' ? '你' : this.state.enemies[t].name);
        BattleUI.logTurnOrder(orderNames);
        this.updateSkillPanel();

        setTimeout(() => this.executeNextTurn(), 600);
    },

    executeNextTurn: function() {
        if (!this.state.inBattle) return;
        if (this.checkBattleEnd()) return;

        if (this.state.currentTurnIndex >= this.state.turnOrder.length) {
            this.state.round++;
            setTimeout(() => this.startRound(), 800);
            return;
        }

        const currentTarget = this.state.turnOrder[this.state.currentTurnIndex++];
        if (currentTarget === 'player') {
            this.executePlayerTurn();
        } else {
            this.executeEnemyTurn(currentTarget);
        }
    },

    executePlayerTurn: function() {
        if (this.checkBattleEnd()) return;

        const aliveEnemies = this.state.enemies.filter(e => e.currentHp > 0);
        const targetEnemy = aliveEnemies[0]; // TODO: 预留玩家选定目标接口
        
        BattleUI.logTurnStart("你", true);
        BattleUI.logAction("你", targetEnemy.name);

        const playerAtk = getCharacterAttack(gameState.player);
        if (tryDodge(targetEnemy.agi)) {
            BattleUI.logDodge(targetEnemy.name, true);
        } else {
            const damage = calculateDamage(playerAtk, targetEnemy.def);
            targetEnemy.currentHp = Math.max(0, targetEnemy.currentHp - damage);
            BattleUI.logDamage("你", targetEnemy.name, damage);
        }

        if (targetEnemy.currentHp <= 0) {
            BattleUI.logDeath(targetEnemy.name, false);
        } else {
            BattleUI.logEnemyHp(targetEnemy.name, targetEnemy.currentHp, targetEnemy.maxHp);
        }

        BattleUI.logPlayerStatus(gameState.player.hp, gameState.player.maxHp, gameState.player.sp, gameState.player.maxSp, playerAtk, getCharacterDefense(gameState.player), getCharacterAgility(gameState.player));
        print("");
        this.updateSkillPanel();

        setTimeout(() => this.executeNextTurn(), 1200);
    },

    executeEnemyTurn: function(enemyIndex) {
        const enemy = this.state.enemies[enemyIndex];
        if (!enemy || enemy.currentHp <= 0 || this.checkBattleEnd()) return;

        BattleUI.logTurnStart(enemy.name, false);
        BattleUI.logAction(enemy.name, "你");

        const playerAgi = getCharacterAgility(gameState.player);
        const playerDef = getCharacterDefense(gameState.player);

        if (tryDodge(playerAgi)) {
            BattleUI.logDodge(enemy.name, false);
        } else {
            const damage = calculateDamage(enemy.atk, playerDef);
            gameState.player.hp = Math.max(0, gameState.player.hp - damage);
            BattleUI.logDamage(enemy.name, "你", damage);
        }

        if (gameState.player.hp <= 0) {
            BattleUI.logDeath("你", true);
            setTimeout(() => this.end(false), 1000);
            return;
        }

        BattleUI.logPlayerStatus(gameState.player.hp, gameState.player.maxHp, gameState.player.sp, gameState.player.maxSp, getCharacterAttack(gameState.player), playerDef, playerAgi);
        print("");

        setTimeout(() => this.executeNextTurn(), 1200);
    },

    useSkill: function(skillId) {
        if (!this.state.inBattle) return BattleUI.logMessage("战斗外无法使用技能！", "#ffaaaa");
        
        const skill = this.skillsDict[skillId];
        if (!skill) return BattleUI.logMessage("技能不存在！", "#ffaaaa");
        
        if (gameState.player.sp < skill.cost) return BattleUI.logMessage("技力不足！", "#ffaaaa");
        
        // 扣蓝
        gameState.player.sp = Math.floor(gameState.player.sp - skill.cost);
        
        // 执行技能逻辑（如果失败则返还蓝量）
        const success = skill.effect(this);
        if (!success) {
            gameState.player.sp += skill.cost;
        }
        
        this.updateSkillPanel();
        BattleUI.logPlayerStatus(gameState.player.hp, gameState.player.maxHp, gameState.player.sp, gameState.player.maxSp, getCharacterAttack(gameState.player), getCharacterDefense(gameState.player), getCharacterAgility(gameState.player));
        print("");
    },

    calculateTurnOrder: function() {
        const participants = [{ type: 'player', agi: getCharacterAgility(gameState.player) }];
        this.state.enemies.forEach((enemy, index) => {
            if (enemy.currentHp > 0) participants.push({ type: 'enemy', index: index, agi: enemy.agi });
        });
        
        participants.sort((a, b) => {
            if (a.agi !== b.agi) return b.agi - a.agi;
            if (a.type === 'player' && b.type === 'enemy') return -1;
            if (a.type === 'enemy' && b.type === 'player') return 1;
            return Math.random() - 0.5;
        });
        return participants.map(p => p.type === 'player' ? 'player' : p.index);
    },

    checkBattleEnd: function() {
        if (gameState.player.hp <= 0) {
            this.end(false);
            return true;
        }
        const aliveEnemies = this.state.enemies.filter(e => e.currentHp > 0);
        if (aliveEnemies.length === 0) {
            this.end(true);
            return true;
        }
        return false;
    },

    end: function(playerWon) {
        this.state.inBattle = false;
        
        // 状态清理：还原战斗时修改的属性
        if (this.state.originalPlayerStats) {
            gameState.player.atk = this.state.originalPlayerStats.atk;
            gameState.player.def = this.state.originalPlayerStats.def;
            gameState.player.agi = this.state.originalPlayerStats.agi;
        }
        
        print(`<span style="color: #ffdd44;">═══════════════════════════</span>`);
        
        if (playerWon) {
            BattleUI.logMessage("【胜利！】你击败了所有敌人！", "#aaffaa");
            
            let totalExp = 0;
            const room = gameState.world[gameState.player.location];
            
            this.state.enemies.forEach((enemy, index) => {
                // 特殊剧情Boss硬编码：瑟蕾娜（未来应通过NPC配置化实现死亡事件）
                if (enemy.npcId === 'serena') {
                    BattleUI.logMessage('"既然如此，就送你个宝贝。"', "#cc66ff");
                    BattleUI.logMessage('瑟蕾娜的身躯化为一团淡紫色的雾气，在空中消散。', "#cc66ff");
                    BattleUI.logMessage('地面上只留下了一个闪闪发亮的宝石。', "#cc66ff");
                    if (enemy.drops && room) {
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
                } else {
                    // 常规尸体掉落
                    const corpseId = `corpse_${enemy.npcId}_${Date.now()}_${index}`;
                    const corpse = createCorpse(enemy.npcId, enemy.drops || []);
                    corpse.id = corpseId;
                    
                    if (room) {
                        if (!room.items) room.items = [];
                        room.items.push(corpseId);
                    }
                    ITEM_TEMPLATES[corpseId] = corpse;
                    BattleUI.logMessage(`${enemy.name}的尸体倒在地上...`, "#888");
                }
                
                totalExp += enemy.exp;
                
                // 从房间移除NPC
                if (room && room.npcs) {
                    const idx = room.npcs.indexOf(enemy.npcId);
                    if (idx > -1) room.npcs.splice(idx, 1);
                }
            });
            
            // 结算经验
            if (totalExp > 0) {
                print("");
                BattleUI.logMessage(`获得 ${totalExp} 点经验值！`, "#ffdd44");
                gameState.player.exp += totalExp;
                if(typeof checkLevelUp === 'function') checkLevelUp();
            }
            
            if(typeof updateSceneInfo === 'function') updateSceneInfo();
        } else {
            BattleUI.logMessage("【失败...】你被击败了。", "#ff6666");
            BattleUI.logMessage("（游戏将重新开始...）", "#aaa");
            setTimeout(() => location.reload(), 2000);
        }
        
        UI.setOverlay(false);
        BattleUI.clearSkills();
    },

    updateSkillPanel: function() {
        const playerSkillsData = (gameState.player.skills || []).map(id => this.skillsDict[id]).filter(Boolean);
        BattleUI.renderSkills(playerSkillsData, gameState.player.sp || 0, gameState.player.maxSp || 0, 'useSkill');
    }
};

// ============================================================
// 全局桥接函数 (保持对 game.js 的兼容)
// ============================================================
function startBattle(npcId) { BattleSystem.start([npcId]); }
function startMultiBattle(npcIds) { BattleSystem.start(npcIds); }
function useSkill(skillId) { BattleSystem.useSkill(skillId); }