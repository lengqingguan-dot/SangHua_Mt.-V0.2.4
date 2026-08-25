// ui.js - 负责所有与 DOM 相关的渲染和操作
const UI = {
    // 缓存所有 DOM 节点
    elements: {},

    // 初始化
    init() {
        this.elements.output = document.getElementById('output');
        this.elements.cmdInput = document.getElementById('cmd-input');
        this.elements.detailPanel = document.getElementById('detail-panel');
        this.elements.overlay = document.getElementById('block-overlay');
        this.elements.nextBtn = document.getElementById('story-next-btn');
        this.elements.roomNameDisplay = document.getElementById('room-name-display');
        this.elements.sceneList = document.getElementById('scene-items-list');
        
        // 小地图
        this.elements.mapNorth = document.getElementById('map-north');
        this.elements.mapSouth = document.getElementById('map-south');
        this.elements.mapEast = document.getElementById('map-east');
        this.elements.mapWest = document.getElementById('map-west');
        this.elements.northRoomSpan = document.getElementById('north-room');
        this.elements.southRoomSpan = document.getElementById('south-room');
        this.elements.eastRoomSpan = document.getElementById('east-room');
        this.elements.westRoomSpan = document.getElementById('west-room');

        // 兼容旧面板：若一个卡片框中只有一个直接操作，点击卡片任意位置都执行该操作。
        if (this.elements.detailPanel) {
            this.elements.detailPanel.addEventListener('click', event => {
                if (event.target.closest('[onclick], button, input, label')) return;
                let card = event.target.closest('div');
                while (card && card !== this.elements.detailPanel) {
                    const actions = Array.from(card.children).filter(child => child.matches('span[onclick]'));
                    if (actions.length === 1) { actions[0].click(); return; }
                    card = card.parentElement;
                }
            });
        }
    },

    // 输出区操作
    print(htmlStr) {
        if (!this.elements.output) return;
        this.elements.output.innerHTML += htmlStr + '<br>';
        this.elements.output.scrollTop = this.elements.output.scrollHeight;
    },

    clearOutput() {
        if (!this.elements.output) return;
        this.elements.output.innerHTML = '';
    },

    getOutputHtml() {
        return this.elements.output ? this.elements.output.innerHTML : '';
    },

    setOutputHtml(htmlStr) {
        if (!this.elements.output) return;
        this.elements.output.innerHTML = htmlStr;
        this.elements.output.scrollTop = this.elements.output.scrollHeight;
    },

    // 详情栏操作 
    printToDetail(htmlStr) {
        if (!this.elements.detailPanel) return;
        this.elements.detailPanel.innerHTML += htmlStr;
        this.elements.detailPanel.scrollTop = this.elements.detailPanel.scrollHeight;
    },

    setDetail(htmlStr) {
        if (!this.elements.detailPanel) return;
        this.elements.detailPanel.innerHTML = htmlStr;
    },

    clearDetail() {
        this.setDetail('<div class="detail-empty">点击物品或 NPC 查看详情...</div>');
    },

    //  交互遮罩与剧情按钮
    setOverlay(isActive) {
        if (!this.elements.overlay) return;
        if (isActive) {
            this.elements.overlay.classList.add('active');
        } else {
            this.elements.overlay.classList.remove('active');
        }
    },

    toggleNextBtn(show, callback) {
        if (!this.elements.nextBtn) return;
        if (show) {
            this.elements.nextBtn.style.display = 'inline-block';
            this.elements.nextBtn.onclick = () => {
                this.elements.nextBtn.onclick = null; // 防止连点
                if (callback) callback();
            };
        } else {
            this.elements.nextBtn.style.display = 'none';
            this.elements.nextBtn.onclick = null;
        }
    }
};

// 页面加载完成后立即初始化 UI
window.addEventListener('DOMContentLoaded', () => {
    UI.init();
});
