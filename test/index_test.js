var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    

     it('the factorial of 5! is equal to 120',()=>{
       //setup
       const expectedResult=120;
       const inputNum=5;

       //exercise
       const result=Calculate.factorial(inputNum);
       //verify
        assert.equal(result,expectedResult);
     });
       it('the factorial of 4! is equal to 24',()=>{
       //setup
       const expectedResult=24;
       const inputNum=4;

       //exercise
       const result=Calculate.factorial(inputNum);
       //verify
        assert.equal(result,expectedResult);
     });


 it('returns 1 when you pass in 0',()=>{
       //setup
        let input=0;
        let expected=1;

        //ex
        const result=Calculate.factorial(input);
        //verify
        assert.equal(result,expected);
     });

  });
});