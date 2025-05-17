// db/consultas.js
import pool from './db.js';

const listarTodasConsultasQuery = async () => {
    const result = await pool.query('SELECT * FROM consultas');
    return result.rows;
};

const listarConsultaPorIdQuery = async (id) => {
    const result = await pool.query('SELECT * FROM consultas WHERE id = $1', [id]);
    return result.rows[0];
};

const crearConsultaQuery = async ({ id_cita, diagnostico, tratamiento, observaciones }) => {
    const result = await pool.query(
        'INSERT INTO consultas (id_cita, diagnostico, tratamiento, observaciones) VALUES ($1, $2, $3, $4) RETURNING *',
        [id_cita, diagnostico, tratamiento, observaciones]
    );
    return result.rows[0];
};

const actualizarConsultaQuery = async (id, { id_cita, diagnostico, tratamiento, observaciones }) => {
    const result = await pool.query(
        'UPDATE consultas SET id_cita = $1, diagnostico = $2, tratamiento = $3, observaciones = $4 WHERE id = $5 RETURNING *',
        [id_cita, diagnostico, tratamiento, observaciones, id]
    );
    return result.rows[0];
};

const eliminarConsultaQuery = async (id) => {
    const result = await pool.query('DELETE FROM consultas WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

export {
    listarTodasConsultasQuery,
    listarConsultaPorIdQuery,
    crearConsultaQuery,
    actualizarConsultaQuery,
    eliminarConsultaQuery
};
