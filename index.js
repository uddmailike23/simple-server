const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

app.post('/login',(req,res) => {
    res.json({
        message:'Received!',
        headers:req.headers,
        body:req.body
    })
})

app.listen(9000, () => {
    console.log('Simple server is running...')
})