const express = require('express');
const app = express();

//Terminator
app.get('/terminator', (req, res) => {
    res.send("I'll be back");
});

app.get('/terminator2', (req, res) => {
    res.send("Hasta la vista, baby");
});


// Tim Gunn
app.get('/tim-gunn', (req, res) => {
    res.send('Make it work');
});

// Emeril
app.get('/emeril', (req, res) => {
    res.send('Bam!');
});

// Casablanca
app.get('/casablanca', (req, res) => {
    res.send("Here's looking at you, kid");
});

// Steve McGarrett
app.get('/steve-mcgarrett', (req, res) => {
    res.send("Book 'em Danno!");
});

// Coach Taylor
app.get('/coach-taylor', (req, res) => {
    res.send('Clear eyes, full hearts, can\'t lose');
});

// Homer Simpson
app.get('/homer-simpson', (req, res) => {
    res.send('D\'Oh');
});

// Bruce Banner
app.get('/bruce-banner', (req, res) => {
    res.send("Don't make me angry");
});

// JJ Evans
app.get('/jj-evans', (req, res) => {
    res.send('Dy-no-myte!');
});

// Batman
app.get('/batman', (req, res) => {
    res.send('To the Batmobile!');
});

// Hannibal Smith
app.get('/hannibal-smith', (req, res) => {
    res.send('I love it when a plan comes together');
});

// Fraiser
app.get('/fraiser', (req, res) => {
    res.send('I\'m listening');
});

// Regis
app.get('/regis', (req, res) => {
    res.send('Is that your final answer?');
});

// Borg
app.get('/borg', (req, res) => {
    res.send('Resistance is futile');
});

// Fox Mulder
app.get('/fox-mulder', (req, res) => {
    res.send('The truth is out there');
});

// Harry Callahan
app.get('/harry-callahan', (req, res) => {
    res.send('Go ahead, make my day');
});

// Travis Bickle
app.get('/travis-bickle', (req, res) => {
    res.send('You talkin\' to me?');
});

// Tony Montana
app.get('/tony-montana', (req, res) => {
    res.send('Say hello to my little friend');
});

// Zeus
app.get('/zeus', (req, res) => {
    res.send('Release the Kraken');
});

// James Bond
app.get('/james-bond', (req, res) => {
    res.send('The name is Bond, James Bond');
});

// Dorothy
app.get('/dorothy', (req, res) => {
    res.send('Toto, I\'ve got a feeling we\'re not in Kansas anymore');
});

// Rod Tidwell
app.get('/rod-tidwell', (req, res) => {
    res.send('Show me the money!');
});

// Frankenstein
app.get('/frankenstein', (req, res) => {
    res.send('It\'s alive! It\'s alive');
});

// Jim Lovell
app.get('/jim-lovell', (req, res) => {
    res.send('Houston, we have a problem');
});

// Rocky
app.get('/rocky', (req, res) => {
    res.send('Yo, Adrian');
});

// Gollum
app.get('/gollum', (req, res) => {
    res.send('My precious');
});

// Jack Dawson
app.get('/jack-dawson', (req, res) => {
    res.send('I\'m king of the world!');
});


// Magic 8 Ball responses
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
  
  // Magic 8 Ball route
  app.get('/magic8', (req, res) => {
      // Generate a random index
      let index = Math.floor(Math.random() * magic8Responses.length);
  
      // Fetch the response at the random index
      let magic8Answer = magic8Responses[index];
  
      // Send the response
      res.send(`<h1>${magic8Answer}</h1>`);
  });



// Start the server
app.listen(3003, () => {
    console.log('Server is running on http://localhost:3003');
});
