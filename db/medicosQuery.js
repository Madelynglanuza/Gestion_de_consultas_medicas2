// db/menu_item_ingredientes.js
import pool from './db.js';

const listarTodosMedicosQuery = async () => {
    const result = await pool.query('SELECT * FROM medicos');
    return result.rows;
};

const listarMedicoPorIdQuery = async (id) => {
    const result = await pool.query('SELECT * FROM medicos WHERE id = $1', [id]);
    return result.rows[0];
};

const crearMedicoQuery = async ({ nombre, especialidad, telefono }) => {
    const result = await pool.query(
        'INSERT INTO medicos (nombre, especialidad, telefono) VALUES ($1, $2, $3) RETURNING *',
        [nombre, especialidad, telefono]
    );
    return result.rows[0];
};

const actualizarMedicoQuery = async (id, { nombre, especialidad, telefono }) => {
    const result = await pool.query(
        'UPDATE medicos SET nombre = $1, especialidad = $2, telefono = $3 WHERE id = $4 RETURNING *',
        [nombre, especialidad, telefono, id]
    );
    return result.rows[0];
};

const eliminarMedicoQuery = async (id) => {
    const result = await pool.query('DELETE FROM medicos WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

export {
    listarTodosMedicosQuery,
    listarMedicoPorIdQuery,
    crearMedicoQuery,
    actualizarMedicoQuery,
    eliminarMedicoQuery
};
