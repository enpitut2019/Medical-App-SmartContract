const HospitalContractAddress = "0xdb253c66c8f7490b36928343284f9cfd9e6af0d4";

const HospitalContractABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "testReturnAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"name": "startExamination",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "hospitalAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "patientAddress",
				"type": "address"
			}
		],
		"name": "StartExamination",
		"type": "event"
	}
];