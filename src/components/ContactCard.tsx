import ContactData from "./ContactData";
import ImageContact from "./ImageContact";

interface Props {
  name: string;
  lastname: string;
  birth?: string;
  phone?: number;
  email?: string;
}
function ContactCard({ name, lastname, phone, email, birth }: Props) {
  return (
    <div>
      <div className="bg-slate-700 h-full w-80 sm:w-96 rounded p-2 flex items-center space-x-4">
        <ImageContact />
        <ContactData
          name={name}
          lastname={lastname}
          phone={phone}
          email={email}
          birth={birth}
        />
      </div>
    </div>
  );
}

export default ContactCard;
