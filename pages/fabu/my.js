// pages/fabu/my.js
var WxRequest = require('../../utils/WxRequest.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chktab: 1, //类型
    datalist: [], //数据列表
    pageindex: 1,
    pagesize: 6,
    showdata: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
  },
  chktabopt(e) { //切换类型
    var that = this;
   
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })

    var type = parseInt(e.currentTarget.dataset.tab);
    
    that.setData({
      chktab: type,
      pageindex: 1,
      showdata: false
    })
    if (type == 3) {
      that.GetDiaryList();
    } else {
      that.GetDynamicList();
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

    if (getApp().globalData.openId == "") {
      getApp().GetWxOpenId().then(resArg => {

        that.GetDynamicList();
      });
    } else {

      that.GetDynamicList();
    }
  },
  GetDynamicList() { //获取陪伴列表数据
    var that = this;

    //TODO 获取数据
    var url = getApp().globalData.DBrequesturl + '/GetWxUserDynamic';
    var params = {
      openid: getApp().globalData.openId,
      page: that.data.pageindex,
      rows: that.data.pagesize,
      type: that.data.chktab
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.log("获取参与数据成功", res);

      if (that.data.pageindex == 1) {
        that.setData({
          datalist: res.data
        })
      } else {
        var datalist = that.data.datalist;
        datalist.concat(res.data);
        that.setData({
          datalist: datalist
        })
      }

      setTimeout(function() {
        wx.hideLoading();
        that.setData({
          showdata: true
        })
      }, 1000)
    }).catch(res => {
      console.error("获取与数据失败", res);
      setTimeout(function () {
        wx.hideLoading();
        that.setData({
          showdata: true
        })
      }, 1000)
    })
  },
  GetDiaryList() { //获取动态列表数据
    var that = this;

    //TODO 获取数据
    var url = getApp().globalData.DBrequesturl + '/GetWxUserDiary';
    var params = {
      openid: getApp().globalData.openId,
      page: that.data.pageindex,
      rows: that.data.pagesize
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.log("获取参与数据成功", res);

      if (that.data.pageindex == 1) {
        that.setData({
          datalist: res.data
        })
      } else {
        var datalist = that.data.datalist;
        datalist.concat(res.data);
        that.setData({
          datalist: datalist
        })
      }
      setTimeout(function () {
        wx.hideLoading();
        that.setData({
          showdata: true
        })
      }, 1000)
    }).catch(res => {
      console.error("获取与数据失败", res);
      setTimeout(function () {
        wx.hideLoading();
        that.setData({
          showdata: true
        })
      }, 1000)
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
    if (that.data.chktab == 3) {
      that.GetDiaryList()
    } else {
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
    if (that.data.chktab == 3) {
      that.GetDiaryList()
    } else {
      that.GetDynamicList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})