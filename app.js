const express = require("express");
const app = express();

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
];

app.get("/", (request, response) => {
  response.send("hello world..hai..ya")
});

app.get("/tim-gunn", (request, response) => {
  response.send("<h2>Make it work'</h2>")
});

app.get("/Bruce-Banner", (request, response) => {
  response.send("<h2>hello world..hai..ya</h2>")
});

app.get("/Batman", (request, response) => {
  response.send("<h2>Don't make me angry</h2>")
});

app.get("/Hannibal-Smith", (request, response) => {
  response.send("<h2>I love it when a plan comes together</h2>")
});

app.get("/Regis", (request, response) => {
  response.send("<h2>Is that your final answer?</h2>")
});

app.get("/Travis-Bickle", (request, response) => {
  response.send("<h2>You talkin to me?</h2>")
});

app.get("/Zeus", (request, response) => {
  response.send("<h2>Release the Kraken</h2>")
});

app.get("/James-Bond", (request, response) => {
  response.send("<h2>the name is Bond, James Bond</h2>")
});

app.get("/Rocky", (request, response) => {
  response.send("<h2>Yo, Adrian</h2>")
});

app.get("/terminator", (request, response) => {
  response.send("<h2>I'll be back</h2>")
});

app.get("/magic8", (request, response) => {
  response.send(`<h1>${magic8Responses[Math.floor(Math.random()*magic8Responses.length)]}</h1>`)
});



app.listen(3003, ()=>{
  console.log("listening for requests on port 3003");
})
