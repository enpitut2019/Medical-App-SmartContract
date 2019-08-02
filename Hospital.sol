pragma solidity ^0.5.10;
pragma experimental ABIEncoderV2;

import "./Examination.sol";

contract Hospital{
    
    event StartExamination(address contractAddress, address hospitalAddress, address patientAddress);
    
    mapping (address => Examination[]) examinationList;
    
    /** @dev 患者ごとのスマートコントラクトをデプロイ
      * @param _patientAddress 患者のアドレス
      */
    function startExamination(address _patientAddress) public{
        Examination tmp = new Examination(_patientAddress);
        examinationList[msg.sender].push(tmp);
        emit StartExamination(address(tmp), msg.sender, _patientAddress);
    }
    
    function testReturnAddress() public view returns(address){
        return msg.sender;
    }
}
