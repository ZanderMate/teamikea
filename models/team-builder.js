module.exports = function (sequelize, DataTypes) {
  // Creates a "TeamBuilder" model that matches up with DB

  var TeamBuilder = sequelize.define("teambuilder", {
    team_name: DataTypes.STRING,
    team_description: DataTypes.TEXT
  });

  TeamBuilder.associate = function (models) {
    // Associating Band with Songs
    // When an Band is deleted, also delete any associated Songs
    TeamBuilder.hasMany(models.TeamIndex, {
      onDelete: "cascade"
    });
  };

  // Syncs with DB
  TeamBuilder.sync();

  // Makes the TeamBuilder Model available for other files (will also create a table)
  return TeamBuilder;
}