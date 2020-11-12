const app=getApp();
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    
  },
  data: {
    info: {}
  },
  methods: {

  },
  lifetimes: {
    //在组件实例刚刚被创建时执行
      created() { },
    //在组件实例进入页面节点树时执行
      attached() { },
    //组件在视图层布局完成后执行
      ready() { 
        console.log(app.globalData.currSongInfo)
        this.setData({
          info: app.globalData.currSongInfo,
          list: app.globalData.songsList
        })
      },
    //在组件实例被移动到节点树另一个位置时执行
      moved() { },
  }
})
