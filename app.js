//DEPENDENCIES
const express = require("express");

//CONFIGURATION
const app = express();

// ROUTES
app.get("/", (request, response) => {
  response.send("<a href=/home >Go To Home</a>");
});

app.get("/home", (request, response) => {
  response.send("<h1>Welcome To Home</h1>");
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
    res.send('Hasta la vista, baby')
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

  app.get("/magic8", (request, response) => {
    response.send("<h1>Yo, Adrian</h1>");
  });

  //LISTEN
app.listen(3003, () => {
  console.log("Listening for requests on port 3003");
});

