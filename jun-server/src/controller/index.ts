import { Express, Request, Response, Router } from 'express'
import client from './client'
import admin from './admin'
import uploadController from './upload.controller'
import * as path from 'path';
let router = Router();

router.use('/', client);
router.use('/admin', admin);
router.use('/upload', uploadController);

export default router;