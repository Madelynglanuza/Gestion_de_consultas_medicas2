// routes/pedidosRoute.js
import { Router } from 'express';

import {
    listarTodosPedidos,
    listarPedidoPorId,
    crearPedido,
    actualizarPedido,
    eliminarPedido,
} from '../controllers/pedidosController.js';

const pedidosRouter = Router();

pedidosRouter.get('/', listarTodosPedidos);
pedidosRouter.get('/:id', listarPedidoPorId);
pedidosRouter.post('/', crearPedido);
pedidosRouter.put('/:id', actualizarPedido);
pedidosRouter.delete('/:id', eliminarPedido);

export default pedidosRouter;