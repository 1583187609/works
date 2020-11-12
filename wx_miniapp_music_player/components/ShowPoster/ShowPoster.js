const {
  listStatus
} = require('../../utils/dict.js');
const util = require('../../utils/util.js');
const app = getApp();
Component({
  options: {
    addGlobalClass: true
  },
  properties: {},
  data: {
    sliderVal: 0,
    audioSrc: "",
    songsList: [],
    randSongsList: [],
    currSong: {},
    currMinTime: "",
    totalSecsTime: "",
    totalMinTime: "",
    lyricTime: [],
    lyricText: [],
    lyricInd: 0,
    playTypeId: 1,
    playStatusId: 1,
    musicListStatus: 1,
  },
  methods: {
    //拖动滑块改变播放时刻
    changePlayTime(e) {
      let currSec = Math.floor(this.data.totalSecsTime * (e.detail.value / 100));
      let currMinTime = util.formatSeconds(currSec);
      this.setData({
        currMinTime: currMinTime
      });
      app.globalData.audioCtx.seek(currSec)
    },
    //切换播放类型：1单曲循环；2顺序循环；3随机循环
    alterPlayType() {
      let currId = util.alterStatusId("playTypeId", this, 3);
      app.globalData.playTypeId = currId;
      let type = util.getDictText("playType", currId);
      wx.showToast({
        title: `已切换到${type}播放状态`,
        icon: 'none',
        duration: 2000
      })
    },
    //播放相邻歌曲（上一曲或下一曲)
    playAdjoinSong(e) { //type:prev 、next
      let that=this;
      let {pageSize,playTypeId,songsList,randSongsList,currSongId,startInd,currSongType}=app.globalData;
      let num = e.currentTarget ? parseInt(e.currentTarget.dataset.num) : parseInt(e);
      let lists = playTypeId == 3 ? randSongsList : songsList;
      let currId = currSongId;
      let currInd = util.getIndex(lists, 'song_id', currId);
      console.log(currInd)
      let newInd = currInd + num;
      // if(newInd<0 && startInd==0){
      //   wx.showToast({
      //     title: '已经是第一首了！',
      //     icon: "none"
      //   })
      // }else if(newInd >= pageSize){
      //   app.getSongsList(currSongType,startInd+pageSize,pageSize,function(){
      //     let {songsList,randSongsList}=app.globalData;
      //     that.setData({
      //       songsList,
      //       randSongsList,
      //     })
      //   });
      // }
      newInd < 0 && (newInd = pageSize - 1)
      newInd >= pageSize && (newInd = 0);
      let newSongId = lists[newInd].song_id;
      app.globalData.currSongId = newSongId;
      app.getSongById(newSongId, function () {
        that.setData({
          currSong: app.globalData.currSongInfo
        })
        app.globalData.playStatusId == 2 && app.continuePlay();
      });
    },
    //切换播放状态：1暂停；2播放
    alterPlayStatus() {
      let currId = util.alterStatusId("playStatusId", this, 2);
      app.globalData.playStatusId = currId;
      currId == 1 && app.globalData.audioCtx.pause();
      currId == 2 && app.globalData.audioCtx.play();
    },
    //音乐列表：1隐藏；2显示
    toggleMusicList() {
      this.setData({
        musicListStatus: this.data.musicListStatus == 1 ? 2 : 1
      })
    },
    //从音乐列表中选择播放指定歌曲
    alterSong(opt) {
      let that=this;
      let songId = opt.detail;
      app.getSongById(songId, function () {
        that.setData({
          currSong: app.globalData.currSongInfo
        })
        app.globalData.playStatusId == 2 && app.continuePlay();
      });
    },
    //显示播放错误信息
    showPlayError(e) {
      console.log(e.detail.errMsg)
    },
    //更新播放进度时间
    updateCurrTime(e) {
      let {
        currentTime,
        duration
      } = e.detail;

      let {
        lyricTime,
        lyricInd
      } = this.data;
      let length = lyricTime.length
      if (lyricInd < length - 1) {
        let nextTimeArr = lyricTime[lyricInd + 1].split(":");
        let nm = parseInt(nextTimeArr[0]);
        let ns = parseFloat(nextTimeArr[1]);
        let nextSecs = nm * 60 + ns;
        if (currentTime >= nextSecs) {
          app.globalData.lyricInd = lyricInd + 1;
          this.setData({
            lyricInd: lyricInd + 1,
            scrollTop: (lyricInd + 1) * 50 * (-1)
          })
        }
      } else {
        app.globalData.lyricInd = length - 1;
        this.setData({
          lyricInd: length - 1
        })
      }
      this.setData({
        currMinTime: util.formatSeconds(currentTime),
        sliderVal: currentTime / duration * 100
      })

    },
    ended() {
      if (app.globalData.playTypeId != 1) {
        this.playAdjoinSong(1);
      }
    },
  },
  /*组件生命周期*/
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {},
    //在组件实例进入页面节点树时执行
    attached() {
      // app.globalData.playStatusId==2 && app.continuePlay();
      // let {currSongInfo,lyricText}=app.globalData
      // this.setData({
      //   currSong: currSongInfo,
      //   lyricText: lyricText
      // })
    },
    //在组件在视图层布局完成后执行
    ready() {
      let that = this;
      app.globalData.audioCtx = wx.createAudioContext('audio', that);
      let delay = setInterval(function () {   //出现问题：这里执行了，他的父组件play的请求数据才拿到，所以采用这种方法
        if (app.globalData.audioSrc && app.globalData.lyricText.length>0) {
          let {
            audioSrc,
            lyricInd,
            songsList,
            randSongsList,
            lyricText,
            lyricTime,
            currSongInfo,
            totalSecsTime,
            currSecsTime,
            playTypeId,
            playStatusId,
            musicListStatus
          } = app.globalData;
          that.setData({
            audioSrc,
            lyricInd,
            songsList,
            randSongsList,
            lyricText,
            lyricTime,
            currSong: app.globalData.currSongInfo,
            totalSecsTime,
            totalMinTime: util.formatSeconds(totalSecsTime),
            currMinTime: util.formatSeconds(currSecsTime),
            playTypeId,
            playStatusId,
            musicListStatus,
          })
          clearInterval(delay);
        }
      }, 0)
      setTimeout(function(){
        !app.globalData.audioSrc && clearInterval(delay);
      },5000)
    },
    moved() {

    },
    //在组件离开前执行
    detached() {
      app.globalData.currMinTime = this.data.currMinTime;
    },
    pageLifetimes: {
      //页面被展示
      onload: function () { 
        console.log("在showposter中显示了")
      },
      // 页面被隐藏
      hide: function () { },
      // 页面尺寸变化
      resize: function (size) { }
    }

  }
})