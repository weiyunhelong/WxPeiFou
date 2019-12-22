// components/dynamic/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function(newVal, oldVal) {
        console.log("陪伴参数", newVal);
        var that = this;
        //赋值
        that.setData({
          id: newVal.dynamic.ID,
          dataobj:newVal,
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
    dataobj:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    godetail() { //点击跳转到动态详情
      var that = this;
      if (!that.data.hasUserInfo) {
        wx.navigateTo({
          url: '../wxlogin/auth',
        })
      } else {
        wx.navigateTo({
          url: '../../pages/dongtai/index?id=' + that.data.id + '&money=' + that.data.dataobj.dynamic.Money
        })
      }
    },
  }
})