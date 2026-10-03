import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRoutes } from './routes/user.routes.js';
import { orgaoRoutes } from './routes/orgao.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:5173', // React rodando localmente no Vite
  'https://meusite.com.br'  // Seu domínio final na Hostinger/Vercel
];

// Middlewares
app.use(cors({
  origin: (origin, callback) => {
    // Permite requisições sem origin (como apps mobile/Postman) ou dentro da lista permitida
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Acesso bloqueado pela política de CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key']
}));

app.use(express.json()); // Habilita o parse de JSON no body das requisições

// Rotas
app.use('/api', userRoutes);
app.use('/api', orgaoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando localmente em http://localhost:${PORT}`);
});