import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import tokenConfig from '../../config/jwt';

export default async (req, res, next) => {
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = tokenHeader.split(' ');

  try {
    const tokenDecoded = await promisify(jwt.verify)(token, tokenConfig.secret);
    req.userId = tokenDecoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
