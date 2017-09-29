// pages/core/shangke/shangke.js
Page({
  data: {
    listData: [
      { "code": "经院官网", "text": "0571-86928099" },
      { "code": "校园保卫处", "text": "0571-86928110" },
      { "code": "教务科", "text":"0571-86928019"},
      { "code": "教学科", "text":"0571-86923316"},
      { "code": "实践教学与技能考证科", "text":"0571-86928030"},
      { "code": "教学数据科", "text":"0571-86928026"},
      { "code": "数字信息技术学院", "text": "0571-86928066 " },
      { "code": "物流技术学院", "text": "0571-86928095" },
      { "code": "汽车技术学院", "text": "0571-86928277" },
      { "code": "管理技术学院", "text": "0571-86928080" },
      { "code": "财会金融学院", "text": "0571-86928099" },
      { "code": "文化艺术学院", "text": "0571-86928283" },
      { "code": "商贸流通学院", "text": "0571-86928272" },
      { "code": "招生就业处", "text": "0571-86928112" },
      { "code": "招生就业处", "text": "0571-86928113" },
  ]
  },
  onLoad: function () {
    var that = this;
    wx.showLoading({
      title: '数据载入中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    wx.request({
      url: 'https://zjite.applinzi.com/api/time_table/air_classroom.php', //仅为示例，并非真实的接口地址
      data: {
        openid:'信息科学楼'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
          that.setData({
            air_class: res.data
          })
          console.log(res.data)
      }
    })
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