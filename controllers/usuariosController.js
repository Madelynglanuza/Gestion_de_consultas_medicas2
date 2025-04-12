// controllers/usuariosController.js
import {
    listarTodosUsuariosQuery,
    listarUsuarioPorIdQuery,
    crearUsuarioQuery,
    actualizarUsuarioQuery,
    eliminarUsuarioQuery
  } from "../db/usuariosQuery.js";
  
  /**
   * Obtener todas los Usuarios de la base de datos
   */
  const listarTodosUsuarios = async (req, res) => {
    try {
      const usuarios = await listarTodosUsuariosQuery();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Usuario con el ID especificado en la query / url
   */
  const listarUsuarioPorId = async (req, res) => { 
    try {
      const usuario = await listarUsuarioPorIdQuery(req.params.id);
      if (usuario.length === 0) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.json(usuario[0]); // Devuelve el primer usuario encontrado
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Usuario
   */
  const crearUsuario = async (req, res) => {
    try {
      const datosUsuario = req.body;
      const resultado = await crearUsuarioQuery(datosUsuario);
      res.status(201).json({ mensaje: 'Usuario creado con éxito', usuario: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Usuario
   */
  const actualizarUsuario = async (req, res) => {
    try {
      const id = req.params.id;
      const datosUsuario = req.body;
      const resultado = await actualizarUsuarioQuery(id, datosUsuario);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.json({ mensaje: 'Usuario actualizado con éxito', usuario: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Usuario
   */
  const eliminarUsuario = async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await eliminarUsuarioQuery(id);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.json({ mensaje: 'Usuario eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Usuario', error: error.message });
    }
  };
  
  export {
    listarTodosUsuarios,
    listarUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
  };