//Dependencies
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Type" model that matches up with DB
var Burger = sequelize.define("type", {
  type_name: Sequelize.STRING
});

// Syncs with DB
Type.sync();

// Makes the Type Model available for other files (will also create a table)
module.exports = Type;