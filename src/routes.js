import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/models/User.js';

const routes = new Router();

routes.get('/', async (req, res) => {
   const user = await User.create({
    id: v4(),
    name: 'Paulo',
    email: 'paulo12354@email.com',
    password_hash: 'sdbdnjdnndncc',
   });

   return res.status(201).json(user);
});

export default routes;