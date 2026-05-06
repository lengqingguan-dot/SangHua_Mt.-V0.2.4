// ============================================================
//  示例模组 - 物品数据
//  格式与主世界 ITEM_TEMPLATES 相同
//  物品ID请使用唯一前缀，避免与主世界冲突
// ============================================================

const MOD_ITEM_TEMPLATES = {
    // 示例：草药
    mod_herb_1: {
        id: "mod_herb_1",
        name: "止血草",
        type: "consumable",
        desc: "一种常见的止血草药，嚼碎后敷在伤口上可以止血。",
        usable: true,
        effect: { hp: 10 },
        stackable: true,
        maxStack: 10,
        price: 5
    },

    // 示例：绳索
    mod_rope_1: {
        id: "mod_rope_1",
        name: "粗麻绳",
        type: "misc",
        desc: "一根结实的粗麻绳，长约三米。可以用来捆绑或攀爬。",
        usable: false,
        stackable: false,
        price: 8
    },

    // 示例：井水
    mod_well_water: {
        id: "mod_well_water",
        name: "清澈井水",
        type: "consumable",
        desc: "从古井中打上来的清水，冰凉甘甜。",
        usable: true,
        effect: { hp: 5 },
        stackable: true,
        maxStack: 5,
        price: 1
    },

    // 示例：鸡蛋（母鸡掉落）
    mod_chicken_egg: {
        id: "mod_chicken_egg",
        name: "鸡蛋",
        type: "consumable",
        desc: "一枚新鲜的鸡蛋，还带着温度。",
        usable: true,
        effect: { hp: 3 },
        stackable: true,
        maxStack: 10,
        price: 2
    },

    // 模组世界传送阵（返回地下室）
    mod_teleport_circle: {
        id: "mod_teleport_circle",
        name: "传送阵",
        type: "misc",
        desc: "地面上刻着一个古老的魔法阵，散发着幽蓝色的光芒。\n阵法中心的符文不断旋转，似乎连接着某个未知的地方。",
        usable: true,
        customAction: true,
        notPickable: true
    },

    // ==================== 少女尸体 ====================
    village_maiden_corpse: {
        id: "village_maiden_corpse",
        name: "异世界少女的尸体",
        type: "misc",
        desc: "一位身穿淡蓝色连衣裙的少女倒在血泊中，蓝宝石般的眼睛已经失去了光泽。",
        dismemberable: true,
        usable: true,
        customAction: true,
        corpseStory: [
            "少女的身体还残留着温度，淡蓝色的连衣裙被鲜血浸透。",
            "她的翠绿色长发散落在青石板上，像是盛开的花。"
        ]
    },

    // ==================== 少女肢体（可烹饪素材） ====================
    mod_maiden_head: {
        id: "mod_maiden_head",
        name: "异世界少女的头颅",
        type: "limb",
        desc: "一颗精致的年轻女性头颅，翠绿色的长发散落垂下，蓝宝石般的眼睛微微闭着，白皙的脸庞上还残留着最后一丝惊恐的表情。嘴唇微微张开，露出洁白的贝齿。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "head",
        story: [
            "你端详着手中这颗精致的头颅，翠绿色的长发从指间滑落。",
            "少女的面容安详得仿佛只是沉睡，蓝宝石般的眼睛紧闭着。",
            "白皙的皮肤在月光下泛着淡淡的光泽。"
        ]
    },

    mod_maiden_torso: {
        id: "mod_maiden_torso",
        name: "异世界少女的躯干",
        type: "limb",
        desc: "一截白皙纤细的女性躯干，腰肢柔软，皮肤细腻如凝脂。淡蓝色的连衣裙碎片还挂在身上，胸口处有着微微的起伏。整体散发着一种纯净的气息。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "torso",
        story: [
            "你捧起这截柔软的躯干，感受着指尖传来的最后温度。",
            "白皙的皮肤细腻得几乎看不到毛孔，腰肢纤细得仿佛一握即碎。"
        ]
    },

    mod_maiden_leg: {
        id: "mod_maiden_leg",
        name: "异世界少女的腿",
        type: "limb",
        desc: "一双修长白皙的女性腿肢，线条优美匀称，皮肤光滑细腻。脚踝纤细，脚趾小巧圆润，如同精雕细琢的玉器。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "leg",
        story: [
            "你拿起这双修长的腿肢，白皙的皮肤在月光下如同凝脂。",
            "纤细的脚踝和小巧的脚趾，仿佛艺术家精心雕刻的作品。"
        ]
    },

    mod_maiden_foot: {
        id: "mod_maiden_foot",
        name: "异世界少女的脚",
        type: "limb",
        desc: "一双小巧精致的女性脚掌，脚趾圆润白皙，指甲上还残留着淡淡的粉色。脚底柔软，足弓优美。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "foot",
        story: [
            "你将这双小巧的脚掌托在掌心，脚趾圆润而白皙。",
            "柔软的脚底和优美的足弓，如同一件精致的艺术品。"
        ]
    },

    mod_maiden_hand: {
        id: "mod_maiden_hand",
        name: "异世界少女的手",
        type: "limb",
        desc: "一双纤细白皙的女性手部，手指修长柔软，指甲修剪得整齐干净。掌心有着薄薄的茧，显示出她日常劳作的痕迹。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "hand",
        story: [
            "你握住这双纤细的手，指尖柔软而冰凉。",
            "修长的手指仿佛在诉说着主人曾经的故事。"
        ]
    },

    mod_maiden_arm: {
        id: "mod_maiden_arm",
        name: "异世界少女的手臂",
        type: "limb",
        desc: "一双纤细柔软的女性手臂，皮肤白皙光滑，手肘处微微泛着粉色。整体线条柔和优美，展现出少女特有的柔弱感。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "arm",
        story: [
            "你端详着这双纤细的手臂，白皙的皮肤柔软而冰凉。",
            "柔和的手臂线条，展现出少女特有的纤弱之美。"
        ]
    },

    mod_maiden_breast: {
        id: "mod_maiden_breast",
        name: "异世界少女的乳房",
        type: "limb",
        desc: "一对柔软白皙的女性乳房，形状匀称饱满，皮肤细腻如雪。淡粉色的乳晕和微微挺立的乳尖，触感温润而富有弹性。",
        usable: true,
        customAction: true,
        cookable: true,
        ingredientType: "breast",
        story: [
            "你捧起这对柔软的乳房，白皙的皮肤如同温润的玉石。",
            "淡粉色的乳晕在白皙的肌肤上显得格外诱人。",
            "柔软的触感让人忍不住反复揉捏。"
        ]
    }
};
