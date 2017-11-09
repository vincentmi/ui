import Axios from 'axios'
export default {

  post: function () {
    console.log(this)
  },
  postNoAuth: function (context, url, postData, callback) {
    Axios.post(url, postData)
      .then(response => {
        this.__parseResponse(context, response, callback)
      })
  },

  __parseResponse: function (context, response, callback) {
    let rcode = parseInt(response.status)
    console.log(rcode + '=' + rcode + ',type=' + typeof (rcode))
    if (rcode === 200) {
      var data = response.data
      console.log(data)
      let code = parseInt(data.code)
      if (code !== 200) {
        context.$message.error('登录失败,code=' + data.code + ',msg=' + data.message)
        context.$Progress.fail()
      } else {
        callback(data.data)
      }
    } else {
      context.$message.error('服务器错误,code=' + response.status + ',msg=' + response.statusText)
      context.$Progress.fail()
    }
  }
}
