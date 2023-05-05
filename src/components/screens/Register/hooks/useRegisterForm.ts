import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { RegisterPayload } from '../../../../@types/User'
import { registerSchema } from '../../../../schemas/registerSchema'
import getAuthService from '../../../../services/authService'
import { ServiceError } from '../../../../@types/ServiceError'

type RegisterFormData = {
  passwordConfirm: string
} & RegisterPayload

export default function useRegisterForm () {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema)
  })
  const onSubmit: SubmitHandler<RegisterPayload> = async data => {
    const navigate = useNavigate();
    try {
      await getAuthService().register({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      })
      toast.success('Register succesful')
      navigate('/login', { replace: true })
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
