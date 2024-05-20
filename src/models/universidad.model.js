import mongoose from "mongoose";

const universidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  direccion: {
    type: String,
    required: true,
    trim: true

  },
  telefono: {
    type: String,
    required: true,
    trim: true
  },

}, { timestamps: true });

export default mongoose.model('Universidad', universidadSchema);