// routes/usuariosRoute.js
import { Router } from 'express';

import {
    listarTodosUsuarios,
    listarUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
} from '../controllers/usuariosController.js';

const usuariosRouter = Router();

usuariosRouter.get('/', listarTodosUsuarios);
usuariosRouter.get('/:id', listarUsuarioPorId);
usuariosRouter.post('/', crearUsuario);
usuariosRouter.put('/:id', actualizarUsuario);
usuariosRouter.delete('/:id', eliminarUsuario);

export default usuariosRouter;