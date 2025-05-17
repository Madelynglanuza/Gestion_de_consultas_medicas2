// controllers/consultasController.js
import {
  listarTodasConsultasQuery,
  listarConsultaPorIdQuery,
  crearConsultaQuery,
  actualizarConsultaQuery,
  eliminarConsultaQuery
} from "../db/consultasQuery.js";

/**
 * Obtener todas las consultas médicas
 */
const listarTodasConsultas = async (req, res) => {
  try {
    const consultas = await listarTodasConsultasQuery();
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las consultas', error: error.message });
  }
};

/**
 * Obtener una consulta médica por ID
 */
const listarConsultaPorId = async (req, res) => {
  try {
    const consulta = await listarConsultaPorIdQuery(req.params.id);
    if (consulta.length === 0) {
      return res.status(404).json({ mensaje: 'Consulta no encontrada' });
    }
    res.json(consulta[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la consulta', error: error.message });
  }
};

/**
 * Crear una nueva consulta médica
 */
const crearConsulta = async (req, res) => {
  try {
    const datosConsulta = req.body;
    const resultado = await crearConsultaQuery(datosConsulta);
    res.status(201).json({ mensaje: 'Consulta creada con éxito', consulta: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la consulta', error: error.message });
  }
};

/**
 * Actualizar una consulta médica existente
 */
const actualizarConsulta = async (req, res) => {
  try {
    const id = req.params.id;
    const datosConsulta = req.body;
    const resultado = await actualizarConsultaQuery(id, datosConsulta);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Consulta no encontrada' });
    }
    res.json({ mensaje: 'Consulta actualizada con éxito', consulta: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la consulta', error: error.message });
  }
};

/**
 * Eliminar una consulta médica
 */
const eliminarConsulta = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await eliminarConsultaQuery(id);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Consulta no encontrada' });
    }
    res.json({ mensaje: 'Consulta eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la consulta', error: error.message });
  }
};

export {
  listarTodasConsultas,
  listarConsultaPorId,
  crearConsulta,
  actualizarConsulta,
  eliminarConsulta,
};