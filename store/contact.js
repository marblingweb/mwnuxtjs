import axios from 'axios'
import { APIURL } from './config'

export const actions = {
  SEND_FORM (context, data) {
    return new Promise((resolve, reject) => {
      axios.post(APIURL + '/mailsend', data).then(() => {
        resolve()
      }).catch(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject()
      })
    })
  }
}
