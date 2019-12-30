// pages/user/index.js
var requesturl = getApp().globalData.DBrequesturl; //接口请求的地址
var WxRequest = require('../../utils/WxRequest.js'); //请求接口
var Tools = require('../../utils/util.js'); //提示

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: 0, //用户id
    datas: [],
    pageindex:1,
    pagesize:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    wx.setNavigationBarTitle({
      title: '个人详情',
    })

    that.setData({
      userId: options.userId
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
    //获取用户信息
    that.GetUserInfo();
    //获取用户的发布
    that.GetUserDynamic();
  },
  //获取用户信息
  GetUserInfo(){
    var that=this;

    var url = getApp().globalData.DBrequesturl + '/GetWxUserDetail';
    var params = {
      openid: that.data.userId
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.log("用户信息:", res);

      that.setData({
        wxuserobj: res.data
      })
    }).catch(res => {
      console.error("用户信息报错:", res);
    })
  },
  GetUserDynamic() {//获取用户的发布
    var that = this;
    //参数部分
    var userId=that.data.userId, 
      pageindex = that.data.pageindex,
      pagesize = that.data.pagesize;

    var that = this;

    var url = getApp().globalData.DBrequesturl + '/GetWxUserDynamic';
    var params = {
      openid: that.data.userId,
      page: pageindex,
      rows: pagesize
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.log("发布陪伴列表:", res);
      if(res.data!="-1"){
        if (that.data.pageindex == 1) {
          that.setData({
            datas: res.data
          })
        } else {
          var datalist = that.data.datas;
          datalist.concat(res.data);
          that.setData({
            datas: datalist.data
          })
        }
      }      
      
    }).catch(res => {
      console.error("发布陪伴列表报错:", res);
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
    var that=this;

    that.setData({
      pageindex:1
    })

    that.GetUserDynamic();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;

    that.setData({
      pageindex: that.data.pageindex+1
    })

    that.GetUserDynamic();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})