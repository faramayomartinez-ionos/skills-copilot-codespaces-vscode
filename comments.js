// create web server
// run node comments.js
// and open http://localhost:3000/comments.html

var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

// cache object
var cache = {};

// send 404 error