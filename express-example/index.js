//imports the express library code
const express = require('express');
// invoke express() and return an application object  (a server object, here we call it an application object)
const app = express();
// setting a port to run our app on
const port = 3000;

/*
To do TDD we will need to modify the above.
How do we internalize full stack vs ?
How likely is it we do plain old Express server?
console.log(app).  It's an object with a bunch of functions.
We see this by entering "node index.js" in terminal and running with below console.log
app.use, app.route.
*/

//console.log(app)

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/students', (req, res) => {
  res.send('Here are the students')
});

module.exports = app;

app.listen(port, () => {
  console.log('App is running on port', port);
});

// After running node index.js, go to localhost:3000 in browser.
// After updating code, restart server by Ctrl-C to break process in terminal
// then enter node index.js again

// at prompt (create a new terminal; while old terminal still running for express server to still be up;), curl http:/localhost:3000/students.  You know what Postman is?  It's like Postman without any interface.  The "%" shows that it's the end of the response.

// If I put in URL "http://localhost:3000/student", get Cannot GET /student in browser window.

// This is how we have been doing things to this point.  TDD says what we're doing is very error prone.  What we've been doing so far is trivial code (easy to write).  But suppose we did something difficult to write.  When we test application with features complete then we have loads of bug.

// Only two ways to prevent that and we will only do one in class.  Get in hallway to discuss other.

// TDD, we write test for code that does not exist yet.  Kill server.

// in terminal npm install --save-dev jest supertest
// ls
// open package.json
// We see dependencies and devDependencies.  What is the difference between these.
// When we send around application, application needs certain code to run.  When take it off one computer and on another, the other computer needs express to run.  There will be a point where we deploy server live.  So what we're actually doing is, there's a computer somewhere, a server, maybe underwater.  In gitignore you don't need node modules.  Why is that?  We don't need node modules because deploying code to server underwater, if node modules in code they go in there and a lot of node.js developers have been choking server with loads of stuff like that.  But we don't need them?  We deploy code to remote server, and it uses package.json to install express, etc. there.  Here, dependencies are what you need for . . . devDependencies are what you need to test, but not what you need for production.  More often than not, app runs slower.  That's why React has two different builds, production and development.  This is just for test environment (devDependencies), and dependencies is for test and production.

// We have these installed, we need to split this up (Michael uses vim)

//in terminal, rename . . . 
// mv -v index.js ./app.js



