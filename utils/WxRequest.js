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

//腾讯检验文字的安全
var MsgSecCheck = function (txt) {
  var that = this;
  var url = getApp().globalData.DBrequesturl + "/MsgCheckSafe";
  var params = {
    conent: txt
  };

  wx.request({
    url: url,
    method: 'GET',
    data: params,
    success: function (res) {
      console.log("文字内容安全")
    }
  })
}

//腾讯检验图片的安全
var ImgSecCheck = function (filepath) {
  var that = this;
  var url = getApp().globalData.DBrequesturl + "/ImgCheckSafe";
  var params = {
    filepath: filepath
  };

  wx.request({
    url: url,
    method: 'GET',
    data: params,
    success: function (res) {
      console.log("图片内容安全")
    }
  })
}

//对外暴露的方法
module.exports = {
  GetRequest: GetRequest, //Get请求的方式
  PostRequest: PostRequest, //POST请求的方式
  ConsoleLog: ConsoleLog, //打log的方式
  ShowAlert: ShowAlert, //弹窗显示提示
  MsgSecCheck: MsgSecCheck,//验证文字的安全
  ImgSecCheck: ImgSecCheck,//验证图片的安全
}