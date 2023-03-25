

interface Props{
  open: boolean
  closeModal: () => void
  title: string
}

function Modal({open, closeModal, title}: Props) {

  return open ? (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper"
    onClick={closeModal}>
      <div className='w-[600px]'>
        <div className='bg-white p-2 rounded-md'>
          <h1 className="font-bold text-2xl text-black">{title}</h1>
        </div>
      </div>
    </div> 
  ) : null
}

export default Modal