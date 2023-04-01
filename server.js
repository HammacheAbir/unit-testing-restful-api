import app from './app.js'

const bodyParser = require('body-parser')

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(7777,()=> console.log('listening on port 7777 '))