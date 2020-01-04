//Dependencies
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Type" model that matches up with DB
var TypeIndex = sequelize.define("type_index", {
  type_index: Sequelize.INTEGER,
  type_index: Sequelize.INTEGER,
  typeid: Sequelize.INTEGER
});

// Syncs with DB
TypeIndex.sync();

// Makes the Type Model available for other files (will also create a table)
module.exports = TypeIndex;