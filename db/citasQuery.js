// db/historial_pedidos.js
import pool from './db.js';
/**
 * Cargar todos los historial_pedidos
 */
const listarTodosHistorial_pedidosQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM historial_pedidos');
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err; // Lanza el error para que pueda ser manejado en otro lugar
    }
};

/**
 * Buscar un historial_pedido por su ID
 */
const listarHistorial_pedidoPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM historial_pedido WHERE id = $1 LIMIT 1', [id]);
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Guardar un nuevo historial_pedido
 */
const crearHistorial_pedidoQuery = async (Datoshistorial_pedido) => {
    const { id_pedido, estado_anterior, estado_nuevo, fecha_cambio } = Datoshistorial_pedido;
    try {
        const sql = 'INSERT INTO historial_pedidos (id_pedido, estado_anterior, estado_nuevo, fecha_cambio) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await pool.query(sql, [id_pedido, estado_anterior, estado_nuevo, fecha_cambio]);
        return result.rows[0]; // Devuelve el historial pedido
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Actualizar un historial?pedido por su ID
 */
const actualizarHistorial_pedidoQuery = async (id, datoshistorial_pedido) => {
    const { id_pedido, estado_anterior, estado_nuevo, fecha_cambio } = datoshistorial_pedido;
    try {
        const sql = 'UPDATE historial_pedidos SET id_pedido = $1, estado_anterior = $2, estado_nuevo = $3, fecha_cambio = $4 WHERE id = $5 RETURNING *';
        const result = await pool.query(sql, [id_pedido, estado_anterior, estado_nuevo, fecha_cambio, id]);
        return result.rows[0]; // Devuelve el historial_pedido actualizado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Eliminar un historial_pedido por su ID
 */
const eliminarHistorial_pedidoQuery = async (id) => {
    try {
        const sql = 'DELETE FROM historial_pedidos WHERE id = $1 RETURNING *';
        const result = await pool.query(sql, [id]);
        return result.rows[0]; // Devuelve el historial_pedido eliminado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosHistorial_pedidosQuery,
    listarHistorial_pedidoPorIdQuery,
    crearHistorial_pedidoQuery,
    actualizarHistorial_pedidoQuery,
    eliminarHistorial_pedidoQuery   
};