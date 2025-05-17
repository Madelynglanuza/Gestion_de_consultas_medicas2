// routes/consultasRoute.js
import { Router } from 'express';

import {
  listarTodasConsultas,
  listarConsultaPorId,
  crearConsulta,
  actualizarConsulta,
  eliminarConsulta,
} from '../controllers/consultasController.js';

const ConsultasRouter = Router();

ConsultasRouter.get('/', listarTodasConsultas);
ConsultasRouter.get('/:id', listarConsultaPorId);
ConsultasRouter.post('/', crearConsulta);
ConsultasRouter.put('/:id', actualizarConsulta);
ConsultasRouter.delete('/:id', eliminarConsulta);

export default ConsultasRouter;