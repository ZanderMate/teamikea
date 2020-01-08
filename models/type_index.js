module.exports = function (sequelize, DataTypes) {
  // Creates a "Burger" model that matches up with DB
  var TypeIndex = sequelize.define("type_index", {
      type_index: DataTypes.STRING,
      type_id: DataTypes.INTEGER
  });

  TypeIndex.associate = function (models) {
    // Associating Band with Songs
    // When an Band is deleted, also delete any associated Songs
    TypeIndex.hasMany(models.TypeName);
  };

  TypeIndex.associate = function (models) {
    // We're saying that a Song should belong to an Band
    // A Song can't be created without an Band due to the foreign key constraint
    TypeIndex.belongsTo(models.Pokemon, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Syncs with DB
  TypeIndex.sync();

  // Makes the Chirp Model available for other files (will also create a table)
  return TypeIndex;
}