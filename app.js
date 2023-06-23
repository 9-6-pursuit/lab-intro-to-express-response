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


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
})

app.get('/terminator', (req, res) => {
    res.send("I'll be back ")
})

app.get('/Emeril', (req, res) => {
    res.send("Bam!")
})

app.get('/Steve-McGarrett', (req, res) => {
    res.send("Book 'em Danno!")
})

app.get('/Bruce-Banner', (req, res) => {
    res.send("Don't make me angry")
})

app.get('/Batman', (req, res) => {
    res.send("To the Batmobile!")
})

app.get('/Tony-Montana', (req, res) => {
    res.send("Say hello to my little friend")
})

app.get('/Zeus', (req, res) => {
    res.send("Release the Kraken")
})

app.get('/James-Bond', (req, res) => {
    res.send("the name is Bond, James Bond")
})

app.get('/Borg', (req, res) => {
    res.send("Resistance is futile")
})

app.get('/Travis-Bickle', (req, res) => {
    res.send("You talkin' to me?")
})

app.get('/magic8', (req, res) => {
    res.send(`<h1>${magic8Responses[Math.floor(Math.random()*magic8Responses.length)]}</h1>`)
})

app.listen(3003, () => {
    console.log("Listening for requests on port 3003");
});

