// controllers/pedidos_detallesController.js
import {
    listarTodosPedido_detallesQuery,
    listarPedido_detallePorIdQuery,
    crearPedido_detalleQuery,
    actualizarPedido_detalleQuery,
    eliminarPedido_detalleQuery
  } from "../db/pedido_detallesQuery.js";
  
  /**
   * Obtener todas los Pedidos_detalles de la base de datos
   */
  const listarTodosPedido_detalles = async (req, res) => {
    try {
      const pedido_detalles = await listarTodosPedido_detallesQuery();
      res.json(pedido_detalles);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Pedido_detalle con el ID especificado en la query / url
   */
  const listarPedido_detallePorId = async (req, res) => { 
    try {
      const pedido_detalle = await listarPedido_detallePorIdQuery(req.params.id);
      if (pedido_detalle.length === 0) {
        return res.status(404).json({ mensaje: 'Pedido_detalle no encontrado' });
      }
      res.json(pedido_detalle[0]); // Devuelve el primer pedido_detalle encontrado
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Pedido_detalle
   */
  const crearPedido_detalle = async (req, res) => {
    try {
      const datosPedido_detalle = req.body;
      const resultado = await crearPedido_detalleQuery(datosPedido_detalle);
      res.status(201).json({ mensaje: 'Pedido_detalle creado con éxito', pedido_detalle: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Pedido_detalle
   */
  const actualizarPedido_detalle = async (req, res) => {
    try {
      const id = req.params.id;
      const datosPedido_detalle = req.body;
      const resultado = await actualizarPedido_detalleQuery(id, datosPedido_detalle);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Pedido_detalle no encontrado' });
      }
      res.json({ mensaje: 'Pedido_detalle actualizado con éxito', pedido_detalle: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Pedido_detalle
   */
  const eliminarPedido_detalle = async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await eliminarPedido_detalleQuery(id);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Pedido_detalle no encontrado' });
      }
      res.json({ mensaje: 'Pedido_detalle eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Pedido_detalle', error: error.message });
    }
  };
  
  export {
    listarTodosPedido_detalles,
    listarPedido_detallePorId,
    crearPedido_detalle,
    actualizarPedido_detalle,
    eliminarPedido_detalle,
  };