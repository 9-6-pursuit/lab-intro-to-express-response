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
]

app.get("/", (request, response) => {
  response.send(
    "<ul style='list-style:none; font-family:sans-serif' ><h1>Main Page</h1><li><a style='text-decoration:none' href='/terminator'>Terminator</a></li><li><a style='text-decoration:none' href='/homer-simpson'>Homer Simpson</a></li><li><a style='text-decoration:none' href='/bruce-banner'>Bruce Banner</a></li><li><a style='text-decoration:none' href='/batman'>Batman</a></li><li><a style='text-decoration:none' href='/regis'>Regis</a></li><li><a style='text-decoration:none' href='/hannibal-smith'>Hannibal Smith</a></li><li><a style='text-decoration:none' href='/fox-mulder'>Fox Mulder </a></li><li><a style='text-decoration:none' href='/dorothy'>Dorothy</a></li><li><a style='text-decoration:none' href='/borg'>Borg</a></li><br><li><a style='text-decoration:none' href='/magic8ball'>Magic 8 Ball</a></li></ul>"
    );
});
app.get("/homer-simpson", (request, response) => {
  response.send(
    "<h3>Homer Simpson</h3><h1>D'Oh</h1><a href='/'>Back to Main</a><br>"
    );
});
app.get("/bruce-banner", (request, response) => {
  response.send(
    "<h1>Don't make me angry</h1><a href='/'>Back to Main</a>"
    );
});
app.get("/batman", (request, response) => {
  response.send(
    "<h1>To the Batmobile!</h1><a href='/'>Back to Main</a><br>"
    );
});
app.get("/regis", (request, response) => {
  response.send(
    "<h1>Regis Philbin</h1><h1 style='font-family:sans-serif; border: 1px solid black; border-radius: 5px; padding:70px; margin:10 5px; width: 22%; height: 200px; box-shadow:5px 8px #232; background-color: #578; color: #fff; font-weight:bold'>Is that your final answer?</h1><a href='/'>Back to Main</a><br>"
    );
});
app.get("/hannibal-smith", (request, response) => {
  response.send(
    "<h1>I love it when a plan comes together</h1><a href='/'>Back to Main</a><br>"
    );
});
app.get("/fox-mulder", (request, response) => {
  response.send(
    "<h1>The truth is out there</h1><a href='/'>Back to Main</a><br>"
    );
});
app.get("/dorothy", (request, response) => {
  response.send(
    "<h1>Toto, I've got a feeling we're not in Kansas anymore</h1><a href='/'>Back to Main</a><br>"
    );
});
app.get("/borg", (request, response) => {
  response.send(
    "<h1>Resistance is futile</h1><a href='/'>Back to Main</a><br>"
    );
});
app.get("/terminator", (request, response) => {
  response.send(
    "<h1>I'll be back</h1><a href='/'>Back to Main Page</a><br>"
    );
    // response.send('Hasta la vista, baby');
});
app.get("/magic8ball", (request, response) => {
  let rndNum=Math.floor(Math.random()*magic8Responses.length)
  response.send(
    `<h1 style='font-family:sans-serif'>Magic 8 Ball</h1><h1 style='font-family:sans-serif; border: 1px solid black; border-radius: 5px; padding:70px; margin:0 5px; width: 22%; height: 200px; box-shadow:5px 8px #232; background-color: #578; color: #fff; font-weight:bold'>${magic8Responses[rndNum]}</h1><br><a style='font-family:sans-serif; text-decoration:none; border: 1px solid black; border-radius: 5px' href='/magic8ball'>Shake Again!</a> <span> - or - </span> <a href='/' style='font-family:sans-serif; text-decoration:none; border: 1px solid black; border-radius: 5px'>Back to Main Page</a><br>`
    );
});


app.listen(3003)
console.log("Listening on port 3003...")