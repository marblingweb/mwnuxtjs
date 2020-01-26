export default {
  state () {
    return {
      web: [],
      comments: [],
      alldata: [],
      data: {},
      nextdata: {},
      prevdata: {}
    }
  },
  mutations: {
    SET_ALLDATA: (state, data) => {
      state.alldata = data
    },
    SET_WEBPROJECT: (state, data) => {
      state.web = data
    },
    SET_COMMENTS: (state, data) => {
      state.comments = data
    },
    SET_DATA: (state, data) => {
      state.data = data.singledata
      state.nextdata = data.nextdata
      state.prevdata = data.prevdata
    }
  },
  getters: {
    web: state => state.web,
    comments: state => state.comments,
    alldata: state => state.alldata,
    data: state => state.data,
    nextdata: state => state.nextdata,
    prevdata: state => state.prevdata
  }
}
