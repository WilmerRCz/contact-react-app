import { Contact } from '../../../../@types/Contact'
import PredeterminedImageContact from './PredeterminedImageContact'

interface Props {
  data?: Contact
}

function ImageContact ({ data }: Props) {
  return (
    <div className='w-16 h-16 overflow-hidden border-2 border-black rounded-full flex justify-center items-center'>
      {data?.image
        ? <img
        className="h-full w-full object-cover"
        src={`${data.image}`}
        alt="imagen de contacto"
      />
        : <PredeterminedImageContact/>}
    </div>
  )
}

export default ImageContact
