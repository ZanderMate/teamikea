module.exports = function (sequelize, DataTypes) {
// Creates a "Burger" model that matches up with DB
var Pokemon = sequelize.define("pokemon", {
  pokemon_name: DataTypes.STRING,
  physical_attack: DataTypes.INTEGER,
  special_attack: DataTypes.INTEGER,
  physical_defense: DataTypes.INTEGER,
  special_defense: DataTypes.INTEGER,
  speed: DataTypes.INTEGER,
  hitpoints: DataTypes.INTEGER,
  type1_index: DataTypes.INTEGER,
  type2_index: DataTypes.INTEGER,
});

// Syncs with DB
Pokemon.sync();

// Makes the Chirp Model available for other files (will also create a table)
return Pokemon;
}