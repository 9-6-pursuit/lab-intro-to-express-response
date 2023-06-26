//first, code for express DEPENDENCIES
const express = require('express');

//CONFIGURE express to app
const app = express();
const PORT = 3003 //the port we are going to use to run our app will be port 3003

//create the ROUTES
app.get("/", (request, response) => {
    response.send("Hello, world!")
    
})

app.get('/terminator', (request, response) => {
    response.send("I'll be back!")
    response.send("Hasta la vista, baby")
})// the 2nd response won't appear in browser because the HTTP protocol is very specific. There can be only one response for a request so only the first response is sent to the client.

app.get('/Jim-Lovell', (request, response) => {
    response.send("Houston, we have a problem")
})

app.get('/Gollum', (request, response) => {
    response.send("My precious")
})

app.get('/Dorothy', (request, response) => {
    response.send("Toto, I've got a feeling we're not in Kansas anymore")
})

app.get('/Fraiser', (request, response) => {
    response.send("I'm listening")
})

app.get('/Fox-Mudler', (request, response) => {
    response.send("The truth is out there")
})

app.get('/Frankenstein', (request, response) => {
    response.send("It's alive! It's alive")
})

app.get('/Rod-Tidwell', (request, response) => {
    response.send("Show me the money!")
})

app.get('/Tony-Montana', (request, response) => {
    response.send("Say hello to my little friend")
})

app.get('/Coach-Taylor', (request, response) => {
    response.send("Clear eyes, full hearts, can't Lose")
})

app.get('/magic8', (request, response) => {
    const magic8Answer = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
    response.send(
        `<h1>${magic8Answer}</h1>`
    )
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

//LISTEN for requests. I am adding a  console.log to the callback fxn that will print a status to the console to let me know that the app is running
app.listen(PORT, () => {
    console.log("listening for requests on port 3004");
});

//we have to EXPORT our app or it will crash when we try to use it in our server.js
module.exports = app

//create a basic fxn to test
