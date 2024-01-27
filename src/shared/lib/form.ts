import * as yup from 'yup';

const nameValidation = yup
  .string()
  .trim()
  .matches(/^[A-Za-z]+$/, 'Обязательное поле');

export const usersFormSchema = yup.object({
  firstName: nameValidation
    .required('Обязательное поле')
    .min(2, 'Минимум 2 символа')
    .max(30, 'Максимум 30 символов'),
  lastName: nameValidation
    .required('Обязательное поле')
    .min(2, 'Минимум 2 символа')
    .max(30, 'Максимум 30 символов'),
  middleName: nameValidation
    .min(2, 'Минимум 2 символа')
    .max(30, 'Максимум 30 символов'),
  dob: yup.string().required('Обязательное поле'),
});
