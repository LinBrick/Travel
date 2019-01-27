const mutations = {
  changeCity(state, city) {
    state.city = city
    localStorage && (localStorage.city = city)
  }
}

export default mutations
