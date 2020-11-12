const app=getApp();
Page({
  data: {
    currTabId: 1,
    list: [],
  },
  changeTabId(e){
    this.setData({
      currTabId: e.currentTarget.dataset.ind
    })
  },
  onLoad: function (options) {
    
  },
  onReady: function () {
    let that=this;
    let {currSongType,startInd,pageSize}=app.globalData;
    app.getSongsList(currSongType, startInd, pageSize,function(){
      console.log(app.globalData.songsList)
      that.setData({
        list: app.globalData.songsList
      })
    });
  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})