// components/dynamic/index.js
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
          id: newVal.id,
          avatarUrl: newVal.avatarUrl,
          title: newVal.title,
          price: newVal.price,
          address: newVal.address,
          distance: newVal.distance,
          date: newVal.date,
          starttime: newVal.starttime,
          endtime: newVal.endtime,
          type: newVal.type,
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
    avatarUrl: '',
    title: '',
    price: 0,
    address: '',
    distance: '',
    date: '',
    starttime: '',
    endtime: '',
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
          url: '../../pages/dongtai/index?id=' + that.data.id + '&money=' + that.data.price
        })
      }
    },
  }
})