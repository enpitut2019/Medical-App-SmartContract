pragma solidity ^0.5.10;

import "./Library.sol";

contract Examination is Library{
    address hospitalAddress;
    address patientAddress;
    uint256 medicalCost;
    
    constructor (address _patientAddress) public {
        hospitalAddress = msg.sender;
        patientAddress = _patientAddress;
    }
    
    modifier onlyOwner() {
        require(hospitalAddress == msg.sender);
        _;
    }
    
    /** @dev 医療費の登録
      * @param _medicalCost 医療費 
      * @param _signature 文字列に変換した医療費に対する患者の署名
      */
    function setMedicalCost(uint256 _medicalCost, bytes memory _signature) public onlyOwner{
        // 署名が患者によって行われているか
        string memory message = uintToString(_medicalCost);
        require(recoverAddress(message, _signature) == patientAddress);
        
        medicalCost = _medicalCost;
        
        // 返金の処理などを書く
    }
}