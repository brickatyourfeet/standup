const _ = require('lodash')
let classArray = ['adonay', 'aldo', 'justin', 'kat', 'kevin', 'kyle', 'lena', 'matt', 'melinda', 'nathan', 'rj', 'ron', 'sean', 'stan']

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.render('index.html')
})





app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { status: 404, message: 'Not found' } })
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)
