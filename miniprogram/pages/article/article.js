var { articles } = require('../../data/db.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
    articles:[
      {
        avatar:'../../images/wyc.jpg',
        date:'2019-05-07',
        title:'我是王翌宸',
        img:'../../images/swiper/wyc3.jpg',
        desc:'富士山下',
        star:30,
        view:'40'
      },
      {
        avatar: '../../images/wyc.jpg',
        date: '2019-05-08',
        title: '双叶幼稚园某之助',
        img: '../../images/swiper/wyc2.jpg',
        desc: '樱花盛开',
        star: 40,
        view: '50'
      }
    ]
    */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log('article onLoad')
    /*
    var articles = [
      {
        avatar: '../../images/wyc.jpg',
        date: '2019-05-07',
        title: '我是王翌宸',
        img: '../../images/swiper/wyc3.jpg',
        desc: '富士山下',
        star: 30,
        view: '40'
      },
      {
        avatar: '../../images/wyc.jpg',
        date: '2019-05-08',
        title: '双叶幼稚园某之助',
        img: '../../images/swiper/wyc2.jpg',
        desc: '樱花盛开',
        star: 40,
        view: '50'
      }
    ];
    */
    /** 
    this.setData({
      articles:articles
    },function(){
        console.log('out cb',this.data.articles)
    }.bind(this))
    console.log('out cb', this.data.articles)
    */

    this.setData({
      articles:articles
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log('article onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //console.log('article onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //console.log('article onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //console.log('article onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //console.log('article onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log('article onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    //console.log('article onShareAppMessage')
  },
  tapArticleItem:function(ev){
    var articleId = ev.currentTarget.dataset.articleId;
    wx.navigateTo({
      url: './article-detail/article-detail?articleId='+articleId,
    })
  }
})
