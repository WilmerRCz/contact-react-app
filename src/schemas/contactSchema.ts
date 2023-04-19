import * as Yup from 'yup'

export const contactSchema = Yup.object({
  firstName: Yup.string().max(60).required(),
  lastName: Yup.string().max(60).required(),
  birth: Yup.string().optional().notRequired(),
  phone: Yup.string().notRequired(),
  image: Yup.string().optional().notRequired(),
  email: Yup.string().email().optional().notRequired(),
  company: Yup.string().max(60).optional().notRequired(),
  address: Yup.string().max(60).optional().notRequired(),
  website: Yup.string().url().max(60).optional().notRequired(),
  customField: Yup.string().max(60).optional().notRequired(),
  dataCustomField: Yup.string().max(60).optional().notRequired()
})
