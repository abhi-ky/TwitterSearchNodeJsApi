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


router.get('/:userName', (req, res, next) =>{

  let name = req.params.userName
  T.get('users/search', { q: name, count: 100 }, function (err, data, response) {
    // console.log(data)
    res.status(200).json(data)
  })
  console.log( name, 'user accounts returned successfully')
    
})

module.exports = router;


