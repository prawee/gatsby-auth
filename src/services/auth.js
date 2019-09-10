export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
  ? JSON.parse(window.localStorage.getItem("gatsbyUser")) : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === `pod` && password === 'test') {
    return setUser({
      username: `pod`,
      name: `Prawee Wongsa`,
      email: `prawee@hotmail.com`
    })
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()
  return !! user.username
}

export const logout = callback => {
  setUser({})
  callback()
}