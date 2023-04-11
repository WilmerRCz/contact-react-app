import React from 'react'

interface Props {
  title: string,
  borderColor?: string,
  backgroundColor?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  idForm?: string
}
function ButtonLayout ({ title, borderColor, backgroundColor, type, idForm, onClick }:Props) {
  return (
    <div>
      <button className={`py-1 px-2 border-2 ${borderColor} ${backgroundColor} rounded-md text-white hover:bg-opacity-90`}
      onClick={onClick}
      type={type}
      form={idForm}>{title}</button>
    </div>
  )
}

export default ButtonLayout
