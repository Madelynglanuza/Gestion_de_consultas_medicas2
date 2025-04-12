// controllers/mesasController.js
import {
    listarTodasMesasQuery,
    listarMesaPorIdQuery,
    crearMesaQuery,
    actualizarMesaQuery,
    eliminarMesaQuery
  } from "../db/mesasQuery.js";
  
  /**
   * Obtener todas las Mesas de la base de datos
   */
  const listarTodasMesas = async (req, res) => {
    try {
      const mesas = await listarTodasMesasQuery();
      res.json(mesas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener la Mesa con el ID especificado en la query / url
   */
  const listarMesaPorId = async (req, res) => { 
    try {
      const mesa = await listarMesaPorIdQuery(req.params.id);
      if (mesa.length === 0) {
        return res.status(404).json({ mensaje: 'Mesa no encontrada' });
      }
      res.json(mesa[0]); // Devuelve la primera mesa encontrada
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear una Mesa
   */
  const crearMesa = async (req, res) => {
    try {
      const datosMesa = req.body;
      const resultado = await crearMesaQuery(datosMesa);
      res.status(201).json({ mensaje: 'Mesa creada con éxito', mesa: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de una Mesa
   */
  const actualizarMesa = async (req, res) => {
    try {
      const id = req.params.id;
      const datosMesa = req.body;
      const resultado = await actualizarMesaQuery(id, datosMesa);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Mesa no encontrada' });
      }
      res.json({ mensaje: 'Mesa actualizada con éxito', mesa: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar una Mesa
   */
  const eliminarMesa = async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await eliminarMesaQuery(id);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Mesa no encontrada' });
      }
      res.json({ mensaje: 'Mesa eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar la Mesa', error: error.message });
    }
  };
  
  export {
    listarTodasMesas,
    listarMesaPorId,
    crearMesa,
    actualizarMesa,
    eliminarMesa,
  };