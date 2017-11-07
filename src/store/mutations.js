export default {

  update: function (state, userinfo) {
    state.uid = userinfo.uid
    state.name = userinfo.name
    state.token = userinfo.token
  }

}
