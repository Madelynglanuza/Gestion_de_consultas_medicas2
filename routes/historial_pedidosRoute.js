// routes/historial_pedidosRoute.js
import { Router } from 'express';

import {
    listarTodosHistorial_pedidos,
    listarHistorial_pedidoPorId,
    crearHistorial_pedido,
    actualizarHistorial_pedido,
    eliminarHistorial_pedido,
} from '../controllers/historial_pedidosController.js';

const HistorialPedidosRouter = Router();

HistorialPedidosRouter.get('/', listarTodosHistorial_pedidos);
HistorialPedidosRouter.get('/:id', listarHistorial_pedidoPorId);
HistorialPedidosRouter.post('/', crearHistorial_pedido);
HistorialPedidosRouter.put('/:id', actualizarHistorial_pedido);
HistorialPedidosRouter.delete('/:id', eliminarHistorial_pedido);

export default HistorialPedidosRouter;
