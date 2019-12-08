// pages/pingjia/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //活动id
    comment: '',//评价内容
    imgs: [], //评价图片
    didian:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: options.id, //活动id
    })
  },

  getcomment(e) { //获取评价内容
    this.setData({
      comment: e.detail.value
    })
  },
  upimgopt() { //上传图片
    var that = this;
    var imgs = that.data.imgs;

    wx.chooseImage({
      count: 9 - imgs.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {

        var files = res.tempFilePaths;
        for (var i = 0; i < files.length; i++) {
          var serverpath = that.Upload2Server(files[i]);

          imgs.push(serverpath);
        }

        that.setData({
          imgs: imgs
        })
      },
    })
  },
  delteimgopt(e) { //删除图片
    var that = this;

    var index = parseInt(e.currentTarget.dataset.index);
    var imgs = that.data.imgs;

    imgs.splice(index, 1);

    that.setData({
      imgs: imgs
    })
  },
  Upload2Server(filepath) { //将图片上传到服务，并返回服务器地址
    return filepath;
  },
  getdiweiopt() { //地址定位
    var that = this;

    wx.chooseLocation({
      success: function (res) {
        console.log("地址信息", res);
        that.setData({
          didian: res.address,
          ddlat: res.latitude, //日记地点经纬度
          ddlng: res.longitude, //日记地点经纬度
        })
      },
      fail: function () {
        wx.showModal({
          title: '温馨提示',
          content: '请允许授权获取到您的地理位置',
          showCancel: false,
          success(res) {
            if (res.confirm) {

              wx.openSetting({
                success: function (data) {
                  if (data.authSetting["scope.userLocation"] === true) {
                    that.getdiweiopt();
                  }
                }
              })
            }
          }
        })
      },
    })
  },
  fabuopt() { //发布动态
    var that = this;

    var comment = that.data.comment, //评价内容
      imgs = that.data.imgs, //评价图
      didian=that.data.didian;//地点

    if (comment == "") {
      utils.ShowAlert(0, '请输入评价内容');
    }else {
      that.ClearDongtai();
      utils.ShowAlert(1, '发布成功');
    }
  },
  ClearPeiBan() { //清除数据
    var that = this;

    that.setData({
      comment: '', //内容
      imgs: [], //图片
      didian:""
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