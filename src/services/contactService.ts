import axios from 'axios'
import { Contact, CreateContactPayload, UpdateContactPayload } from '../@types/Contact'

const baseUrl = 'http://localhost:4000/v1/contacts/'

export const getAll = async (): Promise<Contact[]> => {
  const { data } = await axios.get(baseUrl)
  return data
}

export const getById = async (id: string): Promise<Contact> => {
  const { data } = await axios.get(`${baseUrl}/${id}`)
  return data
}

export const create = async (payload: CreateContactPayload): Promise<Contact> => {
  const { data } = await axios.post(baseUrl, payload)
  return data
}

export const update = async (id: string, payload: UpdateContactPayload): Promise<Contact> => {
  const { data } = await axios.post(`${baseUrl}/${id}`, payload)
  return data
}

export const remove = async (id: string): Promise<void> => {
  const { data } = await axios.post(`${baseUrl}/${id}`)
  return data
}

const getContactService = () => ({
  getAll,
  getById,
  create,
  update,
  remove
})

export default getContactService
