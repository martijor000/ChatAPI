var express = require('express');
var router = express.Router();

//Endpoints/Routes ----------------------------------------------------------


router.get('/', function(req, res){
    res.send("root");

})

module.exports = router;