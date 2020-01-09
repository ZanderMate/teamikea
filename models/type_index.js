module.exports = function (sequelize, DataTypes) {
  // Creates a "TypeIndex" model that matches up with DB
  var TypeIndex = sequelize.define("type_index", {
      type_index: DataTypes.STRING,
      type_id: DataTypes.INTEGER
  });

  TypeIndex.associate = function (models) {
    // Associating Type Index with TypeName
    TypeIndex.hasMany(models.TypeName);
  };

  TypeIndex.associate = function (models) {
    // We're saying that a Type Index should belong to a Pokemon
    TypeIndex.belongsTo(models.Pokemon, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Syncs with DB
  TypeIndex.sync();

  // Makes the TypeIndex Model available for other files (will also create a table)
  return TypeIndex;
}