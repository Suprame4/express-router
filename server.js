const express = require("express")
const app = express()
const port = 3000

//import routers 
const fruitRouter = require('./routes/fruit')
const userRouter = require('./routes/user')

// Express Routes
app.use('/fruit', fruitRouter)

app.use('/user', userRouter)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
