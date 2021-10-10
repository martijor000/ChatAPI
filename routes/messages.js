const { Console } = require('console');
var express = require('express');
var router = express.Router();
var fs = require('fs');
const { stringify } = require('querystring');

//Endpoints/Routes ----------------------------------------------------------


//CRUD - Create, Read, Update, Delete

// Create a resource - Create
router.post('/:id', function(req, res){
    try{
        console.log("Posted Object is: ", req.body);
        const rawdata = fs.readFileSync('');
        var channelData = JSON.parse(rawdata);
        students.push(req.body);
        const data = fs.writeFileSync('messages.json', JSON.stringify(channelData));    
        res.status(200).json(channelData);

    }catch(err){
        res.status(500).json({message: err.message});
    }
    // res.status(201).json({message: "success creating resource"});

});

//get all of a resource - Read
router.get('/:id', function(req, res){
    try
    {
        var rawdata =fs.readFileSync('messages.json'); // <Buffer  <hex code> - Raw Data
        var messagesData = JSON.parse(rawdata);
        console.log(messagesData);
        res.status(200).json(messagesData);
    } catch(err)
    {
        res.status(500).json({message: err.message});
    }
});



//Updated a resource - Update
router.patch('/:id', function(req,res){
    res.status(200).json({message: "edited the resource"})

})

//delete a resource - Delete
router.delete('/:id', function(req, res){
    res.status(200).json({message: "deleted the resource"})
})




module.exports = router;