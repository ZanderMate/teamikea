module.exports = function (sequelize, DataTypes) {

  // Creates a "Pokemon" model that matches up with DB
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
    // Associating Pokemon with Team Index
    Pokemon.hasMany(models.TypeIndex);
  };

  Pokemon.associate = function (models) {
    // We're saying that a Pokemon should belong to an Team Index
    Pokemon.belongsTo(models.TeamIndex, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Syncs with DB
  Pokemon.sync();

  // Makes the Pokemon Model available for other files (will also create a table)
  return Pokemon;
}