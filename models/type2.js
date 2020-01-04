//Dependencies
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Type" model that matches up with DB
var Burger = sequelize.define("type2", {
  type_name: Sequelize.STRING
});

// Syncs with DB
Type2.sync();

// Makes the Type Model available for other files (will also create a table)
module.exports = Type2;