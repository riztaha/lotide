const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it("returns undefined for []", () => {
    assert.deepEqual(middle([]), undefined);
  })
  
  it("returns [3,4] when [1,2,3,4,5,6] is given", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]); 
  });
  
  it("Returns [3] if [1,2,3,4,5] given", () => {
    assert.deepEqual(middle(   [1, 2, 3, 4, 5]    ), [3]);
  });

  it("Fails if it returns '5' for ['5','6','7']", () => {
    assert.isNotTrue(middle(['5','6','7']), '5');
  });
});
