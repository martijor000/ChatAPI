var express = require("express");
var app = express();
var apiRoutes = require('./routes/messages');
var rootRoutes = require('./routes/channels');
var morgan = require('morgan');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(morgan('combined'));

// I want to have channel be the default
app.use('/channel', rootRoutes);
// I want to be able to use the ID tag for channel and try to update the URL based on the channel they selected
app.use('/channel', apiRoutes);

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening on ", host, port);

});