var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var routes = require('./routes.js');
var proxy = require('express-http-proxy');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use('/proxy', proxy('https://nostalgic-lamarr-5a666c.netlify.app/'));

app.use(routes);

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});