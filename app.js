require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080
const cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(port,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('running on port',port)
    }
})