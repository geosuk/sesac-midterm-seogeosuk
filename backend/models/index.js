const Sequelize = requere('sequelize');
const config = require(__dirname + '/../config/config.json')["development"];
const db = {};

const sequelizt = new Sequelize(config.database, config.username, config.password, config);

const Todo = requere("./Todo")(sequelize, Sequelize);
