import { useState } from 'react'

export default function useModal () {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return {
    open,
    showModal,
    closeModal
  }
}
