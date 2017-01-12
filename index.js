var express = require('express')
var app = express()
var router = express.Router()

router.all('/', function (req, res, next) {
  console.log('Passing through the all handler')
  next()
}, function (req, res, next) {
  res.send('next route')
})

router.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/', router)

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port '+process.env.PORT+'!')
})
