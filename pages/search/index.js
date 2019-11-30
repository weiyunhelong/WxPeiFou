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
    moretype: 0, //1->寻找 2->提供 3->日记
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
    var searchtype = moretype == undefined ? 0 : parseInt(moretype)

    that.setData({
      moretype: searchtype
    })

  },
  searchopt(e) { //搜索操作
    console.log("搜索的参数接收:", e);
    var that = this;
    var searchparams={
      searchkey: e.detail.searchkey,
      date: e.detail.date,
      starttime: e.detail.starttime,
      endtime: e.detail.endtime,
      today: "",
      city: e.detail.city,
      searchtype: 1
    };
    
    if (that.data.moretype == 3) { //日记
      that.GetDiaryList();
    } else { //动态
      that.GetDynamicList();
    }
  },
  GetDynamicList(){//动态列表
    var that=this;

    //参数部分
    var searchparams = that.data.searchparams;
    var pageindex=that.data.pageindex;
    var pagesize=that.data.pagesize;

    var datas = [{
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
      datas: datas
    })
  },
  GetDiaryList() {//日记
    var that = this;

    //参数部分
    var searchparams = that.data.searchparams;
    var pageindex = that.data.pageindex;
    var pagesize = that.data.pagesize;

    var that = this;
    var diarys = [
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
      diarys: diarys
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