import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuth } from '../../../context/AuthContext'
import { Contact } from '../../../../@types/Contact'
import getContactService from '../../../../services/contactService'

export default function useAllContacts () {
  const { token } = useAuth()
  const [contacts, setContacts] = useState<Contact[]>()
  const [loading, setLoading] = useState(false)

  const handleFetch = useCallback(async () => {
    setLoading(true)
    try {
      const receivedContacts = await getContactService(token).getAll()
      setContacts(receivedContacts)
    } catch (error) {
      console.log(error)
      toast.error('Error fetching Contacts')
    } finally {
      setLoading(false)
    }
  }, [token])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return {
    contacts,
    refetch: handleFetch,
    loading
  }
}
