const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../afterLogin_main.html'));
});

router.use(express.static(__dirname + '/public'));

module.exports = router;