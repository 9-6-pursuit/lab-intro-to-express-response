const express = require("express");
const app = express();

app.get('/', (request, response) => {
    response.send("Lab: Intro To Express Response");
});

app.get('/terminator', (request, response) => {
    response.send('I\'ll be back');
});

app.get('/tim-gunn', (request, response) => {
    response.send('Make it work.');
});

app.get('/homer-simpson', (request, response) => {
    response.send('D\'oh!');
});

app.get('/batman', (request, response) => {
    response.send('To the Batmobile!');
});

app.get('/regis', (request, response) => {
    response.send('Is that your final answer?');
});

app.get('/travis-bickle', (request, response) => {
    response.send('You talkin\' to me?');
});

app.get('/tony-montana', (request, response) => {
    response.send('Say hello to my little friend');
});

app.get('/zeus', (request, response) => {
    response.send('Release the Kraken!!!');
});

app.get('/james-bond', (request, response) => {
    response.send('The name is Bond, James Bond');
});

app.get('/frankenstein', (request, response) => {
    response.send('It\'s alive! It\'s alive');
});

app.get('/spongebob', (request, response) => {
    response.send('I\'m ready, I\'m ready!');
});

app.get('/terminator2', (request, response) => {
    response.send('Hasta la vista, baby');
});

app.get('/magic8', (request, response) => {

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

  let randomRes = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

    response.send(`<h1>${randomRes}</h1>`);
});

//MOVED TO SERVER.JS
// app.listen(3003, () => {
//     console.log("listening to requests made on port 3003");
// });

// EXPORT
module.exports = app