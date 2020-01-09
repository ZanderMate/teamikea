module.exports = function (sequelize, DataTypes) {
  // Creates a "TeamBuilder" model that matches up with DB

  var TeamBuilder = sequelize.define("teambuilder", {
    team_name: DataTypes.STRING,
    team_description: DataTypes.TEXT
  });

  TeamBuilder.associate = function (models) {
    // Associating Team Builder with Team Index
    // When a Team is deleted, also delete any associated Team Index
    TeamBuilder.hasMany(models.TeamIndex, {
      onDelete: "cascade"
    });
  };

  // Syncs with DB
  TeamBuilder.sync();

  // Makes the TeamBuilder Model available for other files (will also create a table)
  return TeamBuilder;
}