
//时间的格式化，得到年月日时分秒
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//得到年月日
const getTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/')
}

//提示
const ShowAlert=(type,msg)=>{
  if(type==1){
    wx.showToast({
      title: msg,
    })
  }else{
    wx.showToast({
      title: msg,
      icon:'none'
    })
  }
}
module.exports = {
  formatTime: formatTime,
  getTime: getTime,
  ShowAlert:ShowAlert
}
