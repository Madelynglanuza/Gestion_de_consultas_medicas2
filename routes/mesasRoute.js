// routes/mesasRoute.js
import { Router } from 'express';

import {
    listarTodasMesas,
    listarMesaPorId,
    crearMesa,
    actualizarMesa,
    eliminarMesa,
} from '../controllers/mesasController.js';

const mesasRouter = Router();

mesasRouter.get('/', listarTodasMesas);
mesasRouter.get('/:id', listarMesaPorId);
mesasRouter.post('/', crearMesa);
mesasRouter.put('/:id', actualizarMesa);
mesasRouter.delete('/:id', eliminarMesa);

export default mesasRouter;