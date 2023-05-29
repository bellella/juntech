import { Request, Response, Router } from 'express'
import UserService from '../../service/user.service'
let router = Router();

/**
 * 로그인
 */
 router.post('/signin', async (req: Request, res: Response, next) => {
    const { id, password } = req.body;

    UserService.signIn(id, password)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

/**
 * 가입
 */
router.post('/signup', async (req: Request, res: Response, next) => {
    const user = req.body.user;

    UserService.signUp(user)
        .then(r => {
            res.status(200).send({ token: r });
        })
        .catch(e => {
            next(e);
        });
});

export default router;
