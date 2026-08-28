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

    characters.forEach(character => {
        parts.forEach(part => {
            const item = ITEM_TEMPLATES[`${character}_${part}`];
            if (!item) return;

            item.thumbnail = `assets/items/${character}-${part}-thumb.png`;
            item.thumbnailScale = thumbnailScales[part];
            delete item.thumbnailCutout;

            if (part === 'head') {
                item.detailImage = `assets/items/${character}-head-detail.png`;
            }
        });
    });
})();
