import axios from 'axios'
import getToken from '@/utils/get_token'

export default (param = {isNotAuthenticate: false}) => {
  if (param.isNotAuthenticate === true) {
    return axios
  }

  const token = getToken()
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  return axios
}
