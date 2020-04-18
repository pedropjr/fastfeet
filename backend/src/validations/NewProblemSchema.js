import * as Yup from 'yup';

export const NewProblemSchema = Yup.object().shape({
  description: Yup.string()
    .min(10)
    .required('Por favor, insira a descrição do problema!'),
  delivery_id: Yup.number().required('Por favor, insira o número da entrega!'),
});

export default NewProblemSchema;
