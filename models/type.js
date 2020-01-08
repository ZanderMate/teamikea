module.exports = function (sequelize, DataTypes) {
    // Creates a "Burger" model that matches up with DB
    var TypeName = sequelize.define("type", {
        type_name: DataTypes.STRING
    });

    TypeName.associate = function (models) {
        // We're saying that a Song should belong to an Band
        // A Song can't be created without an Band due to the foreign key constraint
        TypeName.belongsTo(models.TypeIndex, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    // Syncs with DB
    TypeName.sync();

    // Makes the Chirp Model available for other files (will also create a table)
    return TypeName;
}