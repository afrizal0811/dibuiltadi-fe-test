import axios from 'axios'
import { localStorages, getToken } from './localStorages'

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
  const url = await axios
    .post(URL, params)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error.response
    })
  return url
}

export const apiValidation = (response) => {
  if (response.status >= 400) {
    return response.data.response_message
  } else {
    localStorages(response.data.access_token)
  }
}
