若getHotList是API接口（异步），场景：在第一个接口拿到结果以后继续调用第二个接口，
可以通过return来优雅的使用Promise,而不是回调地狱

//  good
bookModel.getHotList()
  .then(res => {
    console.log(res)
    return bookModel.getHotList2()
  })
  .then(res => {
    console.log(res)   //bookModel.getHotList2 成功后的结果
    return bookModel.getHotList3()
  })
  .then(res=>{
    console.log(res)   //bookModel.getHotList2 成功后的结果
  })


//  bad   虽然使用了promise 但还是回调地狱  等于 滥用promise
bookModel.getHotList()
  .then(res => {
    console.log(res)
    bookModel.getHotList2()
      .then(res => {
        console.log(res)    //bookModel.getHotList2 成功后的结果
        bookModel.getHotList3()
          .then(res=>{
            console.log(res)  //bookModel.getHotList2 成功后的结果
          })
      })
  })
