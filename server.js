const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')


const app = express()


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)

app.listen(process.env.PORT || 5000)
console.log(`'Server listening on port 5000'`)