// routes/ingredientesRoute.js
import { Router } from 'express';

import {
    listarTodosIngredientes,
    listarIngredientePorId,
    crearIngrediente,
    actualizarIngrediente,
    eliminarIngrediente,
} from '../controllers/ingredientesController.js';

const ingredientesRouter = Router();

ingredientesRouter.get('/', listarTodosIngredientes);
ingredientesRouter.get('/:id', listarIngredientePorId);
ingredientesRouter.post('/', crearIngrediente);
ingredientesRouter.put('/:id', actualizarIngrediente);
ingredientesRouter.delete('/:id', eliminarIngrediente);

export default ingredientesRouter;