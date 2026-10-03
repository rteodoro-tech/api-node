import { Request, Response, NextFunction } from 'express';

export const checkApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== process.env.API_SECRET_KEY) {
    return res.status(401).json({ message: 'Acesso não autorizado: Chave de API inválida ou ausente' });
  }

  next(); // Continua para o Controller se a chave for válida
};