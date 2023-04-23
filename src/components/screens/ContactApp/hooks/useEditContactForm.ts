import { SubmitHandler, useForm } from 'react-hook-form'
import type { UpdateContactPayload } from '../../../../@types/Contact'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from '../../../../schemas/contactSchema'
import { useAuth } from '../../../context/AuthContext'
import { useState } from 'react'
import getContactService from '../../../../services/contactService'
import { toast } from 'react-hot-toast'

export default function useEditContactForm (id: string | undefined, refetchContacts: () => void, closeModal: () => void) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<UpdateContactPayload>({
    resolver: yupResolver(contactSchema)
  })
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)
  const onSubmit: SubmitHandler<UpdateContactPayload> = async data => {
    setLoading(true)
    try {
      await getContactService(token).update(id as string, data)
      toast.success('Updating contact')
      refetchContacts()
      closeModal()
      reset()
    } catch (error) {
      console.log(error)
      toast.error('Error updating contact')
    } finally {
      setLoading(false)
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    loading,
    errors
  }
}
