import React from 'react'
import Container from '../../layout/Container'
import TitleSection from '../../TitleSection'
import InputLayout from '../../InputLayout'
import useLoginForm from './hooks/useLoginForm'
import ButtonLayout from '../../ButtonLayout'
import { Link } from 'react-router-dom'

function Login () {
  const { register, onSubmit, handleSubmit, errors } = useLoginForm()
  return (
    <Container>
      <TitleSection title='Login'/>
      <form className='space-y-4 p-6 rounded-xl bg-slate-800' onSubmit={handleSubmit(onSubmit)} >
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
      <ButtonLayout title='Sign In'/>
      <div className='text-sm text-cyan-400 hover:text-cyan-300 transition'>
      <Link to={'/Register'} replace>
        Not account? Sign up for an account.
      </Link>
      </div>
      </form>
    </Container>
  )
}

export default Login
