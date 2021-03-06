const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                                process.env.DB_USER || 'duncan',
                                process.env.DB_PASSWORD || 'password',
                                {
                                    host: process.env.DB_HOST || '0.0.0.0',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });
const Clown = sequelize.define('Clown', {
    clownName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    shoeSize: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bowTie: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    noseColour: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports = {
    sequelize: sequelize,
    Clown: Clown
};
