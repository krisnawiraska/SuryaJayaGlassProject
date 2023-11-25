const express = require("express")
const routes = express.Router()
const resultControllers = require('../controllers/resultControllers')


routes.get('/', resultControllers.getAllData)
routes.get('/one/:id', resultControllers.getOneData)
routes.post('/store', resultControllers.store)
routes.patch('/update/:id', resultControllers.update)
routes.delete('/delete/:id', resultControllers.delete)
module.exports = routes