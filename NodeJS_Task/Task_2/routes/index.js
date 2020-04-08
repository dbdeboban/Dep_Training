var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  
  res.status(200).json({ text: 'hi this is the body' })
});

module.exports = router;
