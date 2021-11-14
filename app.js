const cors = require('cors')
const express = require('express')
const config = require('./utils/config')

// const tagsRouter = require('./controllers/tags')
// const adminRouter = require('./controllers/admin')
// const usersRouter = require('./controllers/users')
// const ownersRouter = require('./controllers/owners')
// const membersRouter = require('./controllers/members')
// const businessesRouter = require('./controllers/businesses')

const app = express()

app.use(cors());
app.use(express.json())

app.use('/', (request, response) => {
	response.send("<h1>Welcome to Skyline!</h1>")
})

// app.use('/api/tags', tagsRouter)
// app.use('/api/admin', adminRouter)
// app.use('/api/users', usersRouter)
// app.use('/api/owners', ownersRouter)
// app.use('/api/members', membersRouter)
// app.use('/api/businesses', businessesRouter)

// app.use(express.static.build())

module.exports = app