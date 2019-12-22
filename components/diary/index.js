// components/diary/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function(newVal, oldVal) {

        var that = this;
        //赋值
        that.setData({
          id: newVal.Id,
          cover: newVal.cover,
          title: newVal.title,
          date: newVal.date,
          avatarUrl: newVal.avatarUrl,
          nickName: newVal.nickName,
          zannum: newVal.zannum,
          hasUserInfo: getApp().globalData.hasUserInfo,
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    hasUserInfo: false,
    id: 0,
    cover: '',
    title: '',
    date: '',
    avatarUrl: '',
    nickName: '',
    zannum: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    godetail() { //点击跳转到详情
      var that = this
      if (!that.data.hasUserInfo) {
        wx.navigateTo({
          url: '../wxlogin/auth',
        })
      } else {
        wx.navigateTo({
          url: '../../pages/riji/index?id='+that.data.id,
        })
      }
    },
  }
})