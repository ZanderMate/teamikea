module.exports = function (sequelize, DataTypes) {
  // Creates a "TeamBuilder" model that matches up with DB

  var TeamBuilder = sequelize.define("teambuilder", {
    team_name: DataTypes.STRING,
    team_description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  // Makes the TeamBuilder Model available for other files (will also create a table)
  return TeamBuilder;
}