import { Op } from 'sequelize';
import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { name, page = 1 } = req.query;
    const { id } = req.params;

    if (id) {
      const recipient = await Recipient.findByPk(id);
      return res.json(recipient);
    }

    //* * Checking if the user has inserted a search parameter */
    if (name) {
      const recipients = await Recipient.findAll({
        limit: 5,
        offset: (page - 1) * 5,
        where: {
          nome: {
            [Op.iLike]: `%${name}%`,
          },
        },
        order: ['id'],
      });
      return res.json(recipients);
    }

    const recipients = await Recipient.findAll({
      limit: 5,
      offset: (page - 1) * 5,
      order: ['id'],
    });
    return res.json(recipients);
  }

  async store(req, res) {
    const schemaValidation = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.number().required(),
      complemento: Yup.string().required(),
      estado: Yup.string()
        .required()
        .max(2),
      cidade: Yup.string().required(),
      cep: Yup.string()
        .required()
        .min(8),
    });

    if (!(await schemaValidation.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async update(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);
    return res.json(await recipient.update(req.body));
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const recipient = await Recipient.findByPk(id);
      const response = await recipient.destroy();

      return res.json(response);
    } catch (error) {
      return res.status(401).json({ error: 'Falha ao remover destinatário' });
    }
  }
}

export default new RecipientController();
