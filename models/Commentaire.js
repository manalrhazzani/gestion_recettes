module.exports = (sequelize, DataTypes) => {
    const Commentaire = sequelize.define('Commentaire', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        contenu: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    Commentaire.associate = (models) => {
        Commentaire.belongsTo(models.Utilisateur, { foreignKey: 'utilisateurId' });
        Commentaire.belongsTo(models.Recette, { foreignKey: 'recetteId' });
    };

    return Commentaire;
};
