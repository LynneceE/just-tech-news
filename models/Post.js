// import elementd needed to build post model
//1: mysql connection from connection.js file 
//2: model and datatypes from sequelize package

const { Model, DataTypes } = require('sequelize'); // sequelize package
const sequelize = require('../config/connection'); //connection.js

// create Post model
class Post extends Model {}

//define columns in post, configure naming conventions, pass current connection to initialize POST model
Post.init (
    {
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        post_url: { // define url as string 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true  //ensure url is verified link
            }
        },
        
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }

    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);


module.exports = Post;