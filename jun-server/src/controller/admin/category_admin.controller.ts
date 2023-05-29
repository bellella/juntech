import { Request, Response, Router } from 'express'
import ProductDAO from '../../dao/product.dao'
import ProductCategoryDAO from '../../dao/product_category.dao'

let router = Router();

 router.get('/', (req: Request, res: Response, next) => {
    ProductCategoryDAO.getList()
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

router.get('/all', (req: Request, res: Response, next) => {
    ProductCategoryDAO.getListAll()
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

router.post('/', (req: Request, res: Response, next) => {
    ProductCategoryDAO.updateList(req.body.categories)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

export default router;
