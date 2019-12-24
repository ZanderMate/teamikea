//Dependencies
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Burger" model that matches up with DB
var Pokemon = sequelize.define("pokemon", {
  pokemon_name: Sequelize.STRING,
  physical_attack: Sequelize.INTEGER,
  special_attack: Sequelize.INTEGER,
  physical_defense: Sequelize.INTEGER,
  special_defense: Sequelize.INTEGER,
  speed: Sequelize.INTEGER,
  hitpoints: Sequelize.INTEGER,
  type1_index: Sequelize.INTEGER,
  type2_index: Sequelize.INTEGER,
});

// Syncs with DB
Pokemon.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Pokemon;