pragma solidity ^0.5.10;
pragma experimental ABIEncoderV2;

import "./Examination.sol";

contract Hospital{
    
    event StartExamination(address contractAddress, address hospitalAddress, address patientAddress);
    mapping (address => Examination[]) examinationList;
    
    address tokenAddress = 0x4369eEFc59a1841fC932AcFD9f2c152593Ac5283;
    
    
    /** @dev 患者から署名付きの患者データを受け取ってスマートコントラクトをデプロイ
      * @param _patientData 患者データを暗号化した物
      * @param _signature _patientDataに対する患者の署名
      */
    function startExamination(string memory _patientData, bytes memory _signature) public{
        Examination tmp = new Examination(_patientData, _signature, msg.sender, tokenAddress);
        examinationList[msg.sender].push(tmp);
        emit StartExamination(address(tmp), msg.sender, tmp.getPatientAddress());
    }
}
