var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
    {
      id: 1,
      username: "Iron Man"
    },
    {
      id: 2,
      username: "Incredible Hulk"
    },
    {
      id: 3,
      username: "Captain America"
    },
    {
      id: 4,
      username: "Thor"
    },
    {
      id: 5,
      username: "Hawkeye"
    },
    {
      id: 6,
      username: "Black Widow "
    }
  ]);
});

module.exports = router;
