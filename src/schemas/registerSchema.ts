import * as Yup from 'yup'

export const registerSchema = Yup.object({
  firstName: Yup.string().max(60).required('Firstname is required'),
  lastName: Yup.string().max(60).required('Lastname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password in required'),
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Password Confirmation is required')
})
