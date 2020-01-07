module.exports = function (sequelize, DataTypes) {
  // Creates a "Burger" model that matches up with DB
  var TypeName = sequelize.define("type_index", {
      type_index: DataTypes.STRING,
      type_id: DataTypes.INTEGER
  });

  // Syncs with DB
  TypeIndex.sync();

  // Makes the Chirp Model available for other files (will also create a table)
  return TypeIndex;
}