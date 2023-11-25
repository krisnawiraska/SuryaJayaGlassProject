const express = require("express")
const routes = express.Router()
const productsRoute = require('./productsRoutes')
const jenisProductsRoutes = require('./jenisProductsRoutes');
const resultRoutes = require('./resultRoutes')
const resultDetailRoutes = require('./resultDetailRoutes')


routes.use('/products', productsRoute)
routes.use('/jenisproducts', jenisProductsRoutes)
routes.use('/result', resultRoutes)
routes.use('/resultdetail', resultDetailRoutes )




module.exports = routes