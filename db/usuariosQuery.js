// db/usuarios.js
import pool from './db.js';

/**
 * Cargar todos los usuarios
 */
const listarTodosUsuariosQuery = async () => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err; // Lanza el error para que pueda ser manejado en otro lugar
    }
};

/**
 * Buscar un usuario por su ID
 */
const listarUsuarioPorIdQuery = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE id = $1 LIMIT 1', [id]);
        return result.rows; // Devuelve las filas obtenidas
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Guardar un nuevo usuario
 */
const crearUsuarioQuery = async (Datosusuario) => {
    const { nombre, rol, usuario, contrasena } = Datosusuario;
    try {
        const sql = 'INSERT INTO usuarios (nombre, rol, usuario, contrasena) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await pool.query(sql, [nombre, rol, usuario, contrasena]);
        return result.rows[0]; // Devuelve el usuario creado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Actualizar una usuario por su ID
 */
const actualizarUsuarioQuery = async (id, datosusuario) => {
    const { nombre, rol, usuario, contrasena } = datosusuario;
    try {
        const sql = 'UPDATE usuarios SET nombre = $1, rol = $2, usuario = $3, contrasena = $4 WHERE id = $5 RETURNING *';
        const result = await pool.query(sql, [nombre, rol, usuario, contrasena, id]);
        return result.rows[0]; // Devuelve el usuario actualizado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Eliminar un usuario por su ID
 */
const eliminarUsuarioQuery = async (id) => {
    try {
        const sql = 'DELETE FROM usuarios WHERE id = $1 RETURNING *';
        const result = await pool.query(sql, [id]);
        return result.rows[0]; // Devuelve el usuario eliminado
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodosUsuariosQuery,
    listarUsuarioPorIdQuery,
    crearUsuarioQuery,
    actualizarUsuarioQuery,
    eliminarUsuarioQuery   
};