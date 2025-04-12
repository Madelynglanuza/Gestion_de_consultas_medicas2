// routes/menu_itemsRoute.js
import { Router } from 'express';

import {
    listarTodosMenu_items,
    listarMenu_itemPorId,
    crearMenu_item,
    actualizarMenu_item,
    eliminarMenu_item,
} from '../controllers/menu_itemsController.js';

const menu_itemsRouter = Router();

menu_itemsRouter.get('/', listarTodosMenu_items);
menu_itemsRouter.get('/:id', listarMenu_itemPorId);
menu_itemsRouter.post('/', crearMenu_item);
menu_itemsRouter.put('/:id', actualizarMenu_item);
menu_itemsRouter.delete('/:id', eliminarMenu_item);

export default menu_itemsRouter;