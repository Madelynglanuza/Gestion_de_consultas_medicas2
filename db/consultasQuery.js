// db/ingredientes.js
import pool from './db.js';
/**
 * Cargar todas los ingredientes
 */
const listarTodosIngredientesQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM ingredientes');
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err; // Lanza el error para que pueda ser manejado en otro lugar
    }
};

/**
 * Buscar un ingrediente por su ID
 */
const listarIngredientePorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM ingredientes WHERE id = $1 LIMIT 1', [id]);
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Guardar un nuevo ingrediente
 */
const crearIngredienteQuery = async (Datosingrediente) => {
    const { nombre, stock, unidad, costo } = Datosingrediente;
    try {
        const sql = 'INSERT INTO ingredientes (nombre, stock, unidad, costo) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await pool.query(sql, [nombre, stock, unidad, costo]);
        return result.rows[0]; // Devuelve el ingrediente creado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Actualizar una ingrediente por su ID
 */
const actualizarIngredienteQuery = async (id, datosingrediente) => {
    const { nombre, stock, unidad, costo } = datosingrediente;
    try {
        const sql = 'UPDATE ingredientes SET nombre = $1, stock = $2, unidad = $3, costo = $4 WHERE id = $5 RETURNING *';
        const result = await pool.query(sql, [nombre, stock, unidad, costo, id]);
        return result.rows[0]; // Devuelve el ingrediente actualizado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Eliminar un ingrediente por su ID
 */
const eliminarIngredienteQuery = async (id) => {
    try {
        const sql = 'DELETE FROM ingredientes WHERE id = $1 RETURNING *';
        const result = await pool.query(sql, [id]);
        return result.rows[0]; // Devuelve el ingrediente eliminado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosIngredientesQuery,
    listarIngredientePorIdQuery,
    crearIngredienteQuery,
    actualizarIngredienteQuery,
    eliminarIngredienteQuery   
};