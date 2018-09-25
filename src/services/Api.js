import axios from 'axios'
import store from '@/store'

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      Authorization: store.getters.user ? `Bearer ${store.getters.user.token}` : ''
    }
  })
}
