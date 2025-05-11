// config.js
import dotenv from 'dotenv';
dotenv.config();

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {  // Add SSL configuration for Render.com
        rejectUnauthorized: false
    }
};

export { config }; // Exporta el objeto como exportación nombrada
