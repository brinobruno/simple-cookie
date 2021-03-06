const express = require('express')
const cookieParser = require('cookie-parser')
const routes = require('./routes')

const app = express()

// initialize cookie parser
app.use(cookieParser())

//routes
app.use('/', routes)

app.listen(3000, () => console.log('Server is running! 3000.'))