export default {
  state () {
    return {
      config: {},
      sliders: [],
      citys: []
    }
  },
  mutations: {
    SET_CONFIG (state, data) {
      state.config = data
    },
    SET_SLIDER (state, data) {
      state.sliders = data
    },
    SET_CITY: (state, data) => {
      state.citys = data
    }
  },
  getters: {
    config: state => state.config,
    sliders: state => state.sliders,
    citys: state => state.citys
  }
}
