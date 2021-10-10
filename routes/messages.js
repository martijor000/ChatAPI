const { Console } = require('console');
var express = require('express');
var router = express.Router();
var fs = require('fs');
const { devNull } = require('os');
const { stringify } = require('querystring');

//Endpoints/Routes ----------------------------------------------------------


//CRUD - Create, Read, Update, Delete

// Create a resource - Create
router.post('/:id', function(req, res){
    try{
        console.log("Posted Object is: ", req.body);
        const rawdata = fs.readFileSync('messages.json');
        var messageData = JSON.parse(rawdata);
        var rawBody = req.body;
        var newObject = {
            channel: null,
            name: null,
            message: null
        }

        if(rawBody.channel != null)
        {
            newObject.channel = rawBody.channel;
        }

        if(rawBody.name != null)
        {
            newObject.name = rawBody.name;
        }

        if(rawBody.message != null)
        {
            newObject.message = rawBody.message;
        }

        newObject.id = messageData.length;

        messageData.push(newObject);
        const data = fs.writeFileSync('messages.json', JSON.stringify(messageData));    
        res.status(200).json(messageData);

    }catch(err){
        res.status(500).json({message: err.message});
    }
});

//get all of a resource - Read
router.get('/:id', function(req, res){
    try
    {
        var rawdata =fs.readFileSync('messages.json'); // <Buffer  <hex code> - Raw Data
        var channelData = JSON.parse(rawdata);
        console.log(channelData);
        res.status(200).json(channelData);
    } catch(err)
    {
        res.status(500).json({message: err.message});
    }
});



//Updated a resource - Update
router.patch('/:id/:id', function(req,res){
    try{
        console.log("Posted Object is: ",req.params.id, req.body);
        const rawdata = fs.readFileSync('messages.json');
        var messageData = JSON.parse(rawdata);

        var id = req.params.id;
        var rawBody = req.body;

        if(rawBody.channel != null)
        {
            messageData[id].channel = rawBody.channel;
        }

        if(rawBody.name != null)
        {
            messageData[id].name = rawBody.name;
        }

        
        const data = fs.writeFileSync('channels.json', JSON.stringify(messageData));    
        res.status(200).json(messageData);

    }catch(err){
        res.status(500).json({message: err.message});
    }

})

//delete a resource - Delete
router.delete('/:id/:id', function(req, res){
    try{
        console.log("Posted Object is: ",req.params.id, req.body);
        const rawdata = fs.readFileSync('messages.json');
        var messageData = JSON.parse(rawdata);

        var id = req.params.id;
        var rawBody = req.body;

        messageData[id].channel = rawBody.channel.delete;
        messageData[id].name = rawBody.name.delete;
        messageData[id].message = rawBody.message.delete;
        id.delete;
        
        const data = fs.writeFileSync('messages.json', JSON.stringify(messageData));    
        res.status(200).json(messageData);

    }catch(err){
        res.status(500).json({message: err.message});
    }
})

module.exports = router;