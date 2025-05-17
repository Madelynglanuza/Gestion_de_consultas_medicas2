// db/menu_items.js
import pool from './db.js';

const listarTodosPacientesQuery = async () => {
    const result = await pool.query('SELECT * FROM pacientes');
    return result.rows;
};

const listarPacientePorIdQuery = async (id) => {
    const result = await pool.query('SELECT * FROM pacientes WHERE id = $1', [id]);
    return result.rows[0];
};

const crearPacienteQuery = async ({ nombre, edad, genero, telefono }) => {
    const result = await pool.query(
        'INSERT INTO pacientes (nombre, edad, genero, telefono) VALUES ($1, $2, $3, $4) RETURNING *',
        [nombre, edad, genero, telefono]
    );
    return result.rows[0];
};

const actualizarPacienteQuery = async (id, { nombre, edad, genero, telefono }) => {
    const result = await pool.query(
        'UPDATE pacientes SET nombre = $1, edad = $2, genero = $3, telefono = $4 WHERE id = $5 RETURNING *',
        [nombre, edad, genero, telefono, id]
    );
    return result.rows[0];
};

const eliminarPacienteQuery = async (id) => {
    const result = await pool.query('DELETE FROM pacientes WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

export {
    listarTodosPacientesQuery,
    listarPacientePorIdQuery,
    crearPacienteQuery,
    actualizarPacienteQuery,
    eliminarPacienteQuery
};