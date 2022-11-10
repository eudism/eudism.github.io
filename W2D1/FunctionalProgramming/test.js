describe ("sum",function(){
          it("it takes 3 numbers ten returns the sum", function(){
    assert.equal(9,sum([2,3,4]));});

});
      

describe ("multiply",function(){
          it("it takes 2 numbers then returns the product", function(){
    assert.equal(6,multiply([2,3]));});

});
    
describe ("reverse",function(){
          it("it takes a string then returns its reverse", function(){
    assert.equal("siduE",reverse("Eudis"));});

});

describe ("filterLongWords",function(){
          it("it takes an array of strings and returns the ones whose length is greater than the given integer", function(){
    assert.deepEqual(["Eudis","IvanS"],filterLongWords(["Eudis","Eric","IvanS"],4));});

});
