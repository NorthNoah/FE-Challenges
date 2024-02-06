var a = 0;
var b = 0;
var c = 0;
function fn(a){
  console.log(a++, c);
  function fn2(b){
    console.log(a,b,c);
  }
  var c = 4;
  fn = fn2;
}
console.log(fn(1));
console.log(fn(2));