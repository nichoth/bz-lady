var ecstatic = require('ecstatic')({root: __dirname + '/public'});
var http = require('http');

http.createServer(ecstatic).listen(8000);
console.log('listening on :8000');
