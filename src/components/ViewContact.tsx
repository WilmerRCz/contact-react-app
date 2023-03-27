import { Contact } from "../@types/Contact";

interface Props {
  data?: Contact;
}
function ViewContact({ data }: Props) {
  return (
    <div>
      <div className="h-80vh bg-gray-200 rounded-lg overflow-hidden">
        <div className="h-full">
          <img
            src="https://www.sac.org.ar/wp-content/uploads/2020/12/logo-25x25-1.png"
            alt="imagen de contacto"
            className=""
          />
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-gray-300 text-3xl">{`${data?.name} ${data?.lastname}`}</h1>
      </div>
    </div>
  );
}

export default ViewContact;
