const express = require("express")
const routes = express.Router()
const resultDetailControllers = require('../controllers/resultDetailControllers')
const upload = require("../middleware/upload")


routes.get('/', resultDetailControllers.getAllData)
routes.get('/one/:id', resultDetailControllers.getOneData)
routes.post('/store', upload.single('img') , resultDetailControllers.store)
routes.patch('/update/:id',upload.single('img') , resultDetailControllers.update)
routes.delete('/delete/:id', resultDetailControllers.delete)

module.exports = routes