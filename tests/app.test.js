//DEPENDENCIES
const supertest = require('supertest')
const app = require('../app.js')

//Testing (pass)

// it('Testing to see if supertest works', ()=> {
//     expect(1).toBe(1)
//   })
//Testing (fail)

//  it('Testing to see if supertest works', ()=> {
//    expect(1).toBe(2)
//  })

// Testing exact response

// describe("Test the root path", () => {
//     test("It should response the GET method", () => {
//       return request(app)
//         .get("/")
//         .then(response => {
//           expect(response.text).toBe('Hello, world!');
//         })
//     })
//   })

// Testing status code
  
describe("Test the root path", () => {
    test("It should response with the status code of 200", () => {
      return supertest(app) 
      /*Issue: original return variable was return request(app) request was not defined 
      Solution: request function was supposed to match the var, on line one in dependencies for supertest  
      Takeaway: The reading was flawed either on purpose or missed mistake, i'm not sure. Test now passes */
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })