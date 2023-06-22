//DEPENDENCIES

const express = require('express');

//CONFIGURATION
const app = express();
const PORT = 3003;

//ROUTES
app.get("/", (request, response) => {
    response.send("Home Sweet Home " 
    + "<a href='/hillel'>Hillel the Elder</a> " 
    + " " + "<a href='/senesh'>Hannah Senesh</a> "
    + " " + "<a href='/pavelfriedman'>The Butterfly</a> "
    + " " + "<a href='/milton'>John Milton</a> "
    + " " + "<a href='/question'>Les Miz</a> "
    + " " + "<a href='/moonlighting'>Rhyme Time</a>" 
    + " " + "<a href='/romeo'>Juliet</a> "
    + " " + "<a href='/samba'>Samba</a> "
    + " " + "<a href='/snowflake'>Bleak</a>"
    )
});

app.get("/hillel", (request, response) => {
    response.send("If not now, when?")
});

app.get("/senesh", (request, response) => {
    response.send("Blessed is the match consumed in kindling flame.")
});

app.get("/pavelfriedman", (request, response) => {
    response.send("The last. The very last. So richly, brightly, dazzlingly yellow.")
});

app.get("/milton", (request, response) => {
    response.send("A mind is its own place and in itself can make a heaven of hell; a hell of heaven.")
});

app.get("/question", (request, response) => {
    response.send("Do you hear the people sing?")
});

app.get("/moonlighting", (request, response) => {
    response.send("I'm sorry to say; I'm sad to report; I have not seen any man of that sort.")
});

app.get("/romeo", (request, response) => {
    response.send("Arise, fair sun, and kill the envious moon.")
});

app.get("/samba", (request, response) => {
    response.send("This is just a litle samba, written for a single note...the soul is just that note.")
});

app.get("/snowflake", (request, response) => {
    response.send("Winter is coming.")
});


