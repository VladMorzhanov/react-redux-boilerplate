import axios from 'axios'
import { baseAPIurl } from '../constants/common'

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Accept-Language'] = 'en'
axios.defaults.baseURL = baseAPIurl()

// API class example, update with you configuration is needed

class API {
  static getData(url, params) {
    return axios({
      method: 'GET',
      url,
      params
    })
  }

  static postData(url, data) {
    return axios({
      method: 'POST',
      url,
      data
    })
  }

  static patchData(url, data) {
    return axios({
      method: 'PATCH',
      url,
      data
    })
  }

  static putData(url, data) {
    return axios({
      method: 'PUT',
      url,
      data
    })
  }

  static deleteData(url, data) {
    return axios({
      method: 'DELETE',
      url,
      data
    })
  }
}

export default API
