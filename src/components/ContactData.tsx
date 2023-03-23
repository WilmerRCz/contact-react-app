
interface Props {
  name: string,
  lastname: string,
  birth?: string,
  phone?: number,
  email?: string,
}

function ContactData({name, lastname, phone, email, birth}: Props) {
  return (
    <ul className="flex flex-col">
      <li className="font-semibold text-lg text-gray-300">{name} {lastname}</li>
      <li className="text-xs font-light text-gray-300">🎂 {birth}</li>
      <li className="text-sm text-gray-300">📱 {phone}</li>
      <li className="text-sm text-gray-300">✉ {email}</li>
    </ul>
  );
}

export default ContactData;
