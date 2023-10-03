const express = require('express')
require('./db/mongoose')
const log = require('./middleware/log')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const routes = [...userRouter.stack, ...taskRouter.stack].map((layer) => {
  const method = Object.keys(layer.route.methods)[0]
  return `${method.toUpperCase()} ${layer.route.path}`
})

app.use(express.json())
app.use(log)
app.get('/', (req, res) => res.send(routes))
app.use(userRouter)
app.use(taskRouter)

module.exports = app
