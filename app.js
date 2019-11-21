//app.js
var ga = require('./utils/ga.js');
var GoogleAnalytics = ga.GoogleAnalytics;
var HitBuilders = ga.HitBuilders;
var CampaignParams = ga.CampaignParams;//来源监测
var WxRequest = require('./utils/WxRequest.js'); //请求接口
const Towxml = require('/towxml/main'); //富文本

App({
  tracker: null,
  getTracker: function () {
    if (!this.tracker) {
      // 初始化GoogleAnalytics Tracker
      this.tracker = GoogleAnalytics.getInstance(this)
        .setAppName('PROJECNAME')
        .setAppVersion('2.8.3')
        .newTracker('UA-128026065-1'); //用你的 Tracking ID 代替
      //使用自己的合法域名做跟踪数据转发
      this.tracker.setTrackerServer("https://ga-proxy.asaplus.com.cn");
    }
    return this.tracker;
  },
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

    // 登录,获取openid
    that.GetWxOpenId();

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
              url: that.globalData.DBCrequesturl + '/auth/wechat/login',
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
    //场景值
    if (options && options.scene) {
      that.globalData.appscene = options.scene;
    } else {
      that.globalData.appscene = "";
    }

    //GA监测场景值
    var campaignUrl = CampaignParams.buildFromWeappScene(that.globalData.appscene).toUrl();
    that.globalData.campaignUrl = campaignUrl;

    //GA监测广告来源
    var urlpath = "https://example.com?";
    if (options.query.utm_source != undefined) {
      urlpath += "utm_campaign=" + options.query.utm_source + "&utm_content=" + options.query.utm_content
        + "&utm_medium=" + options.query.utm_medium + "&utm_source=" + options.query.utm_source;
    }
    that.globalData.advertcampaignUrl = urlpath;
  },  
  globalData: {
    userInfo: null, //微信用户信息
    Viewrequesturl: "https://data.asaplus.com.cn/api/v1/event/", //打标签接口
    DBCrequesturl: "https://uat-gateway.connectplus.asaplus.com.cn", //API接口
    openId: "", //OPENID
    Token: "", //session_key
    store_id: "54600421-438a-46e0-90db-4094e241d6ba", //项目id
    scrm_id: '', //SCRMid
    unionid: '', //unionid
    campaignUrl: "", //谷歌数据监测 
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],//自定义顶部状态栏使用
  }
})