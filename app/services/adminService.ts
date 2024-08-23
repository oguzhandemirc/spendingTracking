import axiosInstance from './axiosInstance'

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get('/api/Authentication/users')
    return response
  } catch (error) {
    console.error(error)
  }
}

export const deleteUser = async (username: string) => {
  try {
    const response = await axiosInstance.delete(`/api/Admin/delete-user?username=${username}`)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const addUser = async (username: string, password: string, role: string) => {
  try {
    const response = await axiosInstance.post('/api/Admin/users', { username, password, role })
    return response
  } catch (error) {
    console.error(error)
  }
}

export const createUser = async (username: string, password: string, role: string) => {
  try {
    const response = await axiosInstance.post('/api/Admin/add-user', { username, password, role })
    return response
  } catch (error) {
    console.error(error)
  }
}

export const userDetail = async (username: string) => {
  try {
    const response = await axiosInstance.get(`/api/Admin/user-details?username=${username}`)
    return response
  } catch (error) {
    console.error(error)
  }
}
