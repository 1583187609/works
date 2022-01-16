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
        this.x = 100;   //横坐标
        this.y = 0;  //纵坐标
        this.isFalling = false;  //是否正在降落中
        this.isLand = false;  //是否着陆
    }
    /**
     * 生成弹跳器
     * @param {Number} x 绘图的起始横坐标
     * @param {Number} y 绘图的起始纵坐标
     */
    async create(x, y) {
        let { img, game, width: sW, height: sH } = this;
        let { pen, ratio } = game;
        let w = sW * ratio;
        let h = sH * ratio;
        pen.drawImage(img, 0, 0, sW, sH, x, y, w, h);
    }
    /**
     * 降落
     * @draw {Function} 绘制弹跳器的回调函数
     * @sY {Number} 降落的初始纵坐标
     * @eY {Number} 降落触底的纵坐标
     * **/
    // fall(draw, sY = 0, eY = 600) {
    //     let { g } = this;
    //     if (!this.isFalling && !this.isLand) {
    //         this.y = sY;
    //         this.isFalling = true;
    //     }
    //     this.speedY += g;
    //     this.y += this.speedY;
    //     if (this.y < eY) {
    //         draw();
    //     } else {
    //         console.log("dkdf")
    //         this.isLand = true;
    //         this.isFalling = false;
    //     }
    // }
    // fall(sY = 0, eY = 600) {
    //     let { g } = this;
    //     this.speedY += g;
    //     this.y += this.speedY;
    //     this.isLand = this.y >= eY;
    //     return this.isLand;
    // }
    // //降落
    // fall(sY = 0, eY = 600) {
    //     let { g } = this;
    //     // this.y = sY;
    //     this.speedY += g;
    //     this.y += this.speedY;
    //     if (this.y >= eY) {
    //         this.isLand = true;
    //     }
    // }
    //清除弹跳所在区域的绘制
    // clear(x, y) {
    //     let { game, width, height } = this;
    //     let { pen } = game;
    //     pen.clearRect(x, y, width, height);
    // }
}