var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten (element){
  kittens.push(element);
  
  }
  
  function destructivelyPrependKitten (element){
  kittens.unshift(element);
  
  }
  
  function destructivelyRemoveFirstKitten(){
    kittens.shift();
      }
      
  function destructivelyRemoveLastKitten(){  
    kittens.pop();
  }
  
  function appendKitten(element){
    var temparray=[element];
    var newarray=kittens.concat(temparray);
      return (newarray);
  }
  
  function destructivelyPrependKittenKitten(element){
  var temparray=[element];
  var newarray=temparray.concat(kittens):
  return (temparray);
  }
  
  