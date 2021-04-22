var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index found')
  res.status(200).json({message:'received'});
});

module.exports = router;
