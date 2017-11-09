export default {

  updateUserInfo: function (state, userinfo) {
    state.uid = userinfo.uid
    state.uname = userinfo.uname
    state.token = userinfo.token
  }

}
