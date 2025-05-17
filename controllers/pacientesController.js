// controllers/pacientesController.js
import {
  listarTodosPacientesQuery,
  listarPacientePorIdQuery,
  crearPacienteQuery,
  actualizarPacienteQuery,
  eliminarPacienteQuery
} from "../db/pacientesQuery.js";

/**
 * Obtener todos los pacientes de la base de datos
 */
const listarTodosPacientes = async (req, res) => {
  try {
    const pacientes = await listarTodosPacientesQuery();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los pacientes', error: error.message });
  }
};

/**
 * Obtener un paciente por ID
 */
const listarPacientePorId = async (req, res) => {
  try {
    const paciente = await listarPacientePorIdQuery(req.params.id);
    if (paciente.length === 0) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    }
    res.json(paciente[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el paciente', error: error.message });
  }
};

/**
 * Crear un nuevo paciente
 */
const crearPaciente = async (req, res) => {
  try {
    const datosPaciente = req.body;
    const resultado = await crearPacienteQuery(datosPaciente);
    res.status(201).json({ mensaje: 'Paciente creado con éxito', paciente: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el paciente', error: error.message });
  }
};

/**
 * Actualizar un paciente existente
 */
const actualizarPaciente = async (req, res) => {
  try {
    const id = req.params.id;
    const datosPaciente = req.body;
    const resultado = await actualizarPacienteQuery(id, datosPaciente);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    }
    res.json({ mensaje: 'Paciente actualizado con éxito', paciente: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el paciente', error: error.message });
  }
};

/**
 * Eliminar un paciente
 */
const eliminarPaciente = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await eliminarPacienteQuery(id);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    }
    res.json({ mensaje: 'Paciente eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el paciente', error: error.message });
  }
};

export {
  listarTodosPacientes,
  listarPacientePorId,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente,
};