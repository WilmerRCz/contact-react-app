import { GrClose } from "react-icons/gr";
import ButtonLayout from "./ButtonLayout";
import ButtonCreateContact from "./ButtonLayout";
import FormContact from "./FormContact";

interface Props {
  open: boolean;
  closeModal: () => void;
  title: string;
}

function Modal({ open, closeModal, title }: Props) {
  return open ? (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[700px]">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl space-y-4 pb-8">
          <div className="flex place-content-between items-center">
            <h1 className="font-bold text-2xl text-black dark:text-gray-300">
              {title}
            </h1>
            <div className="flex gap-4">
              <ButtonLayout
                title="Cancelar"
                borderColor="border-red-700"
                backgroundColor="bg-red-500"
                onClick={closeModal}
              />
              <ButtonLayout
                title="Crear"
                borderColor="border-green-700"
                backgroundColor="bg-green-500"
                type="submit"
                idForm="formNewContact"
              />
            </div>
          </div>
          <FormContact />
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;