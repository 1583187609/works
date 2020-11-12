const util=require("./utils/util.js");
App({
  globalData: {
    hasClick: false,     //防止用户极快速连续点击按钮
    userInfo: null,
    playTypeId: 1,      //播放类型：1单曲循环；2顺序循环；3随机循环
    playStatusId: 1,     //播放状态：1暂停；2播放中
    listStatus: 1,     //播放页面的音乐列表状态：1隐藏；2显示
    startInd: 0,   //分页查询的起始位置
    pageSize: 20,    //分页查询，每页多少条
    audioSrc: "",
    audioCtx: {},

    currPlayTabInd: 2,    //播放页面的tab 下标：1专辑；2海报 3歌词
    billboard: {},
    songsList: [],
    randSongsList: [],
    currSongId: 0,
    currSongInfo: {},
    currSongType: 2,
    lyricTime: [],   //只含时间的歌词
    lyricText: [],  //只含文本的歌词
    lyricInd: 0,   //当前播放歌词的下标
    currSecsTime: 0,
    // currMinTime: "00:00",
    totalSecsTime: 0,
    // songsByType:{},

    
  },
  // getSongById(songId,cb) {
  //   let that = this;
  //   console.log("app.js  getSongById 执行了")
  //   wx.request({
  //     url: `http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=${songId}`,
  //     success: function (res) {
  //       let songInfo = res.data.songinfo;
  //       let bitrate = res.data.bitrate;
  //       console.log(res.data)
  //       // let totalMinTime=util.formatSeconds(bitrate.file_duration);
  //       that.getLyric(songInfo.lrclink);
  //       app.globalData.audioSrc = bitrate.file_link;
  //       app.globalData.audioCtx = wx.createAudioContext('audio', that);
  //       app.globalData.currSongInfo= songInfo;
  //       cb && cb();
  //       // app.globalData.totalMinTime=totalMinTime
  //       // that.setData({
  //       //   info: songInfo,
  //       //   totalMinTime: minTime,
  //       // })
  //     },
  //     fail: function (err) {
  //       console.log(err)
  //     }
  //   })
  // },
  // async getLyric(url) {
  //   // let that = this;
  //   await wx.request({
  //     url: url,
  //     success: function (res) {
  //       let lyric=res.data.toString().split("\n");
  //       app.globalData.currSongLyric=lyric;
  //       // that.setData({
  //       //   lyric: lyric
  //       // })
  //     },
  //     fail: function (err) {
  //       console.log(err)
  //     }
  //   })
  // },
  continuePlay() {
    // let {
    //   currMinTime
    // } = this.globalData;
    // let secs = util.getSecsByMinStr(this.globalData);
    this.globalData.audioCtx.seek(this.globalData.currSecsTime)
    this.globalData.audioCtx.play();
  },
  //获取歌词
  async getLyric(url) {
    let that = this;
    await wx.request({
      url: url,
      success: function (res) {
        let reg = /\d{2}:\d{2}.\d{2}/;
        let lyric = res.data.toString().split("\n");
        lyric.forEach(item => {
          let match = item.match(reg);
          if (match) {
            let arr = item.split("]");
            that.globalData.lyricTime.push(arr[0].replace("[", ""));
            that.globalData.lyricText.push(arr[1]);
          }
        })
        that.globalData.lyricTime;
        that.globalData.lyricText
        // that.setData({
        //   lyricTime: that.globalData.lyricTime,
        //   lyricText: that.globalData.lyricText
        // })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  //根据id获取歌曲信息
  getSongById(songId, cb) {
    let that = this;
    wx.request({
      url: `http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=${songId}`,
      success: function (res) {
        let songInfo = res.data.songinfo;
        let bitrate = res.data.bitrate;
        // let minTime = util.formatSeconds(bitrate.file_duration);
        that.getLyric(songInfo.lrclink);
        that.globalData.audioSrc = bitrate.file_link;
        // that.globalData.audioCtx = wx.createAudioContext('audio', that);
        
        that.globalData.currSongInfo = songInfo;
        that.globalData.totalSecsTime = bitrate.file_duration;
        cb && cb();
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  getSongsList(type,offset=0,size=10,cb){
    let that=this;
    wx.request({
      url: `http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.9.0.0&channel=ppzs&operator=0&method=baidu.ting.billboard.billList&format=json&type=${type}&offset=${offset}&size=${size}fields=song_id%2Ctitle%2Cauthor%2Calbum_title%2Cpic_big%2Cpic_small%2Chavehigh%2Call_rate%2Ccharge%2Chas_mv_mobile%2Clearn%2Csong_source%2Ckorean_bb_song`,
      success: function (res) {
        console.log(res.data.song_list)
        let songsList=res.data.song_list;
        that.globalData.billboard=res.data.billboard;
        that.globalData.songsList=songsList;
        that.globalData.randSongsList=util.disruptComplexArr(songsList)
        that.globalData.currSongType= type;
        cb && cb();
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },

  // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function(options) {

  },
  // 当小程序从前台进入后台，会触发 onHide
  onHide: function() {

  },
  // 当小程序发生脚本错误，或者 API 调用失败时，会触发 onError 并带上错误信息
  onError: function(msg) {

  },
  // 此处可以使其他任意字段：可以添加任意的函数或数据到 Object 参数中，在App实例回调用 this 可以访问
})