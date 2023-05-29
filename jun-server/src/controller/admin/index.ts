import { Express, Request, Response, Router } from 'express'
import productController from './product_admin.controller'
import userController from './user.controller'
import categoryController from './category_admin.controller'
import inquiryController from './inquiry.controller'
import auth from '../../middleware/auth.middleware'
let router = Router();

router.use('/product', auth, productController);
router.use('/category', auth, categoryController);
router.use('/user', userController);
router.use('/inquiry', inquiryController);

export default router;