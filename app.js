const express = require("express");
const app = express();

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
  response.send("Coach Taylor - Clear eyes, full hearts, can't Lose");
});

app.get("/Batman", (request, response) => {
  response.send("To the Batmobile!");
});

app.get("/Homer-Simpson", (request, response) => {
  response.send("D'Oh");
});

app.get("/JJ Evans", (request, response) => {
  response.send("Dy-no-myte!");
});

app.get("/Rocky", (request, response) => {
  response.send("Yo, Adrian");
});

app.get("/Gollum", (request, response) => {
  response.send("My precious");
});

app.get("/joanavel", (request, response) => {
  response.send("no way jose!");
});


// app.get('terminator', (req, res) => {
//   res.send('I\ll be back')
//   res.send('Hasta la vista, baby')
// })

app.listen(3003, () => {
  console.log("I am listening for requests on port 3003!");
});



// Coach Taylor - Clear eyes, full hearts, can't Lose