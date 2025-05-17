// db/menu_items.js
import pool from './db.js';


/**
 * Cargar todos los menu_items
 */
const listarTodosMenu_itemsQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM menu_items');
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err; // Lanza el error para que pueda ser manejado en otro lugar
    }
};

/**
 * Buscar un menu_item por su ID
 */
const listarMenu_itemPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM menu_items WHERE id = $1 LIMIT 1', [id]);
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Guardar un nueva menu_item
 */
const crearMenu_itemQuery = async (Datosmenu_item) => {
    const { nombre, descripcion, precio, categoria } = Datosmenu_item;
    try {
        const sql = 'INSERT INTO menu_items (nombre, descripcion, precio, categoria) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await pool.query(sql, [nombre, descripcion, precio, categoria]);
        return result.rows[0]; // Devuelve el menu_item creado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Actualizar un menu_item por su ID
 */
const actualizarMenu_itemQuery = async (id, datosmenu_item) => {
    const { nombre, descripcion, precio, categoria } = datosmenu_item;
    try {
        const sql = 'UPDATE menu_items SET nombre = $1, descripcion = $2, precio = $3, categoria = $4 WHERE id = $5 RETURNING *';
        const result = await pool.query(sql, [nombre, descripcion, precio, categoria, id]);
        return result.rows[0]; // Devuelve el menu_item actualizado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Eliminar un menu_item por su ID
 */
const eliminarMenu_itemQuery = async (id) => {
    try {
        const sql = 'DELETE FROM menu_items WHERE id = $1 RETURNING *';
        const result = await pool.query(sql, [id]);
        return result.rows[0]; // Devuelve el menu_item eliminado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosMenu_itemsQuery,
    listarMenu_itemPorIdQuery,
    crearMenu_itemQuery,
    actualizarMenu_itemQuery,
    eliminarMenu_itemQuery   
};