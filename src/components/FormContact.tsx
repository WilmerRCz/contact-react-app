import React from "react";
import useContactForm from "../hooks/useContactForm";
import InputLayout from "./InputLayout";

function FormContact() {
  const { register, onSubmit, handleSubmit, errors } = useContactForm();
  return (
    <form id="formNewContact" onSubmit={handleSubmit(onSubmit) }>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <InputLayout
          label="Nombre: "
          name="name"
          register={register}
          type="text"
          errorMessage={errors.name?.message}
        />
        <InputLayout
          label="Apellido: "
          name="lastname"
          register={register}
          type="text"
          errorMessage={errors.lastname?.message}
        />
        <InputLayout
          label="Cumpleaños: "
          name="birth"
          register={register}
          type="date"
          errorMessage={errors.birth?.message}
        />
        <InputLayout
          label="Celular: "
          name="phone"
          register={register}
          setNumber={true}
          type="number"
          errorMessage={errors.phone?.message}
        />
        <InputLayout
          label="Foto de perfil: "
          name="image"
          register={register}
          type="text"
          errorMessage={errors.image?.message}
        />
        <InputLayout
          label="Correo: "
          name="email"
          register={register}
          type="text"
          errorMessage={errors.email?.message}
        />
        <InputLayout
          label="Compañia: "
          name="company"
          register={register}
          type="text"
          errorMessage={errors.company?.message}
        />
        <InputLayout
          label="Dirección: "
          name="address"
          register={register}
          type="text"
          errorMessage={errors.address?.message}
        />
        <InputLayout
          label="Sitio web: "
          name="website"
          register={register}
          type="text"
          errorMessage={errors.website?.message}
        />
        <InputLayout
          label="Campo personalizable: "
          name="customField"
          register={register}
          type="text"
          errorMessage={errors.customField?.message}
        />
        <InputLayout
          label="Detalle campo personalizable: "
          name="dataCustomField"
          register={register}
          type="text"
          errorMessage={errors.dataCustomField?.message}
        />
      </div>
    </form>
  );
}

export default FormContact;
