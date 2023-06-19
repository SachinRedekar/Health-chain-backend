const express = require('express')

const router = express.Router()

const sql = require('mssql')

const sqlConfig = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    server: process.env.SERVER,
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

const db = sql.connect(sqlConfig, function(err){
    if(err) {
        console.log(err)
    }
    else{
        console.log("DataBase Connected...!")
    }
  })


router.get('/:subscriber_id', async (req, res, next)=>{
    const id = req.query.subscriber_id
    console.log('Get Requwst',id)
    const result = await sql.query(`select * from [dbo].[identifier_tab] where fhir_id = '${id}'`)
    console.log(result)
    res.send(result)
})


// search for subscriber_id
router.post('/subscriber_id', async (req, res, next) =>{
    const id = req.body.subscriber_id
    console.log('Post Request',id)
    const result = await sql.query(`select * from [dbo].[identifier_tab] where fhir_id = '${id}'`)
    console.log(result.recordset)
    // res.send(result.recordset)
    res.json(result.recordset)
})

// search for subscriber name 
router.post('/subscriber_name', async (req, res, next) =>{
    const name = req.body.given
    console.log(name)
    const result = await sql.query(`select * from [dbo].[humanname_tab] where given = '${name}'`)
    res.send(result.recordset)
})

// router.get('/', (req, res, next) =>{
//     res.sendFile(__dirname + '/index.html')
// })

module.exports = router