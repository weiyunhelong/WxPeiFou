// pages/wxlogin/auth.js
var requesturl = getApp().globalData.DBCrequesturl; //接口请求的地址
var WxRequest = require('../../utils/WxRequest.js'); //请求接口
var DAtool = require('../../utils/DA.js'); //统计接口


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (getApp().globalData.campaignUrl == undefined) {
      var t = getApp().getTracker();
      // 解析options中的 utm_xxxxxx 参数，生成一个广告连接 URL
      var campaignUrl = CampaignParams.parseFromPageOptions(options).toUrl();
      //console.log("链接地址:" + campaignUrl);
      getApp().globalData.campaignUrl = campaignUrl;
    } else {
      var campaignUrl = getApp().globalData.campaignUrl;
      //console.log("链接地址:" + campaignUrl);
      getApp().globalData.campaignUrl = campaignUrl;
    }
  },
  //获取用户授权
  onGotUserInfo: function(e) {
    var that = this;
    console.log("授权用户信息:");
    console.log(e);
    wx.showLoading({
      title: '登录中...',
      mask:true
    })

    //全局变量，用户信息
    getApp().globalData.userInfo = e.detail.userInfo;

    //参数部分
    var url = requesturl + '/auth/wechat/decrypt',
      params = {
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
        session_key: getApp().globalData.Token,
        store_id: getApp().globalData.store_id
      };

    //请求接口，获取用户UNIONID的信息
    WxRequest.PostRequest(url, params).then((res) => {
      WxRequest.ConsoleLog("获取用户UNIONID的信息:");
      WxRequest.ConsoleLog(res);
      if (res.data.unionId == "" || res.data.unionId == null || res.data.unionId == undefined || res.data.unionId =="0") {
        wx.showModal({
          title: '提示',
          content: '授权失败',
          showCancel: false
        })
      } else {
        getApp().globalData.unionid = res.data.unionId;
        //更新微信用户信息
        that.UpdateWxUserInfo();
        //打标签
        that.InitView();
      }

      //结束标识符
      wx.hideLoading();
    }).catch((errMsg) => {
      WxRequest.ConsoleLog("获取用户UNIONID的信息error:");
      WxRequest.ConsoleLog(errMsg);
      wx.hideLoading();
    });
  },
  //更新微信用户信息
  UpdateWxUserInfo: function() {
    var that = this;

    var that = this;
    //参数部分
    var url = requesturl + '/cplus/wechat/user',
      params = {
        userInfo: JSON.stringify(getApp().globalData.userInfo),
        openid: getApp().globalData.openId,
        store_id: getApp().globalData.store_id,
        union_id: getApp().globalData.unionid
      };

    //请求接口，更新微信用户信息
    WxRequest.PostRequest(url, params).then((res) => {
      WxRequest.ConsoleLog("更新微信用户信息:");
      WxRequest.ConsoleLog(res);

    }).catch((errMsg) => {
      WxRequest.ConsoleLog("更新微信用户信息error:");
      WxRequest.ConsoleLog(errMsg);
    });
  },
  //打标签
  InitView: function() {
    //打开小程序打标签
    var that = this;
    WxRequest.AddTag('eshop', 'open', 'miniprogram', 'Eshop精品商城').then((res) => {
      WxRequest.ConsoleLog("打标签成功");
      //跳转到首页
      wx.reLaunch({
        url: '../home/index',
      })
    }).catch((errMsg) => {
      WxRequest.ConsoleLog("打标签失败");
      //跳转到首页
      wx.reLaunch({
        url: '../home/index',
      })
    });
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