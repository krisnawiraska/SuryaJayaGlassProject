const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const path = require('path')


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'));

app.use('/', (req,res)=>{
    res.render('admin/dashboard')
})

app.use('/api', routes)
app.listen(port, () => {
    console.log(`berhasil ${port}` )
})


