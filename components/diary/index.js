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
          id: newVal.id,
          cover: newVal.cover,
          title: newVal.title,
          date: newVal.date,
          avatarUrl: newVal.avatarUrl,
          nickName: newVal.nickName,
          zannum: newVal.zannum,
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    godetail() { //点击跳转到详情
      wx.navigateTo({
        url: '../../pages/riji/index?id=0',
      })
    },
  }
})