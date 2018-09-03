require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const db = require('./server/db/db')
const router = require('./server/router/router')
const middleware = require('./server/middleware/middleware')

db()
middleware(app)
app.use('/', router)

app.listen(process.env.PORT || port, () => console.log(`Server listening on port ${port}.`))
