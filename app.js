//app.js
var WxRequest = require('./utils/WxRequest.js'); //请求接口
const Towxml = require('/towxml/main'); //富文本

App({ 
  towxml: new Towxml(), 
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;

    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })

   

  },
  //获取小程序的OpenId
  GetWxOpenId() {
    var that = this;
    return new Promise((resolve, reject) => {
      // 登录
      wx.login({
        success: res => {
          WxRequest.ConsoleLog("CODE的值:" + res.code);
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            //发送res.code 到后台
            wx.request({
              url: that.globalData.DBrequesturl + '/auth/wechat/login',
              method: 'POST',
              data: {
                store_id: that.globalData.store_id,
                code: res.code
              },
              success: function (ress) {

                //成功返回数据后，将openid值存储到localStorage中
                that.globalData.openId = ress.data.openid;
                that.globalData.Token = ress.data.session_key;
                that.globalData.unionid = ress.data.unionid;

                var resArg = ress.data.openid;
                resolve(resArg)
              },
              fail() {
                reject();
              },
              complete: function () {
                wx.hideLoading();
              }
            })
          }
        }
      })
    })
  },
  //页面初始化
  onShow: function (options) {
    var that = this;
    
    // 登录,获取openid
    that.GetWxOpenId();
  },  
  globalData: {
    userInfo: null, //微信用户信息
    DBrequesturl: "https://uat-gateway.connectplus.asaplus.com.cn", //API接口
    openId: "", //OPENID
    Token: "", //session_key
    unionid: '', //unionid
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],//自定义顶部状态栏使用
  }
})