import { Contact } from '../@types/Contact'

interface Props {
  data?: Contact;
}
function ViewContact ({ data }: Props) {
  return (
    <div>
      <div className="w-3/5 mx-auto bg-gray-200 rounded-lg overflow-hidden">
          <img
            className="object-center object-contain w-full h-full"
            src="https://i.pinimg.com/originals/53/21/42/532142363815884a29c83fd89632b906.jpg "
            alt="imagen de contacto"
          />
      </div>
      <div>
        <h1 className="font-semibold text-gray-300 text-3xl">{`${data?.firstName} ${data?.lastName}`}</h1>
      </div>
    </div>
  )
}

export default ViewContact
