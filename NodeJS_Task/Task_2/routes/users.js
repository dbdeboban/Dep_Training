var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  // res.send('respond with a resource');
  res.status(200).json({ username:"debstd", age: 18, email:"dbdeb@gmail.com", name:"Deb Ban" });
});

module.exports = router;
