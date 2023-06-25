const express = require("express");
const app = express();


  function magic8Answer(){

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
    let randomQuote =  Math.floor(Math.random() * magic8Responses.length);
    return magic8Responses[randomQuote]
      }
    
      console.log(magic8Answer())


   app.get("/magic8", (request, response)=> {
    response.send(`<h1>${magic8Answer()}</h1>`)
    })


app.get("/", (request, response)=> {
    response.send("<a href='/terminator'>Terminator</a>" )
    })

    
app.get("/terminator", (request, response)=> {
    response.send("<h1>I'll be back</h1><h1>Hasta la vista, baby</h1>")
    })

app.get("/tim-gunn", (request, response)=> {
response.send("<h1>Make it work</h1>")
})


app.get("/coach-taylor", (request, response)=> {
response.send("<h1>Clear eyes, full hearts, can't lose !</h1>")
})


app.get("/jj-evans", (request, response)=> {
response.send("<h1>Dy-no-myte!</h1>")
})


app.get("/hannibal", (request, response)=> {
response.send("<h1>I love it when a plan comes together</h1>")
})


app.get("/borg", (request, response)=> {
response.send("<h1>Resistance is futile</h1>")
})


app.get("/tony-montana", (request, response)=> {
response.send("<h1> Say hello to my little friend</h1>")
})


app.get("/james-bond", (request, response)=> {
response.send("<h1>The name is Bond, James Bond</h1>")
})


app.get("/rod-tidwell", (request, response)=> {
response.send("<h1>Show me the money</h1>")
})




app.listen(3003)
console.log("Running nodemon")