import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Daniel Braz',
    email: 'drz.braz@gmail.com',
    password_hash: '12349372493',
  });
  return res.json(user);
});

export default routes;
