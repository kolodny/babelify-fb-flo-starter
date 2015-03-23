var flo = require('fb-flo'),
  fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec;

var cmd = './node_modules/.bin/browserify -t babelify index.js -o built.js';

var server = flo('./', {
  port: 8888,
  glob: ['lib/**/*.js', 'style/**/*.css']
}, resolver);

server.once('ready', function() {
  console.log('Flo server ready!');
});

function resolver(filepath, callback) {
  console.log('floing', filepath);
  exec(cmd, function (err) {
    if (err) throw err;
    callback({
      resourceURL: 'built.js',
      contents: fs.readFileSync('built.js').toString()
    });
  });
}

exec(cmd, function (err) {
  if (err) throw err;
  console.log('Inital compilation complete');
});
