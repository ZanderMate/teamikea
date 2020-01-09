var express = require("express");
var path = require("path");
var router = express.Router();

// Import the models to use its database functions.
var db = require("../models");


module.exports = function () {

  // GET (show all pokemon in list)
  router.get("/api/pokemon/", function (req, res) {
    db.Pokemon.query("SELECT pokemon.id, pokemon_name, physical_attack, physical_defense, special_attack, special_defense, hitpoints, speed, type_name FROM pikachoose.pokemon inner join type_index on type_index.pokemon_id = pokemon.type_id inner join type on type_index.type_id = type.id;")
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
  });

  //HTML route for root page
  router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
  });

  //HTML route for add team form
  router.get("/add-team", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/"));
  })

  //HTML route for team page
  router.get("/teams", function (req, res) {
    res.render("team", teams[0]);
  });

  //HTML route for pokedex
  router.get("/pokemon", function (req, res) {
    res.render("pokemon", pokemon[0]);
  });

}

// Export routes for server.js to use.
module.exports = router;
