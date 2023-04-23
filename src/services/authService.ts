import axios from 'axios'
import { LoginPayload, RegisterPayload } from '../@types/User'
import envs from '../config/envs'

const baseUrl = `${envs.API_BASE_URL}/v1/auth`

export const login = async (payload: LoginPayload) => {
  const { data } = await axios.post(`${baseUrl}/login`, payload)
  return data
}

export const register = async (payload: RegisterPayload) => {
  const { data } = await axios.post(`${baseUrl}/register`, payload)
  return data
}

const getAuthService = () => ({
  login,
  register
})

export default getAuthService
