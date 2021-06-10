'use strict';
const { log } = require('console');
var express = require('express');
var router = express.Router();
var fs=require("fs")
/* GET users listing. */
router.get('/', function (req, res) {    
    res.send("This is from Users One");
});

module.exports = router;
