// pages/pingjia/index.js
var WxRequest = require('../../utils/WxRequest.js');
var Tools = require('../../utils/util.js'); //提示

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //活动id
    type: 1, //1为提供陪伴 2为寻找陪伴
    comment: '', //评价内容
    imgs: [], //评价图片
    didian: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: parseInt(options.id), //活动id
      type: parseInt(options.type)
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
      success: function (res) {

        wx.showLoading({
          title: '图片上传中...',
        })

        var files = res.tempFilePaths;
        for (var i = 0; i < files.length; i++) {

          that.Upload2Server(files[i]).then(res => {
            var serverpath = res;
            imgs.push(serverpath);
            that.setData({
              imgs: imgs
            })
          });

        }
        wx.hideLoading();

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
    var that = this;
    var promise = new Promise((resolve, reject) => {
      var url = getApp().globalData.DBrequesturl + '/UploadImg';
      wx.uploadFile({
        url: url,
        filePath: filepath,
        name: 'file',
        header: {},
        formData: {},
        success: function(res) {
          var resobj = getApp().globalData.MideaUrl + res.data.substr(1, res.data.length - 2);
          resolve(resobj);
        },
        fail: function(res) {
          utils.ShowAlert(2, '上传图片失败!');
          reject('网络超时出错');
        },
      })
    });
    return promise;
  },
  getdiweiopt() { //地址定位
    var that = this;

    wx.chooseLocation({
      success: function(res) {
        console.log("地址信息", res);
        that.setData({
          didian: res.address,
          ddlat: res.latitude, //日记地点经纬度
          ddlng: res.longitude, //日记地点经纬度
        })
      },
      fail: function() {
        wx.showModal({
          title: '温馨提示',
          content: '请允许授权获取到您的地理位置',
          showCancel: false,
          success(res) {
            if (res.confirm) {

              wx.openSetting({
                success: function(data) {
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
  fabuopt() { //评价
    var that = this;

    var comment = that.data.comment, //评价内容
      imgs = that.data.imgs, //评价图
      didian = that.data.didian; //地点

    if (comment == "") {
      Tools.ShowAlert(0, '请输入评价内容');
    } else {

      var url = getApp().globalData.DBrequesturl + '/CommentDynamic';
      var params = {
        openid: getApp().globalData.openId,
        id: that.data.id,
        address: that.data.didian,
        imgs: that.Imgs2Str(that.data.imgs),
        contenxt: that.data.comment,
        type: that.data.type
      };
      WxRequest.GetRequest(url, params).then(res => {
        console.log("发表评价成功", res);
        if (res.data == "0") {
          WxRequest.ImgSecCheck(comment);
          Tools.ShowAlert(1, '发布成功');

          setTimeout(function(){
            wx.navigateBack({
              delta: 1
            })
          },1000)
          
        } else {
          Tools.ShowAlert(0, '评价失败');
        }

      }).catch(res => {
        console.error("获取动态失败", res);
        Tools.ShowAlert(0, '评价失败');
      })
    }
  },
  Imgs2Str(imgs) { //将图片数组转为字符串，用逗号分隔
    var result = "";
    imgs.forEach(function(v, i) {
      result += v + ",";
      WxRequest.ImgSecCheck(v);
    })
    return result;
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