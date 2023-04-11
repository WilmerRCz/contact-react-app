interface Props {
  name: string;
  lastname: string;
  birth?: string;
  phone?: number;
  email?: string;
  onClick?: () => void
}

function ContactData ({ name, lastname, phone, email, birth, onClick }: Props) {
  return (
    <div onClick={onClick}>
      <ul className="flex flex-col cursor-pointer">
        <li className="font-semibold text-lg text-gray-300">
          {name} {lastname}
        </li>
        <li className="text-xs font-light text-gray-300">🎂 {birth}</li>
        <li className="text-sm text-gray-300">📱 {phone}</li>
        <li className="text-sm text-gray-300">✉ {email}</li>
      </ul>
    </div>
  )
}

export default ContactData
