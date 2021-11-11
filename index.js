const Calculate = {
  factorial(input){
    //if input to factorial is 0 return 1
    if(input ===0){
    return 1;
    }
    for(let i=input-1;i>0;i-- ){
      //store the value of input at each iteration
     input *= i;
    }
    return input;
  }
}

module.exports = Calculate;