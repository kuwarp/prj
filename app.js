const express = require('express')

const app=express()

const port = 2100


//static files

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/js',express.static(__dirname + 'public/js'))
// Engine

app.set('views','./src/views')
app.set('view engine','ejs')


// routes

const router = require('./src/routes/news')
app.use('/',router)

//listen

app.listen(port,()=>{
    console.log(`server on ${port}`);
})