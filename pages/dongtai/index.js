// pages/dongtai/index.js
var WxRequest = require('../../utils/WxRequest.js');
var Tools = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //活动id
    imgheight: 0,
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 3000,
    duration: 1000,

    /*活动信息*/
    imgs: [],//活动的图   
    markers: [{
      id: 1,
      latitude: '0',
      longitude: '0',
      iconPath: '/resources/mapicon.png',
      width: 32,
      height: 32
    }],
    dataobj:{},//详情
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("接受参数", options);
    this.setData({
      id: options.id,
      money:options.money
    })
  },
  //获取图片真实宽度  
  imageLoad: function(e) {
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      ratio = imgwidth / imgheight; //宽高比  

    //计算的高度值  
    var viewHeight = 750 / ratio;
    this.setData({
      imgheight: viewHeight
    })
    this.triggerEvent('showChange', {
      width: e.detail.width,
      height: e.detail.height,
    });
  },
  gouserdetail(){//点击跳转到用户详情
    var that=this;
    wx.navigateTo({
      url: '../user/index?id=' + that.data.userId,
    })
  },
  previewimg(){//点击微信二维码
     var that=this;
     wx.previewImage({
       urls: [that.data.dataobj.Wxcode],
     })
  },
  gocommentopt(){//点击用户评价
    var that = this;
    wx.navigateTo({
      url: '../pingjia/index?id=' + that.data.id,
    })
  },
  makecallopt() { //拨打电话
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.dataobj.Phone
    })
  },
  payforopt(){//发起支付
    wx.showToast({
      title: '支付成功',
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

    if (getApp().globalData.openId == '') {
      getApp().GetWxOpenId().then(res => {
        that.GetDynamicInfo();

        that.GetComments();
      })
    } else {
      that.GetDynamicInfo();

      that.GetComments();
    }
  },
  GetDynamicInfo(){//获取动态详情
    var that = this;

    //TODO 获取动态的详情
    var url = getApp().globalData.DBrequesturl + "/GetDynamicDetail";
    var params = {
      id: that.data.id
    };

    WxRequest.GetRequest(url, params).then(res => {
      var markers= [{
        id: 1,
        latitude: res.data.Dynamic.lat,
        longitude: res.data.Dynamic.lng,
        iconPath: '/resources/mapicon.png',
        width: 32,
        height: 32
      }];
      that.setData({
        imgs: [res.data.Dynamic.Cover],
        dataobj: res.data.Dynamic, //陪伴详情
        wxuser: res.data.WxUser, //作者详情
        date: res.data.Date, //日期
        startdt: res.data.StartDt, //开始时间
        enddt: res.data.EndDt, //开始时间
        markers:markers
      })
    }).catch(res => {
      console.error("获取详情失败!", res);
    })
  },
  GetComments() {//获取动态评论列表

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
    var that = this;
    //TODO 发送成功
    var url = getApp().globalData.DBrequesturl + "/DynamicShare";
    var params = {
      id: that.data.id,
      openid: getApp().globalData.openId,
      type:that.data.dataobj.Type
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.error("分享成功", res);
    }).catch(res => {
      console.error("分享失败", res);
    })
  }
})