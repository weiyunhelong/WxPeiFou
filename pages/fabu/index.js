// pages/fabu/index.js
var utils = require('../../utils/time.js');
var WxRequest = require('../../utils/WxRequest.js');
var MapTrans = require('../../utils/maptrans.js');
var validator = require('../../utils/validator.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    chktab: 2, //选中的Tab
    /*陪伴部分*/
    title: '', //标题
    desc: '', //详情
    today: utils.getNowDate(), //今天
    date: utils.getMorenDate(), //日期
    starttime: utils.getNowTime(), //开始时间
    endtime: utils.getNowNextTime(), //结束
    address: '', //地点
    lat: 0, //日记地点经纬度
    lng: 0, //日记地点经纬度
    num: 1, //人数
    money: '', //钱
    type: 1, //提供陪伴1；寻找陪伴2
    phone: '', //手机号码
    wxcode: '', //微信二维码
    cover: '', //封面
    mark: '', //备注
    /*动态部分*/
    riji: '', //日记内容
    imgs: [], //日记图
    didian: '', //日记地点
    ddlat: 0, //日记地点经纬度
    ddlng: 0, //日记地点经纬度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  chktabopt(e) { //切换tab
    var that = this;

    that.setData({
      chktab: parseInt(e.currentTarget.dataset.tab)
    })
  },
  gettitle(e) { //获取标题
    this.setData({
      title: e.detail.value
    })
  },
  getdesc(e) { //获取详情
    this.setData({
      desc: e.detail.value
    })
  },
  bindDateChange(e) { //活动日期
    var that = this;
    var date = e.detail.value;
    var dt = utils.getSelectDate(date);
    that.setData({
      date: dt
    })
  },
  bindStartTimeChange(e) { //获取开始时间
    this.setData({
      starttime: e.detail.value
    })
  },
  bindEndTimeChange(e) { //获取结束时间
    this.setData({
      endtime: e.detail.value
    })
  },
  golocation() {
    var that = this;

    wx.chooseLocation({
      success: function(res) {
        console.log("地址信息");
        that.setData({
          address: res.address,
          lat: res.latitude, //日记地点经纬度
          lng: res.longitude, //日记地点经纬度
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
                    that.golocation();
                  }
                }
              })
            }
          }
        })
      },
    })
  },
  getnumber(e) { //人数
    var that = this;

    that.setData({
      num: e.detail.value
    })
  },
  getmoney(e) { //钱
    var that = this;

    that.setData({
      num: e.detail.value
    })
  },
  chktype(e) { //提供陪伴1;寻找陪伴
    var that = this;

    that.setData({
      type: parseInt(e.currentTarget.dataset.type)
    })
  },
  getphone(e) { //手机号码
    var that = this;
    that.setData({
      phone: e.detail.value
    })
  },
  choosewxcode(e) { //选取微信二维码
    var that = this;

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        that.setData({
          wxcode: res.tempFilePaths[0]
        })
      },
    })
  },
  choosecover() { //选取活动封面
    var that = this;

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        that.setData({
          cover: res.tempFilePaths[0]
        })
      },
    })
  },
  getmark(e) { //备注
    var that = this;
    that.setData({
      mark: e.detail.value
    })
  },
  publishopt() { //点击发布陪伴
    var that = this;

    //参数部分 
    var title = that.data.title, //标题
      desc = that.data.desc, //详情
      date = that.data.date, //日期
      starttime = that.data.starttime, //开始时间
      endtime = that.data.endtime, //结束
      address = that.data.address, //地点
      lat = that.data.lat, //日记地点经纬度
      lng = that.data.lng, //日记地点经纬度
      num = that.data.num, //人数
      money = that.data.money == "" ? 0 : that.data.money, //钱
      type = that.data.type, //提供陪伴1；寻找陪伴2
      phone = that.data.phone, //手机号码
      wxcode = that.data.wxcode, //微信二维码
      cover = that.data.cover, //封面
      mark = that.data.mark; //备注

    if (title == "") {
      utils.ShowAlert(0, '请输入标题');
    } else if (address == "") {
      utils.ShowAlert(0, '请选择地点');
    } else if (phone == "") {
      utils.ShowAlert(0, '请输入手机号');
    } else if (!validator.validateMobile(phone)) {
      utils.ShowAlert(0, '手机号错误');
    } else if (wxcode == "") {
      utils.ShowAlert(0, '请上传微信二维码');
    } else if (wxcode == "") {
      utils.ShowAlert(0, '请上传封面');
    } else {
      that.ClearPeiBan();
      utils.ShowAlert(1, '发布成功');
    }
  },
  getriji(e) { //获取日记内容
    this.setData({
      riji: e.detail.value
    })
  },
  upimgopt() { //选取日记图片
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
  fabuopt() { //发布动态
    var that = this;

    var riji = that.data.riji, //日记内容
      imgs = that.data.imgs, //日记图
      didian = that.data.didian, //日记地点
      ddlat = that.data.ddlat, //日记地点经纬度
      ddlng = that.data.ddlng; //日记地点经纬度

    if (riji == "") {
      utils.ShowAlert(0, '请输入标题');
    } else if (imgs.length == 0) {
      utils.ShowAlert(0, '至少上传一张图');
    } else if (didian == "") {
      utils.ShowAlert(0, '请点击定位');
    } else {
      that.ClearDongtai();
      utils.ShowAlert(1, '发布成功');
    }
  },
  ClearPeiBan() { //清除陪伴的数据
    var that = this;

    that.setData({
      title: '', //标题
      desc: '', //详情
      today: utils.getNowDate(), //今天
      date: utils.getMorenDate(), //日期
      starttime: utils.getNowTime(), //开始时间
      endtime: utils.getNowNextTime(), //结束
      address: '', //地点
      lat: 0, //日记地点经纬度
      lng: 0, //日记地点经纬度
      num: 1, //人数
      money: '', //钱
      type: 1, //提供陪伴1；寻找陪伴2
      phone: '', //手机号码
      wxcode: '', //微信二维码
      cover: '', //封面
      mark: '', //备注
    })
  },
  ClearDongtai() { //清除陪伴的数据
    var that = this;

    that.setData({
      riji: '', //日记内容
      imgs: [], //日记图
      didian: '', //日记地点
      ddlat: 0, //日记地点经纬度
      ddlng: 0, //日记地点经纬度
    })
  },
  ImgSecCheck(filepath) { //检查图片是否安全
    //TODO 
    //https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.imgSecCheck.html
  },
  MsgSecCheck(txt) { //检查文本是否安全
    //TODO 
    //   https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.msgSecCheck.html
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

    that.ClearPeiBan();
    that.ClearDongtai();
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