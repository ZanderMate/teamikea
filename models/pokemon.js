module.exports = function (sequelize, DataTypes) {

  // Creates a "Pokemon" model that matches up with DB
  var Pokemon = sequelize.define("Pokemon", {
      pokemon_name: DataTypes.STRING,
      physical_attack: DataTypes.INTEGER,
      physical_defense: DataTypes.INTEGER,
      special_attack: DataTypes.INTEGER,
      special_defense: DataTypes.INTEGER,
      speed: DataTypes.INTEGER,
      hitpoints: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER
  },
  {
    tableName: "pokemon"
  }
  );

  // Makes the Pokemon Model available for other files (will also create a table)
  return Pokemon;
}