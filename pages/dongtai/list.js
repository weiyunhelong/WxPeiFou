// pages/dongtai/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    introduce: '',
    datas: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    var that=this;

    that.GetDynamicList();
  },
  GetDynamicList() { //获取提供陪伴
    var that = this;

    var datas = [
      {
        id: 1,
        cover: '/resources/riji.jpg',
        title: '篮球攻略',
        date: '2019.11.19',
        avatarUrl: '/resources/tx.jpeg',
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
      datas: datas
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