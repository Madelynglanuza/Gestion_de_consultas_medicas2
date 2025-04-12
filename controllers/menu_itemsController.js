// controllers/menu_itemsController.js
import {
    listarTodosMenu_itemsQuery,
    listarMenu_itemPorIdQuery,
    crearMenu_itemQuery,
    actualizarMenu_itemQuery,
    eliminarMenu_itemQuery
  } from "../db/menu_itemsQuery.js";
  
  /**
   * Obtener todas los menu_items de la base de datos
   */
  const listarTodosMenu_items = async (req, res) => {
    try {
      const menu_items = await listarTodosMenu_itemsQuery();
      res.json(menu_items);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Menu_item con el ID especificado en la query / url
   */
  const listarMenu_itemPorId = async (req, res) => { 
    try {
      const menu_item = await listarMenu_itemPorIdQuery(req.params.id);
      if (menu_item.length === 0) {
        return res.status(404).json({ mensaje: 'Menu_item no encontrado' });
      }
      res.json(menu_item[0]); // Devuelve el primer menu_item encontrado
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Menu_item
   */
  const crearMenu_item = async (req, res) => {
    try {
      const datosMenu_item = req.body;
      const resultado = await crearMenu_itemQuery(datosMenu_item);
      res.status(201).json({ mensaje: 'Menu_item creado con éxito', menu_item: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Menu_item
   */
  const actualizarMenu_item = async (req, res) => {
    try {
      const id = req.params.id;
      const datosMenu_item = req.body;
      const resultado = await actualizarMenu_itemQuery(id, datosMenu_item);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Menu_item no encontrado' });
      }
      res.json({ mensaje: 'Menu_item actualizado con éxito', menu_item: resultado });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Menu_item
   */
  const eliminarMenu_item = async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await eliminarMenu_itemQuery(id);
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Menu_item no encontrado' });
      }
      res.json({ mensaje: 'Menu_item eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Menu_item', error: error.message });
    }
  };
  
  export {
    listarTodosMenu_items,
    listarMenu_itemPorId,
    crearMenu_item,
    actualizarMenu_item,
    eliminarMenu_item,
  };