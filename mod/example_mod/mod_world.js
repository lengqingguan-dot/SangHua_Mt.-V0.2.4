// ============================================================
//  示例模组 - 世界地图数据
//  格式与主世界 WORLD_TEMPLATE 相同
//  房间ID请使用唯一前缀，避免与主世界冲突
// ============================================================

const MOD_WORLD_TEMPLATE = {
    // 示例：矿场附近的村庄
    'village_gate': {
        name: '村庄大门',
        desc: '一座简朴的木制大门，门柱上挂着几串干辣椒。远处是一片陌生的原野，你不知道这里是什么世界。\n大门半开着，似乎随时欢迎过路人。\n地面上刻着一个古老的魔法阵，散发着幽蓝色的光芒。',
        exits: { east: 'village_path_1' },
        items: ['mod_teleport_circle'],
        npcs: [],
        mapColor: '#8B4513',
        mapIcon: '🏠',
        mapPos: [14, 12]
    },
    'village_path_1': {
        name: '村庄小路',
        desc: '一条泥土小路，两旁是低矮的篱笆和菜园。几只鸡在路边悠闲地啄食。',
        exits: { west: 'village_gate', east: 'village_square' },
        items: [],
        npcs: ['chicken_1'],
        mapColor: '#D2B48C',
        mapIcon: '🐔',
        mapPos: [15, 12]
    },
    'village_square': {
        name: '村庄广场',
        desc: '村庄的中心广场，地面铺着青石板。中央有一口古井，井沿上长满了青苔。广场四周散落着几间店铺。一位身穿淡蓝色连衣裙的少女正站在广场中央好奇地四处张望。',
        exits: { west: 'village_path_1', north: 'village_shop', south: 'village_well' },
        items: [],
        npcs: ['villager_1', 'village_maiden'],
        mapColor: '#A0522D',
        mapIcon: '⛲',
        mapPos: [16, 12]
    },
    'village_shop': {
        name: '杂货铺',
        desc: '一间不大的杂货铺，货架上摆满了各种日用品。柜台后面坐着一个打瞌睡的老板。',
        exits: { south: 'village_square' },
        items: ['mod_herb_1', 'mod_rope_1'],
        npcs: ['shopkeeper_1'],
        mapColor: '#DEB887',
        mapIcon: '🏪',
        mapPos: [16, 11]
    },
    'village_well': {
        name: '古井',
        desc: '一口年代久远的石井，井水清澈见底。井壁上刻着一些模糊的文字，似乎年代十分久远。',
        exits: { north: 'village_square' },
        items: ['mod_well_water'],
        npcs: [],
        mapColor: '#4682B4',
        mapIcon: '🪣',
        mapPos: [16, 13]
    }
};