/**********字典、数据**********/
playWays={        //播放方式
    order:{title: "顺序播放"},
    random:{title: "随机播放"},
    single_cycle:{title: "单曲循环"},
    list_cycle:{title: "列表循环"}
}
playRate=["0.5X","1.0X","1.5X","2.0X"];    //播放倍率
bgPictures=["body_bg_0.jpg","body_bg_1.jpg","body_bg_2.jpg","body_bg_3.jpg","body_bg_4.jpg","body_bg_5.jpg","body_bg_6.jpg"];


/**********全局变量**********/
var audio=$("#audio");
var songsClone=[];    //songs的克隆，备用
var isPlaying=false;    //播放状态，是否在播放中
var currSongNum=0;  //当前播放音乐的第几首的下标
var currSongInfo={   //当前歌曲的信息
    id:"",
    head:{},
    cont:[]
};   
var currSongTextNum=0;    //当前播放歌词的第n句的下标
var currPlayWay="order";  //当前播放方式:共order、random、single_cycle、list_cycle四种方式
var currentTime=0;     //当前播放到的时间位置


/**********全局函数**********/
//定义一个选择器函数
function $(ele){
    return document.querySelector(ele);
}
//格式化时间
function formatTime(seconds){
    var m=0,s=0;
    var time="";
    m=Math.floor(seconds/60);
    s=Math.round(seconds%60);
    m<10 && (m=0+""+m);
    s<10 && (s=0+""+s);
    time=m+":"+s;
    return time;
}
//禁止选中和复制界面（网页）上的内容
function notAllowedSelectAndCopy(){
    document.body.onselectstart=document.body.oncontextmenu=function(){ 
        return false;
    }
}
//初始化音频地址
function initAudio(){
    audio.src="musics/"+songs[currSongNum].name+"."+songs[currSongNum].type;
}
//初始化播放倍率
function initPlayRate(){
    for(var i=0;i<playRate.length;i++){
        var option=document.createElement("option");
        option.innerText=playRate[i];
        option.value=parseFloat(playRate[i]);
        option.value==1 && (option.selected=true);
        $("#rate-sel").appendChild(option);
    }
}
//初始化播放方式
function initPlayWay(){
    $("#play-way-img").src="imgs/"+currPlayWay+"_out.png";
    $("#play-way-img").title=playWays[currPlayWay].title;
}
//初始化时间进度
function initTimeProgress(){
    audio.oncanplay=function() {
        $("#time").querySelectorAll("span")[1].innerText=formatTime(audio.duration);
        $("#time").querySelectorAll("span")[0].innerText=formatTime(0);
    };
}
//播放音乐
function play(){
    $("#pause-play-img").src="imgs/play.png";
    $("#pause-play-img").title="点击暂停";
    audio.play();
    isPlaying=true;
}
//暂停音乐
function pause(){
    $("#pause-play-img").src="imgs/pause.png";
    $("#pause-play-img").title="点击播放";
    audio.pause();
    isPlaying=false;
}
//开启或关闭静音
function toggleSoundOff(){
    $("#volume-img").onclick=function(){
        if(audio.muted){
            audio.muted=false;
            $("#volume-img").src="imgs/volume_out.png";
            $("#volume-img").title="开启静音";
        }else{
            audio.muted=true;
            $("#volume-img").src="imgs/soundoff_out.png";
            $("#volume-img").title="关闭静音";
        }
    }
}
//调节音量
function setVolume(){
    $("#volume-range").style.backgroundSize=Math.ceil($("#volume-range").value)+"% 100%";
    $("#volume-range").oninput=function(){
        $("#volume-range").value==0 ? $("#volume-img").src="imgs/soundoff_out.png" : $("#volume-img").src="imgs/volume_out.png"
        audio.volume=$("#volume-range").value/100;
        $("#volume-range").style.backgroundSize=Math.ceil($("#volume-range").value)+"% 100%";
    }
}
//设置鼠标放上去或移开时按钮的背景颜色变化
function setBtnHoverBgColor(ele){
    $(ele).onmouseover=function(){
        $(ele).src=$(ele).src.replace("_out","_over");
    }
    $(ele).onmouseout=function(){
        $(ele).src=$(ele).src.replace("_over","_out");
    }
}
//设置播放方式：顺序播放、随机播放、单曲循环、列表循环
function setPlayWay(){
    function foundCurrSongNum(){
        for(var i=0;i<songs.length;i++){
            if($(".active-li").dataset.id==songs[i].id){
                currSongNum=i;
                break;
            }
        }
        return currSongNum;
    }
    $("#play-way-img").onclick=function(){
        $("#playway-list").style.display="none";
        var timer=setTimeout(function(){
            $("#playway-list").style.display="block";
            $("#playway-list").onclick=function(e){
                currPlayWay=e.target.parentNode.dataset.way;
                if(currPlayWay){
                    $("#play-way-img").src="imgs/"+currPlayWay+"_out.png";
                    $("#play-way-img").title=e.target.innerText;
                    $("#playway-list").style.display="none";
                    if(currPlayWay=="random"){
                        songs.sort(function(){
                            return 0.5-Math.random();
                        });
                        foundCurrSongNum();
                    }else{
                        for(var j=0;j<songs.length;j++){
                            songs[j]=songsClone[j];
                        }
                        foundCurrSongNum();
                    }
                }
            }
        },100);
        timer=null;
    }
    document.onclick=function(e){
        $("#playway-list").style.display="none";
    }
}
//折叠或展开菜单
function toggleFoldSongsMenu(){
    //折叠菜单
    function foldSongsMenu(){
        $("#songs").classList.remove("menu-show");
        $("#songs").classList.add("menu-hide");
        $("#screen").classList.remove("width-small");
        $("#screen").classList.add("width-big");
        $("#fold-btn").classList.remove("fold","toRight");
        $("#fold-btn").classList.add("unfold","toLeft");
        $("#fold-btn").title="点击展开歌单";
    }
    //展开菜单
    function unfoldSongsMenu(){
        $("#songs").classList.remove("menu-hide");
        $("#songs").classList.add("menu-show");
        $("#screen").classList.remove("width-big");
        $("#screen").classList.add("width-small");
        $("#fold-btn").classList.remove("unfold","toLeft");
        $("#fold-btn").classList.add("fold","toRight");
        $("#fold-btn").title="点击折叠歌单";
    }
    $("#fold-btn").onclick=function(){
        var songsMenuWidth=parseInt(getComputedStyle($("#songs")).width);
        var menuFold=songsMenuWidth==0;
        menuFold ? unfoldSongsMenu() : foldSongsMenu();
    }
}
//展示歌单列表
function showSongsList(){
    for(var i=0;i<songs.length;i++){
        var li=document.createElement("li");
        li.innerText=songs[i].name+"."+songs[i].type;
        li.dataset.id=songs[i].id;
        $("#list").appendChild(li);
    }
}
//获取当前歌曲歌词内容
function getCurrSongText(){
    var songTextArr=[];
    currSongInfo={id:songs[currSongNum].id,head:{},cont:[]};
    if(songs[currSongNum].text){
        songTextArr=songs[currSongNum].text.split("\n");
        for(var j=0;j<songTextArr.length;j++){
            var time_text=songTextArr[j].split("]");
            var time=time_text[0].replace("[","").trim();
            if(time_text[1]){
                var m_s=time.split(":");
                var seconds=parseInt(m_s[0])*60+parseFloat(m_s[1]);
                currSongInfo.cont.push([seconds,time_text[1]]);
            }else{
                var head=time_text[0].replace("[","");
                var key_val=head.split(":");
                currSongInfo.head[key_val[0].trim()]=key_val[1];
            }
        }
    }
}
//展示播放时间进度
function showPlayTimeProgress(){
    var progress=progress=audio.currentTime/audio.duration; 
    progress ? "" : progress=0;
    $("#play-range").value=progress*100;
    $("#play-range").style.backgroundSize=Math.ceil(progress*100)+"% 100%";
    currentTime=formatTime(audio.currentTime);
    $("#time").querySelectorAll("span")[0].innerText=currentTime;
}
//展示歌词进度
function showSongTextProgress(){
    var cont=currSongInfo.cont;
    var currPlayTime=audio.currentTime;
    for(var i=currSongTextNum;i<cont.length;i++){
        var currTextTime=cont[i][0]
        if(currPlayTime>currTextTime){
            $(".active-text") && $(".active-text").classList.remove("active-text");
            $("#song-text").querySelectorAll("li")[i].classList.add("active-text");
            i>currSongTextNum ? (currSongTextNum=i) : "";
            if(currSongTextNum>4){
                $("#song-text").scrollTop=(currSongTextNum-4)*40;
            }
        }
    }
}
//选择歌曲播放
function selectSong(){
    var lis=document.querySelectorAll("#list li");
    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            var id=this.dataset.id;
            for(var j=0;j<songs.length;j++){
                if(songs[j].id==id){
                    currSongNum=j;
                    isPlaying=true;
                    readyPlay();
                    break;
                }
            }
        }
    }
}
//准备播放
function readyPlay(){
    $("#song-text").scrollTop=0;
    audio.src = "musics/" + songs[currSongNum].name+"."+songs[currSongNum].type;
    currSongTextNum=0;
    showCurrSongCont();
    isPlaying && play();
}
//上一首
function goBack(){
    currSongNum==0 ? currSongNum=songs.length-1 : currSongNum--;
    readyPlay();
}
//下一首
function goNext(){
    currSongNum==songs.length-1 ? currSongNum=0 : currSongNum++;
    readyPlay();
}
//克隆songs数据备用
function cloneSongs(){
    for(var i=0;i<songs.length;i++){
        songsClone[i]=songs[i];
    }
}


/**********调用函数**********/
//初始化音乐播放器基本功能
function init(){
    initAudio();     //初始化音频地址
    initPlayRate();   //初始化播放倍率
    initPlayWay();    //初始化播放方式
    initTimeProgress();     //初始化时间进度
    cloneSongs();      //克隆歌单数据
    notAllowedSelectAndCopy();    //禁止选择和复制网页内容
    setBtnHoverBgColor("#play-way-img");   //设置按钮背景颜色，下同
    setBtnHoverBgColor("#back-img");
    setBtnHoverBgColor("#next-img");
    setBtnHoverBgColor("#volume-img");
    showSongsList();     //展示歌单列表
    selectSong();      //选择歌曲播放
    setPlayWay();       //设置播放方式：顺序播放、随机播放、单曲循环、列表循环
    toggleSoundOff();     //开启或关闭静音
    toggleFoldSongsMenu();   //折叠或展开歌单列表
    setVolume();         //调节音量
    showCurrSongCont();  //展示当前歌曲内容
}
//展示当前歌曲内容
function showCurrSongCont(){
    var head,cont;
    var lis=$("#list").querySelectorAll("li");
    var songName="";
    //将播放中的歌曲名添加活跃样式
    function changeActiveLi(){
        for(var i=0;i<lis.length;i++){
            if(lis[i].dataset.id==currSongInfo.id){
                var activeLi=$("#list").querySelectorAll("li")[i];
                if($(".active-li")){
                    $(".active-li").innerHTML=$(".active-li").innerText;
                    $(".active-li").classList.remove("active-li");
                }
                activeLi.classList.add("active-li");
                activeLi.innerHTML="<marquee scrollamount='3'>"+activeLi.innerText+"</marquee>";
                songName=$("#list").querySelectorAll("li")[i].innerText.split(".")[0];
            }
        }
    }
    //展示歌曲的歌手、专辑基本信息
    function showSongBaseInfo(){
        if(Object.keys(head).length>0){
            for(key in head){
                if(key=="ti"){   //歌曲名
                    $("#name").innerText=head[key];
                }else if(key=="ar"){     //歌手
                    $("#singer span").innerText=head[key];
                }else if(key=="al"){   //专辑
                    $("#album span").innerText=head[key];
                }
            }
        }else{
            $("#name").innerText=songName;
            $("#singer span").innerText="未知";
            $("#album span").innerText="未知";
        }
    }
    //展示歌词文本内容
    function showSongText(){
        $("#song-text").innerHTML="";
        if(cont.length>0){
            for(var m=0;m<cont.length;m++){
                var li=document.createElement("li");
                li.innerText=cont[m][1];
                $("#song-text").appendChild(li);
            }
        }else{
            for(var n=0;n<9;n++){
                var li=document.createElement("li");
                if(n==4){
                    li.innerText="暂无歌词";
                    li.classList.add("active-text");
                }
                $("#song-text").appendChild(li);
            }
        }
    }
    getCurrSongText();
    head=currSongInfo.head;
    cont=currSongInfo.cont;
    changeActiveLi();
    showSongBaseInfo();
    showSongText();
}
//当当前音乐播放完毕时
function whenEnded(){
    if(currPlayWay=="single_cycle"){
        readyPlay();
    }else{       //order、random、list_cycle三种
        if((currPlayWay=="order" || currPlayWay=="random") && currSongNum==songs.length-1){
            pause();
        }else{
            goNext();
        }
    }
}
//展示播放进度：时间进度、歌词进度
function showPlayProgress() {
    audio.ontimeupdate=function() {
        var isPlayEnd=this.ended;
        showPlayTimeProgress();  //展示时间进度
        showSongTextProgress();  //展示歌词进度
        isPlayEnd && whenEnded();    //当当前音乐播放完毕时
    }
}
//改变播放状态
function changePlayState(){
    $("#pause-play-img").onclick=function(){
        isPlaying ? pause() : play();
    }
}
//改变播放进度
function changPlayProgress(){
    $("#play-range").oninput=function(){
        var cont=currSongInfo.cont;
        audio.currentTime=audio.duration*$("#play-range").value/100;
        for(var i=0;i<cont.length;i++){
            if(audio.currentTime>cont[i][0]){
                currSongTextNum=i;
            }
        }
        isPlaying && play();
    }
}
//移动播放器
function movePlayer(){
    $("#head").onmousedown=function(e){
        var dx=e.x;
        var dy=e.y;
        document.onmousemove=function(e){
            var left=$("#wrap").offsetLeft+(e.x-dx);
            var top=$("#wrap").offsetTop+(e.y-dy);
            $("#wrap").style.left=left+"px";
            $("#wrap").style.top=top+"px";
            dx=e.x;
            dy=e.y;
        }
        $("#head").onmouseup=function(){
            document.onmousemove=null;
        }
    }
}
//设置播放倍率
function setPlayRate(){
    $("#rate-sel").onchange=function(){
        audio.playbackRate=this.value;
    }
}
//背景图片轮播
function turnsPlayBgPicture(){
    var timer=null;
    var num=0;
    var delay=parseFloat(getComputedStyle($("#body-bg")).animationDuration)*1000;
    bgPictures.sort(function(){
        return 0.5-Math.random();
    })
    $("#body-bg").style.backgroundImage="url(imgs/"+bgPictures[num]+")";
    timer=setInterval(function(){
        num++;
        num>=bgPictures.length && (num=0);
        $("#body-bg").style.backgroundImage="url(imgs/"+bgPictures[num]+")";
    }, delay);
}


/**********主函数**********/
function main(){
    init();    //初始化音乐播放器基本功能
    movePlayer();      //移动播放器
    setPlayRate();       //设置播放倍率
    turnsPlayBgPicture();  //背景图片轮播
    changePlayState();    //改变播放状态：播放或暂停
    changPlayProgress();   //改变播放进度
    showPlayProgress();    //展示播放进度：时间进度、歌词进度
}
main();