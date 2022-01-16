class Cube {
    constructor(game) {
        this.game = game;
        //盒子（墩子）
        this.box = [
            { name: "box0", width: 303, height: 271, src: "./img/boxs/box0.png" },
            { name: "box1", width: 303, height: 271, src: "./img/boxs/box1.png" },
            { name: "box2", width: 303, height: 270, src: "./img/boxs/box2.png" },
            { name: "box3", width: 303, height: 269, src: "./img/boxs/box3.png" },
            { name: "box4", width: 303, height: 271, src: "./img/boxs/box4.png" },
            { name: "box5", width: 302, height: 270, src: "./img/boxs/box5.png" },
            { name: "box6", width: 303, height: 271, src: "./img/boxs/box6.png" },
            { name: "box7", width: 266, height: 253, src: "./img/boxs/box7.png" },
            { name: "box8", width: 266, height: 253, src: "./img/boxs/box8.png" },
            { name: "box9", width: 266, height: 253, src: "./img/boxs/box9.png" },
            { name: "box10", width: 266, height: 253, src: "./img/boxs/box10.png" },
            { name: "box11", width: 266, height: 253, src: "./img/boxs/box11.png" },
            { name: "box12", width: 286, height: 257, src: "./img/boxs/box12.png" },
            { name: "box13", width: 286, height: 257, src: "./img/boxs/box13.png" },
            { name: "box14", width: 212, height: 222, src: "./img/boxs/box14.png" },
            { name: "box15", width: 212, height: 222, src: "./img/boxs/box15.png" },
            { name: "box16", width: 149, height: 162, src: "./img/boxs/box16.png" },
            { name: "box17", width: 183, height: 182, src: "./img/boxs/box17.png" },
            { name: "box18", width: 183, height: 182, src: "./img/boxs/box18.png" },
            { name: "box19", width: 141, height: 182, src: "./img/boxs/box19.png" },
            { name: "box20", width: 184, height: 201, src: "./img/boxs/box20.png" },
            { name: "box21", width: 247, height: 233, src: "./img/boxs/box21.png" },
            { name: "box22", width: 238, height: 235, src: "./img/boxs/box22.png" },
            { name: "box23_0", width: 276, height: 259, src: "./img/boxs/box23_0.png" },
            { name: "box23_1", width: 276, height: 259, src: "./img/boxs/box23_1.png" },
            { name: "box23_2", width: 276, height: 259, src: "./img/boxs/box23_2.png" },
            { name: "box23_3", width: 276, height: 259, src: "./img/boxs/box23_3.png" },
            { name: "box23_4", width: 276, height: 259, src: "./img/boxs/box23_4.png" },
            { name: "box23_5", width: 276, height: 259, src: "./img/boxs/box23_5.png" },
            { name: "box24_0", width: 300, height: 268, src: "./img/boxs/box24_0.png" },
            { name: "box24_1", width: 300, height: 268, src: "./img/boxs/box24_1.png" },
            { name: "box24_2", width: 300, height: 268, src: "./img/boxs/box24_2.png" },
            { name: "box25_0", width: 267, height: 246, src: "./img/boxs/box25_0.png" },
            { name: "box25_1", width: 267, height: 246, src: "./img/boxs/box25_1.png" },
            { name: "box25_2", width: 267, height: 246, src: "./img/boxs/box25_2.png" },
        ]
        //盒子（墩子）阴影
        this.shadow = [
            { name: "by0", width: 402, height: 230, src: "./img/boxs/by0.png", offsetX: 99, offsetY: -41 },
            { name: "by1", width: 402, height: 230, src: "./img/boxs/by1.png", offsetX: 99, offsetY: -41 },
            { name: "by2", width: 402, height: 230, src: "./img/boxs/by2.png", offsetX: 99, offsetY: -41 },
            { name: "by3", width: 402, height: 230, src: "./img/boxs/by3.png", offsetX: 99, offsetY: -39 },
            { name: "by4", width: 402, height: 230, src: "./img/boxs/by4.png", offsetX: 99, offsetY: -41 },
            { name: "by5", width: 402, height: 230, src: "./img/boxs/by5.png", offsetX: 101, offsetY: -40 },
            { name: "by6", width: 402, height: 230, src: "./img/boxs/by6.png", offsetX: 99, offsetY: -41 },
            { name: "by7", width: 350, height: 206, src: "./img/boxs/by7.png", offsetX: 84, offsetY: -46 },
            { name: "by8", width: 350, height: 206, src: "./img/boxs/by8.png", offsetX: 84, offsetY: -47 },
            { name: "by9", width: 350, height: 206, src: "./img/boxs/by9.png", offsetX: 84, offsetY: -47 },
            { name: "by10", width: 350, height: 206, src: "./img/boxs/by10.png", offsetX: 84, offsetY: -47 },
            { name: "by11", width: 350, height: 206, src: "./img/boxs/by11.png", offsetX: 84, offsetY: -47 },
            { name: "by12", width: 367, height: 225, src: "./img/boxs/by12.png", offsetX: 98, offsetY: -32 },
            { name: "by13", width: 367, height: 225, src: "./img/boxs/by13.png", offsetX: 98, offsetY: -32 },
            { name: "by14", width: 298, height: 170, src: "./img/boxs/by14.png", offsetX: 88, offsetY: -51 },
            { name: "by15", width: 298, height: 170, src: "./img/boxs/by15.png", offsetX: 88, offsetY: -51 },
            { name: "by16", width: 164, height: 94, src: "./img/boxs/by16.png", offsetX: 46, offsetY: -67 },
            { name: "by17", width: 220, height: 137, src: "./img/boxs/by17.png", offsetX: 88, offsetY: -44 },
            { name: "by18", width: 220, height: 137, src: "./img/boxs/by18.png", offsetX: 88, offsetY: -44 },
            { name: "by19", width: 213, height: 126, src: "./img/boxs/by19.png", offsetX: 75, offsetY: -55 },
            { name: "by20", width: 259, height: 148, src: "./img/boxs/by20.png", offsetX: 75, offsetY: -50 },
            { name: "by21", width: 291, height: 154, src: "./img/boxs/by21.png", offsetX: 45, offsetY: -78 },
            { name: "by22", width: 298, height: 170, src: "./img/boxs/by22.png", offsetX: 73, offsetY: -65 },
            { name: "by23", width: 350, height: 206, src: "./img/boxs/by23.png", offsetX: 79, offsetY: -52 },
            { name: "by24", width: 350, height: 206, src: "./img/boxs/by24.png", offsetX: 67, offsetY: -61 },
            { name: "by25", width: 350, height: 206, src: "./img/boxs/by25.png", offsetX: 84, offsetY: -40 }
        ]
    }
    /**
     * 生成立方体
     * @param {String} name 要绘制的图片的名称
     * @param {Number} x 绘图的起始横坐标
     * @param {Number} y 绘图的起始纵坐标
     * @param {Number} sX 裁剪的起始横坐标
     * @param {Number} sY 裁剪的起始纵坐标
     */
    async create(name, x, y, sX = 0, sY = 0) {
        let { pen, ratio } = this.game;
        let { src: shadowSrc, width: shadowSW, height: shadowSH, offsetX, offsetY } = this.shadow.find(item => item.name === name.split('_')[0].replace('box', 'by'));
        let { src: boxSrc, width: boxSW, height: boxSH } = this.box.find(item => item.name === name);
        let shadowW = shadowSW * ratio;
        let shadowH = shadowSH * ratio;
        let boxW = boxSW * ratio;
        let boxH = boxSH * ratio;
        let shadow = new Image();
        let box = new Image();
        shadow.src = shadowSrc;
        box.src = boxSrc;
        shadow.onload = () => {
            pen.drawImage(shadow, sX, sY, shadowSW, shadowSH, x - offsetX, y - offsetY, shadowW, shadowH);
            box.onload = () => {
                pen.drawImage(box, sX, sY, boxSW, boxSH, x, y, boxW, boxH);
            }
        }
    }
}