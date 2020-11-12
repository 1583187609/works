const app = getApp();
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    
  },
  data: {
    list: []
  },
  methods: {
    closeMusicList() {
      this.triggerEvent('toggleMusicList');
    },
    play(e){
      let id=e.currentTarget.dataset.id;
      this.closeMusicList();
      this.triggerEvent('alterSong',id)
    }
  },
  lifetimes: {
    created() {

    },
    ready(){
      this.setData({
        list: app.globalData.songsList
      })
    }
  },
  pageLifetimes: {
    show() {
    },
    hide() {
      console.log("页面被隐藏")
    },
    resize(size) {
      console.log("页面尺寸变化")
    }
  }
})