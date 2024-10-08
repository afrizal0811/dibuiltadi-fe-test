import axios from 'axios'
import { getToken, localStorages } from './localStorages'

export const getApi = async (URL) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: getToken() ? `Bearer ${getToken()}` : '',
  }
  const url = await axios
    .get(URL, { headers })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
  return url
}

export const postApi = async (URL, params) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: getToken() ? `Bearer ${getToken()}` : '',
  }
  const url = await axios
    .post(URL, params, { headers })
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error.response
    })
  return url
}

export const putApi = async (URL, params) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: getToken() ? `Bearer ${getToken()}` : '',
  }
  const url = await axios
    .put(URL, params, { headers })
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error.response
    })
  return url
}

export const apiValidation = (result) => {
  if (result.status >= 400) {
    const { response } = result ?? {}
    const { data } = result ?? {}
    if (response) return result.response.data.response_message
    else if (data) return result.data.errors
  } else {
    const { data } = result ?? {}
    const { access_token } = data ?? {}
    if (access_token) {
      localStorages(result.data.access_token)
      return false
    }
  }
}
