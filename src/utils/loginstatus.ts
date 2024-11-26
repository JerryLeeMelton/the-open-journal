export const checkLoginStatus = async (): Promise<{
  loggedIn: boolean
  user?: any
}> => {
  // const response = await fetch("/api/checklogin")
  // if (response.ok) {
  //   const data = await response.json()
  //   return data
  // }

  return { loggedIn: false, user: null }
}
