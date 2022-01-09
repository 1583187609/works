class Bouncer {
    constructor(game) {
        let img = new Image();
        img.src = "./img/bouncer.png";
        this.img = img;
        this.game = game;
        this.width = 50;   //弹跳器的宽度
        this.height = 140;  //弹跳器的高度
        this.g = 100;    //重力加速度
        this.speedY = 0;  //竖直方向上的速度
        this.fallHeight = 0;  //降落的高度
        this.isLand = false;  //是否着陆
    }
    /**
     * 生成弹跳器
     * @param {Number} x 绘图的起始横坐标
     * @param {Number} y 绘图的起始纵坐标
     */
    create(x, y) {
        let { img, game, width: sW, height: sH } = this;
        let { pen, width, ratio } = game;
        let w = sW * ratio;
        let h = sH * ratio;
        img.onload = () => {
            pen.drawImage(img, 0, 0, sW, sH, x, y, w, h);
        }
    }
    //降落
    fall() {
        let { img, game, width: sW, height: sH } = this;
        let { pen, width, ratio } = game;
        let w = sW * ratio;
        let h = sH * ratio;
        this.speedY += this.g;
        this.fallHeight += this.speedY;
        if (this.fallHeight >= 800) {
            this.isLand = true;
        }
        img.onload = () => {
            pen.drawImage(img, 0, 0, sW, sH, 100, this.fallHeight, w, h);
        }
    }
}