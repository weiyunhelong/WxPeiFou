// components/search/index.js
var utils = require('../../utils/time.js');
var WxRequest = require('../../utils/WxRequest.js');
var MapTrans = require('../../utils/maptrans.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function(newVal, oldVal) {

        var that = this;
        //赋值
        that.setData({
          searchtype: newVal.searchtype,
          today: newVal.today == '' ? utils.getNowDate() : newVal.today,
          date: newVal.date == '' ? utils.getMorenDate() : newVal.date,
          starttime: newVal.starttime == '' ? utils.getNowTime() : newVal.starttime,
          endtime: newVal.endtime == '' ? utils.getNowNextTime() : newVal.endtime,
          searchkey: newVal.searchkey,
          city: newVal.city
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    searchkey: '',
    city: '上海市',
    date: '',
    starttime: '',
    endtime: "",
    today: "",
    searchtype: 0, //0-展示 1-搜索
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getsearchkey(e) { //获取搜索关键词
      this.setData({
        searchkey: e.detail.value
      })
    },
    getpostion() { //点击定位
      var that = this;

      wx.getLocation({
        type: 'wgs84',
        success(res) {

          wx.showToast({
            title: '定位中...',
            icon: "none"
          })

          var latitude = res.latitude;
          var longitude = res.longitude;
          var mapobj = MapTrans.qqMapTransBMap(longitude, latitude);

          var url = getApp().globalData.AddressApi + "/geocoder?location=" + mapobj.lat + "," + mapobj.lng + "&output=json";
          WxRequest.GetRequest(url, {}).then(res => {
            console.log("获取城市:", res);

            that.setData({
              city: res.data.result.addressComponent.city
            })


          }).catch(res => {
            console.log("获取城市报错:", res);
          })
        },
        fail(res) {
          wx.hideToast();

          wx.showModal({
            title: '温馨提示',
            content: '请允许授权获取到您的地理位置',
            showCancel: false,
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')

                wx.openSetting({
                  success: function(data) {
                    if (data.authSetting["scope.userLocation"] === true) {
                      that.getpostion();
                    }
                  }
                })
              }
            }
          })
        }
      })

    },
    bindDateChange(e) { //获取日期
      var date = e.detail.value;
      var dt = utils.getSelectDate(date);
      this.setData({
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
    searchopt() { //点击搜索
      var that = this;

      //参数部分
      var params = {
        city: that.data.city,
        searchkey: that.data.searchkey,
        date: that.data.date,
        starttime: that.data.starttime,
        endtime: that.data.endtime,
      };

      if (that.data.searchtype == 0) {

        wx.setStorage({
          key: 'searchopt',
          data: params,
        })
        wx.navigateTo({
          url: '../search/index'
        })
      } else {
        that.triggerEvent('searchopt', params);
      }
    },
  }
})