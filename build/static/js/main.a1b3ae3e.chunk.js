(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{34:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"waver","type":"address"},{"indexed":false,"internalType":"string","name":"link","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"link","type":"string"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWavedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_link","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x6080604052620000336040518060600160405280602581526020016200133d602591396200005b60201b6200061a1760201c565b60644442620000439190620001a8565b6200004f919062000245565b600181905550620002ec565b620000fb8160405160240162000072919062000168565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000fe60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600062000134826200018c565b62000140818562000197565b9350620001528185602086016200020f565b6200015d81620002db565b840191505092915050565b6000602082019050818103600083015262000184818462000127565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000620001b58262000205565b9150620001c28362000205565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620001fa57620001f96200027d565b5b828201905092915050565b6000819050919050565b60005b838110156200022f57808201518184015260208101905062000212565b838111156200023f576000848401525b50505050565b6000620002528262000205565b91506200025f8362000205565b925082620002725762000271620002ac565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b61104180620002fc6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806351872959146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b60048036038101906100669190610825565b6100d9565b005b610075610416565b6040516100829190610bca565b60405180910390f35b6100a560048036038101906100a091906107fc565b61041f565b6040516100b29190610bca565b60405180910390f35b6100c3610437565b6040516100d09190610b26565b60405180910390f35b6000808154809291906100eb90610de3565b919050555042601e600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461013d9190610cac565b1061017d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017490610baa565b60405180910390fd5b42600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600360405180608001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200184815260200142815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102869291906106dc565b5060408201518160020190805190602001906102a39291906106dc565b50606082015181600301555050606444426102be9190610cac565b6102c89190610e2c565b6001819055506032600154116103d5576000655af3107a4000905047811115610326576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031d90610b6a565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161034c90610abe565b60006040518083038185875af1925050503d8060008114610389576040519150601f19603f3d011682016040523d82523d6000602084013e61038e565b606091505b50509050806103d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c990610b8a565b60405180910390fd5b50505b7f9948ea69be64fc2d742466dc44de105f9529f31023e72065ab6a405bd59bb5543382844260405161040a9493929190610ad3565b60405180910390a15050565b60008054905090565b60026020528060005260406000206000915090505481565b60606003805480602002602001604051908101604052809291908181526020016000905b8282101561061157838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546104e490610d80565b80601f016020809104026020016040519081016040528092919081815260200182805461051090610d80565b801561055d5780601f106105325761010080835404028352916020019161055d565b820191906000526020600020905b81548152906001019060200180831161054057829003601f168201915b5050505050815260200160028201805461057690610d80565b80601f01602080910402602001604051908101604052809291908181526020018280546105a290610d80565b80156105ef5780601f106105c4576101008083540402835291602001916105ef565b820191906000526020600020905b8154815290600101906020018083116105d257829003601f168201915b505050505081526020016003820154815250508152602001906001019061045b565b50505050905090565b6106b08160405160240161062e9190610b48565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506106b3565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546106e890610d80565b90600052602060002090601f01602090048101928261070a5760008555610751565b82601f1061072357805160ff1916838001178555610751565b82800160010185558215610751579182015b82811115610750578251825591602001919060010190610735565b5b50905061075e9190610762565b5090565b5b8082111561077b576000816000905550600101610763565b5090565b600061079261078d84610c0a565b610be5565b9050828152602081018484840111156107aa57600080fd5b6107b5848285610d3e565b509392505050565b6000813590506107cc81610ff4565b92915050565b600082601f8301126107e357600080fd5b81356107f384826020860161077f565b91505092915050565b60006020828403121561080e57600080fd5b600061081c848285016107bd565b91505092915050565b6000806040838503121561083857600080fd5b600083013567ffffffffffffffff81111561085257600080fd5b61085e858286016107d2565b925050602083013567ffffffffffffffff81111561087b57600080fd5b610887858286016107d2565b9150509250929050565b600061089d8383610a36565b905092915050565b6108ae81610d02565b82525050565b6108bd81610d02565b82525050565b60006108ce82610c4b565b6108d88185610c6e565b9350836020820285016108ea85610c3b565b8060005b8581101561092657848403895281516109078582610891565b945061091283610c61565b925060208a019950506001810190506108ee565b50829750879550505050505092915050565b600061094382610c56565b61094d8185610c8a565b935061095d818560208601610d4d565b61096681610f19565b840191505092915050565b600061097c82610c56565b6109868185610c9b565b9350610996818560208601610d4d565b61099f81610f19565b840191505092915050565b60006109b7603483610c9b565b91506109c282610f2a565b604082019050919050565b60006109da602783610c9b565b91506109e582610f79565b604082019050919050565b60006109fd600083610c7f565b9150610a0882610fc8565b600082019050919050565b6000610a20600f83610c9b565b9150610a2b82610fcb565b602082019050919050565b6000608083016000830151610a4e60008601826108a5565b5060208301518482036020860152610a668282610938565b91505060408301518482036040860152610a808282610938565b9150506060830151610a956060860182610aa0565b508091505092915050565b610aa981610d34565b82525050565b610ab881610d34565b82525050565b6000610ac9826109f0565b9150819050919050565b6000608082019050610ae860008301876108b4565b8181036020830152610afa8186610971565b90508181036040830152610b0e8185610971565b9050610b1d6060830184610aaf565b95945050505050565b60006020820190508181036000830152610b4081846108c3565b905092915050565b60006020820190508181036000830152610b628184610971565b905092915050565b60006020820190508181036000830152610b83816109aa565b9050919050565b60006020820190508181036000830152610ba3816109cd565b9050919050565b60006020820190508181036000830152610bc381610a13565b9050919050565b6000602082019050610bdf6000830184610aaf565b92915050565b6000610bef610c00565b9050610bfb8282610db2565b919050565b6000604051905090565b600067ffffffffffffffff821115610c2557610c24610eea565b5b610c2e82610f19565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610cb782610d34565b9150610cc283610d34565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610cf757610cf6610e5d565b5b828201905092915050565b6000610d0d82610d14565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610d6b578082015181840152602081019050610d50565b83811115610d7a576000848401525b50505050565b60006002820490506001821680610d9857607f821691505b60208210811415610dac57610dab610ebb565b5b50919050565b610dbb82610f19565b810181811067ffffffffffffffff82111715610dda57610dd9610eea565b5b80604052505050565b6000610dee82610d34565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610e2157610e20610e5d565b5b600182019050919050565b6000610e3782610d34565b9150610e4283610d34565b925082610e5257610e51610e8c565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e000000000000000000000000602082015250565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b50565b7f57616974203135206d696e757465730000000000000000000000000000000000600082015250565b610ffd81610d02565b811461100857600080fd5b5056fea264697066735822122089065b52797b88688a2079841221911eb62f6e319a272ed113032527a0ac9ad364736f6c634300080400334179652074686973206973206d792066697273742070726f6a65637420636f6e7472616374","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806351872959146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b60048036038101906100669190610825565b6100d9565b005b610075610416565b6040516100829190610bca565b60405180910390f35b6100a560048036038101906100a091906107fc565b61041f565b6040516100b29190610bca565b60405180910390f35b6100c3610437565b6040516100d09190610b26565b60405180910390f35b6000808154809291906100eb90610de3565b919050555042601e600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461013d9190610cac565b1061017d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017490610baa565b60405180910390fd5b42600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600360405180608001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200184815260200142815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102869291906106dc565b5060408201518160020190805190602001906102a39291906106dc565b50606082015181600301555050606444426102be9190610cac565b6102c89190610e2c565b6001819055506032600154116103d5576000655af3107a4000905047811115610326576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031d90610b6a565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161034c90610abe565b60006040518083038185875af1925050503d8060008114610389576040519150601f19603f3d011682016040523d82523d6000602084013e61038e565b606091505b50509050806103d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c990610b8a565b60405180910390fd5b50505b7f9948ea69be64fc2d742466dc44de105f9529f31023e72065ab6a405bd59bb5543382844260405161040a9493929190610ad3565b60405180910390a15050565b60008054905090565b60026020528060005260406000206000915090505481565b60606003805480602002602001604051908101604052809291908181526020016000905b8282101561061157838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546104e490610d80565b80601f016020809104026020016040519081016040528092919081815260200182805461051090610d80565b801561055d5780601f106105325761010080835404028352916020019161055d565b820191906000526020600020905b81548152906001019060200180831161054057829003601f168201915b5050505050815260200160028201805461057690610d80565b80601f01602080910402602001604051908101604052809291908181526020018280546105a290610d80565b80156105ef5780601f106105c4576101008083540402835291602001916105ef565b820191906000526020600020905b8154815290600101906020018083116105d257829003601f168201915b505050505081526020016003820154815250508152602001906001019061045b565b50505050905090565b6106b08160405160240161062e9190610b48565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506106b3565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546106e890610d80565b90600052602060002090601f01602090048101928261070a5760008555610751565b82601f1061072357805160ff1916838001178555610751565b82800160010185558215610751579182015b82811115610750578251825591602001919060010190610735565b5b50905061075e9190610762565b5090565b5b8082111561077b576000816000905550600101610763565b5090565b600061079261078d84610c0a565b610be5565b9050828152602081018484840111156107aa57600080fd5b6107b5848285610d3e565b509392505050565b6000813590506107cc81610ff4565b92915050565b600082601f8301126107e357600080fd5b81356107f384826020860161077f565b91505092915050565b60006020828403121561080e57600080fd5b600061081c848285016107bd565b91505092915050565b6000806040838503121561083857600080fd5b600083013567ffffffffffffffff81111561085257600080fd5b61085e858286016107d2565b925050602083013567ffffffffffffffff81111561087b57600080fd5b610887858286016107d2565b9150509250929050565b600061089d8383610a36565b905092915050565b6108ae81610d02565b82525050565b6108bd81610d02565b82525050565b60006108ce82610c4b565b6108d88185610c6e565b9350836020820285016108ea85610c3b565b8060005b8581101561092657848403895281516109078582610891565b945061091283610c61565b925060208a019950506001810190506108ee565b50829750879550505050505092915050565b600061094382610c56565b61094d8185610c8a565b935061095d818560208601610d4d565b61096681610f19565b840191505092915050565b600061097c82610c56565b6109868185610c9b565b9350610996818560208601610d4d565b61099f81610f19565b840191505092915050565b60006109b7603483610c9b565b91506109c282610f2a565b604082019050919050565b60006109da602783610c9b565b91506109e582610f79565b604082019050919050565b60006109fd600083610c7f565b9150610a0882610fc8565b600082019050919050565b6000610a20600f83610c9b565b9150610a2b82610fcb565b602082019050919050565b6000608083016000830151610a4e60008601826108a5565b5060208301518482036020860152610a668282610938565b91505060408301518482036040860152610a808282610938565b9150506060830151610a956060860182610aa0565b508091505092915050565b610aa981610d34565b82525050565b610ab881610d34565b82525050565b6000610ac9826109f0565b9150819050919050565b6000608082019050610ae860008301876108b4565b8181036020830152610afa8186610971565b90508181036040830152610b0e8185610971565b9050610b1d6060830184610aaf565b95945050505050565b60006020820190508181036000830152610b4081846108c3565b905092915050565b60006020820190508181036000830152610b628184610971565b905092915050565b60006020820190508181036000830152610b83816109aa565b9050919050565b60006020820190508181036000830152610ba3816109cd565b9050919050565b60006020820190508181036000830152610bc381610a13565b9050919050565b6000602082019050610bdf6000830184610aaf565b92915050565b6000610bef610c00565b9050610bfb8282610db2565b919050565b6000604051905090565b600067ffffffffffffffff821115610c2557610c24610eea565b5b610c2e82610f19565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610cb782610d34565b9150610cc283610d34565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610cf757610cf6610e5d565b5b828201905092915050565b6000610d0d82610d14565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610d6b578082015181840152602081019050610d50565b83811115610d7a576000848401525b50505050565b60006002820490506001821680610d9857607f821691505b60208210811415610dac57610dab610ebb565b5b50919050565b610dbb82610f19565b810181811067ffffffffffffffff82111715610dda57610dd9610eea565b5b80604052505050565b6000610dee82610d34565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610e2157610e20610e5d565b5b600182019050919050565b6000610e3782610d34565b9150610e4283610d34565b925082610e5257610e51610e8c565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e000000000000000000000000602082015250565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b50565b7f57616974203135206d696e757465730000000000000000000000000000000000600082015250565b610ffd81610d02565b811461100857600080fd5b5056fea264697066735822122089065b52797b88688a2079841221911eb62f6e319a272ed113032527a0ac9ad364736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}')},40:function(f,e,b){f.exports=b(61)},45:function(f,e,b){},47:function(f,e,b){},49:function(f,e){},61:function(f,e,b){"use strict";b.r(e);var a=b(5),t=b.n(a),n=b(33),c=b.n(n),d=(b(45),b(2)),r=b.n(d),s=b(15),o=b(14),i=b(16),l=(b(47),b(34)),u=b(64);function m(){var f=Object(a.useState)(""),e=Object(o.a)(f,2),b=(e[0],e[1]),n=Object(a.useState)(!1),c=Object(o.a)(n,2),d=c[0],m=c[1],p=Object(a.useState)(!1),v=Object(o.a)(p,2),g=v[0],y=v[1],h=Object(a.useState)(0),w=Object(o.a)(h,2),x=w[0],E=w[1],k=Object(a.useState)(0),T=Object(o.a)(k,2),j=T[0],N=T[1],C=Object(a.useState)(0),O=Object(o.a)(C,2),S=O[0],W=O[1],M=Object(a.useState)([]),B=Object(o.a)(M,2),A=B[0],P=B[1],z="0xfeDee730EBDEcfA2B8e2AC016DF74f5998C21DDc",D=l.abi,R=function(){var f=Object(s.a)(r.a.mark((function f(){var e,b,a,t,n,c,d;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,!(b=e.ethereum)){f.next=16;break}return a=new i.a.providers.Web3Provider(b),t=a.getSigner(),n=new i.a.Contract(z,D,t),f.next=8,n.getAllWaves();case 8:c=f.sent,d=[],c.forEach((function(f){d.push({address:f.waver,timestamp:new Date(1e3*f.timestamp),message:f.message,link:f.link})})),P(d),E(d.length),console.log("setAllWaves",d),f.next=17;break;case 16:console.log("Ethereum object doesn't exist!");case 17:f.next=22;break;case 19:f.prev=19,f.t0=f.catch(0),console.log(f.t0);case 22:case"end":return f.stop()}}),f,null,[[0,19]])})));return function(){return f.apply(this,arguments)}}(),H=function(){var f=Object(s.a)(r.a.mark((function f(){var e,a,t,n;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,a=e.ethereum){f.next=8;break}return y(!1),console.log("Make sure you have metamask!"),f.abrupt("return");case 8:console.log("We have the ethereum object",a);case 9:return f.next=11,a.request({method:"eth_accounts"});case 11:0!==(t=f.sent).length?(n=t[0],console.log("Found an authorized account:",n),y(!0),b(n),R()):(y(!1),console.log("No authorized account found")),f.next=18;break;case 15:f.prev=15,f.t0=f.catch(0),console.log(f.t0);case 18:case"end":return f.stop()}}),f,null,[[0,15]])})));return function(){return f.apply(this,arguments)}}(),L=function(){var f=Object(s.a)(r.a.mark((function f(){var e,b,a,t,n,c;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(m(!0),f.prev=1,e=window,!(b=e.ethereum)){f.next=15;break}return a=new i.a.providers.Web3Provider(b),t=a.getSigner(),console.log("wavePortalContract",t),n=new i.a.Contract(z,D,t),f.next=10,n.functions.getTotalWaves();case 10:c=f.sent,console.log("Retrieved total wave count...",c.toNumber()),m(!1),f.next=17;break;case 15:m(!1),console.log("Ethereum object doesn't exist!");case 17:f.next=23;break;case 19:f.prev=19,f.t0=f.catch(1),m(!1),console.log(f.t0);case 23:case"end":return f.stop()}}),f,null,[[1,19]])})));return function(){return f.apply(this,arguments)}}(),_=function(){var f=Object(s.a)(r.a.mark((function f(){var e,b,a,t,n,c,d;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(m(!0),f.prev=1,e=window,!(b=e.ethereum)){f.next=28;break}return a=new i.a.providers.Web3Provider(b),t=a.getSigner(),n=new i.a.Contract(z,D,t),f.next=9,n.getTotalWaves();case 9:return c=f.sent,console.log("Retrieved total wave count...",c.toNumber()),f.next=13,n.wave(j,S,{gasLimit:3e5});case 13:return d=f.sent,console.log("Mining...",d.hash),f.next=17,d.wait();case 17:return console.log("Mined -- ",d.hash),f.next=20,n.getTotalWaves();case 20:return c=f.sent,console.log("Retrieved total wave count...",c.toNumber()),N(""),f.next=25,R();case 25:m(!1),f.next=30;break;case 28:console.log("Ethereum object doesn't exist!"),m(!1);case 30:f.next=36;break;case 32:f.prev=32,f.t0=f.catch(1),m(!1),console.log(f.t0);case 36:case"end":return f.stop()}}),f,null,[[1,32]])})));return function(){return f.apply(this,arguments)}}();function J(f){var e=f.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return e&&11===e[2].length?e[2]:null}return t.a.useEffect(Object(s.a)(r.a.mark((function f(){return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:H(),L();case 2:case"end":return f.stop()}}),f)}))),[]),g?t.a.createElement("div",{className:"mainContainer"},t.a.createElement("div",{className:"dataContainer"},t.a.createElement("img",{style:{width:"80%"},src:"https://i.ytimg.com/vi/UkzCHCN0Tj8/maxresdefault.jpg"}),t.a.createElement("div",{className:"header"},"Share your favourite wrestling moments with me! \ud83e\udd2f"),t.a.createElement("div",{className:"bio"},"Share your favourite wrestling moment and get a chance to win 0.001 ETH \ud83d\ude28"),t.a.createElement("div",{className:"bio"},"Total waves ",x),t.a.createElement("input",{placeholder:"Enter youtube link",type:"text",onChange:function(f){W(f.target.value),console.log("test",j)}}),t.a.createElement("input",{placeholder:"Enter message",type:"text",onChange:function(f){N(f.target.value),console.log("test",j)}}),d?t.a.createElement("button",{className:"waveButton"},"Loading"):t.a.createElement("button",{className:"waveButton",onClick:_},"Send link"),A.map((function(f,e){return t.a.createElement(u.a,{key:e,style:{width:"425px",background:"white",justifyContent:"ceneter",padding:10,margin:10}},t.a.createElement("iframe",{width:"420",height:"315",src:"https://www.youtube.com/embed/".concat(J(f.link)),frameborder:"0",allowfullscreen:!0}),t.a.createElement(u.a.Body,{style:{height:"200px"}},t.a.createElement(u.a.Title,{style:{fontWeight:"bold"}},"Message"),t.a.createElement(u.a.Text,null,f.message),t.a.createElement(u.a.Text,{style:{fontSize:10}},"Address: ",f.address),t.a.createElement(u.a.Text,{style:{fontSize:10}},"Time: ",f.timestamp.toString())))})))):t.a.createElement("div",{className:"mainContainer"},t.a.createElement("div",{className:"dataContainer"},t.a.createElement("img",{style:{width:"80%"},src:"https://i.ytimg.com/vi/UkzCHCN0Tj8/maxresdefault.jpg"}),t.a.createElement("div",{className:"header"},"Share your favourite wrestling moments with me! \ud83e\udd2f"),t.a.createElement("div",{className:"bio"},"Share your favourite wrestling moment and get a chance to win 0.001 ETH \ud83d\ude28"),d?t.a.createElement("button",{className:"waveButton"},"Loading"):t.a.createElement("button",{className:"waveButton",onClick:_},"Connect Wallet"),A.map((function(f,e){return t.a.createElement("div",{key:e,style:{backgroundColor:"#fbfbfb",marginTop:"16px",padding:"8px"}},t.a.createElement("div",null,t.a.createElement("p",{style:{color:"red"}},"Message:")," ",f.message),t.a.createElement("br",null),t.a.createElement("div",null,"Address: ",f.address),t.a.createElement("div",null,"Time: ",f.timestamp.toString()))}))))}c.a.render(t.a.createElement(m,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a1b3ae3e.chunk.js.map