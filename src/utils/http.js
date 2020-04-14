import http from 'axios'
import getToken from '@/utils/get_token'
const token = getToken()

http.defaults.headers.common['Authorization'] = `Bearer ${token}`
export default http