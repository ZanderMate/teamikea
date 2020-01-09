module.exports = function (sequelize, DataTypes) {
    // Creates a "Type" model that matches up with DB
    var TypeName = sequelize.define("type", {
        type_name: DataTypes.STRING
    });

    TypeName.associate = function (models) {
        // We're saying that a TypeName should belong to a TypeIndex
        // A TypeName can't be created without an TypeIndex due to the foreign key constraint
        TypeName.belongsTo(models.TypeIndex, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    // Syncs with DB
    TypeName.sync();

    // Makes the TypeName Model available for other files (will also create a table)
    return TypeName;
}