module.exports = (sequelize, DataTypes) => {
    const Categorie = sequelize.define('Categorie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    Categorie.associate = (models) => {
        Categorie.belongsToMany(models.Recette, { through: 'RecetteCategorie', foreignKey: 'categorieId' });
    };

    return Categorie;
};
