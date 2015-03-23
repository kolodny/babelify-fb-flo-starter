var gen = function *() {
  yield 1;
  yield 2;
  yield 3;
}();





for (var i of gen) {
  console.log(i);
}

var i = 0;
function next() {
  console.log(3434)
  return i++;
}

setInterval(function() {
  //console.log('test')
  console.log(next());
}, 500)
