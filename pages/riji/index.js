// pages/dongtai/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,//动态id
    statusBarHeight: getApp().globalData.statusBarHeight,//自定义顶部状态栏使用
    titleBarHeight: getApp().globalData.titleBarHeight,//自定义顶部状态栏高度
    comments:[1,2,3,4],
    pageindex:1,
    pagesize:10,
    imgh:0,
    isfocus:false,//是否聚焦评论
    comment:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getcoverh(e){//获取图片高度
    var that=this;

    that.setData({
      imgh: e.detail.height
    })
  },
  backpreopt(){//返回上个页面
    wx.navigateBack({
      delta: 1,
    })
  },
  focusopt(e){//是否聚焦
    var that=this;
    that.setData({
      isfocus: true
    })
  },
  bluropt(){//离开
    var that = this;
    that.setData({
      isfocus: false
    })
  },
  getcomment(e){//获取输入内容
    var that = this;
    that.setData({
      comment: e.detail.value
    })
  },
  postcommentopt(){//点击发送按钮
    var that=this;

    var params={
      dynamicid:that.data.id,
      userid:getApp().globalData.userid,
      comment: that.data.comment
    };

    //TODO 发送成功
    that.setData({
      isfocus: false,
      comment:''
    })
  }
  ,
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})