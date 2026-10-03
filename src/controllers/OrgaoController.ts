import { Orgao } from '../types/orgao.types.js';
import { Request, Response } from 'express';

let orgaos: Orgao[] = [
    {
        id: 1,
        codigo: '001',
        descricao: 'Descrição do órgão',
        sigla: 'ORG',
        cnpj: '00.000.000/0000-00',
        status: 'ativo'
    },
    {
        id: 2,
        codigo: '002',
        descricao: 'Descrição do segundo órgão',
        sigla: 'ORG2',
        cnpj: '11.111.111/1111-11',
        status: 'inativo'
    },{
        id: 3,
        codigo: '003',
        descricao: 'Descrição do terceiro órgão',
        sigla: 'ORG3',
        cnpj: '22.222.222/2222-22',
        status: 'ativo'
    }
];

export class OrgaoController {
    public async getAllOrgaos(req: Request, res: Response) {
        res.status(200).json(orgaos);
    }
}