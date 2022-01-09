class Manage {
    constructor(game) {
        this.game = game;
        this.timers = {};
        this.delay = 100;
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
    startGame() {
        let { delay, game } = this;
        let { pen, canvas, height } = game;
        let score = new Score(game);
        let cube = new Cube(game);
        let bouncer = new Bouncer(game);
        let timer = setInterval(() => {
            score.set(0);
            cube.create('box0', 30, height / 2 + 50);
            canvas.width = canvas.width;
            bouncer.fall();
            if (bouncer.isLand) {
                clearInterval(timer);
            }
        }, delay);
    }
}