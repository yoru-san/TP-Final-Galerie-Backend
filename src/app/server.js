var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var routes = require('./routes.js');
var webpush = require('web-push');
var notificationHandler = require('./notificationHandler.js');

const publicKey = "BBuliSqEe9KKtp2AxfHLzgv-e3iDjtL2L2nOFheosPEnT3L8JpG6aUXtmFndP-TQCr6TYQw5RckcszO4EjqnuCA";
const privateKey = "NKJc-N0CwNN7Orf4eET2Rt6XQZRbmF98PbFYvvhEkKE";
let subscription;


webpush.setVapidDetails(
    "mailto:test@test.com",
    publicKey,
    privateKey
);

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.post("/subscribe", (req, res) => {
    subscription = req.body;
    notificationHandler.registerSubscription(req.body);
    res.status(201).json({});
});

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});