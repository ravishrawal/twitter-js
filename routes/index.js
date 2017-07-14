'use strict'
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path=require('path');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  // next();
});

// router.get('/stylesheets/style.css',function(req,res,next){
//   //console.log(path.join(__dirname,'/public/stylesheets/style.css'));
//   res.sendFile(path.join(__dirname,'../','/public/stylesheets/style.css'));    //need full pathh
// });

//Now having set public static directory

router.get('/style/stylesheets.css',function(req,res){
  res.sendFile('/style/stylesheets.css');
});

module.exports = router;

// router.get('/stylesheets/style.css',function(req,res,next){
//   console.log(path.join(__dirname,'/public/stylesheets/style.css'));
//   res.sendFile(path.join(__dirname,'/public/stylesheets/style.css'),function(err){
//     // if(err) next(err);
//     console.log('Sent:Stylesheets')
//   });
//   next();
// });
