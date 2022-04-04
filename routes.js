const express = require('express')

const router = express.Router()

//homepage route
router.get('/', (request, response) => {
  res.send('This is a simple HTTP cookie server!')
})

//a get route for adding a cookie
router.get('/setcookie', (request, response) => {
  response.cookie(`Cookie token name`,`fake encrypted cookie value`)
  response.send('Cookie have been saved successfully')
})

router.get('/getcookie', (request, response) => {
  //show saved cookies through logging
  console.log(request.cookies)

  //show saved cookies through response
  response.send(request.cookies)
})

module.exports = router