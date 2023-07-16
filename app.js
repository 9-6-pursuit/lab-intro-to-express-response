const express = require("express");

const app = express();
const PORT = 3003;

app.get("/terminator", (request, response) =>{
    response.send("I'll be back")
})

app.get("/emeril", (request, response) =>{
    response.send("Bam!")
})

app.get("/homersimpson", (request, response) =>{
    response.send("D'Oh")
})

app.get("/batman", (request, response) =>{
    response.send("To the Batmobile!")
})

app.get("/regis", (request, response) =>{
    response.send("Is that your final answer?")
})

app.get("/zues", (request, response) =>{
    response.send("Release the Kraken")
})

app.get("/tonymontana", (request, response) =>{
    response.send("Say hello to my little friend")
})

app.get("/jamesbond", (request, response) =>{
    response.send("the name is Bond, James Bond")
})

app.get("/rodtidwell", (request, response) =>{
    response.send("Show me the money!")
})

app.get("/jimlovewell", (request, response) =>{
    response.send("Houston, we have a problem")
})

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
    
]

function magic8Answer() {
    return magic8Responses[Math.floor(Math.random()* magic8Responses.length)]
}

app.get("/magic8", (request, response) =>{
    response.send(`<h1> ${magic8Answer()} </h1>`)
})

app.listen(PORT, ()=>{
    console.log(`Listening for requests on port ${PORT}`)
})

module.exports = app;