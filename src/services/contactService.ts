import axios from 'axios'
import { Contact, CreateContactPayload, UpdateContactPayload } from '../@types/Contact'

const baseURL = `${import.meta.env.VITE_API_BASE_URL}/v1/contacts`

const getContactClient = (token?: string) => axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`
  }

})

const getContactService = (token?: string) => {
  const getAll = async (): Promise<Contact[]> => {
    const { data } = await getContactClient(token).get('/')
    return data
  }

  const getById = async (id: string): Promise<Contact> => {
    const { data } = await getContactClient(token).get(`/${id}`)
    return data
  }

  const create = async (payload: CreateContactPayload): Promise<Contact> => {
    const { data } = await getContactClient(token).post('/', payload)
    return data
  }

  const update = async (id: string, payload: UpdateContactPayload): Promise<Contact> => {
    const { data } = await getContactClient(token).put(`/${id}`, payload)
    return data
  }

  const remove = async (id: string): Promise<void> => {
    const { data } = await getContactClient(token).delete(`/${id}`)
    return data
  }

  return {
    getAll,
    getById,
    create,
    update,
    remove
  }
}

export default getContactService
