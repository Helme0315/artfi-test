# Artfi Test Project

## Test
Create 3-layered backend interacting with smart contracts.

* node.js/express

* https://testnet.snowtrace.io/address/0xEf0071536081Dce8B0233A4D1dF508e3FDe32Aa4#code

* In the contract there is function mint and mintError so need to integrate these 2 functions

* Get error message before confirm the transaction for mintError function

* No need to use off-chain db

* Use ethers.js or web3.js

* Create a public repo and push all codes there then share the link to us.


## There are 2 Routes

* API url: http://localhost:3000/api/mint/{route}
* All config variables are in the src/config/config.ts

### mint_req
Parameters
* to: Address which receive the token
* tokenId: The token id which was already registered in contract
* amount: The token amoutn which should be minted

#### Response
{
    "status" : 200,
    "data" : {
        from: ***,
        to: ***,
        nonce: ***,
        gasPrice: ***,
        gasLimit: ***,
        value: ***,
        data: ***,
        errMsg: ***
    },
    "error" : ""
}


### mint_err_req
Parameters
* to: Address which receive the token
* tokenId: The token id which was already registered in contract
* amount: The token amoutn which should be minted

#### Response
{
    "status" : 200,
    "data" : {
        from: ***,
        to: ***,
        nonce: ***,
        gasPrice: ***,
        gasLimit: ***,
        value: ***,
        data: ***,
        errMsg: ***
    },
    "error" : ""
}

You can get the errMsg in the data object in response

### Sign the rawTx
You will receive response from mint_req & mint_err_req. 
Then user must sign with his wallet with response from backend.
And call the tx.seraizlie() function.
Then you will get the hex string like as address.
Last, you must send this serialization hex string with provider on frontend.

If you need more details, let me know.
Thanks!