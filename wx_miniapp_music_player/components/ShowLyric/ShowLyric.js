const app=getApp();
Component({
  options: {
    addGlobalClass: true
  },
  properties: {

  },
  data: {
    currSongInfo: {
      title: "未知歌曲",
      author: "未知歌手"
    },
    lyricTime: "",
    lyricText: "",
    lyricInd: 0,
  },
  methods: {

  },
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {},
    //在组件实例进入页面节点树时执行
    attached() {
      let {
        lyricTime,
        lyricText,
        lyricInd,
        currSongInfo
      } = app.globalData
      this.setData({
        lyricTime,
        lyricText,
        lyricInd,
        currSongInfo
      })
    },
    //组件在视图层布局完成后执行
    ready() {},
    //在组件实例被移动到节点树另一个位置时执行
    moved() {},
    //在组件实例被从页面节点树移除时执行
    //不显示此组件前
    detached() {},
    //每当组件方法抛出错误时执行
    error() {}
  }
})