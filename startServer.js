/*
  It is the script to start https server in nodejs, print 'nodejs startServer.js 5000'. 
  last number meens port.
  certificate.pem and privatekey.pem must be in //frontend/cert/.
  After you run this, nathing will be changed in your consol, dont worry about it, its normal)))
*/

var fs = require('fs');
var https = require('https');
var privateKey = fs.readFileSync('./cert/privatekey.pem', 'utf8');
var certificate = fs.readFileSync('./cert/certificate.pem', 'utf8');

var credentials = { key: privateKey, cert: certificate };
var express = require('express');
var app = express();

app.use(express.static('./build'));

 

app.use('*', (req, response) => {
  response.status(200).send('build',`index.html${req.url}`)
});

var tls = https.createServer(credentials, app);

tls.listen(...process.argv.slice(2));
