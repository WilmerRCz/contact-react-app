export interface Contact {
  id: number,
  firstName: string,
  lastName: string,
  image?: string,
  birth?: string,
  phone?: number,
  email?: string,
  company?: string,
  address?: string,
  website?: string,
  customField?: string,
  dataCustomField?: string
}

export type CreateContactPayload = Omit<Contact, 'id'>

export type UpdateContactPayload = Partial<CreateContactPayload>
