import { useForm } from 'react-hook-form'
import type { CreateContactPayload } from '../../../../@types/Contact'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from '../../../../schemas/contactSchema'

export default function useCreateContactForm (onSubmit: (contact: CreateContactPayload) => void) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateContactPayload>({
    resolver: yupResolver(contactSchema)
  })
  const handleFormSubmit = handleSubmit(data => {
    console.log(data)
    onSubmit(data)
    reset()
  })

  return {
    register,
    errors,
    handleSubmit: handleFormSubmit
  }
}
