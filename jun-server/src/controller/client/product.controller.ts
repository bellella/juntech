import { Request, Response, Router } from 'express'
import ProductDAO from '../../dao/product.dao'
import ProductCategoryDAO from '../../dao/product_category.dao'

let router = Router();

router.get('/', (req: Request, res: Response, next) => {
    ProductDAO.getList()
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

router.get('/:productId', (req: Request, res: Response, next) => {
    ProductDAO.getProduct(req.params.productId)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

router.post('/', (req: Request, res: Response, next) => {
    ProductDAO.createProduct(req.body.product)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

router.patch('/', (req: Request, res: Response, next) => {
    ProductDAO.updateProduct(req.body.product)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

router.post('/search', (req: Request, res: Response, next) => {
    ProductDAO.searchList(req.body.keyword)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

router.get('/category/:categoryId', (req: Request, res: Response, next) => {
    ProductDAO.getList(req.params.categoryId)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});


export default router;
