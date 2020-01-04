// components/modal/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function(newVal, oldVal) {

        this.setData({
          isshowModal: newVal     
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isshowModal: false, //控制弹窗是否显示，默认不显示
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //阻断模态弹窗点击穿透
    preventTouchMove: function() {},
    //取消事件
    cancel: function(e) {
      //关闭模态弹窗
      this.setData({
        isshowModal: false
      })
      this.triggerEvent('showChange', false);
    },
    //确定事件
    confirm: function(e) {

      var that = this;
      //关闭模态弹窗
      that.setData({
        isshowModal: false
      })
      that.triggerEvent('showChange', false);
    }
  }
})