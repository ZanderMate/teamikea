module.exports = function (sequelize, DataTypes) {
  // Creates a "TypeIndex" model that matches up with DB
  var TypeIndex = sequelize.define("type_index", {
    pokemon_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER
  });

  // Makes the TypeIndex Model available for other files (will also create a table)
  return TypeIndex;
}