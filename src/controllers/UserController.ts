import { Request, Response } from 'express';

export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserController {
  public async getUsers(req: Request, res: Response): Promise<Response> {
    const users: User[] = [
      { id: 1, name: 'Ana Silva', email: 'ana@email.com' },
      { id: 2, name: 'Carlos Souza', email: 'carlos@email.com' }
    ];

    return res.status(200).json(users);
  }
}