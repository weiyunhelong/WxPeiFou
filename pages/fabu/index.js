// pages/fabu/index.js
var utils = require('../../utils/time.js');
var WxRequest = require('../../utils/WxRequest.js');
var MapTrans = require('../../utils/maptrans.js');
var validator = require('../../utils/validator.js');
var Tools = require('../../utils/util.js'); //提示

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false, //用户是否授权
    chktab: 1, //选中的Tab
    /*陪伴部分*/
    title: '', //标题
    desc: '', //详情
    today: utils.getNowDate(), //今天
    date: utils.getMorenDate(), //日期
    starttime: utils.getNowTime(), //开始时间
    endtime: utils.getNowNextTime(), //结束
    address: '', //地点
    district: '',
    lat: 0, //日记地点经纬度
    lng: 0, //日记地点经纬度
    num: 1, //人数
    money: '', //钱
    type: 1, //提供陪伴1；寻找陪伴2
    phone: '', //手机号码
    wechat: '', //微信号
    wxcode: '', //微信二维码
    cover: '', //封面
    mark: '', //备注
    /*动态部分*/
    dtitle: '', //日记主题
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
    var that = this;
    that.ClearPeiBan();
    that.ClearDongtai();
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
        console.log("地址信息", res);
        that.setData({
          address: res.address,
          district: res.name,
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
      money: e.detail.value
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
  getwechat(e) { //微信号
    var that = this;
    that.setData({
      wechat: e.detail.value
    })
  },
  choosewxcode(e) { //选取微信二维码
    var that = this;

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {

        that.Upload2Server(res.tempFilePaths[0]).then(res => {

          that.setData({
            wxcode: res
          })
        });

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

        that.Upload2Server(res.tempFilePaths[0]).then(res => {

          that.setData({
            cover: res
          })
        });
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
    if (that.data.hasUserInfo) {
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
        wechat = that.data.wechat, //微信号
        wxcode = that.data.wxcode, //微信二维码
        cover = that.data.cover, //封面
        mark = that.data.mark; //备注

      if (title == "") {
        Tools.ShowAlert(0, '请输入标题');
      } else if (address == "") {
        Tools.ShowAlert(0, '请选择地点');
      } else if (phone == "") {
        Tools.ShowAlert(0, '请输入手机号');
      } else if (!validator.validateMobile(phone)) {
        Tools.ShowAlert(0, '手机号错误');
      } else if (wechat == "") {
        Tools.ShowAlert(0, '请输入微信号');
      } else if (wxcode == "") {
        Tools.ShowAlert(0, '请上传微信二维码');
      } else if (cover == "") {
        Tools.ShowAlert(0, '请上传封面');
      } else {


        //TODO 保存陪伴
        var url = getApp().globalData.DBrequesturl + '/PublicDynamic';
        var params = {
          openid: getApp().globalData.openId,
          address: that.data.address,
          district: that.data.district,
          lat: that.data.lat,
          lng: that.data.lng,
          cover: that.data.cover,
          date: that.data.date,
          desc: that.data.desc,
          endtime: that.data.date + that.data.endtime,
          mark: that.data.mark,
          money: parseFloat(money),
          number: that.data.num,
          phone: that.data.phone,
          starttime: that.data.date + that.data.starttime,
          title: that.data.title,
          wechat: that.data.wechat,
          wxcode: that.data.wxcode,
          type: that.data.type
        };

        WxRequest.GetRequest(url, params).then(res => {

          that.ClearPeiBan();
          Tools.ShowAlert(1, '发布成功');

          //TODO 验证文字和图片的安全
          WxRequest.MsgSecCheck(title);
          WxRequest.MsgSecCheck(wechat);
          WxRequest.MsgSecCheck(mark);
          WxRequest.ImgSecCheck(wxcode);
          WxRequest.ImgSecCheck(cover);

        }).catch(res => {
          console.error("发布失败", res);
          Tools.ShowAlert(2, '发布失败');
        })

      }
    } else {
      wx.navigateTo({
        url: '../wxlogin/auth',
      })
    }
  },
  getdtitle(e) { //获取日记的主题
    this.setData({
      dtitle: e.detail.value
    })
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

    if (that.data.hasUserInfo) {
      var riji = that.data.riji, //日记内容
        dtitle = that.data.dtitle, //日记的主题
        imgs = that.data.imgs, //日记图
        didian = that.data.didian, //日记地点
        ddlat = that.data.ddlat, //日记地点经纬度
        ddlng = that.data.ddlng; //日记地点经纬度
      if (dtitle == "") {
        Tools.ShowAlert(0, '请输入主题');
      } else if (riji == "") {
        Tools.ShowAlert(0, '请输入内容');
      } else if (imgs.length == 0) {
        utiToolsls.ShowAlert(0, '至少上传一张图');
      } else if (didian == "") {
        Tools.ShowAlert(0, '请点击定位');
      } else {
        //TODO 保存动态
        var url = getApp().globalData.DBrequesturl + '/PublicDiary';
        var params = {
          openid: getApp().globalData.openId,
          title: dtitle,
          address: that.data.didian,
          content: that.data.riji,
          imgs: that.Imgs2Str(that.data.imgs)
        };

        WxRequest.GetRequest(url, params).then(res => {
          console.log("保存动态的结果:", res);
          that.ClearDongtai();
          Tools.ShowAlert(1, '发布动态成功');

          //TODO 验证文字和图片的安全
          WxRequest.MsgSecCheck(that.data.riji);

        }).catch(res => {
          Tools.ShowAlert(2, '发布动态失败');
        })

      }
    } else {
      wx.navigateTo({
        url: '../wxlogin/auth',
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
      wechat: '', //微信号
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

        that.setData({
          hasUserInfo: getApp().globalData.hasUserInfo
        })
      })

    } else {

      that.setData({
        hasUserInfo: getApp().globalData.hasUserInfo
      })
    }
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