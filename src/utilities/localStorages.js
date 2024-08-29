export function localStorages(token) {
  localStorage.setItem('token', token)
}

export const checkValidToken = () => {
  const token = localStorage.getItem('token')
  return token
}