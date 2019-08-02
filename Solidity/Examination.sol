pragma solidity ^0.5.10;
pragma experimental ABIEncoderV2;

import "./Library.sol";
import "./UsingERC20.sol";

contract Examination is UsingERC20, Library{
    address hospitalAddress;
    address patientAddress;
    uint256 medicalCost;
    uint256 unpaidCost;
    bool receiptCompleted;
    string public patientData;

    /** @dev 患者から署名付きの患者データを受け取ってスマートコントラクトを初期化
      * @param _patientData 患者データを暗号化した物
      * @param _signature _patientDataに対する患者の署名
      * @param _tokenAddress 使用するERC20準拠Tokenのコントラクトアドレス
      */
    constructor(string memory _patientData, bytes memory _signature, address _tokenAddress) UsingERC20(_tokenAddress) public {
        hospitalAddress = msg.sender;
        patientData = _patientData;
        patientAddress = recoverAddress(_patientData, _signature);
    }
    
    modifier onlyOwner() {
        require(hospitalAddress == msg.sender);
        _;
    }
    
    /** @dev フォールバック関数(送金を受け付ける）
      */
    function () external{
    }
    
    /** @dev 登録された患者データの取得
        @return string 患者データ
      */
    function viewPatientData() public view returns (string memory){
        return patientData;
    }
    
    /** @dev 医療費の登録
      * @param _medicalCost 医療費 
      * @param _signature 文字列に変換した医療費に対する患者の署名
      */
    function setMedicalCost(uint256 _medicalCost, bytes memory _signature) public onlyOwner{
        require(receiptCompleted == false);
        // 署名が患者によって行われているか
        string memory message = uintToString(_medicalCost);
        require(recoverAddress(message, _signature) == patientAddress);
        
        medicalCost = _medicalCost;
        unpaidCost = _medicalCost;
        receiptCompleted = true;
        // 返金の処理などを書く
    }
    
    /** @dev 明細登録後の医療費の引き出し
             余った分は患者に返金される
      */
    function withDraw() public onlyOwner{
        require(receiptCompleted == true);
        uint256 tokenBalance = ERC20Token.balanceOf(address(this));
        
        if(tokenBalance == 0){
            // 何もしない
        }else if(tokenBalance <= unpaidCost){
            ERC20Token.transfer(hospitalAddress, tokenBalance);
            unpaidCost -= tokenBalance; 
        }else{
            ERC20Token.transfer(hospitalAddress, unpaidCost);
            unpaidCost = 0;
            // 余った分は返金
            refund();
        }
    }
    
    /** @dev トークン残高全てを患者へ送金
      */
    function refund() public onlyOwner{
        uint256 tokenBalance = ERC20Token.balanceOf(address(this));
        ERC20Token.transfer(patientAddress, tokenBalance);
    }
    
    /** @dev 支払状況の取得
      * @return uint256 登録された医療費
      * @return uint256 未払い金額
      * @return uint256 コントラクトの残高
      */
    function getPaymentStatus() public view returns (uint256, uint256, uint256){
        return (medicalCost, unpaidCost, ERC20Token.balanceOf(address(this)));
    }
    
    /** @dev コントラクトに保存された患者アドレスが、正しいかチェックする
     */
    function validatePatientAddress() public view returns (bool){
        return patientAddress == msg.sender;
    }
}