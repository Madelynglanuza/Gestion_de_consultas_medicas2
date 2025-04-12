// controllers/menu_item_ingredientesController.js
import {
    listarTodosMenu_item_ingredientesQuery,
    listarMenu_item_ingredientePorIdQuery,
    crearMenu_item_ingredienteQuery,
    actualizarMenu_item_ingredienteQuery,
    eliminarMenu_item_ingredienteQuery
  } from "../db/menu_item_ingredientesQuery.js";
  
  /**
   * Obtener todas los Menu_item_ingredientes de la base de datos
   */
  const listarTodosMenu_item_ingredientes = async (req, res) => {
    try {
      const menu_item_ingredientes = await listarTodosMenu_item_ingredientesQuery();
      res.json(menu_item_ingredientes);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Menu_item_ingrediente con el ID especificado en la query / url
   */
  const listarMenu_item_ingredientePorId = async (req, res) => { 
    try {
      const menu_item_ingrediente = await listarMenu_item_ingredientePorIdQuery(req.params.id);
      if (menu_item_ingrediente.length === 0) {
        return res.status(404).json({ mensaje: 'Menu_item_ingrediente no encontrado' });
      }
      res.json(menu_item_ingrediente[0]); // Devuelve el primer menu_item_ingrediente encontrado
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Menu_item_ingrediente
   */
  const crearMenu_item_ingrediente = async (req, res) => {
    try {
      const datosMenu_item_ingrediente = req.body;
      const resultado = await crearMenu_item_ingredienteQuery(datosMenu_item_ingrediente);
      res.status(201).json({ mensaje: 'Menu_item_ingrediente creado con éxito', menu_item_ingrediente: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Menu_item_ingrediente
   */
  const actualizarMenu_item_ingrediente = async (req, res) => {
    try {
      const id = req.params.id;
      const datosMenu_item_ingrediente = req.body;
      const resultado = await actualizarMenu_item_ingredienteQuery(id, datosMenu_item_ingrediente);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Menu_item_ingrediente no encontrado' });
      }
      res.json({ mensaje: 'Menu_item_ingrediente actualizado con éxito', menu_item_ingrediente: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Menu_item_ingrediente
   */
  const eliminarMenu_item_ingrediente = async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await eliminarMenu_item_ingredienteQuery(id);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Menu_item_ingrediente no encontrado' });
      }
      res.json({ mensaje: 'Menu_item_ingrediente eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Menu_item_ingrediente', error: error.message });
    }
  };
  
  export {
    listarTodosMenu_item_ingredientes,
    listarMenu_item_ingredientePorId,
    crearMenu_item_ingrediente,
    actualizarMenu_item_ingrediente,
    eliminarMenu_item_ingrediente,
  };