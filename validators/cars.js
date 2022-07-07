const {check, validationResult,} = require("express-validator");
const validationResults  = require("../utils/handleValidator")

const validatorCreateItem= [
check("name").exists().notEmpty(),
check("description").exists().notEmpty(),
check("plate").exists().notEmpty(),
check("isFavorite").exists().notEmpty(),
check("year").exists().notEmpty().isNumeric(),
check("color").exists().notEmpty(),
check("price").exists().notEmpty(),
check("mediaId").exists().notEmpty(),

(req,res,next)=> validationResults(req,res,next)

]

const validatorGetItem= [
    
    check("id").exists().notEmpty(),
    
    (req,res,next)=> validationResults(req,res,next)
    
    ]

module.exports= {validatorCreateItem,validatorGetItem};