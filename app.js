const express= require('express')
const dotenv=require('dotenv').config({path:`./config/config.env`})
const mongoose= require('mongoose')
const path=require('path')
const exphbs= require('express-handlebars')
const connectdb=require('./db.js')
var cookieParser = require('cookie-parser');

//calling the function  to connect to the database
connectdb()
const app=express()
// app.use(express.static(path.join(__dirname+'public')))

app.engine('.hbs',exphbs({deafultLayout:'main',extname:'.hbs'}))
app.set('view engine','.hbs')
app.set('views', path.join(__dirname, 'views'));

//body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())

app.use('/login',require('./routes/login.js'))
app.use('/register',require('./routes/register.js'))
app.use('/search',require('./routes/search_movie.js'))
app.use('/add',require('./routes/add_movie_to_list.js'))



const PORT=3000

app.listen(PORT,
  console.log(`the app is running on port ${PORT}`)
)
