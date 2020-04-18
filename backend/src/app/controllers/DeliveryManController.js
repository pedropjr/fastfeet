import { Op } from 'sequelize';
import * as Yup from 'yup';
import DeliveryMan from '../models/DeliveryMan';
import File from '../models/File';

class DeliveryManController {
  async store(req, res) {
    const schemaValidation = Yup.object().shape({
      name: Yup.string()
        .required()
        .min(3),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schemaValidation.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    const deliverymanExists = await DeliveryMan.findOne({
      where: { email: req.body.email },
    });

    if (deliverymanExists) {
      return res.status(400).json({ error: 'E-mail already used.' });
    }

    const deliveryman = await DeliveryMan.create(req.body);
    return res.json(deliveryman);
  }

  async update(req, res) {
    const deliveryman = await DeliveryMan.findByPk(req.params.id);
    try {
      const response = await deliveryman.update(req.body);
      return res.json(response.data);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar' });
    }
  }

  async index(req, res) {
    const { name, page = 1 } = req.query;
    const { id } = req.params;

    if (id) {
      const deliveryman = await DeliveryMan.findByPk(id, {
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url'],
          },
        ],
        order: ['id'],
      });
      if (!deliveryman) {
        return res.status(400).json({ error: 'Deliveryman does not exist.' });
      }
      return res.json(deliveryman);
    }

    /** Checking if the user inserted a search parameter */
    if (name) {
      const deliverymen = await DeliveryMan.findAll({
        limit: 5,
        offset: (page - 1) * 5,
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        order: ['id'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url'],
          },
        ],
      });
      return res.json(deliverymen);
    }
    const deliverymen = await DeliveryMan.findAll({
      limit: 5,
      offset: (page - 1) * 5,
      order: ['id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(deliverymen);
  }

  async delete(req, res) {
    const deliveryman = await DeliveryMan.findByPk(req.params.id);
    return res.json(await deliveryman.destroy({ force: true }));
  }
}

export default new DeliveryManController();
