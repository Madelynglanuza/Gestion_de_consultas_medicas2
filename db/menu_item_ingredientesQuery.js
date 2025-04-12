// db/menu_item_ingredientes.js
import pool from './db.js';

/**
 * Cargar todos los menu_item_ingredientes
 */
const listarTodosMenu_item_ingredientesQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM menu_item_ingredientes');
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err; // Lanza el error para que pueda ser manejado en otro lugar
    }
};

/**
 * Buscar un menu_item_ingrediente por su ID
 */
const listarMenu_item_ingredientePorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM menu_item_ingredientes WHERE id = $1 LIMIT 1', [id]);
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Guardar una nueva menu_item_ingrediente
 */
const crearMenu_item_ingredienteQuery = async (Datosmenu_item_ingrediente) => {
    const { id_menu_item, id_ingrediente, cantidad } = Datosmenu_item_ingrediente;
    try {
        const sql = 'INSERT INTO menu_item_ingredientes (id_menu_item, id_ingrediente, cantidad) VALUES ($1, $2, $3) RETURNING *';
        const result = await pool.query(sql, [id_menu_item, id_ingrediente, cantidad]);
        return result.rows[0]; // Devuelve el menu_item_ingrediente creado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Actualizar una menu_item_ingrediente por su ID
 */
const actualizarMenu_item_ingredienteQuery = async (id, datosmenu_item_ingrediente) => {
    const { id_menu_item, id_ingrediente, cantidad } = datosmenu_item_ingrediente;
    try {
        const sql = 'UPDATE menu_item_ingredientes SET id_menu_item = $1, id_ingrediente = $2, cantidad = $3 WHERE id = $4 RETURNING *';
        const result = await pool.query(sql, [id_menu_item, id_ingrediente, cantidad, id]);
        return result.rows[0]; // Devuelve el menu_item_ingrediente actualizado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Eliminar un menu_item_ingrediente por su ID
 */
const eliminarMenu_item_ingredienteQuery = async (id) => {
    try {
        const sql = 'DELETE FROM menu_item_ingredientes WHERE id = $1 RETURNING *';
        const result = await pool.query(sql, [id]);
        return result.rows[0]; // Devuelve el menu_item_ingrediente eliminado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosMenu_item_ingredientesQuery,
    listarMenu_item_ingredientePorIdQuery,
    crearMenu_item_ingredienteQuery,
    actualizarMenu_item_ingredienteQuery,
    eliminarMenu_item_ingredienteQuery   
};