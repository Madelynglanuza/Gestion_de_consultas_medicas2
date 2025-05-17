// db/citas.js
import pool from './db.js';

const listarTodasCitasQuery = async () => {
    const result = await pool.query('SELECT * FROM citas');
    return result.rows;
};

const listarCitaPorIdQuery = async (id) => {
    const result = await pool.query('SELECT * FROM citas WHERE id = $1', [id]);
    return result.rows[0];
};

const crearCitaQuery = async ({ id_paciente, id_medico, fecha, hora, motivo }) => {
    const result = await pool.query(
        'INSERT INTO citas (id_paciente, id_medico, fecha, hora, motivo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [id_paciente, id_medico, fecha, hora, motivo]
    );
    return result.rows[0];
};

const actualizarCitaQuery = async (id, { id_paciente, id_medico, fecha, hora, motivo }) => {
    const result = await pool.query(
        'UPDATE citas SET id_paciente = $1, id_medico = $2, fecha = $3, hora = $4, motivo = $5 WHERE id = $6 RETURNING *',
        [id_paciente, id_medico, fecha, hora, motivo, id]
    );
    return result.rows[0];
};

const eliminarCitaQuery = async (id) => {
    const result = await pool.query('DELETE FROM citas WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

export {
    listarTodasCitasQuery,
    listarCitaPorIdQuery,
    crearCitaQuery,
    actualizarCitaQuery,
    eliminarCitaQuery
};

