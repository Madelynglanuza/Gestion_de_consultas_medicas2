// db/mesas.js
import pool from './db.js';

/**
 * Cargar todas las mesas
 */
const listarTodasMesasQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM mesas');
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err; // Lanza el error para que pueda ser manejado en otro lugar
    }
};

/**
 * Buscar una mesa por su ID
 */
const listarMesaPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM mesas WHERE id = $1 LIMIT 1', [id]);
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Guardar una nueva mesa
 */
const crearMesaQuery = async (Datosmesa) => {
    const { numero, capacidad, estado } = Datosmesa;
    try {
        const sql = 'INSERT INTO mesas (numero, capacidad, estado) VALUES ($1, $2, $3) RETURNING *';
        const result = await pool.query(sql, [numero, capacidad, estado]);
        return result.rows[0]; // Devuelve la mesa creada
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Actualizar una mesa por su ID
 */
const actualizarMesaQuery = async (id, datosmesa) => {
    const { numero, capacidad, estado } = datosmesa;
    try {
        const sql = 'UPDATE mesas SET numero = $1, capacidad = $2, estado = $3 WHERE id = $4 RETURNING *';
        const result = await pool.query(sql, [numero, capacidad, estado, id]);
        return result.rows[0]; // Devuelve la mesa actualizada
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Eliminar una mesa por su ID
 */
const eliminarMesaQuery = async (id) => {
    try {
        const sql = 'DELETE FROM mesas WHERE id = $1 RETURNING *';
        const result = await pool.query(sql, [id]);
        return result.rows[0]; // Devuelve la mesa eliminada
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodasMesasQuery,
    listarMesaPorIdQuery,
    crearMesaQuery,
    actualizarMesaQuery,
    eliminarMesaQuery   
};