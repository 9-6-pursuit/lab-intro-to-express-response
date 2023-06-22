const express = require("express")
const app = express()
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

app.get("/", (req, res) => {
    res.send("<a href=\"/batman\">Batman</a> <a href=\"/terminator\">Terminator</a> <a href=\"/brucebanner\">Bruce Banner</a> <a href=\"/rocky\">Rocky</a> <a href=\"/jamesbond\">James Bond</a> <a href=\"/zeus\">Zeus</a> <a href=\"/gollum\">Gollum</a> <a href=\"/frankenstein\">Frankenstein</a> <a href=\"/jamesdawson\">James Dawson</a> <a href=\"/magic8\">Magic 8</a>");
});

app.get("/batman", (req,res) => {
    res.send("<h1>To the Batmobile!</h1>")
})

app.get("/terminator", (req,res) => {
    res.send("<h1>I'll be back</h1>")
})

app.get("/brucebanner", (req,res) => {
    res.send("<h1>Don't make me angry</h1>")
})
app.get("/rocky", (req,res) => {
    res.send("<h1>Yo, Adrian</h1>")
})

app.get("/jamesbond", (req,res) => {
    res.send("<h1>the name is Bond, James Bond</h1>")
})

app.get("/zeus", (req,res) => {
    res.send("<h1>Release the Kraken</h1>")
})

app.get("/gollum", (req,res) => {
    res.send("<h1>My precious</h1>")
})

app.get("/frankenstein", (req,res) => {
    res.send("<h1> It's alive! It's alive</h1>")
})

app.get("/jamesdawson", (req,res) => {
    res.send("<h1>I'm king of the world!</h1>")
})

app.get("/magic8", (req, res) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    const randomResponse = magic8Responses[randomIndex];
    res.send(`<h1>${randomResponse}</h1>`);
});


app.listen(3003)