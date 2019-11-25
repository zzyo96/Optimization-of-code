data:{
  loading；false
}

methods:{
  _load_more)(){
    if(this.data.loading){
      return
    }

    const length = this.data.dataArray.length
    this.data.loading = true
    bookModel.search(length,this.data.q).then(res=>{
      const tempArray = this.data.dataArray.concat(res.books)
      this.setData({
        dataArray:tempArray
      })
      this.data.loading = false
    })
  }
}
