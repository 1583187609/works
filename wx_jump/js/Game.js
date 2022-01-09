class Game {
    constructor(selector) {
        let canvas = document.querySelector(selector);
        let height = document.documentElement.clientHeight;
        let width = 750;
        canvas.setAttribute("height", height);
        canvas.setAttribute("width", width);
        this.height = height;
        this.width = width;
        this.ratio = width / 750;
        this.canvas = canvas;
        this.pen = canvas.getContext("2d");
        this.manage = new Manage(this);
    }
    //开始游戏
    start() {
        this.manage.startGame();
        // this.manage.init();
    }
    //暂停
    pause() {

    }
    //结束
    over() {

    }

}