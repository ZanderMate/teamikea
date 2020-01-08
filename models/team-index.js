module.exports = function (sequelize, DataTypes) {
    // Creates a "Burger" model that matches up with DB
    var TeamIndex = sequelize.define("team_index", {
        team_index: DataTypes.INTEGER,
        pokemon_index: DataTypes.INTEGER
    });

    // Syncs with DB
    TeamIndex.sync();

    // Makes the Chirp Model available for other files (will also create a table)
    return TeamIndex;
}