import React from 'react'

interface Props {
  title: string,
  extraClassName?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  idForm?: string
}
function ButtonLayout ({ title, extraClassName, type, idForm, onClick }:Props) {
  return (
      <button className={`py-1 px-4 rounded-md text-white hover:bg-opacity-90 ${extraClassName}`}
      onClick={onClick}
      type={type}
      form={idForm}>{title}</button>
  )
}

export default ButtonLayout
