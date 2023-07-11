it('Testing to see if supertest works', ()=> {})

const supertest = require('supertest')

 it('Testing to see if supertest works', ()=> {
   expect(1).toBe(1)
 })



 describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.text).toBe('Hello, world!');
      })
  })
})
