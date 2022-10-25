import { Request, Response } from 'express';
import { requestAsync } from '../utils/api';
import { Web3Service } from '../service';
import { result } from '../service/types';
import httpStatus from 'http-status';

const mintReq = requestAsync(async (req: Request, res: Response) => {
    const web3Client = Web3Service.getWeb3Client();
    const reqBody = req.body;
    const response = await web3Client.mintReq({
        to: reqBody.to,
        tokenId: reqBody.tokenId,
        amount: reqBody.amount
    });

    result(res, response, httpStatus.OK);
});

const mintErrReq = requestAsync(async (req: Request, res: Response) => {
    const web3Client = Web3Service.getWeb3Client();
    const reqBody = req.body;
    const response = await web3Client.mintErrReq({
        to: reqBody.to,
        tokenId: reqBody.tokenId,
        amount: reqBody.amount
    });

    result(res, response, httpStatus.OK);
});

export const Controller = {
    mintReq,
    mintErrReq,
}
