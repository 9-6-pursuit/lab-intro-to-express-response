const express = require('express');
const app = express();
const port = 3003;

const catchphrases = {
  terminator: "I'll be back",
  johnwick: "People keep asking if I'm back, and I haven't really had an answer.",
  joker: "Why so serious?",
  hulk: "Hulk smash!",
  darthvader: "I am your father.",
  spiderman: "With great power comes great responsibility.",
  scarface: "Say hello to my little friend!",
  jacksparrow: "Why is the rum always gone?",
  voldemort: "Avada Kedavra!",
  gandalf: "You shall not pass!",
};

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
  const randomResponse = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  res.send(randomResponse);
});

app.get('/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  if (catchphrases.hasOwnProperty(name)) {
    res.send(catchphrases[name]);
  } else {
    res.send("Catchphrase not found!");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
