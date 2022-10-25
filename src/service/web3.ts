import { ethers } from 'ethers';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { abi as NFTABI  } from '../abi/TestNFT.json';
import { Config } from '../config/config';
import { IWeb3Client, Mint } from './types';

const contractABI = new ethers.utils.Interface(NFTABI);

export class Web3Client implements IWeb3Client {

    private getProvider() {
        return new ethers.providers.JsonRpcProvider(Config.network.rpc_url);
    }

    private getWeb3() {
        return new Web3(new Web3.providers.HttpProvider(Config.network.rpc_url));
    }

    public async mintReq(params: Mint) {
        const provider = this.getProvider();
        const nonce = await provider.getTransactionCount(params.to, 'pending');
        const gasPrice = await provider.getGasPrice();
        const web3 = this.getWeb3();
        const web3Contract = new web3.eth.Contract(
            (NFTABI as unknown) as AbiItem,
            Config.contract.address,
            {
                from: params.to
            }
        );
        
        let errMsg = "";
        try{
            await web3Contract.methods.mint(
                params.tokenId.toString(),
                params.amount.toString()
            ).call()
        } catch(err) {
            errMsg = err.message;
        }

        return {
            from: params.to,
            to: Config.contract.address,
            nonce: ethers.utils.hexlify(nonce),
            gasPrice: ethers.utils.hexlify(gasPrice),
            gasLimit: ethers.utils.hexlify(100000),
            value: ethers.utils.hexlify(0),
            data: contractABI.encodeFunctionData("mint", [
                params.tokenId.toString(),
                params.amount.toString()
            ]),
            errMsg
        };
    }

    public async mintErrReq(params: Mint) {
        const provider = this.getProvider();
        const nonce = await provider.getTransactionCount(params.to, 'pending');
        const gasPrice = await provider.getGasPrice();
        const web3 = this.getWeb3();
        const web3Contract = new web3.eth.Contract(
            (NFTABI as unknown) as AbiItem,
            Config.contract.address,
            {
                from: params.to
            }
        );
        
        let errMsg = "";
        try{
            await web3Contract.methods.mintError(
                params.tokenId.toString(),
                params.amount.toString()
            ).call()
        } catch(err) {
            errMsg = err.message;
        }

        return {
            from: params.to,
            to: Config.contract.address,
            nonce: ethers.utils.hexlify(nonce),
            gasPrice: ethers.utils.hexlify(gasPrice),
            gasLimit: ethers.utils.hexlify(100000),
            value: ethers.utils.hexlify(0),
            data: contractABI.encodeFunctionData("mintError", [
                params.tokenId.toString(),
                params.amount.toString()
            ]),
            errMsg
        };
    }
}