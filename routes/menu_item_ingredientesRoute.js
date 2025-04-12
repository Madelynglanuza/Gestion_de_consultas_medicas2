// routes/menu_item_ingredientesRoute.js
import { Router } from 'express';

import {
    listarTodosMenu_item_ingredientes,
    listarMenu_item_ingredientePorId,
    crearMenu_item_ingrediente,
    actualizarMenu_item_ingrediente,
    eliminarMenu_item_ingrediente,
} from '../controllers/menu_item_ingredientesController.js';

const menu_item_ingredientesRouter = Router();

menu_item_ingredientesRouter.get('/', listarTodosMenu_item_ingredientes);
menu_item_ingredientesRouter.get('/:id', listarMenu_item_ingredientePorId);
menu_item_ingredientesRouter.post('/', crearMenu_item_ingrediente);
menu_item_ingredientesRouter.put('/:id', actualizarMenu_item_ingrediente);
menu_item_ingredientesRouter.delete('/:id', eliminarMenu_item_ingrediente);

export default menu_item_ingredientesRouter;