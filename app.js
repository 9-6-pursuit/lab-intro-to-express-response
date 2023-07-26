const express = require("express");
const app = express();

app.get('tim-gunn', (request, response) => {
    response.send('Make it work')
  })

app.get('/jjEvans', (request, response) => {
    response.send("Dy-no-myte!")
})

app.get('/homer-Simpson', (request, response) => {
    response.send(`D'Oh`)
})

app.get('/batman', (request, response) => {
    response.send("I am Vengance!")
})

app.get('/frieza', (request, response) => {
    response.send("Worm!")
})

app.get('/goku', (request, response) => {
    response.send("I am a super sayian.")
})

app.get('/garfield', (request, response) => {
    response.send("I hate mondays.")
})

app.get('/j.-Jonah-Jameson', (request, response) => {
    response.send("Menace!")
})

app.get('/Spider-Man', (request, response) => {
    response.send("With great power comes great responsibilty.")
})

app.get('/robin-Hood', (request, response) => {
    response.send("Take from the rich and give to the poor.")
})

app.get('terminator', (request, res) => {
    res.send('I\ll be back')
    res.send('Hasta la vista, baby')
  })

app.get('/magic8', (request, response) => {
    response.send(`<h1>${magic8Answer}</h1>`)
})