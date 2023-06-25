const express = require("express");
const app = express();

// Routes for the combined application
app.get("/", (request, response) => {
  response.send("Hello, world!!!!!!!!");
});

app.get("/Regis", (request, response) => {
  response.send("Is that your final answer");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
});

app.get("/Coach-Taylor", (request, response) => {
  response.send("Coach Taylor - Clear eyes, full hearts, can't lose");
});

app.get("/Batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/Homer-Simpson", (request, response) => {
  response.send("D'oh");
});

app.get("/JJ-Evans", (request, response) => {
  response.send("Dy-no-myte!");
});

app.get("/Rocky", (request, response) => {
  response.send("Yo, Adrian");
});

app.get("/Gollum", (request, response) => {
  response.send("My precious");
});

app.get("/joanavel", (request, response) => {
  response.send("No way, José!");
});

const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
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
];

app.get("/magic8", (request, response) => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  const randomResponse = magic8Responses[randomIndex];
  response.send(randomResponse);
});

// Starting the combined application on port 3003
const port = 3003;
app.listen(port, () => {
  console.log(`Combined application is running on port ${port}`);
});
