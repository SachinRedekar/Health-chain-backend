const express = require('express')

const cors = require('cors')

const dotenv = require('dotenv').config()

const app = express()

app.use(cors())

const Routes = require('./Routes/route')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/HCQuery', Routes)

app.use((req, res, next) =>{
    res.status(404)
    res.send({
        error: 'Not Found'
    })
})

app.listen(3000, ()=>{
    console.log('Server started on Port 3000.....')
})



