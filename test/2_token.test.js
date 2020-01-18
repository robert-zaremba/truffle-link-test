const Token = artifacts.require('Token');

contract('CMTA20', function ([owner, address1, address2, address3, fakeRuleEngine]) {

  // weird, this should fail, because the SafeMath library is not linked!
  it("should use add and SafeMath correctly", async function(){
    var t = await Token.deployed();
    var result = await t.add(2);
    assert.equal(result.toString(), '4');
    assert.notEqual(result.toString(), '5');
  })

});
