import axiosInstance from './axiosInstance'

export const _postUserLogin = async (username: string, password: string) => {
  try {
    const _responose = await axiosInstance.post('/Authentication/login', { username, password })
    localStorage.setItem('token', _responose.data.token)
    localStorage.setItem('username', username)
    console.log(_responose)
    return _responose
  } catch (error) {
    console.error(error)
  }
}
