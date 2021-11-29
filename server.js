if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')


const app = express()


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection

db.on('error', (err) => console.error(err))
db.once('open', () => console.log('Connected to Mongoose.'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 5000)
console.log(`'Server listening on port 5000'`)