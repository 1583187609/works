const util = require('../../utils/util');
const app = getApp();
Page({
  data: {
    currTabInd: 0,
    // type: 0,
    // songId: 0,
  },
  //显示播放错误
  showPlayError() {
    wx.showToast({
      title: '播放失败！',
      icon: 'none',
      duration: 2000
    })
  },
  changeTabInd(e) {
    let ind = e.target.dataset.ind;
    app.globalData.currPlayTabInd = ind;
    this.setData({
      currTabInd: ind
    })
  },
  
  
  onLoad: function (options) {
    let {
      songId,
      type
    } = options;
    app.globalData.currSongType = type;
    app.globalData.currSongId = songId;
    this.setData({
      currTabInd: app.globalData.currPlayTabInd
    })
  },
  onReady: function () {
    let {
      startInd,
      pageSize,
      currSongId,
      currSongType,
      playStatusId
    } = app.globalData;
    app.getSongById(currSongId, function () { //currSongId=242078437
      playStatusId == 2 && app.continuePlay();
    });
    app.getSongsList(currSongType, startInd, pageSize);
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