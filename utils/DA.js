//谷歌数据监测
var ga = require('../utils/ga.js');
var HitBuilders = ga.HitBuilders;
var CampaignParams = ga.CampaignParams;
var GoogleAnalytics = ga.GoogleAnalytics;


//监测页面
const viewPage = page => {

  var campaignUrl = getApp().globalData.campaignUrl;
  var advertcampaignUrl = getApp().globalData.advertcampaignUrl;

  //谷歌埋点数据部分
  var t = getApp().getTracker();
  t.set("&uid", getApp().globalData.openId);
  t.setScreenName(page);
  t.setCampaignParamsOnNextHit(campaignUrl);
  t.send(new HitBuilders.ScreenViewBuilder().
    setCampaignParamsFromUrl(advertcampaignUrl).build());
}

//监测事件
const viewClick = (page, action, label) => {
  var campaignUrl = getApp().globalData.campaignUrl;

  //谷歌埋点数据部分
  var t = getApp().getTracker();
  t.set("&uid", getApp().globalData.openId);
  t.setCampaignParamsOnNextHit(campaignUrl);
  t.send(new HitBuilders.EventBuilder()
    .setCategory(page)
    .setAction(action)
    .setLabel(label) // 可选
    .setValue(1).build()); // 可选
}

module.exports = {
  viewPage: viewPage, //监测页面
  viewClick: viewClick, //监测点击事件
}