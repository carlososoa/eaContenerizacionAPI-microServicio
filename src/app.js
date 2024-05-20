import express from 'express';
import morgan from 'morgan';
import proyectoRoutes from './routes/proyecto.routes.js'





const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(proyectoRoutes);

export default app;