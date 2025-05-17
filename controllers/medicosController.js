// controllers/medicosController.js
import {
  listarTodosMedicosQuery,
  listarMedicoPorIdQuery,
  crearMedicoQuery,
  actualizarMedicoQuery,
  eliminarMedicoQuery
} from "../db/medicosQuery.js";

/**
 * Obtener todos los médicos de la base de datos
 */
const listarTodosMedicos = async (req, res) => {
  try {
    const medicos = await listarTodosMedicosQuery();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los médicos', error: error.message });
  }
};

/**
 * Obtener un médico por ID
 */
const listarMedicoPorId = async (req, res) => {
  try {
    const medico = await listarMedicoPorIdQuery(req.params.id);
    if (medico.length === 0) {
      return res.status(404).json({ mensaje: 'Médico no encontrado' });
    }
    res.json(medico[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el médico', error: error.message });
  }
};

/**
 * Crear un nuevo médico
 */
const crearMedico = async (req, res) => {
  try {
    const datosMedico = req.body;
    const resultado = await crearMedicoQuery(datosMedico);
    res.status(201).json({ mensaje: 'Médico creado con éxito', medico: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el médico', error: error.message });
  }
};

/**
 * Actualizar un médico existente
 */
const actualizarMedico = async (req, res) => {
  try {
    const id = req.params.id;
    const datosMedico = req.body;
    const resultado = await actualizarMedicoQuery(id, datosMedico);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Médico no encontrado' });
    }
    res.json({ mensaje: 'Médico actualizado con éxito', medico: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el médico', error: error.message });
  }
};

/**
 * Eliminar un médico
 */
const eliminarMedico = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await eliminarMedicoQuery(id);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Médico no encontrado' });
    }
    res.json({ mensaje: 'Médico eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el médico', error: error.message });
  }
};

export {
  listarTodosMedicos,
  listarMedicoPorId,
  crearMedico,
  actualizarMedico,
  eliminarMedico,
};