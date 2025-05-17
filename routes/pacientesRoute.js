// routes/pacientesRoute.js
import { Router } from 'express';

import {
  listarTodosPacientes,
  listarPacientePorId,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente,
} from '../controllers/pacientesController.js';

const PacientesRouter = Router();

PacientesRouter.get('/', listarTodosPacientes);
PacientesRouter.get('/:id', listarPacientePorId);
PacientesRouter.post('/', crearPaciente);
PacientesRouter.put('/:id', actualizarPaciente);
PacientesRouter.delete('/:id', eliminarPaciente);

export default PacientesRouter;