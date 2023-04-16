import { useCallback, useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import getContactService from '../../../../services/contactService'
import { toast } from 'react-hot-toast'

export default function useRemoveContact (id: string, refetchContacts: () => void) {
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleRemove = useCallback(async () => {
    setLoading(true)
    try {
      await getContactService(token).remove(id)
      refetchContacts()
      toast.success('Deleting contact')
    } catch (error) {
      console.log(error)
      toast.error('Error removing contact')
    } finally {
      setLoading(false)
    }
  }, [token, id, refetchContacts])
  return {
    loading,
    handleRemove
  }
}
