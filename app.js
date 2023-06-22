//DEPENDENCIES
const express = require("express");

//CONFIGURATION
const app = express();
const PORT = 3003;

//ROUTES
app.get("/", (request, response) => {
  response.send("<h1>Greetings World</h1>");
});
app.get("/terminator", (request, response) => {
  response.send("<h1>I'll be back...</h1>");
});
app.get("/borg", (request, response) => {
  response.send("<h1>Resistance is futile.</h1>");
});
app.get("/harryCallahan", (request, response) => {
  response.send("<h1>Go ahead, make my day!</h1>");
});
app.get("/travisBickle", (request, response) => {
  response.send("<h1>You talking to me kid?</h1>");
});
app.get("/tonyMontana", (request, response) => {
  response.send("<h1>Meet my little friend.</h1>");
});
app.get("/emeril", (request, response) => {
  response.send("<h1>BAM!!!</h1>");
});
app.get("/frankenstein", (request, response) => {
  response.send("<h1>IT'S ALIVE, IT'S ALIVE!!!</h1>");
});
app.get("/jimLovell", (request, response) => {
  response.send("<h1>Houston, we have a problem.</h1>");
});
app.get("/Zeus", (request, response) => {
  response.send("<h1>Release the Kraken!</h1>");
});
app.get("/rocky", (request, response) => {
  response.send("<h1>YO! Adrian</h1>");
});

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
  "Very doubtful",
];

app.get("/magic8", (request, response) => {
    //ASSIGN a random number between 0 and the length of the magic8Responses array (exclusive) TO A VARIABLE
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  //Retrieve the element from the magic8Responses array using RANDOMindex
  const randomResponse = magic8Responses[randomIndex];
  // Send the randomResponse as the response to the client
  response.send(`<h1>${randomResponse}</h1>`);
});

//LISTEN
console.log(`Listening on port ${PORT}`);

app.listen(3003);
