const express = require("express");

const app = express();
const PORT = 3003;

// catch phrases //

app.get("/", (request, response) => {
  response.send("Hello, world!");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
});

app.get('/tim-gunn', (req, res) => {
res.send('Make it work')
})

app.get("/Emeril", (request, response) => {
  response.send("Bam!");
});

app.get("/Coach-Taylor", (request, response) => {
  response.send("Clear eyes, full hearts, can't Lose");
});

app.get("/Homer-Simpson", (request, response) => {
  response.send("D'Oh");
});

app.get("/Bruce-Banner", (request, response) => {
  response.send("Don't make me angry");
});

app.get("/JJ-Evans", (request, response) => {
  response.send("Dy-no-myte!");
});

app.get("/Batman", (request, response) => {
  response.send("To the Batmobile!");
});

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
    let magic8Answer = 0
    function getRandomResponse(){
         return magic8Answer = Math.floor(Math.random() * 19);
    }
  response.send(`<h1>${magic8Responses[getRandomResponse()]}</h1>`);
});





// end catch phrases //

app.listen(PORT, () => {
  console.log(`I am listening for requests on port ${PORT}`);
});