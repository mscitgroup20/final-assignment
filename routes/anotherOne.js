'use strict';
var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET home page. */
function deletePersons(filename,index)
{
    fs.readFile('./public/' + filename + ".json", (err, data) => {        
        var personObj=JSON.parse(data);
        personObj.splice(index,1);
        var data=JSON.stringify(personObj);
        console.log(data)
        fs.writeFile('./public/' + filename + ".json",data,function(err, result) {
            if(err) console.log('error', err);
        });
    });
}
router.get('/', function (req, res) {
    if(req.query.filename){
        fs.readFile('./public/' + req.query.filename + ".json", (err, data) => {
            if (err)
            {
            res.send("Invalid Filename");
            }else{
            res.setHeader("content-type", "application/json");
            res.send(data);
            }
        });
    }else if(req.query.deleteFile){
        deletePersons(req.query.deleteFile,req.query.index)
        res.setHeader("content-type", "text/html");
        res.send("Your Value Has Been Removed Successfully");
    }    
});
router.post("/", function (req, res) {    
    console.log(req.body)
    try{
    deletePersons(req.body.fileName,req.body.index)
    res.setHeader("content-type", "text/html");    
    res.send("Your Value Has Been Removed Successfully");
    }catch(ex){
        res.setHeader("content-type", "text/html");    
        res.send("Sorry Value not able to be removed");
    }
});
module.exports = router;
