module.exports = function (sequelize, DataTypes) {

  // Creates a "Burger" model that matches up with DB
  var Pokemon = sequelize.define("pokemon", {
      pokemon_name: DataTypes.STRING,
      physical_attack: DataTypes.INTEGER,
      physical_defense: DataTypes.INTEGER,
      special_attack: DataTypes.INTEGER,
      special_defense: DataTypes.INTEGER,
      speed: DataTypes.INTEGER,
      hitpoints: DataTypes.INTEGER,
      type_index: DataTypes.INTEGER,
  });

  Pokemon.associate = function (models) {
    // Associating Band with Songs
    // When an Band is deleted, also delete any associated Songs
    Pokemon.hasMany(models.TypeIndex);
  };

  Pokemon.associate = function (models) {
    // We're saying that a Song should belong to an Band
    // A Song can't be created without an Band due to the foreign key constraint
    Pokemon.belongsTo(models.TeamIndex, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Syncs with DB
  Pokemon.sync();

  // Makes the Chirp Model available for other files (will also create a table)
  return Pokemon;
}