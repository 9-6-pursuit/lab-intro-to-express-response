const express = require("express");
const app = express()

  const catchphrases = [
    {"Emeril": `Bam!`},
    {"SteveMcGarrett": `Book 'em Danno!`},
    {"CoachTaylor": `Clear eyes, full hearts, can't Lose`},
    {"HomerSimpson": `D'Oh`},
    {"BruceBanner": `Don't make me angry`},
    {"JJEvans": `Dy-no-myte!`},
    {"Batman": `To the Batmobile!`},
    {"HannibalSmith": `I love it when a plan comes together`},
    {"Fraiser": `I'm listening`}
    ]

    app.get("/", (request, response) => {
        response.send("Enter any of these links for a catchphrase: /Emeril, /SteveMcGarrett, /CoachTaylor, /HomerSimpson, /BruceBanner, /JJEvans, /Batman, /HannibalSmith, /Fraiser <br> Also, check /magic8 for a random fortune")
  
    })

    for (let index = 0; index < catchphrases.length; index++) {
        const element = catchphrases[index];
        let name = Object.keys(element)[0]
        const phrase = Object.values(element)[0]
          app.get(`/${name}`, (req, res) => {
            res.send(`<h1>${phrase}</h1>`)
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
    app.get("/magic8", (request, response) => {
        const ranPhrase = magic8Responses[Math.floor(Math.random() * magic8Responses.length)]
        response.send(`<h1>${ranPhrase}</h1>`)
  
    })

  app.listen(3003, () => {
    console.log("I am listening for requests on port 3003!");
  });