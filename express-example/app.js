//imports the express library code
const express = require('express');
// invoke express() and return an application object  (a server object, here we call it an application object)
const app = express();
// setting a port to run our app on
// const port = 3000;

// Add Oct 25:
const studentsController = require('./controllers/studentsController');
// We change the /students references in studentsController to /.
app.use('/students', studentsController);
// end Oct 25

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


// out 2023 Oct 25 11:16 AM
// app.get('/students', (req, res) => {
//   res.send('Here are the students')
// });


// app.listen(port, () => {
//   console.log('App is running on port', port);
// });

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

/*
Create server.js
We'll take the app.listen . ..  console.log message and move it to server.js
Commented out above, moved code to server.js
Also commented out port = 3000 line, added to server.js

Test with terminal.

Now we will do the test-driven development.  Created test.js
We get from npmjs.com, for practice - if we use chatgpt and/or video tutorials a lot.  Whenever install anything, always come to npmjs.org and verify that what is installing is what intend to install!  Anyone can upload anything to npm install.  So there's like react-query, but maybe you install react_query.  And maybe react_query is malware.  So system may get compromised if not paying attention.  Sometimes chatgpt will hallucinate, make up libraries.

There was a sect of people that made code made up on Chatgpt hallucinations, so they get systems compromised.  There's an article on that.

Jest - does this look like something . . . .to install?  How many weekly downloads?  If it's 0 and you're about the first, I wouldn't do it.  So always check!  Even if you make a typo you installed it.


So, we go to jestjs.io
go to docs

Go to getting started
npm install -- save-dev jest

missed some . . .

create app.test.js

We're goign to output to console 

I initially created a test.js in addition to app.test.js.
When doing npm test in terminal, I got message 2 test suites . . . or something.  Anyways it failed 1 of 2 after verifying.

But then I removed test.js and ran it, and everything pass ok.

Note:  module.exports always at end of file.  Well . . .

*/

// out 2023 Oct 25 11:16 AM
// app.get('/students/:name', (req, res) => {
//   const {name} = req.params;
//   console.log(name)
//   res.send(`Profile: ${name}`);
// });

// in some languages, if not using some variables won't even compile.  so write app.get('/', (_, res)).  Look up JS _ substitution.

app.get('/dashboard', (req, res) => {
  res.send('Admin dashboard');
});

// don't mention unit testing after today.  Unit testing has received a lot of criticism, if you're testing an individual component of code, best way to test it is to just make it work.  



module.exports = app;