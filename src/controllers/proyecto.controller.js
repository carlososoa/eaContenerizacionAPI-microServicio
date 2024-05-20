import Proyecto from '../models/proyecto.model.js';
import Cliente from '../models/cliente.model.js';
import Etapa from '../models/etapa.model.js';
import TipoProyecto from '../models/tipoProyecto.model.js';
import Universidad from '../models/universidad.model.js';

// Consultar todos los proyectos
export const obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find().populate('cliente tipoProyecto universidad etapa');
    res.status(200).json(proyectos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los proyectos', error });
    console.log(error);
  }
};

// Consultar un proyecto específico por ID
export const obtenerProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findById(id).populate('cliente tipoProyecto universidad etapa');
    if (!proyecto) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.status(200).json(proyecto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el proyecto', error });
  }
};

// Crear un nuevo proyecto
export const crearProyecto = async (req, res) => {
  try {
    const nuevoProyecto = new Proyecto(req.body);
    const proyectoGuardado = await nuevoProyecto.save();
    res.status(201).json(proyectoGuardado);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el proyecto', error });
  }
};

// Modificar un proyecto específico por ID
export const actualizarProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyectoActualizado = await Proyecto.findByIdAndUpdate(id, req.body, { new: true }).populate('cliente tipoProyecto universidad etapa');
    if (!proyectoActualizado) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.status(200).json(proyectoActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el proyecto', error });
    console.log(error);
  }
};
