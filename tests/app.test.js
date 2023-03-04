import request from "supertest"
import app from "../src/app.js"
import assert from "assert"

describe("Routes", function () {

  it("should return Hello Test", function (done) {
    request(app).get("/").expect("hi!").end(done);
  });

  // it("should return NotFound with status 404", function (done) {
  //   request(app).get("/error").expect(404).expect("NotFound").end(done);
  // });

});

describe("app", function () {

    it("app.locals", function () {
    const expected = 'demo@gmail.com';
    const result = app.locals.email;
    assert.equal(result, expected);
  });
});
