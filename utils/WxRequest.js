//promise get请求方式
function GetRequest(url, params) {
  var promise = new Promise((resolve, reject) => {

    //网络请求
    wx.request({
      url: url,
      data: params,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) { //服务器返回数据
        resolve(res);
      },
      fail: function(e) {
        reject('网络超时出错');
      }
    })
  });
  return promise;
}

//promise post请求方式
function PostRequest(url, params) {
  var promise = new Promise((resolve, reject) => {

    //网络请求
    wx.request({
      url: url,
      data: params,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) { //服务器返回数据
        ConsoleLog(url + "POST请求获取的数据:");
        resolve(res);
      },
      fail: function(e) {
        reject('网络超时出错');
      }
    })
  });
  return promise;
}

//打log方法
function ConsoleLog(obj) {
  console.log(obj);
}

//打标签，请求方式
function AddTag(category, action, lable, value) {
  var promise = new Promise((resolve, reject) => {

    var that = this;
    //请求接口，进行打标签
    wx.request({
      url: getApp().globalData.Viewrequesturl + getApp().globalData.store_id + '/' + getApp().globalData.scrm_id,
      data: {
        openid: getApp().globalData.openId,
        unionid: getApp().globalData.unionid,
        category: category,
        action: action,
        lable: lable,
        value: value
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      success: function(res) {
        ConsoleLog("打标签接口");
        ConsoleLog(res);
        resolve(res);
      },
      fail: function(res) {
        reject('网络超时出错A');
      }
    })
  });
  return promise;
}

//显示提示 type 1:成功的提示，2：失败的提示，其他的是替换图片
function ShowAlert(type, msg, image) {
  if (type == 1) {
    wx.showToast({
      title: msg,
    })
  } else if (type == 2) {
    wx.showToast({
      title: msg,
      image: image
    })
  } else {
    wx.showToast({
      title: msg,
      icon: "none"
    })
  }
}

//对外暴露的方法
module.exports = {
  GetRequest: GetRequest, //Get请求的方式
  PostRequest: PostRequest, //POST请求的方式
  ConsoleLog: ConsoleLog, //打log的方式
  AddTag: AddTag, //打标签
  ShowAlert: ShowAlert, //弹窗显示提示
}