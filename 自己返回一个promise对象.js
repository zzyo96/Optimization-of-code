import {postAction} from '@/api/manage'
import {axios} from '@/utils/request'

export const FormSubmit = {
  data() {
    return {
      btnSubmitDisabled: false
    }
  },
  methods: {
    submitFormHandle(formUrl, params) {
      this.btnSubmitDisabled = true;
      return new Promise((resolve, reject) => {
        postAction(formUrl, params).then((res) => {
          this.btnSubmitDisabled = false;
          resolve(res)
        }, (res) => {
          this.btnSubmitDisabled = false;
          reject(res)
        });
      });
    }
  }
};


//使用的时候

this.submitFormHandle(url,params).then((res)=>{
  console.log(res,'成功')  
},(res){
  console.log(res,'失败')
});