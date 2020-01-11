module.exports = function (sequelize, DataTypes) {
  // Creates a "TypeName" model that matches up with DB
  var TypeName = sequelize.define("Type", {
      type_name: DataTypes.STRING
  },
  {
    tableName: "type"
  });

  // Makes the TypeName Model available for other files (will also create a table)
  return TypeName;
}