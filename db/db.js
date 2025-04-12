// db/db.js
import pkg from 'pg';
import { config } from '../config.js'; // Importa la exportación nombrada

const { Pool } = pkg;
const pool = new Pool(config);

export default pool;
