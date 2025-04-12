// index.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importa las rutas
import historial_pedidosRouter from './routes/historial_pedidosRoute.js';
import pedidosRouter from './routes/pedidosRoute.js';
import usuariosRouter from './routes/usuariosRoute.js';
import pedido_detallesRouter from './routes/pedido_detallesRoute.js';
import mesasRouter from './routes/mesasRoute.js';
import menu_itemsRouter from './routes/menu_itemsRoute.js';
import menu_item_ingredientesRouter from './routes/menu_item_ingredientesRoute.js';
import ingredientesRouter from './routes/ingredientesRoute.js';

// Usa las rutas
app.use('/api/historial_pedidos', historial_pedidosRouter);
app.use('/api/pedidos', pedidosRouter);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/pedido_detalles', pedido_detallesRouter);
app.use('/api/mesas', mesasRouter);
app.use('/api/menu_items', menu_itemsRouter);
app.use('/api/menu_item_ingredientes', menu_item_ingredientesRouter);
app.use('/api/ingredientes', ingredientesRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Bienvenido a la API del restaurante');
});

