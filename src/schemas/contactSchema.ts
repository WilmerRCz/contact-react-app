import * as Yup from 'yup'

export const contactSchema = Yup.object({
  name: Yup.string().max(60).required(),
  lastname: Yup.string().max(60).required(),
  birth: Yup.string().optional(),
  phone: Yup.number().positive().integer().notRequired(),
  image: Yup.string().optional().notRequired(),
  email: Yup.string().email().optional().notRequired(),
  company: Yup.string().max(60).optional().notRequired(),
  address: Yup.string().max(60).optional().notRequired(),
  website: Yup.string().max(60).optional().notRequired(),
  customField: Yup.string().max(60).optional().notRequired(),
  dataCustomField: Yup.string().max(60).optional().notRequired()
})
