class keyWordModel{
  key = 'q'
  maxLength = 10
  getHistory(){
    const words = wx.getStorageSync(this.key)
    if(!words){
      return []
    }
    return words
  }

  addToHistory(keyword){
    let words = this.getHistory()
    const has = words.includes(keyword)
    if(!has){
      //  数组末尾删除，keyword放在数组第一位
      const length = words.length;
      if(length >= this.maxLength){
        words.pop()
      }
      words.unshift(keyword)
      wx.setStorageSync(this.key,words)
    }
  }
}




