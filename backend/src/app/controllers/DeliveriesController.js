import { Op } from 'sequelize';
import { setHours, setMinutes, setSeconds, isAfter, isBefore } from 'date-fns';
import Order from '../models/Order';
import File from '../models/File';
import Recipient from '../models/Recipient';
import DeliveryMan from '../models/DeliveryMan';

class DeliveriesController {
  async index(req, res) {
    const { delivered } = req.query;
    if (delivered === 'ENTREGUE') {
      const orders = await Order.findAll({
        where: {
          end_date: {
            [Op.not]: null,
          },
          canceled_at: null,
          deliveryman_id: req.params.deliveryman_id,
        },
        include: [
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'id',
              'nome',
              'rua',
              'numero',
              'complemento',
              'cep',
              'cidade',
              'estado',
            ],
          },
          { model: DeliveryMan, as: 'deliveryman', attributes: ['id', 'name'] },
          { model: File, as: 'signature', attributes: ['name', 'path', 'url'] },
        ],
        order: ['id'],
      });
      return res.json(orders);
    }
    const orders = await Order.findAll({
      where: {
        end_date: null,
        canceled_at: null,
        deliveryman_id: req.params.deliveryman_id,
      },
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'nome',
            'rua',
            'numero',
            'complemento',
            'cep',
            'cidade',
            'estado',
          ],
        },
        { model: DeliveryMan, as: 'deliveryman', attributes: ['id', 'name'] },
        { model: File, as: 'signature', attributes: ['name', 'path', 'url'] },
      ],
      order: ['id'],
    });

    return res.json(orders);
  }

  async update(req, res) {
    const { delivery_id, deliveryman_id } = req.params;
    const initialDate = setSeconds(setMinutes(setHours(new Date(), 8), 0), 0);
    const endDate = setSeconds(setMinutes(setHours(new Date(), 18), 0), 0);

    if (req.body.finish === 'finish') {
      const order = await Order.findByPk(delivery_id);

      await order.update({
        signature_id: req.body.signature_id,
        end_date: new Date(),
        deliveryman_id,
      });
      return res.json({ mensagem: 'Sucesso!' });
    }

    /** Checking if it is working time 8am to 6pm */
    if (isAfter(new Date(), endDate) || isBefore(new Date(), initialDate)) {
      return res.status(400).json({ error: 'It is not working time' });
    }

    /** Check if the deliveryman doesnt have already 5 deliveries oppened in the same day */
    const orders = await Order.findAll({
      where: {
        start_date: {
          [Op.between]: [initialDate, endDate],
        },
        deliveryman_id,
        end_date: null,
      },
    });

    if (orders.length < 5) {
      const order = await Order.findByPk(delivery_id);

      await order.update({
        ...req.body,
        start_date: new Date(),
        deliveryman_id,
      });

      const { id, product, start_date, signature } = await Order.findByPk(
        delivery_id,
        {
          include: [
            {
              model: File,
              as: 'signature',
              attributes: ['name', 'path', 'url'],
            },
          ],
        }
      );

      return res.json({ id, product, start_date, signature });
    }

    return res.status(400).json({ error: 'Limite de encomendas atingido.' });
  }
}

export default new DeliveriesController();
