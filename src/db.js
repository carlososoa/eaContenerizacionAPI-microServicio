import mongoose from "mongoose";




export const connectDB = async () => {
  try {
    const url = process.env.MONGODB;
    await mongoose.connect(url)
    console.log('DB Conexion Exitosa')
  } catch (error) {
    console.log("Error al conectar la base de datos");
    console.log(error)
  }
}

