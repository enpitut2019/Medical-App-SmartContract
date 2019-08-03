const HospitalContractAddress = "0x860c9e2448a0760647c624e7610957af8ec37326"; //"0xaa9F19c68742247F693Fba531Bf0E31d92B37477";

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
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "Test",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "input",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

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