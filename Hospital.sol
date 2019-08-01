pragma solidity ^0.5.10;
pragma experimental ABIEncoderV2;

import "./Examination.sol";

contract Hospital{
    
    mapping (address => Examination[]) examinationList;
    
    /** @dev 患者ごとのスマートコントラクトをデプロイ
      * @param _patientAddress 患者のアドレス
      * @returns address スマートコントラクトのアドレス
      */
    function startExamination(address _patientAddress) public returns (address){
        Examination tmp = new Examination(_patientAddress);
        examinationList[msg.sender].push(tmp);
        return address(tmp);
    }
}
