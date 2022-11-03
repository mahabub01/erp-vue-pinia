const ID_TOKEN_KEY = 'service_jwt_token'
const ID_REFRESH_KEY = 'service_jwt_refresh'
const ID_EXPIRES_KEY = 'service_jwt_expires'
const ID_LOGIN_TIME_KEY = 'service_jwt_login_time'
const ID_DEVICE_TOKEN_KEY = 'service_device_token'

export const isAuthenticated = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY)
}
export const setAuthenticated = val => {
  window.localStorage.setItem(ID_TOKEN_KEY, val)
}
export const getDeviceToken = () => {
  return window.localStorage.getItem(ID_DEVICE_TOKEN_KEY)
}
export const saveDeviceToken = val => {
  window.localStorage.setItem(ID_DEVICE_TOKEN_KEY, val)
}
export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY)
}
export const saveToken = token => {
  window.localStorage.setItem(ID_TOKEN_KEY, `${token.token_type} ${token.access_token}`)
  window.localStorage.setItem(ID_REFRESH_KEY, token.refresh_token)
  window.localStorage.setItem(ID_EXPIRES_KEY, token.expires_in)
  window.localStorage.setItem(ID_LOGIN_TIME_KEY, Date.now())
}
export const getRefresh = () => {
  return window.localStorage.getItem(ID_REFRESH_KEY)
}

export const getExpiresIn = () => {
  return parseInt(window.localStorage.getItem(ID_EXPIRES_KEY))
}

export const getLoginTime = () => {
  return window.localStorage.getItem(ID_LOGIN_TIME_KEY)
}

export const destroy = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY)
  window.localStorage.removeItem(ID_REFRESH_KEY)
  window.localStorage.removeItem(ID_EXPIRES_KEY)
  window.localStorage.removeItem(ID_LOGIN_TIME_KEY)
}

export default {
  isAuthenticated,
  setAuthenticated,
  getDeviceToken,
  saveDeviceToken,
  getToken,
  saveToken,
  getRefresh,
  getExpiresIn,
  getLoginTime,
  destroy,
}
