module.exports = function (sequelize, DataTypes) {
    // Creates a "Burger" model that matches up with DB
    var TeamBuilder = sequelize.define("teambuilder", {
        team_name: DataTypes.STRING,
        team_description: DataTypes.TEXT,
        pokemon_1: DataTypes.INTEGER,
        pokemon_2: DataTypes.INTEGER,
        pokemon_3: DataTypes.INTEGER,
        pokemon_4: DataTypes.INTEGER,
        pokemon_5: DataTypes.INTEGER,
        pokemon_6: DataTypes.INTEGER
    });

    // Syncs with DB
    TeamBuilder.sync();

    // Makes the Chirp Model available for other files (will also create a table)
    return TeamBuilder;
}