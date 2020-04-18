import { Op } from 'sequelize';
import DeliveryProblem from '../models/DeliveryProblem';
import DeliveryMan from '../models/DeliveryMan';
import Order from '../models/Order';
import { NewProblemSchema } from '../../validations/NewProblemSchema';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class DeliveryProblemsController {
  async index(req, res) {
    const { problemId, id } = req.params;
    const { product } = req.query;

    /** Checking if deliveryId and problemId was inserted */
    if (problemId) {
      const problem = await DeliveryProblem.findByPk(problemId);

      if (!problem) {
        return res.status(401).json({ error: 'Erro ao retornar problema' });
      }
      return res.json(problem);
    }

    /** Checking if the user has inserted a search parameter */
    if (product) {
      const orders = await Order.findAll({
        where: {
          product: {
            [Op.iLike]: `%${product}%`,
          },
        },
      });

      return res.json(orders);
    }

    /** Checking if the req.params.id exists to specify which type of GET request it is */
    if (id) {
      const delivery = await Order.findByPk(id, {
        include: [
          {
            model: DeliveryProblem,
          },
        ],
      });

      /** Checking if the delivery exists */
      if (!delivery) {
        return res.status(401).json({ error: 'Delivery does not exist' });
      }

      return res.json(delivery.DeliveryProblems);
    }
    const orders = await Order.findAll({
      where: {
        canceled_at: null,
      },
      include: [
        {
          model: DeliveryProblem,
        },
      ],
    });
    return res.json(orders.filter(order => order.DeliveryProblems.length > 0));
  }

  async store(req, res) {
    const { id } = req.params;
    const { deliveryman_id, description } = req.body;

    if (!(await NewProblemSchema.isValid({ description, delivery_id: id }))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    /** Checking if the orders belongs to the deliveryman */
    const delivery = await Order.findByPk(id);
    if (delivery.deliveryman_id !== deliveryman_id) {
      return res
        .status(401)
        .json({ error: 'This delivery its assigned to another person.' });
    }

    try {
      const deliveryProblem = await DeliveryProblem.create({
        ...req.body,
        delivery_id: id,
      });
      return res.json(deliveryProblem);
    } catch (error) {
      return res.status(401).json({ error: 'Erro ao inserir problema.' });
    }
  }

  async update(req, res) {
    const problemId = req.params.id;

    const problem = await DeliveryProblem.findByPk(problemId, {
      include: [
        {
          model: Order,
          as: 'order',
          attributes: ['deliveryman_id'],
          include: [
            {
              model: DeliveryMan,
              as: 'deliveryman',
              attributes: ['name', 'email'],
            },
          ],
        },
      ],
    });
    const { delivery_id } = problem;
    const order = await Order.findByPk(delivery_id);
    const response = await order.update({ canceled_at: new Date() });

    await Queue.add(CancellationMail.key, {
      problem,
    });

    return res.json(response);
  }
}

export default new DeliveryProblemsController();
