module.exports = (sequelize, DataTypes) => {
    const Recette = sequelize.define('Recette', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tempsPreparation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tempsCuisson: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        niveauDifficulte: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Recette.associate = (models) => {
        Recette.belongsTo(models.Utilisateur, { foreignKey: 'utilisateurId' });
        Recette.hasMany(models.Commentaire, { foreignKey: 'recetteId' });
        Recette.belongsToMany(models.Ingredient, { through: 'Recette_Ingredient', foreignKey: 'recetteId' });
        Recette.belongsToMany(models.Categorie, { through: 'Recette_Categorie', foreignKey: 'recetteId' });
        Recette.belongsToMany(models.Tag, { through: 'Recette_Tag', foreignKey: 'recetteId' });
    };

    return Recette;
};
