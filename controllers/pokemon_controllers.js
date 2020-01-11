// var express = require("express");
// var path = require("path");
// var router = express.Router();

// Import the models to use its database functions.
var db = require("../models");

module.exports = function(app) {

  // GET (show all pokemon in list)
  app.get("/api/pokemon/", function (req, res) {
    db.Pokemon.findAll({})
      .then(function(dbPokemon) {
        res.json(dbPokemon);
      })
  });

  // GET (grab individual pokemon info)
  app.get("/api/pokemon/:id", function (req, res) {

    db.sequelize.query('SELECT * FROM pokemon where id = :id',{replacements:{id:req.params.id},type:db.sequelize.QueryTypes.SELECT})
    .then(function(dbPokemon) {
      console.log("dbPokemon",dbPokemon)
      // for (var i = 0; i <= dbPokemon.length; i++) {
      //    // GET (grab individual pokemon info)
        
      //       db.Pokemon.query("Select type_name from type_index inner join type on type_index.type_id = type.id where type_index.pokemon_id = ?;", req.params.id)
      //       .then(function(dbType) {
      //         console.log("type", dbType);
      //        dbPokemon.push()

      //       })
        
      res.json(dbPokemon);
      // };
    })
  })

  //POST (create new team)
  .post("/api/teams/", function (req, res) {
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
  app.post("/api/teams/", function (req, res) {
    db.TeamIndex.create({
      pokemon_id: req.body.pokemon,
      team_index: req.body.team
    })
      .then(function (dbPokemon) {

        res.json(dbPokemon);
      })
  });

  //DELETE (delete a team)
  app.delete("api/team/:id", function (req, res) {
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
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //HTML route for add team form
  app.get("/add-team.html", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/"));
  })

  //HTML route for team page
  app.get("/teams", function(req,res){
    db.TeamBuilder.findAll({}).then(function(results) {
      var hbsObject = {
        teambuilder: results
      };
      console.log(hbsObject)
      res.render("teams", hbsObject);
    })
  });
  //HTML route for pokedex
  app.get("/pokemon", function(req, res) {
    db.Pokemon.findAll({}).then(function(results) {
      var hbsObject = {
        pokemon: results
      };
      console.log(hbsObject)
      res.render("pokemon", hbsObject);
    })
  });

}
