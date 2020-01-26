import axios from 'axios'
import { APIURL } from './config'

export const actions = {
  async nuxtServerInit ({ commit }) {
    await axios.get(APIURL + '/infos').then((resp) => {
      commit('webconfig/SET_CONFIG', resp.data)
    })
    await axios.get(APIURL + '/slider').then((sliders) => {
      commit('webconfig/SET_SLIDER', sliders.data)
    })
    await axios.get(APIURL + '/getcity').then((resp) => {
      commit('webconfig/SET_CITY', resp.data)
    })
    await axios.get(APIURL + '/alldatas').then((resp) => {
      commit('datas/SET_ALLDATA', resp.data.datas)
    })
    await axios.get(APIURL + '/parent/web-tasarimlari').then((resp) => {
      commit('datas/SET_WEBPROJECT', resp.data.datas)
    })
    await axios.get(APIURL + '/parent/yorumlar').then((resp) => {
      commit('datas/SET_COMMENTS', resp.data.datas)
    })
  },
  GET_DATA (context, link) {
    axios.get(APIURL + '/singledata/' + link).then((resp) => {
      context.commit('datas/SET_DATA')
    })
  }
}
