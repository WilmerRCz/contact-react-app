import ContactData from "./ContactData";
import DeleteButton from "./ButtonDeleteContact";
import EditButton from "./ButtonEditContact";
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
      <div className="bg-slate-700 h-full w-80 sm:w-96 rounded p-2 flex items-center space-x-6">
        <div className="w-20">
          <ImageContact />
        </div>
        
        <div className="flex items-center justify-between w-full">
          <ContactData
            name={name}
            lastname={lastname}
            phone={phone}
            email={email}
            birth={birth}
          />
          <div className="space-y-4 m-2">
            <EditButton />
            <DeleteButton/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
