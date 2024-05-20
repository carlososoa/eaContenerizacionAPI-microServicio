import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true

  },

}, { timestamps: true },);


export default mongoose.model('Cliente', clienteSchema);