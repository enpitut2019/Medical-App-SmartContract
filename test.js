const Web3 = require('web3');
const web3 = new Web3('wss://rinkeby.infura.io/ws/v3/5b883212a27446358b9b322aa45819be');

const MyContractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_medicalCost",
				"type": "uint256"
			}
		],
		"name": "inputMedicalCost",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

const MyContractAddress = "0x18a3e97149abde7a9ae566523623cb6849b46a2a";

const myContractInstance  = new web3.eth.Contract(MyContractABI,MyContractAddress);

console.log(myContractInstance);
