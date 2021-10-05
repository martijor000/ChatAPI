const { Console } = require('console');
var express = require('express');
var router = express.Router();
var fs = require('fs');
const { stringify } = require('querystring');

//Endpoints/Routes ----------------------------------------------------------


//CRUD - Create, Read, Update, Delete

//get all of a resource - Read
router.get('/', function(req, res){
    try
    {
        var rawdata =fs.readFileSync('data.json'); // <Buffer  <hex code> - Raw Data
        var students = JSON.parse(rawdata);
    
        console.log(students);
    
        res.status(200).json(students);

    } catch(err)
    {
        res.status(500).json({message: err.message});
    }



});

// Create a resource - Create
router.post('/', function(req, res){
    try{
        console.log("Posted Object is: ", req.body);
        // Open the file
        const rawdata = fs.readFileSync('data.json');
        // Decode the file (parse) so we can use it
        var students = JSON.parse(rawdata);
        
        // Add our new object to the array
        students.push(req.body);

        // Save (write) the daya back to the file
        const data = fs.writeFileSync('data.json', JSON.stringify(students));    
        
        // Return data to the user
        res.status(200).json(students);

    }catch(err){
        res.status(500).json({message: err.message});
    }
    // res.status(201).json({message: "success creating resource"});

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