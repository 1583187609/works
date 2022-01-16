class Manage {
    constructor(game) {
        this.game = game;
        this.timers = {};
        this.delay = 300;
    }
    //初始化游戏界面
    init() {
        let { game } = this;
        let { width, height, canvas } = game;
        let score = new Score(game);
        let cube = new Cube(game);
        let bouncer = new Bouncer(game);
        score.set(0);
        cube.create('box0', 30, height / 2 + 50);
        bouncer.create(100, height / 2);
    }
    //开始游戏
    async startGame() {
        let { delay, game } = this;
        let { pen, canvas, height } = game;
        let score = new Score(game);
        let cube = new Cube(game);
        let bouncer = new Bouncer(game);
        let { x, y } = bouncer;
        score.set(0);
        await cube.create('box0', 30, height / 2 + 50);
        await bouncer.create(x, 450);
        // canvas.width = canvas.width;

        // let timer = setInterval(() => {
        //     // canvas.width = canvas.width;
        //     let isLand = bouncer.fall(0, 400);
        //     // if (isLand) {
        //     //     bouncer.create(bouncer.x, 400);
        //     //     clearInterval(timer);
        //     // } else {
        //     //     bouncer.create(bouncer.x, bouncer.y);
        //     // }
        //     // if (isLand) {
        //     //     clearInterval(timer);
        //     // } else {
        //     //     bouncer.create(bouncer.x, bouncer.y);
        //     // }
        //     // bouncer.fall(() => {
        //     //     let { x, y, isLand } = bouncer;
        //     //     console.log(isLand,'isLand')
        //     //     if (isLand) {
        //     //         clearInterval(timer);
        //     //     } else {
        //     //         bouncer.create(x, y);
        //     //     }
        //     // }, 0, 600);
        // }, delay)
    }
    //弹跳器降落
    // fall(bouncer) {
    //     let { delay, game } = this;
    //     let { pen, canvas, height } = game;
    //     canvas.width = canvas.width;
    //     let timer = setInterval(() => {
    //     }, delay)
    // }
}