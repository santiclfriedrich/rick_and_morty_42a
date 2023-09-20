require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const UsersModel = require("./models/UsersModels");
const FavoritesModel = require("./models/FavoritesModel")

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
UsersModel(sequelize)
FavoritesModel(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
 const { User, Favorite } = sequelize.models;

 User.belongsToMany(Favorite, {
   through: "user_favorite",
   as: "FavoriteUsers" 
 });
 User.belongsToMany(User, {
   through: "user_favorite",
   as: "FriendUsers"
 });

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
