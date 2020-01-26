import axios from 'axios'
import { APIURL } from './config'

export const state = () => ({
  token: ''
})

export const mutations = {
  SET_TOKEN: (state, data) => {
    state.token = data
  }
}

export const getters = {
  token: state => state.token
}

export const actions = {
  CREATE_TOKEN (context, data) {
    return new Promise((resolve) => {
      axios.post(APIURL + '/3dpay/createtoken', data).then((resp) => {
        if (resp.data.status) {
          context.commit('SET_TOKEN', resp.data)
          this.$cookies.set('token', JSON.stringify(resp.data))
          resolve(resp.data)
        }
      })
    })
  },
  DELETE_TOKEN (context) {
    this.$cookies.remove('token')
    context.commit('SET_TOKEN', null)
  }
}
