// routes/pedido_detallesRoute.js
import { Router } from 'express';

import {
    listarTodosPedido_detalles,
    listarPedido_detallePorId,
    crearPedido_detalle,
    actualizarPedido_detalle,
    eliminarPedido_detalle,
} from '../controllers/pedido_detallesController.js';

const pedido_detallesRouter = Router();

pedido_detallesRouter.get('/', listarTodosPedido_detalles);
pedido_detallesRouter.get('/:id', listarPedido_detallePorId);
pedido_detallesRouter.post('/', crearPedido_detalle);
pedido_detallesRouter.put('/:id', actualizarPedido_detalle);
pedido_detallesRouter.delete('/:id', eliminarPedido_detalle);

export default pedido_detallesRouter;