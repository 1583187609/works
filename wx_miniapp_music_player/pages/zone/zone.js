const app=getApp();
Page({
  data: {
    billboard: {},
    songsList: []
  },
  onLoad: function (options) {
    let that=this;
    let {type,title}=options;
    let {songsList,startInd,pageSize}=app.globalData;
    app.globalData.currSongType=type;
    app.getSongsList(type,startInd,pageSize,function(){
      that.setData({
        billboard: app.globalData.billboard,
        songsList: app.globalData.songsList
      })
    });
    wx.setNavigationBarTitle({
      title: title+"专区" 
    })
  },
  onReady: function () {
    
  },
  onShow: function () {
  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  //上拉触底时执行
  onReachBottom: function () {
    console.log("上拉中")
  },
  onShareAppMessage: function () {

  }
})