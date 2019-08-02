function sign(message){
    let result = web3.eth.accounts.sign(message, privateKey);
    return result.signature;
}

console.log(sign("test"));