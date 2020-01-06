module.exports = function (sequelize, DataTypes) {
    // Creates a "Burger" model that matches up with DB
    var TypeName = sequelize.define("type", {
        type_name: DataTypes.STRING
    });

    // Syncs with DB
    TypeName.sync();

    // Makes the Chirp Model available for other files (will also create a table)
    return TypeName;
}