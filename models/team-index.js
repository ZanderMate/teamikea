module.exports = function (sequelize, DataTypes) {
    // Creates a "TeamIndex" model that matches up with DB
    var TeamIndex = sequelize.define("Team_index", {
        pokemon_id: DataTypes.INTEGER,
        team_id: DataTypes.INTEGER
    },
    {
      tableName: "team_index"
    });

    // Makes the TeamIndex Model available for other files (will also create a table)
    return TeamIndex;
}