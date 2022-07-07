const mongoose = require("mongoose");
var mongoose_delete = require('mongoose-delete');

const CarsScheme= new mongoose.Schema(
    {
     
        name:{
            type: String
           },
        description:{
            type: String
           },
        plate:{
            type: String
           },
        isFavorite: {
            type: Boolean,
        },
        year: {
            type: Number,
        },
        color: {
            type: String
           },
        price: {
            type: Number,
        },
        mediaId:{
            type:mongoose.Types.ObjectId,
           },
        

    },
    {
        timestamps:true, //registra createAt , updateAT
        versionKey:false,
    }
);


CarsScheme.statics.findALLData = function(){
  const joinData = this.aggregate([{ //pai tracks
    $lookup:{
        from:"storages", //relacion storage
        localField: "mediaId", // cars.mediaId
        foreignField:"_id", // storage._id
        as:"foto" //alias audio
        
    }
    },
    {
        $unwind:"$foto"
    }
    ])
  return joinData
}

CarsScheme.statics.findOneData = function(id){
  const joinData = this.aggregate([
    {
        $match:{ _id:mongoose.Types.ObjectId(id)}
    },
    { //pai tracks
    $lookup:{
        from:"storages", //relacion storage
        localField: "mediaId", // tracks.mediaId
        foreignField:"_id", // storage._id
        as:"foto" //alias foto
        
    }
    },
    {
        $unwind:"$foto"
    },
    ])
  return joinData
}


CarsScheme.plugin(mongoose_delete, { overrideMethods: 'all' })
module.exports = mongoose.model("cars", CarsScheme)