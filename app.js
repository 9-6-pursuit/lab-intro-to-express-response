const express = require("express");
const app = express();

// app.listen(3004, () => {
//     console.log("I am listening for requests on port 3004!");
//   });
const PORT = 3003;

const catchPhrases = {
    'Batman'            :   `To the Batmobile!`,
    'Rocky'             :   `Yo, Adrian`,
    'Jack-Dawson'       :   `I'm king of the world!`,
    'Tony-Montana'      :   `Say hello to my little friend`,
    'James-Bond'        :   `The name is Bond, James Bond`,
    'Dorothy'           :   `Toto, I've got a feeling we're not in Kansas anymore`,
    'JJ-Evans'          :   `Dy-no-myte!`,
}

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

app.get('/', (request, response) => {
    response.send("<h1>Hello World!</h1>");
})
app.get('/magic8', (req, res) => {
    let index = Math.floor(Math.random() * 19);
    res.send(`<h2>${magic8Responses[index]}</h2>`);
})

app.get('/terminator', (request, response) => {
    response.send("<h2>I'll be back<br/>Hasta la vista, baby</h2>");
})

for (const key in catchPhrases) {
    app.get(`/${key}`, (req, res) => {
        res.send(`<h2>${catchPhrases[key]}</h2>`);
    })
}

app.listen(3003, () => {
    console.log(`Listening on port ${PORT}...`);
    // console.log ("listening on port 3004")
});