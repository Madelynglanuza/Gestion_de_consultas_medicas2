// controllers/ingredientesController.js
import {
    listarTodosIngredientesQuery,
    listarIngredientePorIdQuery,
    crearIngredienteQuery,
    actualizarIngredienteQuery,
    eliminarIngredienteQuery
  } from "../db/ingredientesQuery.js";
  
  /**
   * Obtener todas los Ingredientes de la base de datos
   */
  const listarTodosIngredientes = async (req, res) => {
    try {
      const ingredientes = await listarTodosIngredientesQuery();
      res.json(ingredientes);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Ingrediente con el ID especificado en la query / url
   */
  const listarIngredientePorId = async (req, res) => { 
    try {
      const ingrediente = await listarIngredientePorIdQuery(req.params.id);
      if (ingrediente.length === 0) {
        return res.status(404).json({ mensaje: 'Ingrediente no encontrado' });
      }
      res.json(ingrediente[0]); // Devuelve el primer ingrediente encontrado
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Ingrediente
   */
  const crearIngrediente = async (req, res) => {
    try {
      const datosIngrediente = req.body;
      const resultado = await crearIngredienteQuery(datosIngrediente);
      res.status(201).json({ mensaje: 'Ingrediente creado con éxito', ingrediente: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Ingrediente
   */
  const actualizarIngrediente = async (req, res) => {
    try {
      const id = req.params.id;
      const datosIngrediente = req.body;
      const resultado = await actualizarIngredienteQuery(id, datosIngrediente);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Ingrediente no encontrado' });
      }
      res.json({ mensaje: 'Ingrediente actualizado con éxito', ingrediente: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Ingrediente
   */
  const eliminarIngrediente = async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await eliminarIngredienteQuery(id);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Ingrediente no encontrado' });
      }
      res.json({ mensaje: 'Ingrediente eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Ingrediente', error: error.message });
    }
  };
  
  export {
    listarTodosIngredientes,
    listarIngredientePorId,
    crearIngrediente,
    actualizarIngrediente,
    eliminarIngrediente,
  };