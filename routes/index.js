const express = require('express');
const router = express.Router();



router.get('/index', (req,res) =>{
    console.log(req.url);
    
    res.render('index.ejs');
})

module.exports = router;