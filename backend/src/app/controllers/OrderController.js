// import { getHours, parseISO } from 'date-fns';
// import { zonedTimeToUtc } from 'date-fns-tz';
import * as Yup from 'yup';
import { Op } from 'sequelize';
import Order from '../models/Order';
import File from '../models/File';
import Recipient from '../models/Recipient';
import DeliveryMan from '../models/DeliveryMan';

class OrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    /** Checking if the schema is valid */
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Schema validation fails.' });
    }

    const order = await Order.create({
      ...req.body,
    });
    return res.json(order);
  }

  async index(req, res) {
    const { product, page = 1 } = req.query;
    const { id } = req.params;

    /** Checking if the user has inserted a search parameter */
    if (product) {
      const orders = await Order.findAll({
        limit: 5,
        offset: (page - 1) * 5,
        where: {
          product: {
            [Op.iLike]: `%${product}%`,
          },
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
          {
            model: DeliveryMan,
            as: 'deliveryman',
            attributes: ['id', 'name'],
            include: [
              {
                model: File,
                as: 'avatar',
                attributes: ['name', 'path', 'url'],
              },
            ],
          },
          { model: File, as: 'signature', attributes: ['name', 'path', 'url'] },
        ],
        order: ['id'],
      });
      return res.json(orders);
    }
    /** Getting the specific order by id */
    if (id) {
      const orders = await Order.findByPk(id, {
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
          {
            model: DeliveryMan,
            as: 'deliveryman',
            attributes: ['id', 'name'],
            include: [
              {
                model: File,
                as: 'avatar',
                attributes: ['name', 'path', 'url'],
              },
            ],
          },
          { model: File, as: 'signature', attributes: ['name', 'path', 'url'] },
        ],
        order: ['id'],
      });
      return res.json(orders);
    }

    const orders = await Order.findAll({
      limit: 5,
      offset: (page - 1) * 5,
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
            'cidade',
            'estado',
            'cep',
          ],
        },
        {
          model: DeliveryMan,
          as: 'deliveryman',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
        { model: File, as: 'signature', attributes: ['name', 'path', 'url'] },
      ],
      order: ['id'],
    });
    return res.json(orders);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number()
        .notRequired()
        .nullable(),
      deliveryman_id: Yup.number()
        .notRequired()
        .nullable(),
      product: Yup.string(),
      signature_id: Yup.number(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
    });

    /** Checking if the schema is valid */
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails.' });
    }

    const order = await Order.findByPk(req.params.id);

    /** Getting the current date
    const start_date = new Date();
    const zonedDate = zonedTimeToUtc(start_date, 'America/Sao_Paulo');
*/
    await order.update(req.body);

    const { id, product, signature } = await Order.findByPk(req.params.id, {
      include: [
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      product,
      signature,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const order = await Order.findByPk(id);
    await order.destroy();

    return res.json({ mensagem: 'sucesso' });
  }
}

export default new OrderController();
