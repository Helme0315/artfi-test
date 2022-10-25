import { Router } from 'express';
import { Controller } from '../controller';

const router = Router();

router.post(
    '/mint_req',
    Controller.mintReq
);

router.post(
    '/mint_err_req',
    Controller.mintErrReq
);

export const Route = {
    router,
};