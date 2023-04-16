import { SubmitHandler, useForm } from 'react-hook-form'
import type { UpdateContactPayload } from '../@types/Contact'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema } from '../schemas/contactSchema'

export default function useEditContactForm () {
  const { register, handleSubmit, formState: { errors } } = useForm<UpdateContactPayload>({
    resolver: yupResolver(contactSchema)
  })
  const onSubmit: SubmitHandler<UpdateContactPayload> = (data) => {
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  }
}
