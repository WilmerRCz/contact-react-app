import React from 'react'
import ButtonLayout from '../../../ButtonLayout'
import { CgClose } from 'react-icons/cg'
interface Props {
  open: boolean;
  closeModal: () => void;
  title: string;
  children: React.ReactNode
  idForm?: string
  dotShowSaveButton?: boolean
}

function Modal ({ open, closeModal, title, idForm, dotShowSaveButton, children }: Props) {
  return open
    ? (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[700px]">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl space-y-4 pb-8">
              <div className="flex place-content-between items-center">
                <h1 className="font-bold text-2xl text-black dark:text-gray-300">
                  {title}
                </h1>
                <div className="flex gap-8">
                    <CgClose size={24} className='cursor-pointer text-gray-300 hover:opacity-80' onClick={closeModal}/>
                </div>
              </div>
              {children}
              {dotShowSaveButton
                ? null
                : <div className='text-right'><ButtonLayout
                title="Crear"
                extraClassName="border-green-700 bg-green-500"
                type="submit"
                idForm={idForm}
              /></div>}
            </div>
          </div>
        </div>
      )
    : (
        null
      )
}

export default Modal
