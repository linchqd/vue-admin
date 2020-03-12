const getters = {
  sidebar: function (state) {
    return state.app.state.sidebar
  },
  device: state => state.app.state.device
}
export default getters
