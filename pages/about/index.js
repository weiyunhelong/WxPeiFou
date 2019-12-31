// pages/about/index.js
var WxRequest = require('../../utils/WxRequest.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    MideaUrl: getApp().globalData.MideaUrl,
    appinfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    //获取配置信息
    that.GetAppSetInfo();
  },
  GetAppSetInfo() {//获取配置信息
    var that=this;    

    var url = getApp().globalData.DBrequesturl + '/GetSetInfo';
    var params = {
    };
    //TODO 后台解密获取手机号码
    WxRequest.PostRequest(url, params).then(res => {
      console.log("获取系统信息成功:", res);
     
      that.setData({
        appinfo:res.data
      })

    }).catch(res => {
      Tools.ShowAlert(2, "获取系统信息失败");
    })
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