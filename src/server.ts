import express from 'express'
import '@controllers/UsersController'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Olaa!' })
})

app.listen(3333)

console.log('Server Running on http://127.0.0.1:3333')
