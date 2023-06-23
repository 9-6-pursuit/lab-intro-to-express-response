
//dependency
const express = require ("express")

//configuration 
const app = express()
const PORT = 3003

//Routes
app.get("/", (request, response)=> {
    response.send("Hello, try folllowing routes: <br> /terminator <br> /timgunn <br>/Emeril <br>/SteveMcGarrett <br>/CoachTaylor <br>...etc <br> /magic8 ")
})


app.get("/terminator", (request, response)=>{
    response.send("I'll be back.")
})

app.get("/timgunn", (request, response)=>{
    response.send("Make it work.")
})


//Listen
app.listen(PORT, ()=> {
    console.log(`Listening port #${PORT}`)
})


let catchPhrases = [
    {"Emeril":  "Bam!"},

    {"Steve McGarrett": "Book 'em Danno!"}, 
    
    {"Coach Taylor": "Clear eyes, full hearts, can't Lose"},
    
    {"Homer Simpson": "D'Oh"},
    
    {"Bruce Banner": "Don't make me angry"},
    
    {"JJ Evans": "Dy-no-myte!"},
    
    {"Batman": "To the Batmobile!"},
    
    {"Hannibal Smith": "I love it when a plan comes together"},
    
    {"Fraiser": "I'm listening"},
    
    // Regis - Is that your final answer?
    
    // Borg - Resistance is futile
    
    // Fox Mulder - The truth is out there
    
    // Harry Callahan - Go ahead, make my day
    
    // Travis Bickle - You talkin' to me?
    
    // Tony Montana - Say hello to my little friend
    
    // Zeus - Release the Kraken
    
    // James Bond - the name is Bond, James Bond
    
    // Dorothy - Toto, I've got a feeling we're not in Kansas anymore
    
    // Rod Tidwell - Show me the money!
    
    // Frankenstein - It's alive! It's alive
    
    // Jim Lovell - Houston, we have a problem
    
    // Rocky - Yo, Adrian
    
    // Gollum - My precious
    
    // Jack Dawson - I'm king of the world!
    
    ]

    for (const object in catchPhrases){
        let element = catchPhrases[object]
        let name= Object.keys(element)[0]
        let route = name.split(" ").join("")
        let message = Object.values(element)[0]
        app.get(`/${route}`, (request, response)=>{
            response.send(`<h1>${message}<h1>`)
        }) 
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
      
      
      let randomPhrase = magic8Responses[Math.floor(Math.random()*magic8Responses.length)]

      app.get("/magic8", (request, response)=>{
        response.send(`<h2>${randomPhrase}</h2>`)
      })