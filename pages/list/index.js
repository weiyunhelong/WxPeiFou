// pages/list/index.js
var WxRequest = require('../../utils/WxRequest.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {    
    diarys: [], //日记列表
    pageindex: 1,
    pagesize: 6,
    showdata:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
     wx.showLoading({
       title: '数据加载中...',
       mask:true
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

        that.GetDiarys();
      });
    } else {

      that.GetDiarys();
    }
  },
  GetDiarys() { //获取日记
    var that = this;
   
    //TODO 获取数据
    var url = getApp().globalData.DBrequesturl + '/GetWxUserDiary';
    var params = {
      openid: getApp().globalData.openId,
      page:that.data.pageindex,
      rows:that.data.pagesize
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.log("获取动态成功", res);

      if(that.data.pageindex==1){
        that.setData({
          diarys: res.data
        })
      }else{
        var datalist=that.data.diarys;
        datalist.concat(res.data);
        that.setData({
          diarys: datalist
        })
      }      
       
       setTimeout(function(){
         wx.hideLoading();
         that.setData({
           showdata:true
         })
       },1000)
    }).catch(res => {
      console.error("获取动态失败", res);
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
    this.setData({
      pageindex:1
    })
    this.GetDiarys();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that=this;
    that.setData({
      pageindex: that.data.pageindex+1
    })
    that.GetDiarys();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})