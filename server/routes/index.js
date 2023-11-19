const express = require("express")
const routes = express.Router()
const productsRoute = require('./productsRoutes')

routes.use('/products', productsRoute)



module.exports = routes