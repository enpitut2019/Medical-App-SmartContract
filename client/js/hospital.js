const web3 = new Web3('wss://rinkeby.infura.io/ws/v3/cf93a80dccb7456d806de40695023f72');

const HospitalContractInstance  = new web3.eth.Contract(HospitalContractABI, HospitalContractAddress);
const ExaminationContractInstance = new web3.eth.Contract(ExaminationContractABI, ExaminationContractAddress);

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
});

$('#setMedicalCostButton').click(function () {
    console.log("start...");
    let medicalCost = $('#setMedicalCostInput1').val();
    let signature = $('#setMedicalCostInput2').val();
    const encodedABI = ExaminationContractInstance.methods.setMedicalCost(medicalCost, signature).encodeABI();
    // console.log(encodedABI);
    (async function() {
        let gasAmount = 4000000;//await ExaminationContractInstance.methods.setMedicalCost(medicalCost, signature).estimateGas();
        console.log(gasAmount);
        let signedtx = await web3.eth.accounts.signTransaction({to: ExaminationContractAddress, data: encodedABI, gas: gasAmount}, privateKey);
        let receipt = await web3.eth.sendSignedTransaction(signedtx.rawTransaction);
        console.log(receipt);
    }());
});


function decription() {
    //sourceはQRコードから読み取ったstring
    const source = "0123456789ABCDEF0123456789ABCDEF,U2FsdGVkX193yGXl7eiptNXrX1TSLpv/haG2yjBBDyFlphJ0CZtyps2uhE6l+5TYfrpPlyDuHHAVuuW08XArmlO7czuPOsUS9TxgIc07UozlmHzcc9sKNpUQFsA1Hjil5WEqCKN7xfJov303kz4rH6+fLuZcBJyIrjVzBdX0Gh9AkElZSTHP3lWK9LKlLSKsUv+6LZPP/sZ7IrtSNVtN49g/BvtyEz4BsnI47dSwkqEi83dyNXxEl5s6+Wt7pnytq8ODb1ub/q9RQpYneVam7VaJReGDK82ury4hswl6GhWvNm+VbXUpdbhotg6Ub6jXlyU2uQ0Am1cwm9wGnfXhG14SE35czODhMJCLGokBq00hXNov8yajkoTOJX0cUTkvIK1QI5DaFHnYUPH58jz5+pIGo/fBrtkXzU958B90clk=,0xdd6bb20b9e7881037e855333a7e420644cf05c4a665255fc5f9e744d82b37f9a671ece5b61d839d09d90b15ceef30ea17a59cb9094e3f2881eae5b7b82643f631b";

    const sourceArray = source.split(',');
    const key = sourceArray[0];
    const crypto = sourceArray[1];
    const sign = sourceArray[2];

    // 復号化
    var decrypted = CryptoJS.AES.decrypt(crypto, key);
    var decrypted_strings = decrypted.toString(CryptoJS.enc.Utf8);
    console.log('decrypted_strings: ' + decrypted_strings);
    console.log('sign: ' + sign);

    //json形式化
    const patientInfo = JSON.parse(decrypted_strings);
    console.log(patientInfo);
}