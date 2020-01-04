// pages/dongtai/index.js
var WxRequest = require('../../utils/WxRequest.js');
var Tools = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //活动id
    imgheight: 0,
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 3000,
    duration: 1000,

    /*活动信息*/
    imgs: [], //活动的图   
    markers: [{
      id: 1,
      latitude: '0',
      longitude: '0',
      iconPath: '/resources/mapicon.png',
      width: 32,
      height: 32
    }],
    dataobj: {}, //详情
    account: 0, //账户余额
    isbook: false, //是否已报名
    isowner: false, //是否是自己的

    comments: [], //评论的列表
    pageindex: 1,
    pagesize: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      id: options.id,
      money: options.money
    })
  },
  //获取图片真实宽度  
  imageLoad: function(e) {
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      ratio = imgwidth / imgheight; //宽高比  

    //计算的高度值  
    var viewHeight = 750 / ratio;
    this.setData({
      imgheight: viewHeight
    })
    this.triggerEvent('showChange', {
      width: e.detail.width,
      height: e.detail.height,
    });
  },
  gouserdetail() { //点击跳转到用户详情
    var that = this;
    wx.navigateTo({
      url: '../user/index?userId=' + that.data.wxuser.OpenId,
    })
  },
  previewimg() { //点击微信二维码
    var that = this;
    wx.previewImage({
      urls: [that.data.dataobj.Wxcode],
    })
  },
  gocommentopt() { //点击用户评价
    var that = this;
    wx.navigateTo({
      url: '../pingjia/index?id=' + that.data.id + '&type=' + that.data.dataobj.Type
    })
  },
  makecallopt() { //拨打电话
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.dataobj.Phone
    })
  },
  bookopt() { //报名操作
    var that = this;

    var url = getApp().globalData.DBrequesturl + "/BookDynamic";
    var parmas = {
      id: that.data.id,
      openid: getApp().globalData.openId,
      type: that.data.dataobj.Type
    };

    WxRequest.GetRequest(url, parmas).then(res => {
      console.log("报名结果", res);
      if (res.data > 0) {
        if (that.data.money != 0) {
          if (that.data.account == 0) {
            that.BookMoney(res.data, 1); //微信支付报名钱
          } else {
            that.PayForBook(res.data, 1); //账户余额支付
          }
        } else {
          that.UpdateBookStatus(res.data, 0);
        }
      } else if (res.data == -2) {
        wx.showToast({
          title: '已报名',
          icon: 'none'
        })
      } else if (res.data == -3) {
        wx.showToast({
          title: '报名已截止',
          icon: 'none'
        })
      } else {
        wx.showToast({
          title: '报名失败',
          icon: 'none'
        })
      }
    }).catch(res => {
      console.log("报名结果err", res);
    })
  },
  BookMoney(bookid) { //微信支付报名钱
    var that = this;

    var url = getApp().globalData.DBrequesturl + "/PayForDynamic";
    var params = {
      money: 1,
      openid: getApp().globalData.openId
    };

    WxRequest.GetRequest(url, params)
      .then(res => {
        wx.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          signType: res.data.signType,
          paySign: res.data.paySign,
          success: function() {

            //更新报名的状态
            that.UpdateBookStatus(bookid, 1);
          },
          fail: function() {

            wx.showToast({
              title: '报名失败',
              icon: 'none'
            })
          }
        })
      })
      .catch(res => {
        wx.showToast({
          title: '报名失败',
          icon: 'none'
        })
      })
  },
  PayForBook(bookid) { //账户余额支付
    var that = this;

    var url = getApp().globalData.DBrequesturl + "/DynamicPayfor";
    var params = {
      openid: getApp().globalData.openId,
      money: that.data.money
    };
    WxRequest.GetRequest(url, params)
      .then(res => {
        that.UpdateBookStatus(bookid, 1);
      })
      .catch(res => {
        wx.showToast({
          title: '报名失败',
          icon: 'none'
        })
      })
  },
  UpdateBookStatus(bookid, ispayfor) { //更新报名状态
    var that = this;

    var url = getApp().globalData.DBrequesturl + "/UpdateBookStatus";
    var params = {
      bookid: bookid,
      ispayfor: ispayfor,
      money: that.data.money
    };
    WxRequest.GetRequest(url, params)
      .then(res => {
        that.GetActivityID(2, bookid);
        wx.showToast({
          title: '报名成功'
        })
      })
      .catch(res => {
        wx.showToast({
          title: '报名失败',
          icon: 'none'
        })
      })
  },
  comfirmend() { //确认活动结束
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定陪伴结束?',
      success: function(res) {
        if (res.confirm) {
          that.DynamciEnd();
        }
      }
    })
  },
  DynamciEnd() {
    var that = this;

    //TODO 获取动态的详情
    var url = getApp().globalData.DBrequesturl + "/DynamciEnd";
    var params = {
      id: that.data.id,
      openid: getApp().globalData.openId
    };

    WxRequest.GetRequest(url, params).then(res => {
      if (res.data == 0) {
        that.GetDynamicInfo();
      } else {
        wx.showToast({
          title: '陪伴结束失败!',
          icon: 'none'
        })
      }
    }).catch(res => {
      console.error("陪伴结束失败!", res);
      wx.showToast({
        title: '陪伴结束失败!',
        icon: 'none'
      })
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

        //更新活动状态
        that.UpdateStatus();
       
        //获取评论信息
        that.GetComments();
        //获取用户信息
        that.GetWxUserInfo();
      })
    } else {
      
      //更新活动状态
      that.UpdateStatus();
     
      //获取评论信息
      that.GetComments();
      //获取用户信息
      that.GetWxUserInfo();
    }
  },
  GetDynamicInfo() { //获取动态详情
    var that = this;

    //TODO 获取动态的详情
    var url = getApp().globalData.DBrequesturl + "/GetDynamicDetail";
    var params = {
      id: that.data.id,
      openId: getApp().globalData.openId
    };

    WxRequest.GetRequest(url, params).then(res => {
      var markers = [{
        id: 1,
        latitude: res.data.Dynamic.lat,
        longitude: res.data.Dynamic.lng,
        iconPath: '/resources/mapicon.png',
        width: 32,
        height: 32
      }];
      that.setData({
        imgs: [res.data.Dynamic.Cover],
        dataobj: res.data.Dynamic, //陪伴详情
        wxuser: res.data.WxUser, //作者详情
        date: res.data.Date, //日期
        startdt: res.data.StartDt, //开始时间
        enddt: res.data.EndDt, //开始时间
        markers: markers, //定点
        isbook: res.data.Isbook == 1, //是否报名
        isowner: res.data.IsOwner == 1, //是否自己发布
      })
      //获取动态消息ID
      if (res.data.Isbook == 1) {
        that.GetActivityID(1, 0);
      }
    }).catch(res => {
      console.error("获取详情失败!", res);
    })
  },
  GetActivityID(type, bookid) { //获取动态消息ID
    var that = this;

    var url = getApp().globalData.DBrequesturl + "/GetActivityID";
    var params = {
      dynamicid: that.data.id,
      number: that.data.dataobj.Number
    };

    WxRequest.GetRequest(url, params)
      .then(res => {
        that.setData({
          activityId: res.data.ActivityID
        })
        //更新分享消息的部分
        that.UpdateShareMsg(res.data);
        if (type == 2) {
          that.UpdateMsgShare(bookid);
        }
      }).catch(res => {
        console.log("获取动态消息失败");
      })
  },
  UpdateShareMsg(resobj) { //更新动态消息
    var that = this;

    wx.updateShareMenu({
      withShareTicket: true,
      isUpdatableMessage: true,
      activityId: resobj.ActivityID,
      targetState: 0,
      templateInfo: {
        parameterList: [{
          name: 'member_count',
          value: resobj.Bookber
        }, {
          name: 'room_limit',
          value: resobj.Number
        }, {
          name: 'version_type',
          value: 'trial'
        }]
      }
    })

  },
  UpdateMsgShare(bookid) { //更新动态消息
    var that = this;

    var url = getApp().globalData.DBrequesturl + '/UpdateActivityMsg';
    var params = {
      dynamicid: that.data.id,
      bookid: bookid
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.log("更新动态消息成功:", res);
    }).catch(res => {
      console.error("更新动态消息失败:", res);
    })
  },
  GetComments() { //获取动态评论列表
    var that = this;

    var url = getApp().globalData.DBrequesturl + '/CommentDynamicList';
    var params = {
      id: that.data.id,
      page: that.data.pageindex,
      rows: that.data.pagesize
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.log("评论列表:", res);
      if (that.data.pageindex == 1) {
        that.setData({
          comments: res.data
        })
      } else {
        var datalist = that.data.comments;
        datalist.concat(res.data);
        that.setData({
          comments: datalist
        })
      }

    }).catch(res => {
      console.error("评论列表报错:", res);
    })
  },
  GetWxUserInfo() { //获取用户信息，账户余额
    var that = this;

    var url = getApp().globalData.DBrequesturl + '/GetWxUserDetail';
    var params = {
      openid: getApp().globalData.openId
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.log("用户信息:", res);

      that.setData({
        account: res.data.Money == null ? 0 : res.data.Money
      })
    }).catch(res => {
      console.error("用户信息报错:", res);
      that.setData({
        account: 0
      })
    })
  },
  //更新活动状态
  UpdateStatus() {
    var that = this;

    var url = getApp().globalData.DBrequesturl + '/DynamciTimeOut';
    var params = {
      id: that.data.id
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.log("更新活动状态:", res);
      //获取陪伴信息
      that.GetDynamicInfo();
    }).catch(res => {
      console.error("更新活动状态报错:", res);
      //获取陪伴信息
      that.GetDynamicInfo();
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
    var url = getApp().globalData.DBrequesturl + "/DynamicShare";
    var params = {
      id: that.data.id,
      openid: getApp().globalData.openId,
      type: that.data.dataobj.Type
    };
    WxRequest.GetRequest(url, params).then(res => {
      console.error("分享成功", res);
    }).catch(res => {
      console.error("分享失败", res);
    })
  }
})