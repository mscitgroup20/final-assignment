'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index.html',{ title: 'This is Sample Fullstack Javascript Example' });
});

module.exports = router;
