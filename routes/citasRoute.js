// routes/citasRoute.js
import { Router } from 'express';

import {
  listarTodasCitas,
  listarCitaPorId,
  crearCita,
  actualizarCita,
  eliminarCita,
} from '../controllers/citasController.js';

const CitasRouter = Router();

CitasRouter.get('/', listarTodasCitas);
CitasRouter.get('/:id', listarCitaPorId);
CitasRouter.post('/', crearCita);
CitasRouter.put('/:id', actualizarCita);
CitasRouter.delete('/:id', eliminarCita);

export default CitasRouter;