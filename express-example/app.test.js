//import our express app and supertest for HTTP requests
const request = require('supertest');
const app = require('./app'); // where does this come from?

test('It should respond with Hello World!', async () => {
  // we send a request to application.  Verify that response from application matches what we think it should match.
  const res = await request(app).get('/');
  // 'string' === 'string'
  expect(res.text).toBe('Hello world!');
});

//create a route that shows a student's name based on the URL params
test('It should show the students name', async () => {
  const name = 'Michael';
  const res = await request(app).get(`/students/${name}`);
  expect(res.text).toBe(`Profile: ${name}`);
});

// create a route that shows the admin dashboard at
// GET /dashboard
test('It should show the admin dashboard at GET / dashboard', async() => {
  const res = await request(app).get('/dashboard');
  expect(res.text).toBe('Admin dashboard');
})