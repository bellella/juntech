import { Request, Response, Router } from 'express'
import PostDAO from '../../dao/post.dao'

let router = Router();

/**
 * get one post
 */
 router.get('/:id', (req: Request, res: Response, next) => {
    PostDAO.getPost(req.params.id)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});
/**
 * get list by admin
 */
router.get('/type/:type', (req: Request, res: Response, next) => {
    PostDAO.getListByAdmin(req.params.type)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});



 router.post('/:type', (req: Request, res: Response, next) => {
    PostDAO.savePost(req.params.type, req.body.post)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

/**
 * update one post
 */
 router.patch('/', (req: Request, res: Response, next) => {
    PostDAO.updatePost(req.body.post)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

export default router;
