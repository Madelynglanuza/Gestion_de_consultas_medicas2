// db/pedidos.js
import pool from './db.js';

/**
 * Cargar todos los pedidos
 */
const listarTodosPedidosQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM pedidos');
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err; // Lanza el error para que pueda ser manejado en otro lugar
    }
};

/**
 * Buscar un pedido por su ID
 */
const listarPedidoPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM pedidos WHERE id = $1 LIMIT 1', [id]);
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Guardar un nuevo pedido
 */
const crearPedidoQuery = async (Datospedido) => {
    const { id_mesa, fecha, estado, total, comensales } = Datospedido;
    try {
        const sql = 'INSERT INTO pedidos (id_mesa, fecha, estado, total, comensales) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const result = await pool.query(sql, [id_mesa, fecha, estado, total, comensales]);
        return result.rows[0]; // Devuelve el pedido creada
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Actualizar un pedido por su ID
 */
const actualizarPedidoQuery = async (id, datospedido) => {
    const { id_mesa, fecha, estado, total, comensales } = datospedido;
    try {
        const sql = 'UPDATE pedidos SET id_mesa = $1, fecha = $2, estado = $3, total = $4, comensales = $5 WHERE id = $6 RETURNING *';
        const result = await pool.query(sql, [id_mesa, fecha, estado, total, comensales, id]);
        return result.rows[0]; // Devuelve el pedido actualizado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Eliminar un pedido por su ID
 */
const eliminarPedidoQuery = async (id) => {
    try {
        const sql = 'DELETE FROM pedidos WHERE id = $1 RETURNING *';
        const result = await pool.query(sql, [id]);
        return result.rows[0]; // Devuelve el pedido eliminado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosPedidosQuery,
    listarPedidoPorIdQuery,
    crearPedidoQuery,
    actualizarPedidoQuery,
    eliminarPedidoQuery   
};