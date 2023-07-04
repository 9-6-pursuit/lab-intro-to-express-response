const express = require("express")
const app = express()

app.get("/emeril", (request, response) => {
    response.send("Bam!")
})

app.get("/terminator", (request, response) => {
    response.send("I'll be back!")
})

app.get("/bruce", (request, response) => {
    response.send("Don't make me angry!")
})

app.get("/jj", (request, response) => {
    response.send("Dy-no-myte!")
})

app.get("/batman", (request, response) => {
    response.send("To the Batmobile!")
})

app.get("/homer", (request, response) => {
    response.send("D'Oh")
})

app.get("/coach", (request, response) => {
    response.send("Clear eyes, full hearts, can't Lose")
})

app.get("/regis", (request, response) => {
    response.send("Is that your final answer?")
})

app.get("/tony", (request, response) => {
    response.send("Say hello to my little friend")
})

app.get("/", (request, response) => {
    response.send("Welcome!")
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

  app.get("/magic8", (request, response) => {
    const randomResponse = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
    response.send(randomResponse);
    });

app.listen(3003)