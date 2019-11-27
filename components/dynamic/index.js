// components/dynamic/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    godetail(){//点击跳转到动态详情
      wx.navigateTo({
        url: '../../pages/dongtai/index?id=0',
      })
    },
  }
})
