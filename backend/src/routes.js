import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliveryManController from './app/controllers/DeliveryManController';
import OrderController from './app/controllers/OrderController';
import DeliveriesController from './app/controllers/DeliveriesController';
import FileController from './app/controllers/FileController';
import tokenValidation from './app/middlewares/tokenValidation';

import multerConfig from './config/multer';
import DeliveryProblemsController from './app/controllers/DeliveryProblemsController';

const routes = new Router();
const uploadMiddleware = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

// Files
routes.post('/files', uploadMiddleware.single('file'), FileController.store);

// Recipients
routes.get('/recipients', tokenValidation, RecipientController.index);
routes.get('/recipients/:id', tokenValidation, RecipientController.index);
routes.post('/recipients', tokenValidation, RecipientController.store);
routes.put('/recipients/:id', tokenValidation, RecipientController.update);
routes.delete('/recipients/:id', tokenValidation, RecipientController.delete);

// Deliveryman
routes.get('/deliveryman', tokenValidation, DeliveryManController.index);
routes.get('/deliveryman/:id', DeliveryManController.index);
routes.post('/deliveryman', tokenValidation, DeliveryManController.store);
routes.put('/deliveryman/:id', tokenValidation, DeliveryManController.update);
routes.delete(
  '/deliveryman/:id',
  tokenValidation,
  DeliveryManController.delete
);

// Deliveries
routes.get(
  '/deliveryman/:deliveryman_id/deliveries',
  DeliveriesController.index
);
routes.put(
  '/deliveryman/:deliveryman_id/deliveries/:delivery_id',
  DeliveriesController.update
);
routes.put(
  '/deliveryman/:deliveryman_id/deliveries/:delivery_id/finish',
  DeliveriesController.update
);

/** Orders */
routes.post('/orders', tokenValidation, OrderController.store);
routes.get('/orders', tokenValidation, OrderController.index);
routes.get('/orders/:id', tokenValidation, OrderController.index);
routes.put('/orders/:id', tokenValidation, OrderController.update);
routes.delete('/orders/:id', tokenValidation, OrderController.delete);

/** Problems */

/** GET all deliveries with problems */
routes.get(
  '/deliveries/problems',
  tokenValidation,
  DeliveryProblemsController.index
);

/** GET all problems from a specific delivery */
routes.get('/deliveries/:id/problems', DeliveryProblemsController.index);

/** GET specific problem */
routes.get(
  '/problems/:problemId',
  tokenValidation,
  DeliveryProblemsController.index
);

/** POST add problem to a specific delivery */
routes.post('/deliveries/:id/problems', DeliveryProblemsController.store);

/** PUT cancel delivery */
routes.put(
  '/problems/:id/cancel',
  tokenValidation,
  DeliveryProblemsController.update
);

export default routes;
