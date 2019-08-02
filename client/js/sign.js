const web3 = new Web3();

const privateKey = "0xC70A0871801DAA107C6FD38B8F36B4783BEABC47D5C860155F396A5F991317C5"

function sign(message){
    let result = web3.eth.accounts.sign(message, privateKey);
    return result.signature;
}

console.log(sign("test"));