import axiosInstance from './axiosInstance'

export const _postUserLogin = async (username: string, password: string) => {
  try {
    const _responose = await axiosInstance.post('/api/Authentication/login', { username, password })
    localStorage.setItem('token', _responose.data.token)
    localStorage.setItem('username', username)
    return _responose
  } catch (error) {
    console.error(error)
  }
}

export const _postUserRegister = async (username: string, password: string, role: string) => {
  try {
    const _responose = await axiosInstance.post('/api/Authentication/register', { username, password, role })
    return _responose
  } catch (error) {
    console.error(error)
  }
}
