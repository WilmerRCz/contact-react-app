import { SubmitHandler, useForm } from 'react-hook-form'
import type { Contact, CreateContactPayload } from '../@types/Contact'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from '../schemas/contactSchema'
import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'
import getContactService from '../services/contactService'
import { useAuth } from '../components/context/AuthContext'

  interface Props {
    refetchContacts: () => void
  }

export default function useContactForm (refetchContacts):Props {
  const [loading, setLoading] = useState(false)
  const { token } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<Contact>({
    resolver: yupResolver(contactSchema)
  })
  const onSubmit: SubmitHandler<CreateContactPayload> = useCallback(async (data) => {
    setLoading(true)
    try {
      await getContactService(token).create(data)
      refetchContacts()
    } catch (error) {
      console.log(error)
      toast.error('Error creating contact')
    } finally {
      setLoading(false)
    }
  }, [refetchContacts, token])

  return {
    onSubmit,
    register,
    handleSubmit,
    loading,
    errors
  }
}
