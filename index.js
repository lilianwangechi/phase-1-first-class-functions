function receivesAFunction(callBack){
   callBack();
}
receivesAFunction(function(){return "hi there"})

function returnsANamedFunction(){
  function miki(){
    return "Hi there"
  }
  return miki;
}
//returnsANamedFunction()

function returnsAnAnonymousFunction(){
return (function(){
  return "Hi there"
})

}