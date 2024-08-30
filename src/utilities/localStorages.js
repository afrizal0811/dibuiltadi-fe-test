export function localStorages(token) {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  const token = localStorage.getItem('token')
  return token
}