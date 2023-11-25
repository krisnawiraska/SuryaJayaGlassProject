const express = require("express")
const routes = express.Router()
const productsControllers = require('../controllers/productsControllers');
const upload = require("../middleware/upload")

routes.get('/', productsControllers.getAllData)
routes.get('/one/:id', productsControllers.getOneData)
routes.post('/store', upload.single('img') , productsControllers.store)
routes.patch('/update/:id',upload.single('img') , productsControllers.update)
routes.delete('/delete/:id', productsControllers.delete)



module.exports = routes