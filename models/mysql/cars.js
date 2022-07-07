const {DataTypes} = require("sequelize");
const {sequelize} = require("../../config/mysql");
const Storage = require("./storage")

const Cars= sequelize.define(
   "cars",
    {
       name:{
        type: DataTypes.STRING,
        allowNull: false
       },
       description:{
        type:DataTypes.STRING
       },
       plate:{
        type:DataTypes.STRING,
       
       },
       isFavorite:{
        type:DataTypes.BOOLEAN,
        },
       year:{
            type:DataTypes.NUMBER,
           
           },
       color:{
            type:DataTypes.STRING,
           
           },
        price:{
            type:DataTypes.NUMBER,
           
           },
       mediaId:{
        type: DataTypes.STRING,
       }
       

    },
    {
        timestamps:true, //registra createAt , updateAT
       
    }
);



///implementar modelo personalizado

Cars.findALLData = function(){
    Cars.belongsTo(Storage,{
        foreignKey:"mediaId",
        as:"foto"
    })

    return Cars.findAll({include:"foto"})
}

Cars.findOneData = function(id){
    Cars.belongsTo(Storage,{
        foreignKey:"mediaId"
    })

    return Cars.findOne({where:{id},include:Storage})
}


module.exports = Cars;