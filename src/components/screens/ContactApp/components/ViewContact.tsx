import { Contact } from '../../../../@types/Contact'
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
        <h1 className="font-bold text-gray-300 text-3xl">{`${data?.firstName} ${data?.lastName}`}</h1>
        <ul className="flex flex-col">
        <li className="text-md text-gray-300">🎂 {data?.birth}</li>
        <li className="text-md text-gray-300">📱 {data?.phone}</li>
        <li className="text-md text-gray-300">✉ {data?.email}</li>
        <li className="text-md text-gray-300">🏢 {data?.company}</li>
        <li className="text-md text-gray-300">🏡 {data?.address}</li>
        <li className="text-md text-gray-300">🌐 {data?.website}</li>
        <li className="text-md text-gray-300">🗃 {data?.dataCustomField}</li>
      </ul>
      </div>
    </div>
  )
}

export default ViewContact
