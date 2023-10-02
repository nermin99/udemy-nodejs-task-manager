const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const log = require('./middleware/log')

const app = express()

app.use(express.json())
app.use(log)
app.use(userRouter)
app.use(taskRouter)

module.exports = app
