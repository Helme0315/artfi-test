import { Web3Client } from './web3';

const getWeb3Client = () => {
    return new Web3Client();
}

export const Web3Service = {
    getWeb3Client
};
