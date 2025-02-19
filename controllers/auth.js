const { matchedData } = require("express-validator");
const {tokenSign} = require("../utils/handleJwt")
const {compare,encrypt} = require("../utils/handlePassword");
const  {usersModel} = require("../models/")
const {handleHttpError} = require("../utils/handleError")

const registerCtrl = async(req,res)=>{
try {
    
    req = matchedData(req);

    const password = await encrypt(req.password)
    const body = {...req, password}
    const dataUser = await usersModel.create(body)
    dataUser.set('password', undefined, {strict:false} )

    const data = {
        token: await tokenSign(dataUser),
        user:dataUser
    }
    res.send({data})
} catch (error) {
    handleHttpError(res, "ERROR_CREATE_USER")
}
}



const loginCtrl = async(req,res)=>{


try {
    
    req = matchedData(req);
    
    const user = await usersModel.findOne({email:req.email}).select('password name role email') // filtro para o password não vir null a causa dos models que blockea o password
    console.log(user , "****************************ConsoleUSERS************")
    if(!user){
        handleHttpError(res, "USER_NOT_EXISTS", 404);
        return
    }
   

    const hashPassword= user.get("password");

    const check =  await compare(req.password, hashPassword)
    if(!check){
        handleHttpError(res, "PASSWORD_INVALID", 401);
        return
    }

    user.set('password',undefined, {strict:false})

    const data = {
        token: await tokenSign(user),
        user
    }    
    
    
    res.send({data})
} catch (error) {
    handleHttpError(res, "ERROR_LOGIN_USER")
}


}




module.exports ={ registerCtrl,loginCtrl}