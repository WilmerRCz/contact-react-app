import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuth } from '../../../context/AuthContext'
import { CreateContactPayload } from '../../../../@types/Contact'
import getContactService from '../../../../services/contactService'

export default function useCreateContact (refetchContacts: () => void, data?: CreateContactPayload) {
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleContactSubmit = useCallback(async () => {
    setLoading(true)
    try {
      await getContactService(token).create(data as CreateContactPayload)
      toast.success('Creating contact')
      refetchContacts()
    } catch (error) {
      console.log(error)
      toast.error('Error creating contact')
    } finally {
      setLoading(false)
    }
  }, [refetchContacts, data, token])

  return {
    handleContactSubmit,
    loading
  }
}
