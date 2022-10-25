import { Response } from 'express';

export interface Mint {
    to: string;
    tokenId: string;
    amount: number;
}

export type IRawTransaction = Partial<{
    to: string,
    nonce: string,
    gasPrice: string,
    gasLimit: string,
    value: string
}>;

export interface Result<T = unknown> {
    status: 'OK' | 'ERROR';
    data: T;
    error: string | null;
}

export const result = <T>(
    res: Response,
    data: T,
    status: number = 200,
    error: string = ''
) => {
    const responseData: Result<T> = {
      status: status >= 400 ? 'ERROR' : 'OK',
      data,
      error,
    };
  
    return res.status(status).json(responseData);
};

export interface IWeb3Client {
    mintReq: (params: Mint) => Promise<IRawTransaction>;
}
