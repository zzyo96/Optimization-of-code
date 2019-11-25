const detail = bookModel.getDetail(bid)
const comments = bookModel.getComments(bid)
const likeStatus = bookModel.getLikeStaus(bid)

promise.all([detail,comments,likeStatus])
.then(res =>{
  this.setData({
    detail:res[0],
    comments:res[1],
    likeStatus:res[2]
  })
  wx.hideLoading()
})
