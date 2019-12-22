// pages/home/index.js
var utils = require('../../utils/time.js');
var WxRequest = require('../../utils/WxRequest.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: getApp().globalData.hasUserInfo,
    searchparams: {
      searchkey: '',
      date: '',
      starttime: '',
      endtime: "",
      today: "",
      city: '上海市',
      searchtype: 0
    }, //搜索的参数
    swipers: [], //轮播图数据
    looks: [], //寻找陪伴的数据
    provides: [], //提供陪伴的数据
    diarys: [], //日记列表
    MideaUrl: getApp().globalData.MideaUrl, //图片资源地址
    imgh: 0, //自适应图片的高度
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    showData: false, //数据加载完成
    lat: 0,
    lng: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    var searchparams = {
      searchkey: "",
      date: utils.getMorenDate(),
      starttime: utils.getNowTime(),
      endtime: utils.getNowNextTime(),
      today: utils.getNowDate(),
      city: '上海市',
      searchtype: 0
    };
    that.setData({
      searchparams: searchparams
    })

    wx.showLoading({
      title: '数据加载中...',
      mask: true
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

    if (getApp().globalData.openId == "") {
      getApp().GetWxOpenId().then(resArg => {
        that.setData({
          hasUserInfo: getApp().globalData.hasUserInfo,
        })
        that.GetAppSet();
        that.GetLooks();
        //that.GetProvides();
        that.GetDiarys();

        setTimeout(function() {
          that.setData({
            showData: true
          })
          wx.hideLoading();
        }, 2000)
      });
    } else {
      that.setData({
        hasUserInfo: getApp().globalData.hasUserInfo,
      })
      that.GetAppSet();
      that.GetLooks();
      //that.GetProvides();
      that.GetDiarys();

      setTimeout(function() {
        that.setData({
          showData: true
        })
        wx.hideLoading();
      }, 2000)
    }
    //定位获取经纬度
    if (getApp().globalData.lat == 0 && getApp().globalData.lng == 0) {
      that.AuthPostion();
    }
  },
  AuthPostion() { //定位获取经纬度
    var that = this;

    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
       
        getApp().globalData.lat = res.latitude;
        getApp().globalData.lng = res.longitude;

      },
      fail: function() {
        wx.showModal({
          title: '温馨提示',
          content: '请授权获取到您的您当前的位置',
          showCancel: false,
          success(res) {
            if (res.confirm) {

              wx.openSetting({
                success: function(data) {
                  if (data.authSetting["scope.userLocation"] === true) {
                    that.AuthPostion();
                  }
                }
              })
            }
          }
        })
      },
    })
  },
  GetAppSet() { //获取轮播图的值
    var that = this;
    //TODO 获取数据
    var url = getApp().globalData.DBrequesturl + '/GetSetInfo';
    WxRequest.PostRequest(url, {}).then(res => {

      var Swipers = res.data.Swipers.split(',');
      that.setData({
        swipers: Swipers
      })
    }).catch(res => {
      console.error("获取应用信息失败", res);
    })
  },
  getImgh(e) { //自适应图片的高度
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      ratio = imgwidth / imgheight; //宽高比  

    //计算的高度值  
    var viewHeight = 750 / ratio;
    this.setData({
      imgh: viewHeight
    })

  },
  GetLooks() { //获取寻找陪伴
    var that = this;

    //TODO 获取数据
    var url = getApp().globalData.DBrequesturl + '/GetDynamicList';
    var params = {
      searchkey: that.data.searchparams.searchkey,
      city: that.data.searchparams.city,
      startdt: that.data.searchparams.date +" "+ that.data.searchparams.starttime,
      enddt: that.data.searchparams.date + " "+ that.data.searchparams.endtime,
      page: 1,
      rows: 5,
      type: 1,
      lat: getApp().globalData.lat,
      lng: getApp().globalData.lng,
    };
    WxRequest.GetRequest(url, params).then(res => {
     
      that.setData({
        looks:res.data
      })

    }).catch(res => {
      console.error("获取寻找陪伴失败", res);
    })

  },
  GetProvides() { //获取提供陪伴
    var that = this;

    //TODO 获取数据
    var url = getApp().globalData.DBrequesturl + '/GetDynamicList';
    var params = {
      searchkey: that.data.searchparams.searchkey,
      city: that.data.searchparams.city,
      startdt: that.data.searchparams.date + " " + that.data.searchparams.starttime,
      enddt: that.data.searchparams.date + " " + that.data.searchparams.endtime,
      page: 1,
      rows: 5,
      type: 2,
      lat: getApp().globalData.lat,
      lng: getApp().globalData.lng,
    };
    WxRequest.GetRequest(url, params).then(res => {

      that.setData({
        provides: res.data
      })

    }).catch(res => {
      console.error("获取提供陪伴失败", res);
    })
  },
  GetDiarys() { //获取日记
    var that = this;

    //TODO 获取数据
    var url = getApp().globalData.DBrequesturl + '/GetDiaryList';
    var params = {
      searchkey: that.data.searchparams.searchkey,
      city: that.data.searchparams.city,
      startdt: that.data.searchparams.date + " " + that.data.searchparams.starttime,
      enddt: that.data.searchparams.date + " " + that.data.searchparams.endtime,
      page: 1,
      rows: 4,
      type:1
    };
    WxRequest.GetRequest(url, params).then(res => {

      that.setData({
        diarys: res.data
      })

    }).catch(res => {
      console.error("获取日记失败", res);
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