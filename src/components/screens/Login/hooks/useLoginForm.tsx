import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from '../../../../schemas/loginSchema'
import { LoginPayload } from '../../../../@types/User'
import getAuthService from '../../../../services/authService'
import { ServiceError } from '../../../../@types/ServiceError'

export default function useLoginForm () {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginPayload>({
    resolver: yupResolver(LoginSchema)
  })
  const onSubmit: SubmitHandler<LoginPayload> = async data => {
    try {
      const responseBody = await getAuthService().login(data)
      console.log(responseBody)
      toast.success('Login succesful')
    } catch (error) {
      const axiosError = error as AxiosError
      const serviceErrorResponse = axiosError.response?.data as ServiceError
      toast.error(serviceErrorResponse.message)
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  }
}
