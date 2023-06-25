//require imports express from the package.json
//require('express') returns a function reference. that function is called with express() . app is an object returned by express(). Actually it instantiates Express and assigns app variable to it.
const { request, response } = require("express");
const express = require("express"); 
// if port 3003 isnt availible go to any other open PORT
const PORT = process.env.PORT || 3003;
const app = express()
//home
app.get("/", (request, response) => {
    response.status(200).send("<h1>Hello, world!</h1>");
})

//route that says "I'll be back"
app.get("/terminator", (request, response) => {
    response.send("<h1>I'll be back</h1>")
})

app.get("/terminator2", (request, response) => {
    response.send("<h1>Hasta la vista, baby</h1>");
})

app.get("/batman", (request, response) => {
    response.send("<h1>To the Batmobile</h1>");
})

app.get("/emeril", (request, response) => {
    response.send("<h1>Bam</h1>");
})

app.get("/bruce-banner", (request, response) => {
    response.send("<h1>Don't make me angry</h1>");
})

app.get("/jj-evans", (request, response) => {
    response.send("<h1>Dy-no-myte!</h1>");
})

app.get("/borg", (request, response) => {
    response.send("<h1>Resistance is futile</h1>");
})

app.get("/JamesBond", (request, response) => {
    response.send("<h1>the name is Bond, James Bond</h1>");
})

app.get("/frankenstein", (request, response) => {
    response.send("<h1>It's alive! It's alive</h1>");
})

app.get("/homer-simpson", (request, response) => {
    response.send("<h1>D'Oh</h1>");
})
 app.get("/magic8", (request, response) => {
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
    response.send(`<h1>${magic8Responses[Math.ceil(Math.random() * 10)]}</h1>`)
 })

module.exports = app