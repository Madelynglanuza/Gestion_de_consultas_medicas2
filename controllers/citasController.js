// controllers/citas.js

import {
  listarTodasCitasQuery,
  listarCitaPorIdQuery,
  crearCitaQuery,
  actualizarCitaQuery,
  eliminarCitaQuery
} from "../db/citasQuery.js";

/**
 * Obtener todas las citas
 */
const listarTodasCitas = async (req, res) => {
  try {
    const citas = await listarTodasCitasQuery();
    res.json(citas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener citas', error: error.message });
  }
};

/**
 * Obtener una cita por su ID
 */
const listarCitaPorId = async (req, res) => {
  try {
    const cita = await listarCitaPorIdQuery(req.params.id);
    if (cita.length === 0) {
      return res.status(404).json({ mensaje: 'Cita no encontrada' });
    }
    res.json(cita[0]);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la cita', error: error.message });
  }
};

/**
 * Crear una nueva cita
 */
const crearCita = async (req, res) => {
  try {
    const datosCita = req.body;
    const resultado = await crearCitaQuery(datosCita);
    res.status(201).json({ mensaje: 'Cita creada con éxito', cita: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la cita', error: error.message });
  }
};

/**
 * Actualizar una cita existente
 */
const actualizarCita = async (req, res) => {
  try {
    const id = req.params.id;
    const datosCita = req.body;
    const resultado = await actualizarCitaQuery(id, datosCita);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Cita no encontrada' });
    }
    res.json({ mensaje: 'Cita actualizada con éxito', cita: resultado });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la cita', error: error.message });
  }
};

/**
 * Eliminar una cita
 */
const eliminarCita = async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await eliminarCitaQuery(id);
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Cita no encontrada' });
    }
    res.json({ mensaje: 'Cita eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la cita', error: error.message });
  }
};

export {
  listarTodasCitas,
  listarCitaPorId,
  crearCita,
  actualizarCita,
  eliminarCita,
};