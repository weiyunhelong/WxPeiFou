// pages/wxlogin/auth.js
var requesturl = getApp().globalData.DBrequesturl; //接口请求的地址
var WxRequest = require('../../utils/WxRequest.js'); //请求接口
var Tools = require('../../utils/util.js'); //提示

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '', //头像
    nickName: '', //昵称
    phone: '', //手机号码
    introduce: '', //个人简介
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onGotUserInfo(e) { //授权登录

    var that = this;
    console.log("授权用户信息:", e);

    //全局变量，用户信息
    getApp().globalData.userInfo = e.detail.userInfo;

    that.setData({
      avatarUrl: e.detail.userInfo.avatarUrl, //头像
      nickName: e.detail.userInfo.nickName, //昵称
    })
    Tools.ShowAlert(1,"授权成功");
  },
  getphonenumber(e) { //手机号码
    var that = this;
    console.log("手机号码信息:", e);

    var params = {
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv,
    };
    //TODO 后台解密获取手机号码
    that.setData({
      phone: '18817383618'
    })
    Tools.ShowAlert(1, "手机号获取成功");
  },
  getintroduce(e) { //个人简介
    var that = this;
    that.setData({
      introduce: e.detail.value
    })
  },
  postopt() { //点击完成
    var that = this;
    //参数部分
    var avatarUrl = that.data.avatarUrl, //头像
      nickName = that.data.nickName, //昵称
      phone = that.data.phone, //手机号码
      introduce = that.data.introduce; //个人简介

    if (that.data.nickName == "") {
      Tools.ShowAlert(0,"请点击授权登录");
    } else if (that.data.phone == "") {
      Tools.ShowAlert(0,"请点击手机号码");
    } else if (that.data.introduce == "") {
      Tools.ShowAlert(0,"请完善个人简介");
    } else {
      //TODO 提交数据，返回前一个页面
      getApp().globalData.hasUserInfo=true;
      wx.navigateBack({
        delta: 1
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;

    wx.hideShareMenu({})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    //记录分享
    wx.request({
      url: vrequesturl + getApp().globalData.store_id + '/' + getApp().globalData.scrm_id,
      data: {
        openid: getApp().globalData.openId,
        unionid: getApp().globalData.unionid,
        category: 'eshop',
        action: 'share',
        lable: '',
        value: ''
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("打标签接口");
        console.log(res);
      }
    })
  }
})