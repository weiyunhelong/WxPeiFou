import initCalendar, {
  setTodoLabels,
  setSelectedDays,
  getSelectedDay
} from '../../components/calendar/main.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      initCalendar({
        multi: true,
        whenChangeMonth(current, next) {
          console.log(current);
          console.log(next);
        },
        afterCalendarRender(ctx) {
          const data = [{
            year: '2019',
            month: '3',
            day: '15'
          },
          {
            year: 2019,
            month: 3,
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
          // enableArea(['2018-10-7', '2018-10-28']);
          setTimeout(() => {
            setSelectedDays(data);
          }, 2000);
        }
      });
  },
  //获取选中的日期
  jump:function() {
    console.log(getSelectedDay());
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})