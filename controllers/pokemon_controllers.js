var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgers = require("../models/burgers.js");

// GET (read)
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POST (create)
router.post("/api/burgers", function(req, res) {
  burgers.insertOne(req.body.burger_name, function(result) {
    res.json({ id: result.insertId });
  });
});

//PUT (update)
router.put("/api/burgers/:id", function(req, res) {
  var condition = req.params.id;

  console.log("condition", condition);

  burgers.updateOne(condition, function(result) {
    res.json(result);
  });
});

//PUT (update)
router.put("/api/burgersTwo/:id", function(req, res) {
  var condition = req.params.id;

  console.log("condition", condition);

  burgers.updateTwo(condition, function(result) {
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = router;
