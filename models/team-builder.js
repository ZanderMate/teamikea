module.exports = function (sequelize, DataTypes) {
    // Creates a "Burger" model that matches up with DB

    var TeamBuilder = sequelize.define("teambuilder", {
        team_name: DataTypes.STRING,
        team_description: DataTypes.TEXT
    });

    // Syncs with DB
    TeamBuilder.sync();

    // Makes the Chirp Model available for other files (will also create a table)
    return TeamBuilder;
}