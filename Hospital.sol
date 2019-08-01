pragma solidity ^0.5.10;
pragma experimental ABIEncoderV2;

import "./Examination.sol";

contract Hospital{
    
    mapping (address => Examination[]) examinationList;
    
    /** @dev ���҂��Ƃ̃X�}�[�g�R���g���N�g���f�v���C
      * @param _patientAddress ���҂̃A�h���X
      * @returns address �X�}�[�g�R���g���N�g�̃A�h���X
      */
    function startExamination(address _patientAddress) public returns (address){
        Examination tmp = new Examination(_patientAddress);
        examinationList[msg.sender].push(tmp);
        return address(tmp);
    }
}
