const express = require('express')
const cors = require('cors')
const req = require('express/lib/request')

const app = express()
const PORT = process.env.PORT || 3001
// Your Code Here

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get(
  '/middleware',
  (request, response, next) => {
    console.log(request.method)
    next()
  },
  (req, res) => {
    res.send(`the HTTP type of ${req.method} request is complete`)
  }
)
app.post(
  '/middleware',
  (request, response, next) => {
    console.log(request.method)
    next()
  },
  (req, res) => {
    res.send(`the HTTP type of ${req.method} request is complete`)
  }
)
app.delete(
  '/middleware',
  (request, response, next) => {
    console.log(request.method)
    next()
  },
  (req, res) => {
    res.send(`the HTTP type of ${req.method} request is complete`)
  }
)
app.put(
  '/middleware',
  (request, response, next) => {
    console.log(request.method)
    next()
  },
  (req, res) => {
    res.send(`the HTTP type of ${req.method} request is complete`)
  }
)


// Your Code Ends Here
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
