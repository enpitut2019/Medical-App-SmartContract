const HospitalContractAddress = "0xb54d0e1bf75bb114f01e8d3d395156213debc7b9";

const HospitalContractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_patientData",
				"type": "string"
			},
			{
				"name": "_signature",
				"type": "bytes"
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

const ExaminationContractAddress = "0x129482032297B59D9d0B7Cfe16e672460F829E9f";

const ExaminationContractABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "validatePatientAddress",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withDraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPatientAddress",
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
		"constant": true,
		"inputs": [],
		"name": "getPatientData",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "refund",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "viewPatientData",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPaymentStatus",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTokenData",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "symbol",
						"type": "string"
					},
					{
						"name": "decimals",
						"type": "uint8"
					}
				],
				"name": "",
				"type": "tuple"
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
				"name": "_medicalCost",
				"type": "uint256"
			},
			{
				"name": "_signature",
				"type": "bytes"
			}
		],
		"name": "setMedicalCost",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_patientData",
				"type": "string"
			},
			{
				"name": "_signature",
				"type": "bytes"
			},
			{
				"name": "_hospitalAddress",
				"type": "address"
			},
			{
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "fallback"
	}
];