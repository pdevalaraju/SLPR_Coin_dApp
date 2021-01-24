var SLPR_Deployer = artifacts.require("SLPRcoinCrowdSaleDeployer");
var SLPR_Sale = artifacts.require("SLPRcoinCrowdSale");
var SLPR_Token = artifacts.require("SLPRcoin");

module.exports = function(deployer) {
  deployer.deploy(SLPR_Deployer, "SLPRCoin", "SLPR", 500, "0x5DcB55E69997d60397e4C685cc695E82FA5d377B", 200, 100,
"0xbFC4DFb2690e192d7201BD622811925B75B34b81", "0x0C7041311a2d6A28c7208bb7070a36B873523019",
"0x8dB0F529f73317c484f3E8aEC5108687174f25fA");

};


