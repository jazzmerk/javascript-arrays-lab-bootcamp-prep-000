var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten (element){
  kittens.push(element);
  
  }
  
  function destructivelyPrependKitten (element){
  kittens.unshift(element);
  
  }
  
  function destructivelyRemoveFirstKitten(){
    kittens.unshift();
      }
      
  function destructivelyRemoveLastKitten(){  
    kittens.pop();
  }