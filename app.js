const express = require('express'),
      http = require('http'),
      path = require('path'),
      fs = require('fs');

var app = express();
var server = require('http').createServer(app);

app.get('/', (req,res,next) => {
  res.sendFile(path.join(__dirname + '/view-stream.html'));
});

app.use(express.static(path.join(__dirname,'src')));
app.use('/src',express.static('src'));

app.set('port', (process.env.PORT || 3030));
server.listen(app.get('port'), function() {
    console.log('server listening on port ' + app.get('port'));
});
