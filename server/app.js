const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api', routes)
app.listen(port, () => {
    console.log(`berhasil ${port}` )
})


