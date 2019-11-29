// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: getApp().globalData.hasUserInfo,
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
    if (!that.data.hasUserInfo) {
      wx.navigateTo({
        url: '../wxlogin/auth',
      })
    } else {
      wx.navigateTo({
        url: '../list/index?type=' + e.currentTarget.dataset.type,
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