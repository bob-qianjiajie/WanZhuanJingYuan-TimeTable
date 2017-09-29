//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"]
  },
  onLoad: function () {
    var that = this;
    wx.showLoading({
      title: '数据载入中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    wx.getStorage({
      key: 'class_id',
      success: function (res) {
        wx.request({
          url: 'https://zjite.applinzi.com/api/time_table/class_time_table.php', //仅为示例，并非真实的接口地址
          data: {
            openid: res.data
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            if (res.data =='error'){
              wx.showLoading({
                title: '输入错误',
              })
              setTimeout(function () {
                wx.hideLoading()
                wx.redirectTo({
                  url: '../../pages/requ/requ'
                })
              }, 2000)
              
            }else{
              that.setData({
                class: res.data
              })
            }
            
          }
        })
      }
    })
  
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '经院课表',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
