var express = require("express");

var router = express.Router();
let pokemonNumber = 0;

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// GET (read)
module.exports = function () {
  router.get("/api/pokemon/", function (req, res) {
    db.Pokemon.findAll({})
      .then(function (dbPokemon) {
        res.json(dbPokemon);
      })
  })

  //POST (create new team)
  router.post("/api/teams/", function (req, res) {
    console.log(req.body);
    db.TeamBuilder.create({
      team_name: req.body.name,
      team_description: req.body.description
    })
      .then(function (dbTeam) {
        res.json(dbTeam);
      });
  });

  //POST (add new pokemon to a team)
  router.post("/api/teams/", function (req, res) {
    db.TeamIndex.create({
      pokemon_id: req.body.pokemon,
      team_index: req.body.team
    })
      .then(function (dbPokemon) {

        res.json(dbPokemon);
      })
  });

  //DELETE (delete a team)
  router.delete("api/team/:id", function (req, res) {
    db.TeamBuilder.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbTeam) {
        res.json(dbTeam);
      })
  })
}

// Export routes for server.js to use.
module.exports = router;
