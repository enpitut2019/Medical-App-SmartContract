const web3 = new Web3('wss://rinkeby.infura.io/ws/v3/cf93a80dccb7456d806de40695023f72');

const myContractInstance = new web3.eth.Contract(MyContractABI, MyContractAddress);

const privateKey = "0xC70A0871801DAA107C6FD38B8F36B4783BEABC47D5C860155F396A5F991317C5"
let account = web3.eth.accounts.privateKeyToAccount(privateKey);

myContractInstance.events.StartExamination({}, function (error, event) {
    console.log(event);
})
    .on('data', function (event) {
        console.log(event); // same results as the optional callback above
    })
    .on('changed', function (event) {
        // remove event from local database
    })
    .on('error', console.error);


$('#deployButton').click(function () {
    let patientAddress = String($('#patientAddress').val());
    const query = myContractInstance.methods.startExamination(patientAddress);
    const encodedABI = query.encodeABI();
    web3.eth.accounts.signTransaction({
        to: MyContractAddress,
        data: encodedABI,
        gas: 4000000,
        gasPrice: "5100000000"
    }, privateKey)
        .then(function (result) {
            web3.eth.sendSignedTransaction(result.rawTransaction)
                .once('StartExamination', function (error, event) {
                    console.log(event)
                })
                .on('receipt', console.log);
        });
})

$('#medicalBillsButton').click(function () {
    var val = $('#medicalBillsInput').val();
    try {
        $('#qrcode').html("").qrcode({
            width: 200,
            height: 200,
            text: val,
        });
    } catch (e) {
        $('#qrcode').html("").append("文字数オーバーです：<br>" + e);
    }
    myContractInstance.setMedicalCost(val1, {from: account, gas: 3000000}, (error, result) => {
        $('#medical_bills_p').text('setMedicalCost_hash : ' + result)
    })
})
