import mongoose from "mongoose";

import Cliente from './cliente.model.js';
import Etapa from './etapa.model.js';
import TipoProyecto from './tipoProyecto.model.js';
import Universidad from './universidad.model.js';

const proyectoSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  fechaIniciacion: {
    type: Date,
    required: true
  },
  fechaEntrega: {
    type: Date,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  tipoProyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TipoProyecto',
    required: true
  },
  universidad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Universidad',
    required: true
  },
  etapa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Etapa',
    required: true
  },

}, { timestamps: true });

export default mongoose.model('Proyecto', proyectoSchema);