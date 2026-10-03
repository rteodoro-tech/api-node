import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRoutes } from './routes/user.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Libera o CORS para qualquer origem durante o dev
app.use(express.json()); // Habilita o parse de JSON no body das requisições

// Rotas
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando localmente em http://localhost:${PORT}`);
});