module.exports = function (sequelize, DataTypes) {
    // Creates a "TeamIndex" model that matches up with DB
    var TeamIndex = sequelize.define("team_index", {
        team_index: DataTypes.INTEGER,
        pokemon_index: DataTypes.INTEGER
    });

    TeamIndex.associate = function (models) {
        // We're saying that a Team Index should belong to an Team
        // A Team Index can't be created without a Team due to the foreign key constraint
        TeamIndex.belongsTo(models.TeamBuilder, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    TeamIndex.associate = function (models) {
        // Associating Band with Songs
        // When an Band is deleted, also delete any associated Songs
        TeamIndex.hasMany(models.Pokemon);
    };

    // Syncs with DB
    TeamIndex.sync();

    // Makes the TeamIndex Model available for other files (will also create a table)
    return TeamIndex;
}