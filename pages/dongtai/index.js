// pages/dongtai/index.js
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
    interval: 2000,
    duration: 500,
    /*活动信息*/
    imgs: ['/resources/sucai/1.jpg', '/resources/sucai/2.jpg', '/resources/sucai/3.jpg', '/resources/sucai/4.jpg'],//活动的图
    userAvatarUrl:'/resources/tx.jpeg',//发布着的头像
    userNickName: '小美',//发布着的昵称
    userId: 0,//发布着的ID
    userDesc: '个人信息',//发布着的简介
    title: '标题',//活动标题
    date: '2019年11月14日',//活动日期
    startdt: '15:00',//活动开始时间
    enddt: '17:30',//活动结束时间
    desc:'此处展示详情内容 （如果用户没有填写此处空）',//活动详情
    /*活动地址*/
    lng: '121.323',
    lat: '31.123',
    markers: [{
      id: 1,
      latitude: '31.123',
      longitude: '121.323',
      iconPath: '/resources/mapicon.png',
      width: 32,
      height: 32
    }],
    numbers:5,//活动人数
    money:9999,//活动费用
    wechat:'5213435',
    phone: '188187383618',//联系电话
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("接受参数", options);
    this.setData({
      id: options.id,
      money:options.money
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
  gouserdetail(){//点击跳转到用户详情
    var that=this;
    wx.navigateTo({
      url: '../user/index?id=' + that.data.userId,
    })
  },
  previewimg(){//点击微信二维码
     wx.previewImage({
       urls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575792203952&di=7bcaafee62893e1b2e4e14546b8a35c7&imgtype=0&src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp69921918.jpg'],
     })
  },
  gocommentopt(){//点击用户评价
    var that = this;
    wx.navigateTo({
      url: '../pingjia/index?id=' + that.data.id,
    })
  },
  makecallopt() { //拨打电话
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.phone
    })
  },
  payforopt(){//发起支付
    wx.showToast({
      title: '支付成功',
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