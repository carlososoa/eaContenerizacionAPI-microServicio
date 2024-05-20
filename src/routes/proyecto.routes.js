import express from 'express';
import { obtenerProyectos, obtenerProyecto, crearProyecto, actualizarProyecto } from '../controllers/proyecto.controller.js';

const router = express.Router();

router.get('/proyectos', obtenerProyectos);
router.get('/proyectos/:id', obtenerProyecto);
router.post('/proyectos', crearProyecto);
router.put('/proyectos/:id', actualizarProyecto);

export default router;
