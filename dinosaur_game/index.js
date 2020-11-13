/********** 全局变量 **********/
let speedX=60;
let delay=120;
let level=1;      //游戏等级
let journey=0;
let landHeight=22;
let cloudHeight=36;
let cloudWidth=100;
let cloudShortestY=150;
let dinosaurUpWidth=80;
let dinosaurUpHeight=90;
let dinosaurCrawlWidth=112;
let dinosaurCrawlHeight=90;
let readyImg=new Image();
let spriteImg=new Image();
readyImg.src="ready.png";
spriteImg.src="sprite.png";

/********** 总揽全局的管理类 **********/
class Manager{
    constructor(){
        this.isGameOver=false;
        // this.startTime=0;   //游戏开始时间（单位：毫秒）
        this.isDinosaurUp=false;      //恐龙是否起跳
        this.timers={};     //计时器对象
        this.isLanded=true;   //恐龙是否着陆
        this.canOperate=false;   //是否可以操作控制游戏
        this.initData();
    }
    //初始化游戏数据
    initData(){
        this.cloud=new Cloud();   //白云
        this.land=new Land();   //陆地
        this.dinosaur=new Dinosaur();    //恐龙
        this.obstacle=new Obstacle();    //障碍物(仙人掌和翼龙)
        this.crash=new Crash();     //碰撞检测
        this.score=new Score();     //游戏得分
    }
    //刷新数据
    refreshData(){
        this.score.init();
        this.cloud.clear();
        this.cloud.creat();
        this.obstacle.clear();
        this.obstacle.creat();
    }
    //开始游戏
    startGame(){
        this.refreshData();
        this.canOperate=true;
        this.timers.draw=setInterval(()=>{
            this.canvas.width=this.canvas.width;
            this.draw();
            this.listenCrash();    //碰撞监听
        },100);
        this.timers.cloudMove=setInterval(()=>{    //白云
            this.cloud.move();
        },100);
        this.timers.landMove=setInterval(()=>{    //大地
            this.land.move();
        },100);
        this.timers.dinosaurRun=setInterval(()=>{   //恐龙奔跑
            this.dinosaur.run(true);
        },delay);
        this.timers.dinosaurFall=setInterval(()=>{    //恐龙降落
            this.dinosaur.fall(()=>{
                this.isLanded=true;       //恐龙着陆
                if(!this.timers.dinosaurRun){
                    this.timers.dinosaurRun=setInterval(()=>{
                        this.dinosaur.run(true);
                    },delay);
                }
            });
        },100);
        this.timers.obstacleMove=setInterval(()=>{    //障碍物
            this.obstacle.move();
        },100);
        this.timers.scoreChange=setInterval(()=>{      //游戏得分
            this.score.change();
        },100);
    }
    listenCrash(){
        this.crash.listenCrash(this.dinosaur,this.obstacle,()=>{
            this.gameOver();
        })
    }
    //游戏界面绘制
    draw(){
        this.changeBackground();
        this.score.draw();
        this.cloud.draw();
        this.land.draw();
        this.dinosaur.draw();
        this.obstacle.draw();
    }
    //恐龙跳跃
    jump(){
        clearInterval(this.timers.dinosaurRun);
        this.timers.dinosaurRun=null;   // 设置计时器变量为null 方便判断
        this.dinosaur.jump();
        this.isLanded=false;
        this.dinosaur.run(false);
    }
    //匍匐前进
    crawl(){
        this.dinosaur.crawl();
    }
    //直立
    upRight(){
        this.dinosaur.upRight();
    }
    gameOver(){
        for(let timer in this.timers){
            if(this.timers.hasOwnProperty(timer)){     //遍历一个对象的所有自身属性,而不是继承而来的
                clearInterval(this.timers[timer]);
            }
        }
        this.score.setHeightestScore();
        this.canOperate=false;   //是否可以操作控制游戏
        this.isGameOver=true;
        //结束界面
        this.ctx.drawImage(spriteImg, 655, 15, 194, 20, (this.canvas.width - 400) / 2, (this.canvas.height - 40) / 2 - 30, 400, 40);
        this.ctx.drawImage(spriteImg, 0, 0, 40, 35, (this.canvas.width - 80) / 2, (this.canvas.height - 70) / 2 + 30, 80, 70);
    }
    //改变背景颜色
    changeBackground(){
        let s=this.score.score%700;
        level=Math.ceil(this.score.score/700);
        speedX=60+(level-1)*10;
        delay=120-(level-1)*10;
        if(s>500 && s<700){
            this.ctx.fillStyle="black";
        }else{
            this.ctx.fillStyle="white";
        }
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
    }
}
/********** 游戏类 **********/
class Game{
    constructor(selector){
        let canvas=document.querySelector(selector);
        Object.prototype.canvas=canvas;
        Object.prototype.ctx=canvas.getContext("2d");
        this.manager=new Manager();
    }
    init(){
        this.ctx.drawImage(readyImg,0,0,144,144,0,this.canvas.height-144,144,144);
        window.onkeydown=(e)=>{
            switch(e.keyCode){
                case 13:   //enter（回车键）
                case 32:   //space（空格键）
                case 38:   //上键
                    this.startGame();
                    break;
                case 40:     //下键
                    this.manager.crawl();    //匍匐前进
                    break;
                default:
                    break;
            }
        }
        window.onkeyup=(e)=>{
            if(e.keyCode==40){     //下键
                this.manager.upRight();
            }
        }
        this.canvas.onclick=()=>{
            if(this.manager.isGameOver){
                this.manager.startGame();
                this.manager.canOperate=true;
            }
        }
    }
    startGame(){
        if(this.manager.canOperate){
            this.manager.isGameOver=false;
            if(this.manager.isLanded && !this.manager.dinosaur.isCrawl){
                this.manager.jump();
            }
        }else{
            this.manager.canOperate=true;
            this.manager.startGame();
        }
    }
}
/********** 白云类 **********/
class Cloud{
    constructor(){
        this.cloudImg={
            cutX: 88,   //剪切的x坐标
            cutY: 0,     //剪切的y坐标
            cutW: 50,     //剪切的宽度
            cutH: 18,     //剪切的高度
            // placeX: 0,
            // placeY: 0,
            placeW: cloudWidth,
            placeH: cloudHeight
        }
        this.clouds=[];
        this.minGap=200;    //前后白云的最小间距
        this.maxGap=600;
        this.creat();
    }
    creat(){
        let num=this.clouds.length;
        for(let i=num;i<4;i++){    //准备四个白云
            let cloud={}; 
            if(i==0){
                cloud.placeX=this.canvas.width;
            }else{
                cloud.placeX=this.clouds[i-1].placeX+cloudWidth+Math.round(Math.random()*(this.maxGap-this.minGap))+this.minGap;
            }
            cloud.placeY=Math.round(Math.random())*cloudShortestY;
            this.clouds.push(cloud)
        }
    }
    draw(){
        let cloudImg=this.cloudImg;
        this.clouds.forEach((item)=>{
            this.ctx.drawImage(spriteImg,cloudImg.cutX,cloudImg.cutY,cloudImg.cutW,cloudImg.cutH,item.placeX,item.placeY,cloudImg.placeW,cloudImg.placeH)
        })
    }
    move(){
        if(this.clouds[0].placeX < -cloudWidth){
            this.clouds.shift();
            this.creat();
        }
        for(let i=0;i<this.clouds.length;i++){
            this.clouds[i].placeX -= speedX;
        }
    }
    clear(){
        this.clouds=[];
    }
}
/********** 陆地类 **********/
class Land{
    constructor(){
        this.landImg={
            cutX: 4,   //剪切的x坐标
            cutY: 56,     //剪切的y坐标
            cutW: 1200,     //剪切的宽度
            cutH: 12,     //剪切的高度
            placeX: 0,
            placeX2: 1200,
            placeY: this.canvas.height-landHeight,
            placeW: 2400,
            placeH: landHeight
        }
    }
    draw(){
        let landImg=this.landImg;
        this.ctx.drawImage(spriteImg, landImg.cutX, landImg.cutY, landImg.cutW, landImg.cutH, landImg.placeX, landImg.placeY, landImg.placeW, landImg.placeH);
        this.ctx.drawImage(spriteImg, landImg.cutX, landImg.cutY, landImg.cutW, landImg.cutH, landImg.placeX2, landImg.placeY, landImg.placeW, landImg.placeH);
    }
    move(){
        journey+=speedX;
        this.landImg.placeX -= speedX;
        this.landImg.placeX2 -= speedX;
        if(this.landImg.placeX < -this.landImg.placeW){
            this.landImg.placeX = 0;
            this.landImg.placeX2 = 1200;
        }
    }
}
/********** 障碍物类 **********/
class Obstacle{
    constructor(){
        this.minGap=600;
        this.maxGap=1000;
        this.obstacles=[];
        this.obstaclesData={
            level_1:[{
                // name: "oneSmallCactus",
                cutX:229,
                cutW:16,
                cutH:38
            },{
                // name: "twoSmallCactus",
                cutX:246,
                cutW:33,
                cutH:38
            },{
                // name: "oneBigCactus",
                cutX:333,
                cutW:24,
                cutH:54
            }],
            level_2:[{
                // name: "pterosaur",
                cutX:136,
                cutW:44,
                cutH:42,
                count:0,
                isPterosaur:true
            },{
                // name: "threeSmallCactus",
                cutX:262,
                cutW:51,
                cutH:38
            },{
                // name: "twoBigCactus_1",
                cutX:333,
                cutW:49,
                cutH:54
            },{
                // name: "twoBigCactus_2",
                cutX:383,
                cutW:48,
                cutH:54
            },{
                // name: "bunchThreeCactus",
                cutX:432,
                cutW:51,
                cutH:54
            }],
            level_3:[{
                // name: "fourSmallCactus",
                cutX:246,
                cutW:67,
                cutH:38,
            },{
                // name: "threeBigCactus",
                cutX:358,
                cutW:73,
                cutH:54
            },{
                // name: "twoBigCactus_2",
                cutX:383,
                cutW:48,
                cutH:54
            },{
                // name: "bunchFourCactus",
                cutX:408,
                cutW:74,
                cutH:54
            }],
            level_4:[{
                // name: "pterosaur",
                cutX:135,
                cutW:46,
                cutH:44,
            },{
                // name: "fourBigCactus",
                cutX:333,
                cutW:98,
                cutH:54
            },{
                // name: "bunchFiveCactus",
                cutX:383,
                cutW:100,
                cutH:54
            }]
        }
        this.creat();
    }
    getRandomLevel(){     //随机选择障碍物的等级,随着游戏等级越来越高，游戏障碍物的宽度也越来越宽
        let n=1;
        let m=n/level;
        let getLevel=0;
        let random=Math.random();
        while(n<=level){
            if(random>m){    //假设此时level=4, n=1, random=0.4
                n++;
                m=n/level;
            }else{
                if(level>4){
                    getLevel=4;
                }else{
                    getLevel=n;
                }
                break;
            }
        }
        return getLevel;
    }
    creat(){
        let num=this.obstacles.length;
        for(let i=num;i<3;i++){      //准备三个障碍物
            let randomLevel=this.getRandomLevel();
            let obstLength=this.obstaclesData["level_"+randomLevel].length;
            let randomIndex=Math.floor(Math.random()*obstLength);
            let obstacle={...this.obstaclesData["level_"+randomLevel][randomIndex]}; 
            // let obstacle={...this.obstaclesData["level_2"][0]}; 
            if(i==0){
                obstacle.placeX=this.canvas.width;
            }else{
                let prevObst=this.obstacles[i-1];
                obstacle.placeX=prevObst.placeX+prevObst.placeW+Math.round(Math.random()*(this.maxGap-this.minGap))+this.minGap;
            }
            obstacle.placeW=obstacle.cutW*2;
            obstacle.placeH=obstacle.cutH*2;
            if(obstacle.isPterosaur){
                obstacle.placeY=(this.canvas.height-obstacle.placeH)*Math.random();
            }else{
                obstacle.placeY=this.canvas.height-obstacle.placeH;
            }
            this.obstacles.push(obstacle);
        }
    }
    draw(){
        // let pos={...this.obstaclesData["level_1"][0]}
        // pos.placeX=100;
        // pos.placeY=100;
        // pos.placeW=pos.cutW*2;
        // pos.placeH=pos.cutH*2;
        // this.ctx.drawImage(spriteImg,pos.cutX,0,pos.cutW,pos.cutH,pos.placeX,pos.placeY,pos.placeW,pos.placeH);
        this.obstacles.forEach((item)=>{
            let cutX=0;
            if(item.isPterosaur){
                item.count++;
                cutX=item.cutX+item.count%2*item.cutW;
                
            }else{
                cutX=item.cutX;
            }
            this.ctx.drawImage(spriteImg,cutX,0,item.cutW,item.cutH,item.placeX,item.placeY,item.placeW,item.placeH);
        })
    }
    move(){
        let obstacles=this.obstacles;
        if(obstacles[0].placeX < -this.canvas.width/4){
            obstacles.shift();
            this.creat();
        }
        for(let i=0;i<obstacles.length;i++){
            obstacles[i].placeX -= speedX;
        }
    }
    clear(){
        this.obstacles=[];
    }
}



/********** 恐龙类 **********/
class Dinosaur{
    constructor(){
        this.isCrawl=false;
        this.count=0;
        this.speedY=0;
        this.g=24;
        this.initDinosaurImg();
    }
    initDinosaurImg(){
        this.cutX= 848,   //剪切的x坐标
        this.cutY= 0,     //剪切的y坐标
        this.cutW= 44,     //剪切的宽度
        this.cutH= 52,     //剪切的高度
        this.placeX= 0,
        this.placeY= this.canvas.height-dinosaurUpHeight,
        this.placeW= dinosaurUpWidth,
        this.placeH= dinosaurUpHeight
    }
    draw(){
        this.ctx.drawImage(spriteImg, this.cutX, this.cutY, this.cutW, this.cutH, this.placeX, this.placeY, this.placeW, this.placeH);
    }
    run(isRun){       //true表示跑起来，false代表静止
        if(isRun){
            this.count=this.count%2;
            if(this.isCrawl){
                this.cutX=1112+this.count*60;
            }else{
                this.cutX=936+this.count*44;
            }
            this.count++;
        }else{
            this.cutX=848;
        }
    }
    jump(){
        this.speedY = -110;
    }
    crawl(){    //匍匐
        this.isCrawl=true;
        this.cutY=0;
        this.cutW=60;
        this.placeY=this.canvas.height-dinosaurCrawlHeight;
        this.placeW=dinosaurCrawlWidth;
        this.placeH=dinosaurCrawlHeight;
    }
    upRight(){     //直立
        this.isCrawl=false;
        this.initDinosaurImg();
    }
    fall(callback){
        this.speedY+=this.g;
        this.placeY+=this.speedY;
        if(this.placeY>=this.canvas.height-dinosaurUpHeight){
            this.placeY=this.canvas.height-dinosaurUpHeight;
            callback();
        }
    }
}
/********** 分数类 **********/
class Score{
    constructor(){
        this.init();
    }
    init(){
        journey=0;
        this.score=0;
        this.heightestScore=Number(localStorage.getItem("heightestScore"));
    }
    change(){
        this.score=Math.floor(journey/40);  //移动50像素为1分
    }
    setHeightestScore(){
        if(this.heightestScore<this.score){
            localStorage.setItem("heightestScore",this.score);
        }
    }
    draw(){
        let heightestScoreStr=Number(this.heightestScore).toString().padStart(5,"0");
        let currScoreStr=this.score.toString().padStart(5,"0");
        if(currScoreStr>heightestScoreStr){
            heightestScoreStr=currScoreStr;
        }
        this.ctx.font="26px bolder Times New Roman";
        this.ctx.fillStyle="gray";
        this.ctx.fillText("HI "+heightestScoreStr+" "+currScoreStr,700,40);
        this.ctx.fillText("Level "+level,1000,40);
    }
}
/********** 碰撞检测类 **********/
class Crash{
    constructor(){

    }
    listenCrash(dinosaur,obstacle,callback){
        let dinoPlaceX=dinosaur.placeX;
        let dinoPlaceY=dinosaur.placeY;
        let dinoPlaceW=dinosaur.placeW;
        let dinoPlaceH=dinosaur.placeH;
        let obstPlaceX=obstacle.obstacles[0].placeX;
        let obstPlaceY=obstacle.obstacles[0].placeY;
        let obstPlaceW=obstacle.obstacles[0].placeW;
        let obstPlaceH=obstacle.obstacles[0].placeH;
        let dinoCenter={
            x:dinoPlaceX+dinoPlaceW/2,
            y:dinoPlaceY+dinoPlaceH/2
        }
        let obstCenter={
            x:obstPlaceX+obstPlaceW/2,
            y:obstPlaceY+obstPlaceH/2
        }
        let horizontalIsCrash=Math.abs(dinoCenter.x-obstCenter.x)<(dinoPlaceW+obstPlaceW)/2;
        let verticalIsCrash=Math.abs(dinoCenter.y-obstCenter.y)<(dinoPlaceH+obstPlaceH)/2;
        if(horizontalIsCrash && verticalIsCrash){
            callback();
        }
    }
}