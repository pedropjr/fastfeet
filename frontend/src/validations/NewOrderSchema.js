import * as Yup from 'yup';

const NewOrderSchema = Yup.object().shape({
  recipient_id: Yup.string().required('Por favor, selecione um destinatário!'),
  deliveryman_id: Yup.number(),
  product: Yup.string().min(6).required('Insira um nome de produto válido!'),
});

export default NewOrderSchema;
