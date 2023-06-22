const express = require ("express")
const app = express();

app.get("/", (request, response) => {
    response.send("<h1>Movie Quotes</h1>")
})
app.get("/terminator", (request, response) => {
    response.send("<h1>I'll be back</h1>")
})
app.get("/Batman", (request, response) => {
    response.send("<h1>To the Batmobile</h1>")
})
app.get("/Bruce Banner", (request, response) => {
    response.send("<h1>Don't make me angry</h1>")
})
app.get("/Hannible Smith", (request, response) => {
    response.send("<h1>i love it when a plan comes together</h1>")
})
app.get("/Tony Montana", (request, response) => {
    response.send("<h1>Say hello to my little friend</h1>")
})
app.get("/Zeus", (request, response) => {
    response.send("<h1>Release the Kraken</h1>")
})
app.get("/James Bond", (request, response) => {
    response.send("<h1>the name is Bond, James Bond</h1>")
})
app.get("/Travis", (request, response) => {
    response.send("<h1>You talking to me?</h1>")
})
app.get("/Jack", (request, response) => {
    response.send("<h1>I am the king of the world</h1>")
})
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
    ];

    const randomResponse = magic8Responses[Math.floor(Math.random() * magic8Responses.length)];

    response.send(`<h1>${randomResponse}</h1>`);
});

app.listen(3000);


