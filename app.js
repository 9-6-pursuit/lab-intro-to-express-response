// DEPENDENCIES 
const express = require("express")


// CONFIGURATION
const app = express()
const PORT = 3003

// for magic 8 ball route.
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



// ROUTES
// route directory
app.get('/', (request, response) => {[
    response.status(200).send("<hr>attempting to make the lives of my instructors <i>slightly</i> easier by including this little directory. full code reflects potetntial link errors and misspells.  <hr> <h1>catchphrases by 'person'</h1>  <h3><a href='/timgunn'>tim gunn<a/> <br/> <a href='/homersimpson'> homer simpson<a/> <br/><a href='/jamesbond'> james bond<a/> <br/><a href='/zeus'> zeus<a/> <br><a href='jackdawson'> jack dawson<a/> <br/><a href='/terminator'> terminator<a/> <br/><a href='/batman'> batman<a/> <br/><a href='/borg'> borg<a/> <br><a href='/gollum'> gollum<a/> <br/><h3/> <br/> <br/> and just for funsies... <a href='/magic8'>magic 8<a/>")
]})

// tim gunn 
app.get('/timgunn', (request, response) => {[
    response.send("<h1>make it work!<h1/>")
]})
app.get('/tim-gunn', (request, response) => {[
    response.send("<h1>make it work!<h1/> <br/> <h5>**hint: link can be found without the dash. i.e. 'timgunn' <h5/>")
]})
app.get('/tim/gunn', (request, response) => {[
    response.send("<h1>make it work!<h1/> <br/> <h5>**hint: link can be found without the slash. i.e. 'timgunn' <h5/>")
]})


// homer simpson
app.get('/homersimpson', (request, response) => {[
    response.send("<h1>D'oh!<h1/>")
]})
app.get('/homer-simpson', (request, response) => {[
    response.send("<h1>D'oh!<h1/> <br/> <h5>**hint: link can be found without the dash. i.e. 'homersimpson' <h5/>")
]})
app.get('/homer/simpson', (request, response) => {[
    response.send("<h1>D'oh!<h1/> <br/> <h5>**hint: link can be found without the slash. i.e. 'homersimpson' <h5/>")
]})


// james bond
app.get('/jamesbond', (request, response) => {[
    response.send("<h1>...the name is Bond, James Bond.<h1/>")
]})
app.get('/james-bond', (request, response) => {[
    response.send("<h1>...the name is Bond, James Bond.<h1/> <br/> <h5>**hint: link can be found without the dash. i.e. 'jamesbond'* <h5/>")
]})
app.get('/james/bond', (request, response) => {[
    response.send("<h1>...the name is Bond, James Bond.<h1/> <br/> <h5>**hint: link can be found without the slash. i.e. 'jamesbond' <h5/>")
]})


// zeus
app.get('/zeus', (request, response) => {[
    response.send("<h1>release the Kraken!<h1/>")
]})
app.get('/zues', (request, response) => {[
    response.send("<h1>release the Kraken!<h1/> <br/> <h5>**hint: zues is actually spelled zEus*<h5/>")
]})


// jack dawson
app.get('/jackdawson', (request, response) => {[
    response.send("<h1>i'm king of the world!!<h1/>")
]})
app.get('/jack-dawson', (request, response) => {[
    response.send("<h1>i'm king of the world!!<h1/> <br/> <h5>**hint: link can be found without the dash. i.e. 'homersimpson' <h5/>")
]})
app.get('/jack/dawson', (request, response) => {[
    response.send("<h1>i'm king of the world!!<h1/> <br/> <h5>**hint: link can be found without the slash. i.e. 'jackdawson' <h5/>")
]})

// terminator
app.get('/terminator', (request, response) => {[
    response.send("<h1>i'll be back.<h1/>")
]})

// batman
app.get('/batman', (request, response) => {[
    response.send("<h1>to the BatMobile!<h1/>")
]})
app.get('/bat-man', (request, response) => {[
    response.send("<h1>to the BatMobile!<h1/> <br/> <h5>**hint: link can be found without the dash. i.e. 'batman' <h5/>")
]})
app.get('/bat/man', (request, response) => {[
    response.send("<h1>to the BatMobile!<h1/> <br/> <h5>**hint: link can be found without the slash. i.e. 'batman' <h5/>")
]})


// borg
app.get('/borg', (request, response) => {[
    response.send("<h1>resistance is futile..<h1/>")
]})

// gollum
app.get('/gollum', (request, response) => {[
    response.send("<h1>my precioussss..<h1/>")
]})

// magic8
app.get('/magic8', (request, response) => {
     random = Math.floor(Math.random() * magic8Responses.length)
     let magic8Answer = magic8Responses[random]

    response.send(`<h1>${magic8Answer}<h1/> <br/> <h2> <a href='/magic8'>refresh <a/> <h2/> `)
})


// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})


// EXPORT
module.exports = app