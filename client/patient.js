const web3 = new Web3('wss://rinkeby.infura.io/ws/v3/cf93a80dccb7456d806de40695023f72');

console.log(web3);
const HospitalContractInstance  = new web3.eth.Contract(HospitalContractABI, HospitalContractAddress);

// ブラウザのローカルストレージから秘密鍵を読み込み
const privateKey = localStorage.getItem('privateKey');

if(privateKey == null){
    alert("Please Input Your Private Key");
    location.href = './common.html';
}

// 秘密鍵 => アドレス
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

// イベントのキャッチ設定
HospitalContractInstance.events.StartExamination({}, function(error, event){
	console.log(event);
	if(event.returnValues.patientAddress == account.address){
	    $('#contractAddress').text("Examination Contract Address : "+event.returnValues.contractAddress);
	}
	localStorage.setItem("contractAddress", event.returnValues.contractAddress);
});

//--------------------------------------------------------------------------------------------------------------------------------

$(function () {
    $("button[name='size']").on("click", function (e) {
        e.preventDefault();
        var source = $('#name').val() + ',' + $('#country').val() + ',' + $('#language').val() + ',' + $('#destination').val() + ','
            + $('#work place').val() + ',' + $('#length of stay').val() + ',' + $('#medical insurance').val() + ','
            + $('#method of paymnt').val() + ',' + $('#religious requests').val() + ',' + $('#emergency contact').val() + ',' +
            $('#acquaintance').val() + ',' + $('#others').val() + ',';
        source = Encoding.convert(source, 'SJIS');

        try {
            $('#qrcode').html("").qrcode({
                width: 200,
                height: 200,
                text: source,
            });
        } catch (e) {
            $('#qrcode').html("").append("文字数オーバーです：<br>" + e);
        }
    })
});