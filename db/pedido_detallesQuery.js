// db/pedido_detalles.js
import pool from './db.js';


/**
 * Cargar todos los pedido_detalles
 */
const listarTodosPedido_detallesQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM pedido_detalles');
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err; // Lanza el error para que pueda ser manejado en otro lugar
    }
};

/**
 * Buscar un Pedido_detalle por su ID
 */
const listarPedido_detallePorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM pedido_detalles WHERE id = $1 LIMIT 1', [id]);
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Guardar un nuevo Pedido_detalle
 */
const crearPedido_detalleQuery = async (DatosPedido_detalle) => {
    const { id_pedido, id_menu_item, cantidad, precio_unitario, notas } = DatosPedido_detalle;
    try {
        const sql = 'INSERT INTO pedido_detalles (id_pedido, id_menu_item, cantidad, precio_unitario, notas) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const result = await pool.query(sql, [id_pedido, id_menu_item, cantidad, precio_unitario, notas]);
        return result.rows[0]; // Devuelve el Pedido_detalle creado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Actualizar un Pedido_detalle por su ID
 */
const actualizarPedido_detalleQuery = async (id, datosPedido_detalle) => {
    const { id_pedido, id_menu_item, cantidad, precio_unitario, notas } = datosPedido_detalle;
    try {
        const sql = 'UPDATE pedido_detalles SET id_pedido = $1, id_meni_item = $2, cantidad = $3, precio_unitario = $4, notas = $5 WHERE id = $6 RETURNING *';
        const result = await pool.query(sql, [id_pedido, id_menu_item, cantidad, precio_unitario, notas, id]);
        return result.rows[0]; // Devuelve el Pedido_detalle actualizada
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Eliminar un Pedido_detalle por su ID
 */
const eliminarPedido_detalleQuery = async (id) => {
    try {
        const sql = 'DELETE FROM pedido_detalles WHERE id = $1 RETURNING *';
        const result = await pool.query(sql, [id]);
        return result.rows[0]; // Devuelve el Pedido_detalle eliminada
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosPedido_detallesQuery,
    listarPedido_detallePorIdQuery,
    crearPedido_detalleQuery,
    actualizarPedido_detalleQuery,
    eliminarPedido_detalleQuery   
};