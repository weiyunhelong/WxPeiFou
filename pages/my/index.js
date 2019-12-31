// pages/my/index.js
var requesturl = getApp().globalData.DBrequesturl; //接口请求的地址
var WxRequest = require('../../utils/WxRequest.js'); //请求接口
var Tools = require('../../utils/util.js'); //提示

Page({

  /**
   * 页面的初始数据
   */
  data: {   
    hasUserInfo: false,
    avatarUrl: '',
    nickName:'',
    introduce: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
  },
  gowxlogin() { //前往授权
    wx.navigateTo({
      url: '../wxlogin/auth',
    })
  },
  golist(e) { //我发布1；我参与2；我动态3
    var that = this;
    var type = parseInt(e.currentTarget.dataset.type);
    if (!that.data.hasUserInfo) {
      wx.navigateTo({
        url: '../wxlogin/auth',
      })
    } else if (type==1){
      wx.navigateTo({
        url: '../fabu/my'
      })
    } else if (type == 2) {
      wx.navigateTo({
        url: '../join/index'
      })
    } else if (type == 3) {
      wx.navigateTo({
        url: '../list/index'
      })
    }
  },
  gocomment() { //我的评论
    var that = this;
    if (!that.data.hasUserInfo) {
      wx.navigateTo({
        url: '../wxlogin/auth',
      })
    } else {
      wx.navigateTo({
        url: '../comment/index'
      })
    }
  },
  goabout() { //关于我们

    wx.navigateTo({
      url: '../about/index',
    })
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

    if (getApp().globalData.openId == '') {
      getApp().GetWxOpenId().then(res => {
        that.GetUserInfo();
        that.setData({
          hasUserInfo: getApp().globalData.hasUserInfo
        })
      })

    } else {
      that.GetUserInfo();
      that.setData({
        hasUserInfo: getApp().globalData.hasUserInfo
      })
    }
  },
  GetUserInfo(){//获取用户信息
    var that=this;

    var url = getApp().globalData.DBrequesturl +'/GetWxUserDetail';
    var params={
      openid:getApp().globalData.openId
    };
    WxRequest.GetRequest(url,params).then(res=>{
      console.log("用户信息:",res);

      that.setData({
        avatarUrl: res.data.AvatarUrl,
        nickName: res.data.NickName,
        introduce: res.data.Introduce,
      })
    }).catch(res=>{
      console.error("用户信息报错:", res);
    })
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

  }
})