(function () {
    const characters = [
        'aisha',
        'liana',
        'cecilia',
        'elena',
        'serena',
        'sophie',
        'isabella',
        'elaine',
        'mandorola',
        'huasha'
    ];
    const parts = ['head', 'torso', 'leg', 'foot', 'arm', 'hand', 'breast'];
    const thumbnailScales = {
        head: 0.88,
        torso: 0.76,
        leg: 0.84,
        foot: 0.84,
        arm: 0.84,
        hand: 0.88,
        breast: 0.90
    };
    const limbScores = {
        cecilia:   { head: 92, torso: 70, arm: 75, hand: 86, leg: 83, foot: 95, breast: 65 },
        elaine:    { head: 95, torso: 70, arm: 70, hand: 88, leg: 70, foot: 78, breast: 60 },
        serena:    { head: 100, torso: 95, arm: 95, hand: 96, leg: 95, foot: 97, breast: 98 },
        huasha:    { head: 70, torso: 72, arm: 68, hand: 66, leg: 58, foot: 67, breast: 76 },
        aisha:     { head: 65, torso: 61, arm: 61, hand: 55, leg: 65, foot: 60, breast: 69 },
        isabella:  { head: 87, torso: 81, arm: 78, hand: 76, leg: 91, foot: 82, breast: 95 },
        elena:     { head: 91, torso: 78, arm: 70, hand: 90, leg: 88, foot: 88, breast: 84 },
        sophie:    { head: 72, torso: 63, arm: 60, hand: 62, leg: 53, foot: 67, breast: 52 },
        mandorola: { head: 84, torso: 75, arm: 85, hand: 83, leg: 86, foot: 88, breast: 69 },
        liana:     { head: 82, torso: 90, arm: 92, hand: 70, leg: 85, foot: 70, breast: 74 }
    };
    const qualityFromScore = score => {
        if (score >= 100) return 'mythic';
        if (score >= 95) return 'legendary';
        if (score >= 85) return 'epic';
        if (score >= 70) return 'rare';
        if (score >= 40) return 'good';
        return 'normal';
    };

    characters.forEach(character => {
        parts.forEach(part => {
            const item = ITEM_TEMPLATES[`${character}_${part}`];
            if (!item) return;

            item.thumbnail = `assets/items/${character}-${part}-thumb.png`;
            item.thumbnailScale = thumbnailScales[part];
            delete item.thumbnailCutout;

            const score = limbScores[character] && limbScores[character][part];
            if (Number.isFinite(score)) {
                item.score = score;
                item.rarity = qualityFromScore(score);
            }

            if (part === 'head') {
                item.detailImage = `assets/items/${character}-head-detail.png`;
            }
        });
    });
})();
