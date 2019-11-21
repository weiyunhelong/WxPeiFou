//index.js
//获取应用实例
const app = getApp()

import initCalendar, {
  setTodoLabels,
  setSelectedDays,
  getSelectedDay
} from '../../components/calendar/main.js'; //日历组件


Page({
  data: {
    blockid: 0,
    bgcolor: '#ffffff',
    color: "#cccccc",
    selectedColor: '#333333',
    showborder: true,
    bordercolor: "#333333",
    tabbar: [{
      pagePath: "page/home0/index",
      selectedIconPath: '/resources/homeh.png',
      iconPath: '/resources/home.png',
      text: '首页A',
      isdot: false,
      number: 0
    }, {
      pagePath: "page/home1/index",
      selectedIconPath: '/resources/kindh.png',
      iconPath: '/resources/kind.png',
      text: '首页B',
      isdot: true,
      number: 0
    }, {
      pagePath: "page/home2/index",
      selectedIconPath: '/resources/myh.png',
      iconPath: '/resources/my.png',
      text: '首页C',
      isdot: false,
      number: 5
    }, {
      pagePath: "page/home3/index",
      selectedIconPath: '/resources/myh.png',
      iconPath: '/resources/my.png',
      text: '首页D',
      isdot: false,
      number: 100
    }],
    slideButtons: [{
      type: 'warn',
      text: '删除',
      extClass: 'test',
      src: '', // icon的路径
    }], 
    policyobj: {
      policy: '',
      showMask: false
    },
  },
  onLoad: function(options) {
    var that = this;

    var policyobj = {
      policy: '<p><div style="color:red;">这里是富文本</div></p>',
      showMask: true
    }
    that.setData({
      policyobj: policyobj
    })
  },
  tabbarChange(e) { //tabbar 点击切换

    var index = parseInt(e.detail);
    this.setData({
      blockid: index
    })
  },
  getsearchkey(e) { //获取到搜索的值
    var that = this;
    console.log("搜索的关键词:", e.detail.value);
  },
  ndelopt(e){//滑动删除
    var that = this;
    console.log("滑动删除:", e);
  },
  //禁止滑动
  closepolicy: function () {

    var policyobj = {
      policy: '',
      showMask: false
    }
    this.setData({
      showMask: false,
      policyobj: policyobj
    })
  },
  onShow: function() {

    initCalendar({
      multi: true,
      whenChangeMonth(current, next) {
        console.log(current);
        console.log(next);
      },
      afterCalendarRender(ctx) {
        const data = [{
            year: '2019',
            month: '11',
            day: '15'
          },
          {
            year: 2019,
            month: 11,
            day: 18,
            todoText: '待办'
          }
        ];
        // 异步请求
        setTimeout(() => {
          setTodoLabels({
            pos: 'bottom',
            dotColor: '#40',
            days: data
          });
        }, 1000);
        setTimeout(() => {
          setSelectedDays(data);
        }, 2000);
      }
    });
  },
  //获取选中的日期
  getcalendar: function(e) {
    console.log("选中的日期:", e);
  },
})