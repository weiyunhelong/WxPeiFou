// components/publish/index.js
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
    dataobj:{}
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    godetail(){//点击调整到详情
     var that=this;

     wx.navigateTo({
       url: '../dongtai/index?id=' + that.data.dataobj.id,
     })
    },
  }
})
