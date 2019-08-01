pragma solidity ^0.5.10;

contract Examination{
    address hospitalAddress;
    address patientAddress;
    
    constructor (address _patientAddress) public {
        hospitalAddress = msg.sender;
        patientAddress = _patientAddress;
    }
}