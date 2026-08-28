// ============================================================
//  game/dungeonSystem.js - 随机地下城结构与出入口
//  敌人、Boss 与战利品由后续内容模块接入。
// ============================================================

const DUNGEON_DEFINITIONS = {
    academy_ruins: {
        id: 'academy_ruins',
        name: '学院遗址',
        roomName: '暗道',
        bossRoomName: '密室',
        entranceRoom: 'mysterious_stone_gate',
        roomPrefix: 'academy_dungeon_'
    }
};

const DUNGEON_DIRECTIONS = ['north', 'east', 'south', 'west'];
const DUNGEON_OPPOSITE = { north: 'south', east: 'west', south: 'north', west: 'east' };

function shuffledDungeonDirections() {
    const result = [...DUNGEON_DIRECTIONS];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function clearGeneratedDungeon(dungeonId = 'academy_ruins') {
    const def = DUNGEON_DEFINITIONS[dungeonId];
    if (!def || !gameState.world) return;
    Object.keys(gameState.world).forEach(roomId => {
        if (roomId.startsWith(def.roomPrefix)) delete gameState.world[roomId];
    });
    if (gameState.activeDungeon && gameState.activeDungeon.id === dungeonId) {
        delete gameState.activeDungeon;
    }
}

function connectDungeonRooms(rooms, fromId, toId) {
    const from = rooms[fromId];
    const to = rooms[toId];
    const direction = shuffledDungeonDirections().find(dir => !from.exits[dir] && !to.exits[DUNGEON_OPPOSITE[dir]]);
    if (!direction) return false;
    from.exits[direction] = toId;
    to.exits[DUNGEON_OPPOSITE[direction]] = fromId;
    return true;
}

function getDungeonDistance(rooms, startId, targetId) {
    const queue = [{ id: startId, distance: 0 }];
    const visited = new Set([startId]);
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.id === targetId) return current.distance;
        Object.values(rooms[current.id].exits || {}).forEach(nextId => {
            if (!visited.has(nextId)) {
                visited.add(nextId);
                queue.push({ id: nextId, distance: current.distance + 1 });
            }
        });
    }
    return Infinity;
}

function generateDungeon(dungeonId = 'academy_ruins') {
    const def = DUNGEON_DEFINITIONS[dungeonId];
    if (!def) throw new Error(`未知地下城：${dungeonId}`);

    clearGeneratedDungeon(dungeonId);
    const normalRoomCount = 10 + Math.floor(Math.random() * 6);
    const bossDistance = 10 + Math.floor(Math.random() * (Math.min(12, normalRoomCount) - 9));
    const rooms = {};
    const normalIds = [];

    for (let i = 0; i < normalRoomCount; i++) {
        const roomId = `${def.roomPrefix}${i + 1}`;
        normalIds.push(roomId);
        rooms[roomId] = {
            name: def.roomName,
            desc: '潮湿狭窄的暗道没入阴影，破损砖石间残留着早已褪色的魔法刻痕。几条道路在黑暗中彼此交错。',
            exits: {}, items: [], npcs: [],
            generatedDungeon: true,
            dungeonId
        };
        const spawnRoll = Math.random();
        const enemyCount = spawnRoll < 0.45 ? 0 : (spawnRoll < 0.85 ? 1 : 2);
        for (let enemyIndex = 0; enemyIndex < enemyCount; enemyIndex++) {
            rooms[roomId].npcs.push('female_mage');
        }
    }

    const bossRoomId = `${def.roomPrefix}boss`;
    rooms[bossRoomId] = {
        name: def.bossRoomName,
        desc: '暗道尽头豁然开阔，冰冷石壁围成一座封闭密室。残破法阵占据地面中央，空气中积聚着令人不安的魔力。',
        exits: {}, items: [], npcs: ['mad_female_mage'],
        generatedDungeon: true,
        dungeonId,
        isDungeonBossRoom: true
    };

    // 先建立一条长度至少为 10 的唯一主链，再把剩余房间作为树枝接入。
    for (let i = 0; i < bossDistance - 1; i++) {
        if (!connectDungeonRooms(rooms, normalIds[i], normalIds[i + 1])) {
            throw new Error('地下城主路径生成失败');
        }
    }
    if (!connectDungeonRooms(rooms, normalIds[bossDistance - 1], bossRoomId)) {
        throw new Error('地下城密室连接失败');
    }

    for (let i = bossDistance; i < normalIds.length; i++) {
        const childId = normalIds[i];
        let attached = false;
        const candidates = normalIds.slice(0, i).sort(() => Math.random() - 0.5);
        for (const parentId of candidates) {
            if (connectDungeonRooms(rooms, parentId, childId)) {
                attached = true;
                break;
            }
        }
        if (!attached) throw new Error('地下城支路生成失败');
    }

    const entryRoomId = normalIds[0];
    rooms[entryRoomId].items.push('academy_dungeon_return_gate');
    const verifiedDistance = getDungeonDistance(rooms, entryRoomId, bossRoomId);
    if (verifiedDistance < 10) throw new Error('地下城密室距离校验失败');

    Object.assign(gameState.world, rooms);
    gameState.activeDungeon = {
        id: dungeonId,
        name: def.name,
        entranceRoom: def.entranceRoom,
        entryRoomId,
        bossRoomId,
        roomIds: [...normalIds, bossRoomId],
        bossDistance: verifiedDistance,
        enemyContentVersion: 1
    };
    return gameState.activeDungeon;
}

function repairLoadedAcademyDungeon() {
    const dungeon = gameState.activeDungeon;
    if (!dungeon || dungeon.id !== 'academy_ruins' || dungeon.enemyContentVersion >= 1) return;
    (dungeon.roomIds || []).forEach(roomId => {
        const room = gameState.world[roomId];
        if (!room) return;
        if (roomId === dungeon.bossRoomId) {
            if (!room.npcs.includes('mad_female_mage') && !room.items.includes('academy_dungeon_exit')) {
                room.npcs.push('mad_female_mage');
            }
            return;
        }
        const spawnRoll = Math.random();
        const enemyCount = spawnRoll < 0.45 ? 0 : (spawnRoll < 0.85 ? 1 : 2);
        for (let i = 0; i < enemyCount; i++) room.npcs.push('female_mage');
    });
    dungeon.enemyContentVersion = 1;
}

function enterAcademyRuins() {
    clearDetailPanel();
    currentPanel = null;
    const dungeon = generateDungeon('academy_ruins');
    if (!gameState.gameFlags) gameState.gameFlags = {};
    gameState.gameFlags.academyDungeonEntered = true;
    relocateTo(dungeon.entryRoomId, {
        travelText: '你侧身穿过大石门，踏入被黑暗吞没的学院遗址。',
        callback: () => {
            if (typeof checkHostileNPCs === 'function') checkHostileNPCs(dungeon.entryRoomId);
            if (typeof StoryEngine !== 'undefined') StoryEngine.check();
        }
    });
}

function unlockAcademyDungeonExit() {
    const dungeon = gameState.activeDungeon;
    if (!dungeon || dungeon.id !== 'academy_ruins') return false;
    const bossRoom = gameState.world[dungeon.bossRoomId];
    if (!bossRoom) return false;
    if (!bossRoom.items.includes('academy_dungeon_exit')) bossRoom.items.push('academy_dungeon_exit');
    return true;
}

function leaveAcademyDungeon() {
    const entranceRoom = gameState.activeDungeon?.entranceRoom || 'mysterious_stone_gate';
    clearDetailPanel();
    currentPanel = null;
    relocateTo(entranceRoom, {
        skipCheck: true,
        travelText: '你沿着石门后的通道折返，重新回到荒地深处。',
        callback: () => {
            clearGeneratedDungeon('academy_ruins');
            if (typeof StoryEngine !== 'undefined') StoryEngine.check();
        }
    });
}
