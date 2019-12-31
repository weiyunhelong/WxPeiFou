// components/comments/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {

        var that = this;
        //赋值
        that.setData({
          dataobj: newVal
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    dataobj: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    preimgopt(e){
      var that=this;
      var swipers = that.data.dataobj.swipers;
      swipers.pop();
      wx.previewImage({
        urls:swipers,
        current:e.currentTarget.dataset.index
      })
    },
  }
})
