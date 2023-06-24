const express = require('express')

const app = express()
const PORT = 3004

app.get('/',(request, response) =>{
    response.status(200).send("Hello World")
})

app.get('/magic8',(request, response)=>{


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

  function madRandom(){
    const randomNumber = Math.floor(Math.random()* magic8Responses.length)
    return (`<h1>${magic8Responses[randomNumber]}</h1>`)
  }
  response.send(madRandom())


})

app.get('/terminator', (req, res)=>{
    res.send("I'll be back")
    res.send('Hasta la vista, baby') //This does not show up, it seems it only take one method function
})

app.get('/tim-gunn', (req, res)=>{
    res.send('Make it work')
})

app.get('/coach-taylor',(request, response)=>{
    response.send("Clear eyes, full hearts, can't Lose")
})

app.get('/batman',(request, response)=>{
    response.send("I'm Batman")
})

app.get('/james-bond',(request, response)=>{
    response.send("the name is Bond, James Bond")
})

app.get('/dorothy',(request, response)=>{
    response.send("Toto, I've got a feeling we're not in Kansas anymore")
})

app.get('/rocky',(request, response)=>{
    response.send("Adriaaaaaan!")
})

app.get('/godfather',(request, response)=>{
    response.send("I’m going to make him an offer he can’t refuse")
})

app.get('/joker',(request, response)=>{
    response.send("Do you know how I got these scars?")
})

app.get('/jack-nicholson',(request, response)=>{
    response.send("You can't handle the truth!")
})


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}... for some answer!`)
})

module.exports = app;

