import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import tokenConfig from '../../config/jwt';

class SessionController {
  async store(req, res) {
    const schemaValidation = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schemaValidation.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'User does not exist.' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'Wrong password.' });
    }

    const { id, name } = user;

    return res.json({
      user: { id, name, email },
      token: jwt.sign({ id }, tokenConfig.secret, {
        expiresIn: tokenConfig.expiresIn,
      }),
    });
  }
}
export default new SessionController();
