const util=require("../../utils/util.js")
const app=getApp();
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    info:{
      type: Object
    }
  },
  data: {
    totalTime: "00:00"
  },
  methods:{
    toPlayPage(e){
      let type=app.globalData.currSongType;
      let id=e.currentTarget.dataset.id;
      let url=`../../pages/play/play?songId=${id}&type=${type}`;
      app.globalData.currSongId=id;
      app.globalData.currSongType=type;
      wx.navigateTo({ url: url }) 
    }
  },
  lifetimes: {
    ready() {
      this.setData({
        totalTime:util.formatSeconds(this.data.info.file_duration)
      })
    }
  }
})
