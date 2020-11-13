/******************全局变量及方法******************/
var pen=$("canvas").getContext("2d");
var currPiecer="red";   //当前棋手，红方或者黑方
var takePiece=null;   //选中或拿起的棋子
var chessPoses=$("#chessboard").children;   //所有的位置棋子
var eatedPieces={
    red:[],
    black:[]
};
var startTimer=null;   //开始游戏的计时器
var winPiecer="";     //赢家  红方或黑方
var m=0,s=0;    //计时板的分和秒
var isFirst=true;    //是否第一次点击开始游戏按钮
var chessPieces=[
    {initCoords:["00","08"],type:"red",text:"車",name:"che"},
    {initCoords:["01","07"],type:"red",text:"馬",name:"ma"},
    {initCoords:["02","06"],type:"red",text:"相",name:"xiang"},
    {initCoords:["03","05"],type:"red",text:"仕",name:"shi"},
    {initCoords:["04"],type:"red",text:"帅",name:"jiang"},
    {initCoords:["21","27"],type:"red",text:"炮",name:"pao"},
    {initCoords:["30","32","34","36","38"],type:"red",text:"兵",name:"bing"},
    {initCoords:["90","98"],type:"black",text:"車",name:"che"},
    {initCoords:["91","97"],type:"black",text:"馬",name:"ma"},
    {initCoords:["92","96"],type:"black",text:"象",name:"xiang"},
    {initCoords:["93","95"],type:"black",text:"士",name:"shi"},
    {initCoords:["94"],type:"black",text:"将",name:"jiang"},
    {initCoords:["71","77"],type:"black",text:"炮",name:"pao"},
    {initCoords:["60","62","64","66","68"],type:"black",text:"卒",name:"bing"}
]
function $(ele){
    return document.querySelector(ele);
}
function $$(ele){
    return document.querySelectorAll(ele);
}
/******************主函数******************/
function main(){
    notAllowedSelectAndCopy();
    drawChessboard()
    initGame();
    alert("点击开始游戏按钮即可开始！");
}
main();
/******************游戏界面******************/
//绘制棋盘
function drawChessboard(){ 
    //绘制基线
    function drawBaseLine(start,end){
        for(var i=0;i<5;i++){
            for(var j=0;j<9;j++){
                pen.beginPath();
                pen.moveTo(60,start+60*i);
                pen.lineTo(540,start+60*i);
                pen.moveTo(60+j*60,start);
                pen.lineTo(60+j*60,end);
                pen.stroke();
            }
        }
    }
    drawBaseLine(30,270);
    drawBaseLine(330,570);
    //绘制米格线
    function drawMigLine(centerX,centerY){
        var num=60;
        pen.beginPath();
        pen.moveTo(centerX-num,centerY-num);
        pen.lineTo(centerX+num,centerY+num);
        pen.stroke();
        pen.beginPath();
        pen.moveTo(centerX+num,centerY-num);
        pen.lineTo(centerX-num,centerY+num);
        pen.stroke();
    }
    drawMigLine(300,90);
    drawMigLine(300,510);
    //绘制兵、卒、炮的标记
    function drawMark(){
        var m,n,i,j;
        var markDot=[
            [120,150],[480,150],[60,210],[180,210],[300,210],[420,210],[540,210],
            [120,450],[480,450],[60,390],[180,390],[300,390],[420,390],[540,390]
        ]
        for(var z=0;z<markDot.length;z++){
            var x=markDot[z][0];
            var y=markDot[z][1];
            if(x==60){
                i=0;
                j=2;
            }
            else if(x==540){
                i=2;
                j=4;
            }
            else{
                i=0;
                j=4;
            }
            for(i;i<j;i++){
                switch(i){
                    case 0: m=1; n=-1; break;
                    case 1: m=1; n=1; break;
                    case 2: m=-1; n=1; break;
                    case 3: m=-1; n=-1; break;
                }
                pen.beginPath();
                pen.lineWidth=1;
                pen.moveTo(x+m*6,y+n*16);
                pen.lineTo(x+m*6,y+n*6);
                pen.lineTo(x+m*16,y+n*6);
                pen.stroke();
            }
        }
    }
    drawMark()
    //绘制边框
    function drawBorderLine(){
        pen.beginPath();
        pen.lineWidth=4
        pen.rect(60,30,480,540);
        pen.stroke();
    }
    drawBorderLine();
    //绘制文字：楚河、汉界
    function drawText(){
        pen.save();
        pen.beginPath();
        pen.font="900 50px 华文行楷";
        pen.translate(300,300);
        pen.rotate(270*Math.PI/180);;
        pen.fillText("楚",-25,-180);
        pen.fillText("河",-25,-120);
        pen.beginPath();
        pen.rotate(180*Math.PI/180);
        pen.fillText("汉",-25,-180);
        pen.fillText("界",-25,-120);
        pen.restore();
    }
    drawText();
    //建立棋盘坐标并排上序号
    function createCoordinate(){
        var fragment=document.createDocumentFragment();
        for(var i=0;i<10;i++){
            for(var j=0;j<9;j++){
                var chessPosition;
                chessPosition=document.createElement("div");
                fragment.appendChild(chessPosition);
                chessPosition.className="chessPosition";
                chessPosition.style.left=60-28+j*60+"px";
                chessPosition.style.top=30-28+i*60+"px";
                chessPosition.innerText=i+""+j;
                chessPosition.dataset.name="null";
                chessPosition.id="num-"+i+j;
            }
        }
        $("#chessboard").appendChild(fragment);
    }
    createCoordinate();
}
/******************游戏功能******************/
//初始化游戏功能
function initGame(){
    $("#start-btn").onclick=function(){
        if(isFirst){
            isFirst=false;
            startTimer=setInterval(countTime,1000);
            $("#pause-btn").removeAttribute("disabled");
            $("#restart-btn").removeAttribute("disabled");
            $("#surrender-btn").removeAttribute("disabled");
            initPiecesPosition();
            thinking();
            $("#pause-btn").onclick=function(){
                pauseGame();
            }
            $("#restart-btn").onclick=function(){
                restartGame();
            }
            $("#surrender-btn").onclick=function(){
                surrender();
            }
            $("#again-btn").onclick=function(){
                restartGame();
            }
            $("#continue-btn").onclick=function(){
                continueGame();
            }
        }
    }
    //初始化棋子位置
    function initPiecesPosition(){
        for(var i=0;i<chessPieces.length;i++){
            var initCoords=chessPieces[i].initCoords;
            for(var j=0;j<initCoords.length;j++){
                $("#num-"+initCoords[j]).classList.remove("chessPosition");
                $("#num-"+initCoords[j]).classList.add("chessPiece",chessPieces[i].type);
                $("#num-"+initCoords[j]).innerText=chessPieces[i].text;
                $("#num-"+initCoords[j]).dataset.name=chessPieces[i].name;
            }
        }
    }
    //棋手思考中棋盘的变化
    function thinking(){
        showCurrPiecerThinkText();
        for(var i=0;i<chessPoses.length;i++){
            chessPoses[i].onmouseenter=function(e){
                if(e.target.classList.contains("chessPosition")){                        //如果是空白处
                    this.classList.add(currPiecer+"PosHover");
                }else{                                          //如果在棋子上
                    if(this.classList.contains(currPiecer)){
                        this.classList.add(currPiecer+"ChessHover");
                    }
                }
            }
            chessPoses[i].onmouseleave=function(){
                this.classList.remove(currPiecer+"PosHover");
                this.classList.remove(currPiecer+"ChessHover");
            }
        }
        takeStep();
    }
    //显示当前棋手思考中的文字信息
    function showCurrPiecerThinkText(){
        $("#red-think").style.display="none";
        $("#black-think").style.display="none";
        $("#"+currPiecer+"-think").style.display="block";
    }
    //拿起或选中棋子
    function takeStep(){  
        var canPos=[];
        for(var i=0;i<chessPoses.length;i++){
            chessPoses[i].onclick=function(){
                var theClickIsSelfPiece=this.classList.contains(currPiecer);
                if(takePiece){
                    takePiece.style.top=takePiece.offsetTop+5+"px";
                    takePiece.classList.remove(currPiecer+"ClickChess")
                }
                if(theClickIsSelfPiece){
                    takePiece=this;
                    takePiece.classList.add(currPiecer+"ClickChess");
                    takePiece.style.top=takePiece.offsetTop-5+"px";
                    canPos=getCanDropPos();
                }else{
                    if(takePiece){
                        var newPieceNum=this.id.split("-")[1];
                        var canDrop=judgeDrop(newPieceNum,canPos);
                        canDrop && putChess(takePiece,newPieceNum);
                        takePiece=null;
                    }
                }
            }
        }
    }
    //获取可以落子的坐标集合
    function getCanDropPos(){
        var canPos=[];   //可以落子的位置集合
        if(takePiece){
            var num=takePiece.id.split("-")[1];
            var numX=parseInt(num.split("")[0]);
            var numY=parseInt(num.split("")[1]);
            var name=takePiece.dataset.name;
            switch(name){
                case "che":
                    che();
                    break;
                case "ma":
                    ma();
                    break;
                case "xiang":
                    xiang();
                    break;
                case "shi":
                    shi();
                    break;
                case "jiang":
                    jiang();
                    break;
                case "pao":
                    pao();
                    break;
                case "bing":
                    bing();
                    break;
                default:
                    alert("程序错误！");
                    break;
            }
        }
        console.log("当前棋子可走的位置：",canPos)
        return canPos;
        function che(){
            for(var i=0;i<4;i++){    //0-3代表上、右、下、左四个方向
                var tempX=numX;
                var tempY=numY;
                while(tempX>=0 && tempX<=9 && tempY>=0 && tempY<=8){
                    switch(i){
                        case 0:
                            tempX--;
                            break;
                        case 1:
                            tempY++;
                            break;
                        case 2:
                            tempX++;
                            break;
                        case 3:
                            tempY--;
                            break;
                    }
                    if(tempX>=0 && tempX<=9 && tempY>=0 && tempY<=8){
                        var newPos=tempX+""+tempY;
                        var newPosHasSelfPiece=$("#num-"+newPos).classList.contains(currPiecer);
                        var newPosHasEnemyPiece=!newPosHasSelfPiece && !$("#num-"+newPos).classList.contains("chessPosition");
                        if(newPosHasSelfPiece){
                            break;
                        }
                        else if(newPosHasEnemyPiece){
                            canPos.push(newPos);
                            break;
                        }else{
                            canPos.push(newPos);
                        }
                    }
                }
            }
        }
        function ma(){
            for(var i=0;i<8;i++){    //0-3代表右竖日上、右竖日下、左竖日下、左竖日上、右横日上、右横日下、左横日下、左横日上八个方向
                var tempX=numX;
                var tempY=numY;
                var poorNum="";    //蹩脚马蹩脚的位置
                while(tempX>=0 && tempX<=9 && tempY>=0 && tempY<=8){
                    switch(i){
                        case 0:
                            poorNum=(tempX-1)+""+tempY;
                            tempX-=2;
                            tempY++;
                            break;
                        case 1:
                            poorNum=(tempX+1)+""+tempY;
                            tempX+=2;
                            tempY++;
                            break;
                        case 2:
                            poorNum=(tempX+1)+""+tempY;
                            tempX+=2;
                            tempY--;
                            break;
                        case 3:
                            poorNum=(tempX-1)+""+tempY;
                            tempX-=2;
                            tempY--;
                            break;
                        case 4:
                            poorNum=tempX+""+(tempY+1);
                            tempX--;
                            tempY+=2;
                            break;
                        case 5:
                            poorNum=tempX+""+(tempY+1);
                            tempX++;
                            tempY+=2;
                            break;
                        case 6:
                            poorNum=tempX+""+(tempY-1);
                            tempX++;
                            tempY-=2;
                            break;
                        case 7:
                            poorNum=tempX+""+(tempY-1);
                            tempX--;
                            tempY-=2;
                            break;
                    }
                    if(tempX>=0 && tempX<=9 && tempY>=0 && tempY<=8){
                        var newPos=tempX+""+tempY;
                        var newPosHasSelfPiece=$("#num-"+newPos).classList.contains(currPiecer);
                        var poorPosHasAnyPiece=!$("#num-"+poorNum).classList.contains("chessPosition");
                        if(newPosHasSelfPiece || poorPosHasAnyPiece){
                            break;
                        }
                        canPos.push(newPos);
                        break;
                    }
                }
            }
        }
        function xiang(){
            for(var i=0;i<4;i++){    //0-3代表右上、右下、左下、左上四个方向
                var tempX=numX;
                var tempY=numY;
                var poorNum="";
                while(tempX>=0 && tempX<=9 && tempY>=0 && tempY<=8){
                    switch(i){
                        case 0:
                            poorNum=(tempX-1)+""+(tempY+1);
                            tempX-=2;
                            tempY+=2;
                            break;
                        case 1:
                            poorNum=(tempX+1)+""+(tempY+1);
                            tempX+=2;
                            tempY+=2;
                            break;
                        case 2:
                            poorNum=(tempX+1)+""+(tempY-1);
                            tempX+=2;
                            tempY-=2;
                            break;
                        case 3:
                            poorNum=(tempX-1)+""+(tempY-1);
                            tempX-=2;
                            tempY-=2;
                            break;
                    }
                    if(tempX>=0 && tempX<=9 && tempY>=0 && tempY<=8){
                        var newPos=tempX+""+tempY;
                        var newPosHasSelfPiece=$("#num-"+newPos).classList.contains(currPiecer);
                        var poorPosHasAnyPiece=!$("#num-"+poorNum).classList.contains("chessPosition");
                        if(newPosHasSelfPiece || poorPosHasAnyPiece){
                            break;
                        }
                        canPos.push(newPos);
                        break;
                    }
                }
            }
        }
        function shi(){
            for(var i=0;i<4;i++){    //0-3代表右上、右下、左下、左上四个方向
                var tempX=numX;
                var tempY=numY;
                // (currPiecer=="red" && tempX>=0 && tempX<=2) || (currPiecer=="black" && tempX>=7 && tempX<=9) && (tempY>=3 && tempY<=5)
                while((tempY>=3 && tempY<=5) && ((tempX>=0 && tempX<=2) || (tempX>=7 && tempX<=9))){
                    switch(i){
                        case 0:
                            tempX--;
                            tempY++;
                            break;
                        case 1:
                            tempX++;
                            tempY++;
                            break;
                        case 2:
                            tempX++;
                            tempY--;
                            break;
                        case 3:
                            tempX--;
                            tempY--;
                            break;
                    }
                    if((tempY>=3 && tempY<=5) && ((tempX>=0 && tempX<=2) || (tempX>=7 && tempX<=9))){
                        var newPos=tempX+""+tempY;
                        var newPosHasSelfPiece=$("#num-"+newPos).classList.contains(currPiecer);
                        if(newPosHasSelfPiece){
                            break;
                        }
                        canPos.push(newPos);
                        break;
                    }
                }
            }
        }
        function jiang(){
            whenFaceToFace();
            for(var i=0;i<4;i++){    //0-3代表上、右、下、左四个方向
                var tempX=numX;
                var tempY=numY;
                while((tempY>=3 && tempY<=5) && ((tempX>=0 && tempX<=2) || (tempX>=7 && tempX<=9))){
                    switch(i){
                        case 0:
                            tempX--;
                            break;
                        case 1:
                            tempY++;
                            break;
                        case 2:
                            tempX++;
                            break;
                        case 3:
                            tempY--;
                            break;
                    }
                    if((tempY>=3 && tempY<=5) && ((tempX>=0 && tempX<=2) || (tempX>=7 && tempX<=9))){
                        var newPos=tempX+""+tempY;
                        var newPosHasSelfPiece=$("#num-"+newPos).classList.contains(currPiecer);
                        if(newPosHasSelfPiece){
                            break;
                        }
                        canPos.push(newPos);
                        break;
                    }
                }
            }
            function whenFaceToFace(){
                var jiangs=$$("[data-name='jiang']");
                var redJiangNum=blackJiangNum="";
                var redJiangNumX=redJiangNumY=blackJiangNumX=blackJiangNumY="";
                var isFaceToFace=false;
                for(var m=0;m<jiangs.length;m++){
                    if(jiangs[m].classList.contains("red")){
                        redJiangNum=jiangs[m].id.split("-")[1];
                    }else if(jiangs[m].classList.contains("black")){
                        blackJiangNum=jiangs[m].id.split("-")[1];
                    }
                }
                redJiangNumX=parseInt(redJiangNum.split("")[0]);
                redJiangNumY=parseInt(redJiangNum.split("")[1]);
                blackJiangNumX=parseInt(blackJiangNum.split("")[0]);
                blackJiangNumY=parseInt(blackJiangNum.split("")[1]);
                if(redJiangNumY==blackJiangNumY){
                    for(var n=redJiangNumX+1;n<blackJiangNumX;n++){
                        var isChessPosition=$("#num-"+n+redJiangNumY).classList.contains("chessPosition");
                        if(!isChessPosition){
                            isFaceToFace=false;
                            break;
                        }else if(isChessPosition && n==blackJiangNumX-1){
                            isFaceToFace=true;
                        }
                    }
                }
                if(isFaceToFace){
                    currPiecer=="red" ? newPos=blackJiangNum : newPos=redJiangNum;
                    canPos.push(newPos);
                }
            }
        }
        function pao(){
            for(var i=0;i<4;i++){    //0-3代表上、右、下、左四个方向
                var tempX=numX;
                var tempY=numY;
                var countMidPiece=0;
                while(tempX>=0 && tempX<=9 && tempY>=0 && tempY<=8){
                    switch(i){
                        case 0:
                            tempX--;
                            break;
                        case 1:
                            tempY++;
                            break;
                        case 2:
                            tempX++;
                            break;
                        case 3:
                            tempY--;
                            break;
                    }
                    if(tempX>=0 && tempX<=9 && tempY>=0 && tempY<=8){
                        var newPos=tempX+""+tempY;
                        var newPosHasAnyPiece=!$("#num-"+newPos).classList.contains("chessPosition");
                        if(newPosHasAnyPiece){
                            countMidPiece++;
                            if(countMidPiece==1){
                                continue;
                            }else{
                                var newPosIsEnemyPiece=!$("#num-"+newPos).classList.contains(currPiecer);
                                if(newPosIsEnemyPiece){
                                    canPos.push(newPos);
                                }
                                break;
                            }
                        }else{
                            if(countMidPiece==0){
                                canPos.push(newPos);
                            }
                        }
                    }
                }
            }
        }
        function bing(){
            for(var i=0;i<4;i++){    //0-3代表上、右、下、左四个方向
                var tempX=numX;
                var tempY=numY;
                if(currPiecer=="red" && (i==0 || (tempX<=4 && (i==1 || i==3)))){
                    continue;
                }else if(currPiecer=="black" && (i==2 || (tempX>=5 && (i==1 || i==3)))){
                    continue;
                }
                while(tempX>=0 && tempX<=9 && tempY>=0 && tempY<=8){
                    switch(i){
                        case 0:
                            tempX--;
                            break;
                        case 1:
                            tempY++;
                            break;
                        case 2:
                            tempX++;
                            break;
                        case 3:
                            tempY--;
                            break;
                    }
                    if(tempX>=0 && tempX<=9 && tempY>=0 && tempY<=8){
                        var newPos=tempX+""+tempY;
                        var newPosHasSelfPiece=$("#num-"+newPos).classList.contains(currPiecer);
                        if(newPosHasSelfPiece){
                            break;
                        }
                        canPos.push(newPos);
                        break;
                    }
                }
            }
        }
    }
    //判断是否可以落子
    function judgeDrop(newPieceNum,canPos){
        var canDrop=false;
        for(var j=0;j<canPos.length;j++){
            if(newPieceNum==canPos[j]){
                canDrop=true;
                break;
            }
        }
        return canDrop;
    }
    //放下棋子
    function putChess(takePiece,newPieceNum){
        var takePieceNum=takePiece.id.split("-")[1];
        var takePieceClass=$("#num-"+takePieceNum).className;
        var takePieceText=$("#num-"+takePieceNum).innerText;
        var takePieceName=$("#num-"+takePieceNum).dataset.name;
        var theNewPosIsChessPosition=$("#num-"+newPieceNum).classList.contains("chessPosition");
        if(theNewPosIsChessPosition){
            $("#num-"+takePieceNum).className=$("#num-"+newPieceNum).className;
            $("#num-"+takePieceNum).innerText=$("#num-"+takePieceNum).id.split("-")[1];
            $("#num-"+takePieceNum).dataset.name=$("#num-"+newPieceNum).dataset.name;
            $("#num-"+takePieceNum).classList.remove(currPiecer+"PosHover");   //棋子和棋盘位置是两个div盒子，而出现的鼠标移入与移出的bug，需要手动移出样式
        }else{      //吃掉对方棋子
            eatEnemyPiece(takePieceNum,newPieceNum)
        }
        $("#num-"+newPieceNum).className=takePieceClass;
        $("#num-"+newPieceNum).innerText=takePieceText;
        $("#num-"+newPieceNum).dataset.name=takePieceName;
        currPiecer=(currPiecer=="red"?"black":"red");
        showCurrPiecerThinkText();
    }
    //吃掉对方棋子
    function eatEnemyPiece(takePieceNum,newPieceNum){
        var isOver=null;
        var eatedPieceType="";
        var eatedPieceText=$("#num-"+newPieceNum).innerText;
        var eatedPieceName=$("#num-"+newPieceNum).dataset.name;
        var eatedPieceClassList=$("#num-"+newPieceNum).classList;
        $("#num-"+takePieceNum).className="chessPosition";
        $("#num-"+takePieceNum).innerText=$("#num-"+takePieceNum).id.split("-")[1];
        $("#num-"+takePieceNum).dataset.name="null";
        eatedPieceName=="jiang" ? isOver=true : isOver=false;
        eatedPieceClassList.contains("red") ? eatedPieceType="red" : eatedPieceType="black";
        eatedPieces[eatedPieceType].push(eatedPieceText);
        if(isOver){
            eatedPieceClassList.contains("red") ? winPiecer="黑方" : winPiecer="红方";
            gameOver();
        }
        showEatedPiece(eatedPieceType);
    }
    //显示吃掉的棋子
    function showEatedPiece(eatedPieceType){
        var piece=document.createElement("div");
        console.log(eatedPieceType)
        var row=Math.floor(eatedPieces[eatedPieceType].length/5);
        var col=eatedPieces[eatedPieceType].length%5;
        piece.innerText=eatedPieces[eatedPieceType].slice(-1);
        piece.classList.add(eatedPieceType,"eatedPiece","chessPiece");
        piece.style.left=col*48-5+"px";
        piece.style.top=row*48+"px";
        $("#"+(eatedPieceType=="red" ? "black" : "red")+"-contain").appendChild(piece);
    }
    //暂停游戏
    function pauseGame(){
        $("#hint-cover").style.display="block";
        $("#hint").innerHTML="暂停中";
        $("#continue-btn").style.display="block";
        $("#red-think").style.display="none";
        $("#black-think").style.display="none";
        clearInterval(startTimer);
    }
    //重新开始游戏
    function restartGame(){
        location.reload();
    }
    //投降
    function surrender(){
        currPiecer=="red" ? winPiecer="黑方" : winPiecer="红方";
        gameOver();
    }
    //继续游戏
    function continueGame(){
        closeHintWindow();
        showCurrPiecerThinkText();
        startTimer=setInterval(countTime,1000);
    }
    //游戏结束
    function gameOver(){
        if(winPiecer){
            $("#hint-cover").style.display="block";
            $("#hint").innerHTML=winPiecer+"胜";
            $("#again-btn").style.display="block";
            $("#red-think").style.display="none";
            $("#black-think").style.display="none";
            clearInterval(startTimer);
        }
    }
    //关闭弹窗
    function closeHintWindow(){
        $("#hint").innerHTML="";
        $("#again-btn").style.display="none";
        $("#continue-btn").style.display="none";
        $("#hint-cover").style.display="none";
    }
}
//游戏计时
function countTime(){
	s++;
	if(s==60){m++;s=0;}
	m=parseInt(m);
	if(s<10){s="0"+s;}
	if(m<10){m="0"+m;}
	$("#time").innerText=m+":"+s;
}
//禁止选中和复制界面（网页）上的内容
function notAllowedSelectAndCopy(){
    document.body.onselectstart=document.body.oncontextmenu=function(){ 
        return false;
    }
}