import { Contact } from '../@types/Contact'
import PredeterminedImageContact from './PredeterminedImageContact'

interface Props {
  data?: Contact;
}
function ViewContact ({ data }: Props) {
  return (
    <div>
      <div className="flex h-64 items-center justify-center bg-gray-800 rounded-lg overflow-hidden">
        {data?.image
          ? <img
            className=""
            src={`${data.image}`}
            alt="imagen de contacto"
          />
          : <PredeterminedImageContact/>}
      </div>
      <div>
        <h1 className="font-semibold text-gray-300 text-3xl">{`${data?.firstName} ${data?.lastName}`}</h1>
      </div>
    </div>
  )
}

export default ViewContact
