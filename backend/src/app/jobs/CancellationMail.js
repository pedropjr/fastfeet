import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { problem } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${problem.order.deliveryman.name} <${problem.order.deliveryman.email}>`,
      subject: 'Encomenda cancelada.',
      template: 'cancellation',
      context: {
        deliveryman: problem.order.deliveryman.name,
        order: problem.delivery_id,
        description: problem.description,
      },
    });
  }
}

export default new CancellationMail();
