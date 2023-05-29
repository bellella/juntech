import { Express, Request, Response, Router } from 'express'
import productController from './product.controller'
import categoryController from './category.controller'
import inquiryController from './inquiry.controller'
let router = Router();

router.use('/product', productController);
router.use('/category', categoryController);
router.use('/inquiry', inquiryController);
export default router;