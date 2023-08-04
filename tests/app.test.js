const request = require('supertest');
const app = require('../app.js')

// it('Testing to see if supertest works', ()=> {
//     expect(1).toBe(2)
//   })

describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the terminator path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/terminator")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

//RESPONSE.TEXT:
//   describe("Test Tim Gunn path", () => {
//     test("It should response the GET method", () => {
//       return request(app)
//         .get("/tim-gunn")
//         .then(response => {
//           expect(response.text).toBe('Make it work!')
//         })
//     })
//   })

describe("Test Tim Gunn path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/tim-gunn")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Homer Simpson path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/homer-simpson")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Batman path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/batman")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Regis path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/regis")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Travis Bickle path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/travis-bickle")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Tony Montana path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/tony-montana")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Zeus path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/zeus")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the James Bond path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/james-bond")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Frankenstein path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/frankenstein")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Spongebob path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/spongebob")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Terminator2 path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/terminator2")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

  describe("Test the Magic8 path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/magic8")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })