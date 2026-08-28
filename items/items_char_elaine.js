// ============================================================
//  items/items_char_elaine.js - 艾琳·维斯特（抄写员之女）的肢体与尸体
// ============================================================

Object.assign(ITEM_TEMPLATES, {

    elaine_head: {
        id: "elaine_head",
        name: "艾琳的头",
        type: "limb",
        rarity: "good",
        score: 60,
        desc: "一颗面容精致清秀的女性头颅，来自艾琳。柔软的褐色短发沿着小巧的脸颊微微翘起，圆润的褐色眼睛失去了神采，端正的鼻梁与柔和的唇线仍显得十分协调，几乎找不到破坏容貌的瑕疵。"
    },

    elaine_torso: {
        id: "elaine_torso",
        name: "艾琳的躯干",
        type: "limb",
        rarity: "good",
        score: 60,
        desc: "一截纤细匀称的女性躯干，来自艾琳。肩线轻柔，腰腹平坦，长期待在室内使皮肤显得白净；身量虽然单薄，胸腹与腰部的比例却自然流畅，仅有少量伏案生活留下的松弛感。"
    },

    elaine_leg: {
        id: "elaine_leg",
        name: "艾琳的腿",
        type: "limb",
        rarity: "good",
        score: 60,
        desc: "一条线条轻盈笔直的女性腿，来自艾琳。大腿柔软，小腿纤细，膝盖圆润而没有明显劳作痕迹；白色长筒袜贴合腿部，使原本协调的轮廓显得更加整洁。"
    },

    elaine_arm: {
        id: "elaine_arm",
        name: "艾琳的手臂",
        type: "limb",
        rarity: "good",
        score: 60,
        desc: "一条纤细修长的女性手臂，来自艾琳。肘腕比例自然，白净的皮肤下隐约透出淡青血管，小臂只留有少量长期握笔造成的细微疲劳痕迹，整体形态完整而匀称。"
    },

    elaine_hand: {
        id: "elaine_hand",
        name: "艾琳的手",
        type: "limb",
        rarity: "good",
        score: 60,
        desc: "一只白净纤巧的女性手，来自艾琳。十指修长，骨节细巧，指甲形状整齐，仅在中指侧面留有一道浅淡的握笔薄茧；手掌与手腕的比例十分优美，是她身上最出众的部位之一。"
    },

    elaine_foot: {
        id: "elaine_foot",
        name: "艾琳的脚",
        type: "limb",
        rarity: "good",
        score: 60,
        desc: "一只小巧清秀的女性脚，来自艾琳。它是36码，脚背弧线柔和，脚趾排列整齐，脚踝纤细；除鞋袜留下的浅淡压痕外，皮肤没有多少明显瑕疵。"
    },

    elaine_breast: {
        id: "elaine_breast",
        name: "艾琳的乳房",
        type: "limb",
        rarity: "good",
        score: 60,
        desc: "一只轮廓柔和的女性乳房，来自艾琳。它是A罩杯，体积不大，皮肤白净，形态紧致而端正；外观没有格外醒目的特征，但整体比例自然，没有明显损伤。"
    },

    elaine_corpse: {
        id: "elaine_corpse",
        name: "艾琳的尸体",
        type: "limb",
        desc: "艾琳・维斯特的尸体。她蜷在冰冷的木地板上，褐色短发散乱地遮住半边脸，眼眶的红痕还隐约可见。那张曾因哭泣而湿透的脸上，此刻只剩下没有生气的苍白。",
        usable: true,
        customAction: true,
        dismemberable: true,
        loot: ["bread"],
        corpseStory: [
            "你蹲下来看艾琳的尸体。她的身体还保持着一种蜷缩的姿势，像要把所有的悲伤都收进最小的范围里。",
            "桌上的羊皮纸还摊着，墨迹已经被水和时间洇成了一团化不开的黑。",
            "她终究没能走出这间屋子。而那句「明天天亮之前回来」，也再没有人会等下去了。"
        ]
    }

});
