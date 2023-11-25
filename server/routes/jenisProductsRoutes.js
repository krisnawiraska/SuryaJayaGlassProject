const express = require("express")
const routes = express.Router()
const jenisProductsControllers = require('../controllers/jenisProductsControllers')
const upload = require("../middleware/upload")


routes.get('/', jenisProductsControllers.getAllData)
routes.get('/one/:id', jenisProductsControllers.getOneData)
routes.post('/store', upload.single('img') , jenisProductsControllers.store)
routes.patch('/update/:id',upload.single('img') , jenisProductsControllers.update)
routes.delete('/delete/:id', jenisProductsControllers.delete)

module.exports = routes