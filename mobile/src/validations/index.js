import * as Yup from 'yup';

export const NewProblemSchema = Yup.string()
  .min(10)
  .required('Por favor, insira o problema!');
