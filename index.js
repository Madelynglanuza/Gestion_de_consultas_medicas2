// index.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importa solo las rutas relevantes a tu proyecto
import citasRouter from './routes/citasRoute.js';
import consultasRouter from './routes/consultasRoute.js';
import medicosRouter from './routes/medicosRoute.js';
import pacientesRouter from './routes/pacientesRoute.js';

// Usa solo las rutas necesarias para tu proyecto
app.use('/api/citas', citasRouter);
app.use('/api/consultas', consultasRouter);
app.use('/api/medicos', medicosRouter);
app.use('/api/pacientes', pacientesRouter);

// Ruta base
app.get('/', (req, res) => {
    res.send('Bienvenido a la API del sistema de gestión médica');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

