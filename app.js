//app.js
var WxRequest = require('./utils/WxRequest.js'); //请求接口
const Towxml = require('/towxml/main'); //富文本

App({
  towxml: new Towxml(),
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;

    that.GetWxOpenId();
  },
  //获取小程序的OpenId
  GetWxOpenId() {
    var that = this;
    return new Promise((resolve, reject) => {
      // 登录
      wx.login({
        success: res => {
        
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            //发送res.code 到后台
            wx.request({
              url: that.globalData.DBrequesturl + '/WxLogin',
              method: 'GET',
              data: {
                code: res.code
              },
              success: function(ress) {

                //成功返回数据后，将openid值存储到localStorage中
                that.globalData.openId = ress.data.openid;
                that.globalData.unionid = ress.data.unionid;
                that.globalData.Token=ress.data.session_key;
                that.globalData.hasUserInfo = ress.data.haduserinfo;
                
                var resArg = ress.data.openid;
                resolve(resArg)
              },
              fail() {
                reject();
              },
              complete: function() {
                wx.hideLoading();
              }
            })
          }
        }
      })
    })
  },
  GetSystemInfo() {
    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        let headerH = wx.getMenuButtonBoundingClientRect()

        that.globalData.statusBarHeight = res.statusBarHeight //状态栏高度
        that.globalData.titleBarHeight = (headerH.bottom + headerH.top) - (res.statusBarHeight * 2)

      }
    })
  },
  globalData: {
    hasUserInfo: false, //用户信息是否完整
    userInfo: null, //微信用户信息
    AddressApi: "https://api.map.baidu.com", //根据经纬度获取城市
    DBrequesturl: "https://www.peifou.net/api/DataApi", //API接口
    MideaUrl: "https://www.peifou.net", //服务器素材接口
    openId: "", //OPENID
    Token:'',//session_key
    unionid: '', //unionid
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],//自定义顶部状态栏使用
    statusBarHeight: 20, //自定义顶部状态栏使用
    titleBarHeight: 40, //自定义顶部状态栏高度
    userDesc: '', //个人简介  
    lat: 0,//定位经纬度 
    lng:0,//定位经纬度  
  }
})