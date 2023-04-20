import useCreateContactForm from '../hooks/useCreateContactForm'
import InputLayout from '../../../InputLayout'

interface Props {
  refecthContacts: () => void
  closeModal: () => void
}

function FormCreateContact ({ refecthContacts, closeModal }:Props) {
  const { register, handleSubmit, errors } = useCreateContactForm(refecthContacts, closeModal)
  return (
    <form id="formCreateContact" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <InputLayout
          label="Nombre: "
          name="firstName"
          register={register}
          type="text"
          errorMessage={errors.firstName?.message}
        />
        <InputLayout
          label="Apellido: "
          name="lastName"
          register={register}
          type="text"
          errorMessage={errors.lastName?.message}
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
  )
}

export default FormCreateContact
