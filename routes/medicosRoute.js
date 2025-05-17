// routes/medicosRoute.js
import { Router } from 'express';

import {
  listarTodosMedicos,
  listarMedicoPorId,
  crearMedico,
  actualizarMedico,
  eliminarMedico,
} from '../controllers/medicosController.js';

const MedicosRouter = Router();

MedicosRouter.get('/', listarTodosMedicos);
MedicosRouter.get('/:id', listarMedicoPorId);
MedicosRouter.post('/', crearMedico);
MedicosRouter.put('/:id', actualizarMedico);
MedicosRouter.delete('/:id', eliminarMedico);

export default MedicosRouter;
