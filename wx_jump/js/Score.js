class Score {
    constructor(game, type = 'small') {
        let height = type === 'small' ? 30 : 76;
        let width = type === 'small' ? 28 : 72;
        this.game = game;
        this.height = height;
        this.width = width;
        this.src = `./img/number_${type}.png`;
    }
    /**
     * 设置分数
     * @param {Number} score 分数
     */
    set(score = 0) {
        let nums = String(score).split("").map(item => Number(item));
        let { pen, width, ratio } = this.game;
        let originX = 50;
        let originY = 60;
        let { src, width: sW, height: sH } = this;
        nums.forEach((num, ind) => {
            let sX = num * sW;
            let sY = 0;
            let x = originX + ind * sW;
            let y = originY;
            let w = sW * ratio;
            let h = sH * ratio;
            let img = new Image();
            img.src = src;
            img.onload = () => {
                pen.drawImage(img, sX, sY, sW, sH, x, y, w, h);
            }
        })
    }
}