//DEPENDENCIES
const express = require("express");

//CONFIGURATION
const app = express();
// const PORT = 3003 (moved to server.js)


// ROUTES
app.get("/", (request, response) => {
  response.status(200).send("<a href=/home >Go To Home</a>");
});

app.get("/home", (request, response) => {
  response.send("<h1>Welcome To My Express Lab</h1>");
});

app.get("/terminator", (req, res) => {
    res.send("<h1>I'll be back</h1>") //Using two will only show the first one and theres an error about headers can't have more than one per request.
    // res.send('<h1>Hasta la vista, baby</h1>')
  })

app.get("/homer-simpson", (request, response) => {
    response.send("<h1>D'Oh</h1>");
  });

  app.get("/rod-tidwell", (request, response) => {
    response.send("<h1>Show me the money!</h1>");
  });

  app.get("/jj-evans", (request, response) => {
    response.send("<h1>Dy-no-myte!</h1>");
  });

  app.get("/TravisBickle", (request, response) => {
    response.send("<h1>Say hello to my little friend</h1>");
  });

  app.get("/tony-montana", (request, response) => {
    response.send("<h1>You talkin' to me?</h1>");
  });

  app.get("/zeus", (request, response) => {
    response.send("<h1>Release the Kraken</h1>");
  });

  app.get("/james-bond", (request, response) => {
    response.send("<h1>the name is Bond, James Bond</h1>");
  });

  app.get("/dorothy", (request, response) => {
    response.send("<h1>Toto, I've got a feeling we're not in Kansas anymore</h1>");
  });

  app.get("/rocky", (request, response) => {
    response.send("<h1>Yo, Adrian</h1>");
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
    "Very doubtful"
  ];
  
  app.get('/magic8', (req, res) => {
    // Generate a random index within the range of the array's length
    const randomQuote = Math.floor(Math.random() * magic8Responses.length);
  
    // Retrieve the randomly selected response from the array
    const magic8Answer = magic8Responses[randomQuote];
  
    res.send(`<h1>${magic8Answer}</h1>`);
  });


  //LISTEN (moved to server.js)
// app.listen(PORT, () => {
//   console.log("Listening for requests on port ${PORT}");
// });

//EXPORT
module.exports = app

