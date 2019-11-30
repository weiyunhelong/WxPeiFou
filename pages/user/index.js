// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: 0, //用户id
    datas: [],
    pageindex:1,
    pagesize:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    wx.setNavigationBarTitle({
      title: '个人详情',
    })

    that.setData({
      userId: options.userId
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
    //获取用户的发布
    that.GetUserDynamic();
  },
  GetUserDynamic() {
    var that = this;
    //参数部分
    var userId=that.data.userId, 
      pageindex = that.data.pageindex,
      pagesize = that.data.pagesize;

    var datas = [{
        id: 1,
        cover: '/resources/tx.jpeg',
        title: '我想找人陪我打篮球',
        date: '2019.11.19',
        zannum: 100,
        sharenum: 100,
        msgnum: 100
      },
      {
        id: 2,
        cover: '/resources/tx.jpeg',
        title: '我想找人陪我打篮球',
        date: '2019.11.19',
        zannum: 100,
        sharenum: 100,
        msgnum: 100
      }, {
        id: 3,
        cover: '/resources/tx.jpeg',
        title: '我想找人陪我打篮球我想找人陪我打篮球我想找人陪我打篮球我想找人陪我打篮球',
        date: '2019.11.19',
        zannum: 100,
        sharenum: 100,
        msgnum: 100
      }, {
        id: 4,
        cover: '/resources/tx.jpeg',
        title: '我想找人陪我打篮球',
        date: '2019.11.19',
        zannum: 100,
        sharenum: 100,
        msgnum: 100
      }, {
        id: 5,
        cover: '/resources/tx.jpeg',
        title: '我想找人陪我打篮球',
        date: '2019.11.19',
        zannum: 100,
        sharenum: 100,
        msgnum: 100
      }
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
    var that=this;

    that.setData({
      pageindex:1
    })

    that.GetUserDynamic();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;

    that.setData({
      pageindex: that.data.pageindex+1
    })

    that.GetUserDynamic();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})