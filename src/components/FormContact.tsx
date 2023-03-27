import React from "react";
import { Contact } from "../@types/Contact";
import useContactForm from "../hooks/useContactForm";
import InputLayout from "./InputLayout";

interface Props {
  data?: Contact
}

function FormContact({ data }: Props) {
  const { register, onSubmit, handleSubmit, errors } = useContactForm();
  return (
    <form id="formContact" onSubmit={handleSubmit(onSubmit) }>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <InputLayout
          label="Nombre: "
          name="name"
          register={register}
          type="text"
          defaultValue={data?.name}
          errorMessage={errors.name?.message}
        />
        <InputLayout
          label="Apellido: "
          name="lastname"
          register={register}
          type="text"
          defaultValue={data?.lastname}
          errorMessage={errors.lastname?.message}
        />
        <InputLayout
          label="Cumpleaños: "
          name="birth"
          register={register}
          type="date"
          defaultValue={data?.birth}
          errorMessage={errors.birth?.message}
        />
        <InputLayout
          label="Celular: "
          name="phone"
          register={register}
          setNumber={true}
          type="number"
          defaultValue={data?.phone}
          errorMessage={errors.phone?.message}
        />
        <InputLayout
          label="Foto de perfil: "
          name="image"
          register={register}
          type="text"
          defaultValue={data?.image}
          errorMessage={errors.image?.message}
        />
        <InputLayout
          label="Correo: "
          name="email"
          register={register}
          type="text"
          defaultValue={data?.email}
          errorMessage={errors.email?.message}
        />
        <InputLayout
          label="Compañia: "
          name="company"
          register={register}
          type="text"
          defaultValue={data?.company}
          errorMessage={errors.company?.message}
        />
        <InputLayout
          label="Dirección: "
          name="address"
          register={register}
          type="text"
          defaultValue={data?.address}
          errorMessage={errors.address?.message}
        />
        <InputLayout
          label="Sitio web: "
          name="website"
          register={register}
          type="text"
          defaultValue={data?.website}
          errorMessage={errors.website?.message}
        />
        <InputLayout
          label="Campo personalizable: "
          name="customField"
          register={register}
          type="text"
          defaultValue={data?.customField}
          errorMessage={errors.customField?.message}
        />
        <InputLayout
          label="Detalle campo personalizable: "
          name="dataCustomField"
          register={register}
          type="text"
          defaultValue={data?.dataCustomField}
          errorMessage={errors.dataCustomField?.message}
        />
      </div>
    </form>
  );
}

export default FormContact;
