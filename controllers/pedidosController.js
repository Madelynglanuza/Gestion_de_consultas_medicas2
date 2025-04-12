// controllers/pedidosController.js
import {
    listarTodosPedidosQuery,
    listarPedidoPorIdQuery,
    crearPedidoQuery,
    actualizarPedidoQuery,
    eliminarPedidoQuery
  } from "../db/pedidosQuery.js";
  
  /**
   * Obtener todas los Pedidos de la base de datos
   */
  const listarTodosPedidos = async (req, res) => {
    try {
      const pedidos = await listarTodosPedidosQuery();
      res.json(pedidos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Pedido con el ID especificado en la query / url
   */
  const listarPedidoPorId = async (req, res) => { 
    try {
      const pedido = await listarPedidoPorIdQuery(req.params.id);
      if (pedido.length === 0) {
        return res.status(404).json({ mensaje: 'Pedido no encontrado' });
      }
      res.json(pedido[0]); // Devuelve el primer pedido encontrado
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Pedido
   */
  const crearPedido = async (req, res) => {
    try {
      const datosPedido = req.body;
      const resultado = await crearPedidoQuery(datosPedido);
      res.status(201).json({ mensaje: 'Pedido creado con éxito', pedido: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Pedido
   */
  const actualizarPedido = async (req, res) => {
    try {
      const id = req.params.id;
      const datosPedido = req.body;
      const resultado = await actualizarPedidoQuery(id, datosPedido);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Pedido no encontrado' });
      }
      res.json({ mensaje: 'Pedido actualizado con éxito', pedido: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Pedido
   */
  const eliminarPedido = async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await eliminarPedidoQuery(id);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Pedido no encontrado' });
      }
      res.json({ mensaje: 'Pedido eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Pedido', error: error.message });
    }
  };
  
  export {
    listarTodosPedidos,
    listarPedidoPorId,
    crearPedido,
    actualizarPedido,
    eliminarPedido,
  };