import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useAuth } from './context/AuthContext'

function ButtonLogout () {
  const { deleteToken } = useAuth()
  return (
    <button className="p-2 w-80 sm:w-96 bg-slate-800 rounded flex justify-center items-center"
      onClick={deleteToken}>
      <BiLogOut size={24} color={'#ef4444'} />
    </button>
  )
}

export default ButtonLogout
