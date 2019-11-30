// pages/search/index.js
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
    moretype:0,//1->寻找 2->提供 3->日记
    pageindex:1,
    pagesize:10,
  },
  searchopt(e) { //搜索操作
    console.log("搜索的参数接收:", e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var moretype=options.type;
    var searchtype=moretype == undefined ? 0 : parseInt(moretype)

    that.setData({
      moretype: searchtype
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
    var that=this;

    wx.getStorage({
      key: 'searchopt',
      success: function (res) {
      
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