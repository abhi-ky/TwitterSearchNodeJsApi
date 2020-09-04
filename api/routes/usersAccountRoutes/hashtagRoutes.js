const express = require('express');
const router = express.Router();
const axios = require('axios');
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'jb0Rf1kQ6YMQmrUmjaNOwS5jU',
  consumer_secret:      '54GiySFGOFx7LwtB3R38VZ5Zh5Rr006EhQOVFonmPQO0PfbF0U',
  access_token:         '773936153590456320-spWZSBh5GeV0IFf0GRaHrDiNSFDLXPV',
  access_token_secret:  'mOJx6Y0tvVouCiczerKfsZy9yHKXyTbz7Zcrf3X6bRIa6',
  // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  // strictSSL:            true,     // optional - requires SSL certificates to be valid.
})


router.get('/:tag', (req, res, next) =>{

  let tag = req.params.tag
  T.get('search/tweets', { q: `${tag}`, count: 100 }, function(err, data, response) {
    // console.log(data)
    res.status(200).json(data)
  })
  console.log( tag, 'hashtags returned sucessfully')
})

// router.get('/tweets/:username', (req, res, next) =>{

//   let tag = req.params.username
//   T.get('search/tweets', { q: `${tag}` }, function(err, data, response) {
//     console.log(data)
//     res.status(200).json(data)
//   })
    
// })


module.exports = router;

