import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  
    return res.status(201).json({ mesege: 'Está funcionando!'});
});

export default routes;