module.exports = function (sequelize, DataTypes) {
  // Creates a "TypeName" model that matches up with DB
  var TypeName = sequelize.define("type", {
      type_name: DataTypes.STRING
  });

  // Makes the TypeName Model available for other files (will also create a table)
  return TypeName;
}