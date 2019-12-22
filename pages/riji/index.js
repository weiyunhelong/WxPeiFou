// pages/dongtai/index.js
var WxRequest = require('../../utils/WxRequest.js');
var Tools = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //动态id
    diaryobj: {}, //动态详情
    wxuser: {}, //作者详情
    date: '', //日期
    swipers: [], //轮播图
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    statusBarHeight: getApp().globalData.statusBarHeight, //自定义顶部状态栏使用
    titleBarHeight: getApp().globalData.titleBarHeight, //自定义顶部状态栏高度
    comments: [1, 2, 3, 4],
    pageindex: 1,
    pagesize: 10,
    imgh: 0,
    isfocus: false, //是否聚焦评论
    comment: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: parseInt(options.id), //动态id
    })
  },
  getImgh(e) { //获取图片高度
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      ratio = imgwidth / imgheight; //宽高比  

    //计算的高度值  
    var viewHeight = 750 / ratio;
    this.setData({
      imgh: viewHeight
    })
  },
  backpreopt() { //返回上个页面
    wx.navigateBack({
      delta: 1,
    })
  },
  focusopt(e) { //是否聚焦
    var that = this;
    that.setData({
      isfocus: true
    })
  },
  bluropt() { //离开
    var that = this;
    that.setData({
      isfocus: false
    })
  },
  getcomment(e) { //获取输入内容
    var that = this;
    that.setData({
      comment: e.detail.value
    })
  },
  postcommentopt() { //点击发送按钮
    var that = this;

    //TODO 发送成功
    var url = getApp().globalData.DBrequesturl + "/CommentDiary";
    var params = {
      id: that.data.id,
      contenxt: that.data.comment,
      openid: getApp().globalData.openId,
    };
    WxRequest.GetRequest(url, params).then(res => {
    
      Tools.ShowAlert(1, '评论成功!');
      var diaryobj = that.data.diaryobj;
      diaryobj.ComNum += 1;
      that.setData({
        isfocus: false,
        comment: '',
        diaryobj: diaryobj
      })

      that.GetDiaryComment();
    }).catch(res => {
      console.error("评论失败", res);
      Tools.ShowAlert(2, '评论失败!');
    })

  },
  zanopt(e) { //点赞
    var that = this;

    //TODO 发送成功
    var url = getApp().globalData.DBrequesturl + "/ZanDiary";
    var params = {
      id: that.data.id,
      openid: getApp().globalData.openId,
    };
    WxRequest.GetRequest(url, params).then(res => {
      
      if(res.data=="1"){
        Tools.ShowAlert(2, '您已点赞过!');
      } else if (res.data == "0"){
        Tools.ShowAlert(1, '点赞成功!');
        var diaryobj = that.data.diaryobj;
        diaryobj.ZanNum += 1;
        that.setData({
          diaryobj: diaryobj
        })
      }else{
        Tools.ShowAlert(2, '点赞失败!');
      }
      
    }).catch(res => {
      console.error("点赞失败", res);
      Tools.ShowAlert(2, '点赞失败!');
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
        that.GetDiaryInfo();

        that.GetDiaryComment();
      })
    } else {
      that.GetDiaryInfo();

      that.GetDiaryComment();
    }
  },
  GetDiaryInfo() { //获取详情
    var that = this;

    //TODO 获取动态的详情
    var url = getApp().globalData.DBrequesturl + "/GetDiaryDetail";
    var params = {
      id: that.data.id
    };

    WxRequest.GetRequest(url, params).then(res => {
      that.setData({
        diaryobj: res.data.Diary, //动态详情
        wxuser: res.data.WxUser, //作者详情
        date: res.data.Date, //作者详情
        swipers: res.data.Covers, //作者详情
      })
    }).catch(res => {
      console.error("获取详情失败!", res);
    })
  },
  GetDiaryComment() { //获取评论
    var that = this;

    //TODO 获取动态的详情
    var url = getApp().globalData.DBrequesturl + "/CommentDiaryList";
    var params = {
      id: that.data.id,
      page:that.data.pageindex,
      rows:that.data.pagesize
    };

    WxRequest.GetRequest(url, params).then(res => {
      that.setData({
        comments: res.data
      })
    }).catch(res => {
      console.error("获取评论失败!", res);
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
    var that = this;
    //TODO 发送成功
    var url = getApp().globalData.DBrequesturl + "/ShareDiary";
    var params = {
      id: that.data.id,
      openid:getApp().globalData.openId
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.error("分享成功", res);

      var diaryobj = that.data.diaryobj;
      diaryobj.ShareNum += 1;
      that.setData({
        diaryobj: diaryobj
      })
    }).catch(res => {
      console.error("分享失败", res);
    })
  }
})