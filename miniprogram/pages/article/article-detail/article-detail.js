var { articles } = require('../../../data/db.js')
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
    var articleId = options.articleId;
    var article = articles[articleId];
    //处理收藏状态
    var articles_collection = wx.getStorageSync('articles_collection')
    var isCollected = false;
    if (!articles_collection){
      /**
       * {
       *  "0":false,
       *  "1":true
       * }
       */
      var data = {

      }
      data[articleId] = false;
      wx.setStorageSync('articles_collection', data)
    }else{
      isCollected = !!articles_collection[articleId]
    }
    this.setData({ ...article, isCollected:isCollected})
  },
  /** 处理收藏*/
  topCollect:function(){
    /** 
    wx.setStorageSync('key1',123)
    wx.setStorageSync('key2', 'hello')
    wx.setStorageSync('key3', {
      nome:'tom'
      })
    wx.setStorageSync('key1', 555)
    console.log(wx.getStorageSync('key1'))
    console.log(wx.getStorageSync('key2'))
    console.log(wx.getStorageSync('key3'))

    wx.removeStorageSync('key1')
    wx.clearStorageSync()
    */
    var articles_collection = wx.getStorageSync('articles_collection');
    var isCollected = articles_collection[this.data.articleId];
    //改变storage里面的数据
    articles_collection[this.data.articleId] =!isCollected;
    wx.setStorageSync('articles_collection', articles_collection)
    //改变视图页面
    this.setData({
      isCollected: !isCollected
    },function(){
      wx.showToast({
        title: isCollected ? '取消成功' : '收藏成功',
      })
    })
  },
  /**处理分享 */
  tapShare:function(){
    var itemList = ['分享到朋友圈','分享到微博','分享到soul']
    wx.showActionSheet({
      itemList: itemList,
      success:function(res){
        wx.showToast({
          title: itemList[res.tapIndex] + '成功',
        })
      }
    })
  },
  /**处理播放音乐 */
  tapMusic:function(){
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.src = 'http://sc1.111ttt.cn:8282/2017/1/11/11/304112003137.mp3?tflag=1546606800&pin=97bb2268ae26c20fe093fd5b0f04be80';
    backgroundAudioManager.title='远走高飞';
  }
})