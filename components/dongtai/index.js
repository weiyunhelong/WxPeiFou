// components/dynamic/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function(newVal, oldVal) {
        console.log("动态参数", newVal);
        var that = this;
        //赋值
        that.setData({
          id: newVal.ID,
          dataobj:newVal,
          hasUserInfo: getApp().globalData.hasUserInfo,
          dt: that.TimeFormat(newVal.StartDt, newVal.EndDt)
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    hasUserInfo: false,
    id: 0,
    dataobj:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    TimeFormat(stime,etime){
      var sdt = new Date(stime);
      var edt = new Date(etime);
      var year=sdt.getFullYear();
      var month=sdt.getMonth()+1;
      var day=sdt.getDate();

      month = month<10?'0'+month:month;
      day=day<10?'0'+day:day;

      var shour=sdt.getHours();
      var smin=sdt.getMinutes();
      shour = shour < 10 ? '0' + shour : shour;
      smin = smin < 10 ? '0' + smin : smin;

      var ehour = edt.getHours();
      var emin = edt.getMinutes();
      ehour = ehour < 10 ? '0' + ehour : ehour;
      emin = emin < 10 ? '0' + emin : emin;

      return year + "." + month + "." + day + "  " + shour + ":" + smin + "-"+ehour + ":" + emin;

    },
    godetail() { //点击跳转到动态详情
      var that = this;
      if (!that.data.hasUserInfo) {
        wx.navigateTo({
          url: '../wxlogin/auth',
        })
      } else {
        wx.navigateTo({
          url: '../../pages/dongtai/index?id=' + that.data.id + '&money=' + that.data.dataobj.dynamic.Money
        })
      }
    },
  }
})