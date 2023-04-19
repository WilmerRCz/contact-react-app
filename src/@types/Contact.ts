export interface Contact {
  id: string,
  firstName: string,
  lastName: string,
  image?: string,
  birth?: string,
  phone?: string,
  email?: string,
  company?: string,
  address?: string,
  website?: string,
  customField?: string,
  dataCustomField?: string
}

export type CreateContactPayload = Omit<Contact, 'id'>

export type UpdateContactPayload = Partial<CreateContactPayload>
