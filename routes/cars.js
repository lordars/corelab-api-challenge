const express = require("express")
const router = express.Router();
const {getItems,getItem,createItem,updateItem,deleteItem} = require("../controllers/cars")
const {validatorCreateItem,validatorGetItem} = require ("../validators/cars")
const customHeader = require ("../middleware/customHeader")
const authMiddleware = require ("../middleware/session")
const checkRol = require ("../middleware/rol")


router.get("/",authMiddleware,getItems)
router.get("/:id",validatorGetItem,authMiddleware,getItem)
router.post("/",authMiddleware, checkRol(["admin"]) ,validatorCreateItem,createItem)
router.put("/:id",authMiddleware ,validatorGetItem, validatorCreateItem,updateItem)
router.delete("/:id",authMiddleware,validatorGetItem, deleteItem)







module.exports = router