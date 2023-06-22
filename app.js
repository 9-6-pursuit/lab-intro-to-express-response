//dependency
const express = require ("express")

//configuration 
const app = express()
const PORT = 3003

//Routes
app.get("/", (request, response)=> {
    response.send("Hello, world!")
})

//Listen
app.listen(PORT, ()=> {
    console.log(`Listening port #${PORT}`)
})