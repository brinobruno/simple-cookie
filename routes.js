const express = require('express')

const router = express.Router()

//homepage route
router.get('/', (request, response) => {
  res.send('This is a simple HTTP cookie server!')
})

//a get route for adding a cookie
router.get('/setcookie', (request, response) => {
  response.cookie(`Cookie token name`,`fake encrypted cookie value`, {

    // security properties
    expires: new Date('09 12 2022'), // or maxAge
    secure: false, //false for localhost development
    httpOnly: true,
    sameSite: 'lax'
  })

  response.send('Cookie have been saved successfully')
})

//a get route to delete a saved cookie

router.get('./deletecookie', (request, response) => {
  response.clearCookie()
  response.send('Cookie deleted successfully')
})

//a get route to show saved cookies through logging(1) and response(2)
router.get('/getcookie', (request, response) => {
  console.log(request.cookies)
  response.send(request.cookies)
})

module.exports = router