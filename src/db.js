import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const url = 'mongodb+srv://carlososoa:3OecHMNmJO5MAy8I@cluster0.r9jmx3g.mongodb.net/proyectos-iud?retryWrites=true&w=majority&appName=Cluster0'
    await mongoose.connect(url)
    console.log('DB Conexion Exitosa')
  } catch (error) {
    console.log(error)
  }
}

