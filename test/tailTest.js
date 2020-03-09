const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {

  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  
  it("returns undefined for []", () => {
    assert.strictEqual(tail([]), undefined);
  })
  
  it("fails if returns 'Lighthouse' when given ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.isNotTrue(tail(["Yo Yo", "Lighthouse", "Labs"]), "Lighthouse"); 
  });
  
  it("Fails if it returns 5 for [1,2,3]", () => {
    assert.isNotTrue(tail([1, 2, 3], 5));
  });

  it("Fails if it returns '5' for ['5','6','7']", () => {
    assert.isNotTrue(tail(['5','6','7']), 5);
  });



});
