import { Request, Response, Router } from 'express'
import InquiryDAO from '../../dao/inquiry.dao'

let router = Router();

 router.get('/', (req: Request, res: Response, next) => {
    InquiryDAO.getInquiries()
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

export default router;
