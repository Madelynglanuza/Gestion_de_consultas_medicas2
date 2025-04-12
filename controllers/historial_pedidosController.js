// controllers/historial_pedidosController.js
import {
    listarTodosHistorial_pedidosQuery,
    listarHistorial_pedidoPorIdQuery,
    crearHistorial_pedidoQuery,
    actualizarHistorial_pedidoQuery,
    eliminarHistorial_pedidoQuery
  } from "../db/historial_pedidosQuery.js";
  
  /**
   * Obtener todas los Historial_pedidos de la base de datos
   */
  const listarTodosHistorial_pedidos = async (req, res) => {
    try {
      const historial_pedidos = await listarTodosHistorial_pedidosQuery();
      res.json(historial_pedidos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Historial_pedido con el ID especificado en la query / url
   */
  const listarHistorial_pedidoPorId = async (req, res) => { 
    try {
      const historial_pedido = await listarHistorial_pedidoPorIdQuery(req.params.id);
      if (historial_pedido.length === 0) {
        return res.status(404).json({ mensaje: 'Historial_pedido no encontrado' });
      }
      res.json(historial_pedido[0]); // Devuelve el primer historial_pedido encontrado
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Historial_pedido
   */
  const crearHistorial_pedido = async (req, res) => {
    try {
      const datosHistorial_pedido = req.body;
      const resultado = await crearHistorial_pedidoQuery(datosHistorial_pedido);
      res.status(201).json({ mensaje: 'Historial_pedido creado con éxito', historial_pedido: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Historial_pedido
   */
  const actualizarHistorial_pedido = async (req, res) => {
    try {
      const id = req.params.id;
      const datosHistorial_pedido = req.body;
      const resultado = await actualizarHistorial_pedidoQuery(id, datosHistorial_pedido);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Historial_pedido no encontrado' });
      }
      res.json({ mensaje: 'Historial_pedido actualizado con éxito', historial_pedido: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Historial_pedido
   */
  const eliminarHistorial_pedido = async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await eliminarHistorial_pedidoQuery(id);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Historial_pedido no encontrado' });
      }
      res.json({ mensaje: 'Historial_pedido eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Historial_pedido', error: error.message });
    }
  };
  
  export {
    listarTodosHistorial_pedidos,
    listarHistorial_pedidoPorId,
    crearHistorial_pedido,
    actualizarHistorial_pedido,
    eliminarHistorial_pedido,
  };