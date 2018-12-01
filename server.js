const path = require('path')
const enforce = require('express-sslify')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.use(enforce.HTTPS({ trustProtoHeader: true }))
app.use(express.static(__dirname + '/dist'))
app.all('*', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')))
app.listen(port, () => console.log(`Listening on ${port}.`))
