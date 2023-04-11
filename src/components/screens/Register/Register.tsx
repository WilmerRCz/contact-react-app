import React from 'react'
import Container from '../../layout/Container'
import TitleSection from '../../TitleSection'
import InputLayout from '../../InputLayout'
import ButtonLayout from '../../ButtonLayout'
import { Link } from 'react-router-dom'
import useRegisterForm from './hooks/useRegisterForm'

function Register () {
  const { register, onSubmit, handleSubmit, errors } = useRegisterForm()
  return (
    <Container>
      <TitleSection title='Register'/>
      <form className='max-w-md w-full space-y-4 p-6 rounded-xl bg-slate-800' onSubmit={handleSubmit(onSubmit)} >
      <InputLayout
        label="First name"
        name="firstName"
        register={register}
        type="text"
        errorMessage={errors.firstName?.message}
      />
      <InputLayout
        label="Last name"
        name="lastName"
        register={register}
        type="text"
        errorMessage={errors.lastName?.message}
      />
      <InputLayout
        label="Email"
        name="email"
        register={register}
        type="email"
        errorMessage={errors.email?.message}
      />
      <InputLayout
        label="Password"
        name="password"
        register={register}
        type="password"
        errorMessage={errors.password?.message}
      />
      <InputLayout
        label="Password Confirmation"
        name="passwordConfirm"
        register={register}
        type="password"
        errorMessage={errors.passwordConfirm?.message}
      />
      <ButtonLayout title='Sign In'/>
      <div className='text-sm text-cyan-400 hover:text-cyan-300 transition'>
        <Link to={'/Login'} replace>
          Already have an account? Sign in.
        </Link>
      </div>
      </form>
    </Container>
  )
}

export default Register
