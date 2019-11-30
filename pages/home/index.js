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
    looks: [], //寻找陪伴的数据
    provides: [], //提供陪伴的数据
    diarys: [], //日记列表
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

        that.GetLooks();
        that.GetProvides();
        that.GetDiarys();
      });
    } else {

      that.GetLooks();
      that.GetProvides();
      that.GetDiarys();
    }
  },
  GetLooks() { //获取寻找陪伴
    var that = this;

    var looks = [{
        id: 1,
        avatarUrl: '/resources/tx.jpeg',
        title: '我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想',
        price: 0,
        address: '万科小区',
        distance: '100m',
        date: '2019.11.19',
        starttime: '14:00',
        endtime: '15:00',
      },
      {
        id: 2,
        avatarUrl: '/resources/tx.jpeg',
        title: '我想找人打篮球',
        price: 50,
        address: '绿地小区',
        distance: '100m',
        date: '2019.11.19',
        starttime: '14:00',
        endtime: '15:00',
      }, {
        id: 3,
        avatarUrl: '/resources/tx.jpeg',
        title: '我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想',
        price: 0,
        address: '万科小区',
        distance: '100m',
        date: '2019.11.19',
        starttime: '14:00',
        endtime: '15:00',
      },
      {
        id: 4,
        avatarUrl: '/resources/tx.jpeg',
        title: '我想找人打篮球',
        price: 50,
        address: '绿地小区',
        distance: '100m',
        date: '2019.11.19',
        starttime: '14:00',
        endtime: '15:00',
      }, {
        id: 5,
        avatarUrl: '/resources/tx.jpeg',
        title: '我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想',
        price: 0,
        address: '万科小区',
        distance: '100m',
        date: '2019.11.19',
        starttime: '14:00',
        endtime: '15:00',
      },
    ];

    that.setData({
      looks: looks
    })
  },
  GetProvides() { //获取提供陪伴
  var that=this;
    var provides = [{
      id: 1,
      avatarUrl: '/resources/tx.jpeg',
      title: '我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想',
      price: 0,
      address: '万科小区',
      distance: '100m',
      date: '2019.11.19',
      starttime: '14:00',
      endtime: '15:00',
    },
    {
      id: 2,
      avatarUrl: '/resources/tx.jpeg',
      title: '我想找人打篮球',
      price: 50,
      address: '绿地小区',
      distance: '100m',
      date: '2019.11.19',
      starttime: '14:00',
      endtime: '15:00',
    }, {
      id: 3,
      avatarUrl: '/resources/tx.jpeg',
      title: '我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想',
      price: 0,
      address: '万科小区',
      distance: '100m',
      date: '2019.11.19',
      starttime: '14:00',
      endtime: '15:00',
    },
    {
      id: 4,
      avatarUrl: '/resources/tx.jpeg',
      title: '我想找人打篮球',
      price: 50,
      address: '绿地小区',
      distance: '100m',
      date: '2019.11.19',
      starttime: '14:00',
      endtime: '15:00',
    }, {
      id: 5,
      avatarUrl: '/resources/tx.jpeg',
      title: '我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想我想找人打篮球我想找人打篮球我想',
      price: 0,
      address: '万科小区',
      distance: '100m',
      date: '2019.11.19',
      starttime: '14:00',
      endtime: '15:00',
    },
    ];

    that.setData({
      provides: provides
    })
  },
  GetDiarys() { //获取日记
    var that=this;
    var diarys=[
      {
        id: 1,
        cover: '/resources/riji.jpg',
        title: '篮球攻略',
        date: '2019.11.19',
        avatarUrl:'/resources/tx.jpeg',
        nickName: '小美',
        zannum: 100,
      }, {
        id: 2,
        cover: '/resources/riji.jpg',
        title: '篮球攻略',
        date: '2019.11.19',
        avatarUrl: '/resources/tx.jpeg',
        nickName: '小美',
        zannum: 100,
      }, {
        id: 3,
        cover: '/resources/riji.jpg',
        title: '篮球攻略',
        date: '2019.11.19',
        avatarUrl: '/resources/tx.jpeg',
        nickName: '小美',
        zannum: 100,
      }, {
        id: 4,
        cover: '/resources/riji.jpg',
        title: '篮球攻略',
        date: '2019.11.19',
        avatarUrl: '/resources/tx.jpeg',
        nickName: '小美',
        zannum: 100,
      },
    ];

    that.setData({
      diarys: diarys
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