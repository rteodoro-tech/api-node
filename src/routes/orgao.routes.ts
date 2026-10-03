import { Router } from 'express';
import { OrgaoController } from '../controllers/OrgaoController.js';

const orgaoRoutes = Router();
const orgaoController = new OrgaoController();

orgaoRoutes.get('/', (req, res) => orgaoController.getAllOrgaos(req, res));

export { orgaoRoutes };