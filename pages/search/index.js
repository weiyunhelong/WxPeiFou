// pages/search/index.js
var utils = require('../../utils/time.js');
var WxRequest = require('../../utils/WxRequest.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchparams: {
      searchkey: '',
      date: '',
      starttime: '',
      endtime: "",
      today: "",
      searchtype: 1
    },
    moretype: 1, //1->寻找 2->提供 3->日记
    pageindex: 1,
    pagesize: 10,
    datas: [], //动态的数据
    diarys: [], //日记列表
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var moretype = options.type;
    var searchtype = moretype == undefined ? 1 : parseInt(moretype)

    that.setData({
      moretype: searchtype
    })

  },
  searchopt(e) { //搜索操作

    var that = this;
    wx.showLoading({
      title: '数据加载中...',
      mask:true
    })
    var searchparams = {
      searchkey: e.detail.searchkey,
      date: e.detail.date,
      starttime: e.detail.starttime,
      endtime: e.detail.endtime,
      today: e.detail.today,
      city: e.detail.city,
      searchtype: 1
    };
    //赋值参数
    that.setData({
      searchparams: searchparams
    })

    if (that.data.moretype == 3) { //日记
      that.GetDiaryList();
    } else { //动态
      that.GetDynamicList();
    }

    setTimeout(function(){
      wx.hideLoading();
    },1000)
  },
  GetDynamicList() { //动态列表
    var that = this;

    //参数部分
    var searchparams = that.data.searchparams;
    var pageindex = that.data.pageindex;
    var pagesize = that.data.pagesize;

    var url = getApp().globalData.DBrequesturl + '/GetDynamicList';
    var params = {
      searchkey: searchparams.searchkey,
      city: searchparams.city,
      startdt: searchparams.starttime,
      enddt: searchparams.endtime,
      page: pageindex,
      rows: pagesize,
      type: that.data.moretype,
      lat: getApp().globalData.lat,
      lng: getApp().globalData.lng,
    };
    WxRequest.GetRequest(url, params).then(res => {

      if (that.data.pageindex == 1) {
       
        that.setData({
          datas: res.data
        })
      } else {
        var alldata = that.data.datas;
        alldata = alldata.concat(res.data);
        that.setData({
          datas: alldata
        })
      }
      
    }).catch(res => {
      console.error("获取提供陪伴失败", res);
    })
  },
  GetDiaryList() { //日记
    var that = this;

    //参数部分
    var searchparams = that.data.searchparams;
    var pageindex = that.data.pageindex;
    var pagesize = that.data.pagesize;

    //TODO 获取数据
    var url = getApp().globalData.DBrequesturl + '/GetDiaryList';
    var params = {
      searchkey: searchparams.searchkey,
      city: searchparams.city,
      startdt:searchparams.starttime,
      enddt:searchparams.endtime,
      page: pageindex,
      rows: pagesize,
      type: 2
    };
    WxRequest.GetRequest(url, params).then(res => {

      if (that.data.pageindex == 1) {
        that.setData({
          diarys: res.data
        })
      } else {
        var alldata = that.data.diarys;
        alldata = alldata.concat(res.data);
        that.setData({
          diarys: alldata
        })
      }

    }).catch(res => {
      console.error("获取日记失败", res);
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

    //获取缓存数据
    that.GetSearchStorege();
  },
  GetSearchStorege() { //获取缓存数据

    var that = this;

    wx.getStorage({
      key: 'searchopt',
      success: function(res) {

        var searchparams = {
          searchkey: res.data.searchkey,
          date: res.data.date,
          city: res.data.city,
          starttime: res.data.starttime,
          endtime: res.data.endtime,
          today: "",
          searchtype: 1
        }

        that.setData({
          searchparams: searchparams
        })
      
        wx.clearStorage();
      },
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
    var that = this;
    that.setData({
      pageindex: 1
    })
    if (that.data.moretype == 3) { //日记
      that.GetDiaryList();
    } else { //动态
      that.GetDynamicList();
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;
    that.setData({
      pageindex: that.data.pageindex + 1
    })
    if (that.data.moretype == 3) { //日记
      that.GetDiaryList();
    } else { //动态
      that.GetDynamicList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})