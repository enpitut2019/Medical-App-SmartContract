const web3 = new Web3('wss://rinkeby.infura.io/ws/v3/cf93a80dccb7456d806de40695023f72');

const HospitalContractInstance  = new web3.eth.Contract(HospitalContractABI, HospitalContractAddress);

// ブラウザのローカルストレージから秘密鍵を読み込み
const privateKey = localStorage.getItem('privateKey');

if(privateKey == null){
    alert("Please Input Your Private Key");
    location.href = '../common.html';
}

// 秘密鍵 => アドレス
const account = web3.eth.accounts.privateKeyToAccount(privateKey);


// イベントのキャッチ設定
HospitalContractInstance.events.StartExamination({}, function(error, event){
	console.log(event);
	if(event.returnValues.hospitalAddress == account.address){
	    $('#contractAddress').text("Examination Contract Address : "+event.returnValues.contractAddress);
	}
	localStorage.setItem("contractAddress", event.returnValues.contractAddress);
});

// --------------------------------------------------------------------------------------------------------------------------
// コピペするときはコメントを適宜消すこと
// --------------------------------------------------------------------------------------------------------------------------
// deployButtonがクリックされたら実行
$('#deployButton').click(function() {
	console.log("start...");
	const patientAddress = String($('#patientAddress').val());
	// トランザクションのデータ部にくっつけるバイトコードを生成
    const encodedABI = HospitalContractInstance.methods.startExamination(patientAddress).encodeABI();
    // async即時関数でweb3を使う(綺麗に書ける)
    (async function(){
        // gasの使用量を計算
        let gasAmount = await HospitalContractInstance.methods.startExamination(patientAddress).estimateGas();
        // トランザクションにローカルの秘密鍵で署名
        let signedtx = await web3.eth.accounts.signTransaction({to: HospitalContractAddress, data: encodedABI, gas: gasAmount}, privateKey);
        // 署名済みトランザクションを送信
        let receipt = await web3.eth.sendSignedTransaction(signedtx.rawTransaction);
        console.log(receipt);
    }());
});
// --------------------------------------------------------------------------------------------------------------------------

$('#testButton').click(function() {
	console.log("start");
    HospitalContractInstance.methods.testReturnAddress().call({from: account.address}).then(console.log);
})

$('#medicalCostButton').click(function () {
    let val = $('#medicalCost').val();
    try {
        $('#qrcode').html("").qrcode({
            width: 200,
            height: 200,
            text: val,
        });
    } catch (e) {
        $('#qrcode').html("").append("文字数オーバーです：<br>" + e);
    }
})