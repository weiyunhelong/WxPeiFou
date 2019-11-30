// components/morebtn/index.js
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
          btntype: newVal
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    btntype: 1,
    hasUserInfo: getApp().globalData.hasUserInfo,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gosearch() { //点击显示更多
      var that = this;
      if (!that.data.hasUserInfo) {
        wx.navigateTo({
          url: '../wxlogin/auth',
        })
      } else {
        wx.navigateTo({
          url: '../../pages/search/index?type=' + that.data.btntype,
        })
      }
    },
  }
})