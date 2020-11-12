Component({
  options: {
    addGlobalClass: true
  },
  properties: {

  },
  data: {
    isDisabled: true
  },
  methods: {
    search(){
      wx.showToast({
        title: '暂未开通搜索功能，敬请期待！',
        icon: "none"
      })
    },
    toSearchPage(){
      let pageName=getCurrentPages().pop().route.split("/").pop();
      console.log(pageName)
      if(pageName.toLowerCase()!="search"){
        this.setData({
          isDisabled: true
        })
        wx.navigateTo({ url: '../../pages/search/search' });
      }else{
        this.setData({
          isDisabled: false
        })
      }
    }
  }
})
