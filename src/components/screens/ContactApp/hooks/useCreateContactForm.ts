import { useForm } from 'react-hook-form'
import type { CreateContactPayload } from '../../../../@types/Contact'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from '../../../../schemas/contactSchema'
import { useAuth } from '../../../context/AuthContext'
import { useState } from 'react'
import getContactService from '../../../../services/contactService'
import { toast } from 'react-hot-toast'
import removeEmptyFields from '../../../../utils/removeEmptyFields'

export default function useCreateContactForm (refetchContacts: () => void, closeModal: () => void) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateContactPayload>({
    resolver: yupResolver(contactSchema)
  })
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = handleSubmit(async data => {
    setLoading(true)
    try {
      const dataClean = removeEmptyFields(data)
      await getContactService(token).create(dataClean as CreateContactPayload)
      toast.success('Creating contact')
      refetchContacts()
      closeModal()
      reset()
    } catch (error) {
      console.log(error)
      toast.error('Error creating contact')
    } finally {
      setLoading(false)
    }
  })

  return {
    register,
    loading,
    errors,
    handleSubmit: handleFormSubmit
  }
}
