//index.js
//获取应用实例
// this.setData({a : 2})
// wx.navigateTo({ url: 'pageD' }) 
// wx.redirectTo({ url: 'pageE' }) 
// wx.request({
//   url: 'test.php',
//   data: {},
//   header: { 'content-type': 'application/json' },
//   success: function(res) {
//    // 收到https服务成功后返回
//    console.log(res.data)
//   },
//   fail: function() {
//    // 发生网络错误等情况触发
//   },
//   complete: function() {
//    // 成功或者失败后触发
//   }
//   })
// hover-class="hover"
/* <button loading="{{loading}}" bindtap="tap">操作</button> */
// wx.showToast({ // 显示Toast
//   title: '已发送',
//   icon: 'success',
//   duration: 1500
// })
// // wx.hideToast() // 隐藏Toast
// wx.showModal({
//   title: '标题',
//   content: '告知当前状态，信息和解决方法',
//   confirmText: '主操作',
//   cancelText: '次要操作',
//   success: function(res) {
//     if (res.confirm) {
//       console.log('用户点击主操作')
//     } else if (res.cancel) {
//       console.log('用户点击次要操作')
//     }
//   }
// })
// wx.stopPullDownRefresh() // 可以停止当前页面的下拉刷新。
// const util =require("../../utils/util.js");
// const {handleColor}=util;

const app = getApp()


Page({
  data: {
    lists:[],
  },
  getLists() {
    let that=this;
    wx.request({
      url: 'https://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.9.0.0&channel=ppzs&operator=0&method=baidu.ting.billboard.billCategory&format=json&kflag=2',
      success: function (res) {
        console.log(res.data.content)
        that.setData({
          lists: res.data.content
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  toZonePage(e){
    let {type,title}=e.target.dataset
    let url=`../../pages/zone/zone?type=${type}&title=${title}`
    wx.navigateTo({
      url: url,
    })
  },
  onLoad: function (options) {
    this.getLists()
  },
  // 监听页面初次渲染完成
  onReady: function () {
    
  },
  // 监听页面显示，触发事件早于onReady
  onShow: function () {},
  // 监听页面隐藏
  onHide: function () {},
  // 监听页面卸载
  onUnload: function () {},
  // 监听用户下拉动作
  onPullDownRefresh: function () {},
  // 页面上拉触底事件的处理函数
  onReachBottom: function () {},
  // 用户点击右上角转发
  onShareAppMessage: function () {},
  // 页面滚动触发事件的处理函数
  onPageScroll: function () {},
  // 其他任意的函数或数据，在Page实例的其他函数中用 this 可以访问
  
})