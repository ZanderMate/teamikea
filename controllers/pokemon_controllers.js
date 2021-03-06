// var express = require("express");
var path = require("path");
// var router = express.Router();
// Import the models to use its database functions.
var db = require("../models");

module.exports = function (app) {

  // GET (show all pokemon in list)
  app.get("/api/pokemon/", function (req, res) {
    db.sequelize.query('SELECT id, pokemon_name FROM pokemon')
      .then(function (dbPokemon) {
        res.json(dbPokemon);
      })
  });

  // GET (grab individual pokemon info)
  app.get("/api/pokemon/:id", function (req, res) {
    db.sequelize.query('SELECT pokemon_name, hitpoints, speed, physical_attack, physical_defense, special_attack, special_defense, type_name FROM pokemon INNER JOIN type ON pokemon.type_id = type.id where pokemon.id = :id', { replacements: { id: req.params.id }, type: db.sequelize.QueryTypes.SELECT })
      .then(function (dbPokemon) {
        console.log("dbPokemon", dbPokemon)
        res.json(dbPokemon);
      })
  });

  app.get("/api/teams", function (req, res) {
    db.sequelize.query('SELECT team_name, team_description, id FROM teambuilder', { type: db.sequelize.QueryTypes.SELECT })
      .then(function (dbTeam) {
        console.log(dbTeam);
        res.json(dbTeam);
      });
  });

  app.get("/api/teams/:id", function (req, res) {
    db.sequelize.query(
      'SELECT * FROM pokemon inner join team_index ON team_index.pokemon_id = pokemon.id INNER JOIN teambuilder ON team_index.team_id = teambuilder.id  WHERE teambuilder.id = :id', {
      replacements: { id: req.params.id }, type: db.sequelize.QueryTypes.SELECT
      // 'SELECT pokemon_name FROM pokemon inner join team_index ON team_index.team_id = teambuilder.id inner join pokemon on pokemon.id = team_index.pokemon where teambuilder.id = :id', { replacements: { id: req.params.id }, type: db.sequelize.QueryTypes.SELECT }
    })
      .then(function (dbTeam) {
        res.json(dbTeam);
      })
  })


  app.get("/api/teams/:id", function (req, res) {
    db.sequelize.query('SELECT * FROM pokemon inner join team_index ON team_index.pokemon_id = pokemon.id INNER JOIN teambuilder ON team_index.team_id = teambuilder.id  WHERE teambuilder.id = :id', { replacements: { id: req.params.id }, type: db.sequelize.QueryTypes.SELECT })
      .then(function (dbTeam) {
        res.json(dbTeam);
      })
  })

  //POST (create new team)
  app.post("/api/teams", function (req, res) {
    db.Teambuilder.create({
      team_name: req.body.team_name
    })
      .then(function (dbTeam) {
        res.send(dbTeam);
      });
  });



  //POST (add new pokemon to a team)
  app.post("/api/team-members", function (req, res) {
    db.Team_index.create({
      pokemon_id: req.body.pokemon_id,
      team_id: req.body.team_id
    })
      .then(function (dbPokemon) {
        res.json(dbPokemon);
      })
  });

  //DELETE (delete a team)
  app.delete("/api/teams/:id", function (req, res) {
    db.Teambuilder.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbTeam) {
        res.json(dbTeam);
      })
  });


  //HTML route for root page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //HTML route for add team form
  app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/add-team.html"));
  })

  //HTML route for team page
  app.get("/teams", function (req, res) {
    db.Teambuilder.findAll({}).then(function (results) {
      var hbsObject = {
        teambuilder: results
      };
      // console.log(hbsObject)
      res.render("teams", hbsObject);
    })
  });
  //HTML route for pokedex
  app.get("/pokemon", function (req, res) {
    let hbsObject1;
    let hbsObject2;
    db.Pokemon.findAll({}).then(function (results1) {
      db.Teambuilder.findAll({}).then(function (results2) {
        hbsObject = {
          pokemon: results1,
          teambuilder: results2
        };
        res.render("pokemon", hbsObject);
      })
    })
  })
}