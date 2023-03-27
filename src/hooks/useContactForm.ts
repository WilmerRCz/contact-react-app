import { SubmitHandler, useForm } from "react-hook-form";
import type { Contact } from '../@types/Contact';
import {yupResolver} from "@hookform/resolvers/yup"
import { contactSchema } from "../schemas/contactSchema";
import { Contacts } from '../database/data';

export default function useContactForm(){
  const { register, handleSubmit, formState: { errors } } = useForm<Contact>({
    resolver: yupResolver(contactSchema)
  });
  const onSubmit: SubmitHandler<Contact> = (data) => console.log(data);


  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  }
}