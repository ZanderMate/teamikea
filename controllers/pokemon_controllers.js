var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var pokemon = require("../models/pokemon.js");

// GET (read)
router.get("/", function(req, res) {
  pokemon.selectAll(function(data) {
    var hbsObject = {
      pokemon: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POST (create)
router.post("/api/pokemon", function(req, res) {
  pokemon.insertOne(req.body.pokemon_name, function(result) {
    res.json({ id: result.insertId });
  });
});

//PUT (update)
router.put("/api/pokemon/:id", function(req, res) {
  var condition = req.params.id;

  console.log("condition", condition);

  pokemon.updateOne(condition, function(result) {
    res.json(result);
  });
});

//PUT (update)
router.put("/api/pokemonTwo/:id", function(req, res) {
  var condition = req.params.id;

  console.log("condition", condition);

  pokemon.updateTwo(condition, function(result) {
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = router;
