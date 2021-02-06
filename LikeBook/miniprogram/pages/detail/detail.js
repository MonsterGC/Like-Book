// client/pages/detail/detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    publisher: '',
    collect: '',
    available: '',
    name: '',
    author: '',
    intro: '',
    ISBN: '',
    image: '',
    current: 0,
    callNumber: null,
    isBorrow: 0,
    showModal: false,
    timeList: ['7天', '14天', '30天']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(param) {
    this.setData({
      bookid: param.id
    })
    const bookId = param.id;
  },
  //tab点击切换
  changeSwiperPage: function(e) {
    this.setData({
      current: e.target.dataset.current
    })
  },
  //获取是否收藏
  getCollect: function(bookid) {
    
  },
  //取消收藏
  cancelCollect: function() {
    
  },
  //添加收藏
  collectBook: function() {
    
  },
  handleCollect(bookid, iscollect) {
    
  },
  //获取借阅状态
  getBorrow(bookid) {
    
  }
})