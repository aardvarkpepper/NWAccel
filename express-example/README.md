2023 Oct 24
We'll be building a student app through the 10 week course.  Show up, tag students, create students, add their information, the idea is you get to see end to end front and back end create an application, get a feel for full stack development.  UX also setup with this.  We'll be talking about UX.  Example slide, button is disabled unless necessary fields filled.

UX - an article that was shared do's and don'ts of UX.  Saw it 5-6 years ago.  Stuck with him ever since.  When see why NOT do do something much better.

UX Design

Elements of UX design
- Ease of Use
- Performance
- Animations
- Typography
- Color scheme
- Consistency
- Guard rails & Stability (meaningful error messages.  Feature completeness.)  Stability - coding in react, state does not load consistently.  Sometimes when load page, lose all data.
- Feature complete (auth)
- Settings & sensible defaults

Today:
TDD (Test Driven Development)
Unit Testing
Express Controllers

Throughout the course, we talk about ease of use.  How easy is it to accomplish what the designer wants you to accomplish?  (Something) is right but also wrong - Have to think about it holistically, start to finish.

Ease of use needs to start with server.  Do the route names make sense?  Can't remember to go to reddit/147129 whatever, but if you can type in name of post now we have something easy to use.  Ease of use, performance, we don't want user sitting around all day waiting.  Hate waiting.

Animations - can make people think you're cool.  Makes you look more professional - more detail, more care to make something transition slowly so people notice it, rather than just a one-frame animation.

LottieFiles - Json animations.  Caching data; loads faster second time around.  That sort of thing.  Also making sure animation is not too long.  If person is waiting for animation to load, is too long.  (Can have loading circle animation while waiting to load btw).

Consistency - 

Guard rails - prevent user from doing something stupid.  Then they don't need to mail you for support.  

User should be able to do near everything without creating an account.  Or . . . Chipotle, you can do everything start to finish, but you can create an account "do you want points for your order".  Forget password link that WORKS on app.

How will it work for user?  Route param might not make a lot of sense.  See if you will catch that.

Want you to pick up skills to be like, the employer needs you, not you need them.  BUT DON'T EXTERNALIZE THAT IN ANY WAY.  No seriously.

Test driven development - notes to be shared in firstjob channel later.  

Unit testing - we'll talk about that today.  Industry expectations vs ?

Test driven development - what is it?  (Some discussion, Michael said descriptions were of "chaos engineering").  But test-driven development - normally you write application you write the code.  But test driven development, you write the test, then you create code that describe what code should do, then you write the actual code.

This is called red green refactor.
Step 1:  Red:  Write a failing test.
Step 2:  Green:  Make the test pass.
Step 3:  Blue:  Refactor (if necessary).

Every developer needs a note-taking app.  Michael uses Obsidian for a lot of reasons.  "The private and flexible writing app that adapts to the way you think."  You write all your notes in markdown, you can llink notes together, you can draw liks between all the different notes.  Helps you stay organized.  As a software developer, full stack engineer, context switch all the time so need to be super organized.  Think about Google docs.  Google docs doesn't have a way for you to do syntax highlight on the fly.  You see this?  (example).  Notes on TDD can be made in bold.  (We need to know markdown for this.)  See the syntax highlight?  (used ``` to create text block.)

Obsidian loves you more than Google ever could love you.  When you put in opening bracket you get closing bracket.  The work it saves you over time. -

Can change the languages (between SQL and ?)

Red green refactor - make sure we have our own notes.  We're going to write a failing test, make test pass, then we refactor.  We're going to set up a simple express app.

In terminal
ls
(in desired folder)
npm install express
(Create express.js file.)
(see index.js)

Questions:  TDD - we write the code to fail, then we do the pseudocode then the actual code?
When asked "you know what this does", like we don't know EXACTLY but we know theoretically, good enough?
What is the other way to prevent bugs that isn't TDD?  That Pursuit doesn't want us to know?

just getting so good that you know what the code does when you write it.
How . . . nodemodules?  server runs npm install, they download nodemodules to their computer.  
go ahead and delete index.js?

Why is TDD good in interview?  Just the knowledge of the process shows that you're someone that actually knows what they're doing.  Know the industry standard first (then break the standard if you wish, but know the standard first!)

When get a job - difficulty is how slow everything moves.  Sequestered from other processes, unlike blue collar jobs.  Spend first week just getting access to things - get access to github, get tools (Render, netlify or their equivalent), send out lots of Slack messages individually, then ask . . . what you do?  They tell you to chill out, read the documentation.  You're sweating bullets, like you're fired because you're not doing anything.  But that's just how software development moves.  When's the last time a massive update came out for Twitter, Facebook?  Rearranges interface; they don't release any major updates; they go super slow.  They write all code 3-4 times.  When they say create express controller in interview, then . . . create an express route, write a test first.  It's cute.  We got app.js.  We got app.test.js.  Let's write a route that will print out the student name.  Hello (whatever their name is)

Open up app.test.js (we are doing this BEFORE we wrote the student stuff) - we're going to refactor it (drop the term casually, I'm a professional - not NOW I'LL JUST DO A RED GREEN REFACTOR)

And now we write the student name test in app.test.js

Then in app.js . .. 

Then we do admin dashboard.

The admonition re: unit testing.  But the best thing is, just write the code to work.  That's where we want to get to.  There's tons of stuff we can look at.  "unit testing is pointless" google search.

For today:  Red green refactor.

Remember at beginning of class, said eventual goal is to create student app.
Personal beliefs (Michael) - although we can see what this is (student app), would not expect anyone whose project looks similar to this to be taken similar to this.  So why would we create this then go apply to a job, then say you wouldn't happen to have any openings for a unit interface designer?  "let me see your work" oof

You have to go and look at what people are doing  There's a lot more detail.  A lot more colors.  Not that cheesy cornflower blue.  Avoid the bootstrap primary or whatever it is.  "Denim".  The header is not aligned with the body of the text.  If you don't know what the basics are, you can't do any design.  Never use full black in design.  All black or all white is too much eye strain.  Find a color that's like mineshaft #303030

So much whitespace (in the app we're looking at)

A website should do what really good website does.

Hello Fresh?

We're trying to get to level 40, say.  (diagram, x axis time, y axis progress.)
The longer we go, we'll get up there.  Have to go with intensity.  More problems per day, progress is faster.

Websites are already beautiful, apps already beautiful.  Need to do full on case studies where you go into an interview.

Go into interview, projects are cute.  "Hypergamy" - action of trading up.  Employers are trying to use you to get them further along.

Michael uses grueling process - the design process.  If you want to be a good designer, a top tier programmer and developer.  By the way, before getting into any of that - we got into TDD for express apps.  We will cover controllers, usig express router in different file (thought that one was weird).

We are also going to touch on that briefly tomorrow.

(end formal instruction)

Re:  UX.  We increase conversion.
Grueling but effective?  Design process - take disparate ideas.  Highly prioritize intensity.

Take 2 disparate ideas.
Combine them.
1 idea from movies + 1 idea from food = 1 original project.

The "blue pill" -

Take a successful product
Recreate it
(slightly) improve it
Acquire users (even a tiny amount)

Maybe there's an example on freecodecamp and people will really like it.
But maybe not.  Michael likes guarantees.
This (successful) protects from tumultuous markets.

Created an app, whenever someone posted an event, it would send Michael a notification.  At the time Michael didn't know what software engineering was or that people worked in it.  People said he should make money off it.  Brandon said have people register, people sell tickets, Michael gets percentage.  That's what eventbrite does.  That's how he heard of eventbrite.  So Michael went to eventbrite, there was a section caled pricing.  The pricing is outrageous.  Charging 8-10% per ticket sale.  So Michael quoted 1.9-2.4%.  Everything same except color of buttons, set up own site.  Event organizers can see if sale is completed; buttons switch from green to red if event cancelled, they get ticket with UPC, sent to email.  So Michael posted in a Facebook group, said cheaper than EventBrite, if selling 500 tickets an event $100-$200, save 5K by switching app.  Was the application free?  Ran so many credit cards on loop.

Credit card disputes?  Have easy way to be contacted, address issue, fix code.  This was when Michael front end engineer (?).  Not a revolutionary app, got traction on Facebook on West Coast, friends doing events, had them share it as a partnership gave someone a cut on their social media following, that was it.  So many applications that weren't created by a genius or a genius idea, just solve something, make it cheaper.  Can totally do that.  Can decide to do that.  Right.  Now.  (right now!)  The odds run into an issue that's so complex nobody could solve it is literally zero.

People use application, go to events, meetups.  Guy asked Michael what he was doing, said he wanted to upgrade event app.  Guy said it's live?  Michael said yeah.  So you did front end and back end.  Guy said you're the CEO, then Michael was like I just made it, guy said you're the founder, michael was like . . ..  sure whatever.  He was the director engineer he wanted to interview him as he was building something similar.  Acquihire, acquisition / hire, work on it on their end using their resources.  But that was a big opportunity.  Happens all the time, companies you don't even know had the money, they don't have the money but they do it anyways just to eliminate competitors.  Michael recommends that; go into interview; if M wanted to work eventbrite, could guarantee have an interview there for years to come.  They would be taken very seriously more so than any candidate.  Says he's passionate about events.  He has the app to show.

There's a reason people don't make entire companies on youtube videos.  They get stuck at the difficult part - thanks for the subscriber money on Youtube.  Well it's difficult.  That's the first path.

Second path - ? Find an app that exists, recreate successful product (half price), that's it - add some UX, but people there to save money.  got so many interviews off that, Doesn't have education on resume, people asking M leetcode questions, all he knew was how to make interfaces, but failed loads of coding questions.  So he realized he can get interviews, just needs to study code.

Project has to be of sufficient complexity that it doesn't break whenever someone presses a button (?)

The hard path is to combine 2 disparate.  It's like cementing legacy. Conor Gregor vs Malienkov Habib or something.  Habib says he's there for money, Gregor says he's there for legacy.  The former reqs a lot more networking and legwork.  The latter easier to get company interest.

tabmagic.app

got M a job interview.  6 figures even.

final fantasy 15 armiger - character superpower is bunch of different weapons he can summon at any time.  So M has a lot of tools that he likes to use as software developer and designer, any time he gets new computer installs new virtual machine, has to set up all the shortcuts &c again.  This is a problem for M.  He has a lot of tools he needs for his job.  What if there were a tool that lets M access all tools at once, same interface?  That's how he came up with . . . an enhancement to the spotlight search.  When pressesc command-space, sees something like . . .  but M sees something different that lets him search through everything.  Like a color picker.

Say like Kingdom Hearts, grab the red off a picture of Kingdom Hearts.  Make a new palette, save palette, keep grabbing different color, save colors, rename them.  Easy way to stay organized as designer.  Lot of time copy something to clipboard, need to search through it.  Has everything that he copied.

Take a screenshot, post to clipboard.  But can search through "really cool person", searches text AND PHOTOS, just stuff M uses all the time, can filter by application.  If you have picture or website, beautiful website with colors, drop in the link of a website, and tool extracts all the colors into a palette.  (woah).  Can cycle through all this with one key.  Don't need to remember keyboard shortcuts.  Lots of things in interface, turn off dock (?), combination of FF15 superpower mixed with spotlight search.

This is . . . Michael hasn't released the app yet.  'Monarch', running on localhost.

Most common Javascript projects - do NOT bring all these things in.  Chat application, clock, calculator, movie, quiz app, browser extension, calculator, drum kit, file sharing app.

Hm.

Every time you create a JS calculator, a puppy dies. Can someone get through shopping experience - log in with google, switch to facebook - what?  ecommerce

If it's a crazy calculator do it.  But watch a tutorial and go into interview . . . yeah nah.  

Dribbble.com

(get color palettes)

Super Smash Bros, see the back arrow top left?  If you hold escape for 2 seconds (it) goes back (Monarch does, that searchlight replacement).  The blog post, everything to go with it, the pictures, the videos, you're completely different candidate.  Just has to get that project out of head and into github.

Most people show interest in M for food ordering app.  

Vittles - as featured in Medium.com

Go to a job interview, someone gets on phone, someone says they have app, did he make it by himself, did he make it himself?  Answer is yes he did.  All the stuff works, stuff in the article . . . eatvittles.com

People didn't have to go to github.  A recruiter doesn't code.  They're there to talk to you, see how good you are as a developer.  App with users . . . only 1-3 so far in Pursuit have done it.

vittles took M 3 years.  But it never has an error.  Android, ios, web, dashboard, partnerships, and going out to restaurants (hard to call).

The eventbrite type app, 80% at 2 months when there wasn't documentation; stack overflow was for c++, etc.

If you have users and people find out about it, there's such good work out there.  indiehackers.com (independent developer) not company-companies.  They made app, here's how much money they made doing it.  Click on products.

The sheer number of painfully boring apps that people use to pay all their expenses.  Find the most boring one he can.  stripe-verified resume / . . . .

pirsch analytics - not sexy.  Not splitting the atom, not AI at fingertips, not web3, not logan paul scam.  Just straight up analytics.  EmailEngine.  Calendesk.  Boring apps.  Bank Converter.  Convert PDF bank statements to clean Excel format.

Takes time to get traction but if you have network - 

Design may fail horribly.  Definitely have a back end developer there though. This is how companies think.  Last engineering role for M, applied to company with project that didn't even make any money; it had no frontend.  

used expo.dev to export stuff to mobile.

Hm . . . resource to export web design to mobile.  Like swipe controls and stuff.

Go to the gym, got a long video . . . lot of dead space.  And?

What if you drop it in computer, and computer edits it for you?  Have that long video file, that's on the left, put path to the video into terminal, run the program, and the empty folder, takes out the parts with you moving, extract those out of video, makes them into short little clips.  always 15 seconds or less.  Come back from the grocery store or whatever, all your stuff separated.

Videos consist of frames.  Compare each frame to each other.  Looks at each individual pixel, iterate over all pixels, compare . . . it's a for loop.  If pixel change count > 50,000, get 60 frames per second or some such, extract out the equivalent of 15 seconds.

Transition design mobile - user flow document.  Sit with M office hours, get list of tools to transition from web controller to web mouse to mobile.

When interview comes around, M studies leetcode 2 days before, as long as not math question.  M didn't even make it to 8th grade.  One time interviewer asked fibonacci M requested to terminate the interview.  interviewer was like shocked, M was like given performance with question . . . interviewer was like "that's faiir (click)".  Sometimes you don't get leetcode, it's based on what you would see at work.  Hiring without whiteboards - collection of companies that . . .github.com/. . .  hiring-without-whiteboards or such.  CS trivia questions associated with bad interview practices.  Hm.  M may target  . . . 

2023 Oct 25 (Weds)
Michael asks for help - on calendar, and in Slack, this is what done.  Wrote next to titles, denoted in Slack, if session with Michael is remote, camera emoji next to title.  If not, in-person.  Every minute on the minute, is it on Zoom?  Is it on Zoom?

2023 Oct 25

jestjs.io/docs/api#describename-fn
describe (name, fn)
. . . creates a block that groups together several related tests.

Michael notifies students T-Th live, Monday is remote.  Camera means remote.
Notes

Today:

MVC Architecture
Introduction to "controllers" in Express
TDD to complete an Express Controller w/ describe
Deploying an Express server

Reviews yesterday topic (test).  Pushes to git.
git init (in the folder)

Go to gitignore.io

set up node and react there, to have easy to format .gitignore

then vim .gitignore
untracked files:
.gitignore
app.js
ap.test.js
package-lock.json
package.json
server.js

git add .
git commit -m "Setup express server, added gitignore and Jes/Supertest'

git push (has no URL)
Needs to set one up in Github.com, github.com/new, creates actual profile, creates new git repository named after folder.  Copy and paste from github into terminal to create repo.

Now we have this link (in github url) drop to chat.
https://github.com/rmdashrfv/express-example

Recording will be in Slack.  If there is someone someone is following etc., follow them in github.  Like, solve problem for MikeGPT (in github).  If follow someone on Github, you can see what they do on Github when you go to Github.com.  Last night someone was interacting with repository that is some obscure library that does 90% of what they need done.

"ThePrimeTime" on Youtube - "I feel bad for new programmers"

MVC controller model.  (diagram)

Model defines data structure, e.g. updates application to reflect added items.
Arrow label updates e.g. list item to show added item
View defines display (ui) e.g.user clicks add to cart
arrow to next sends input from user
arrow from next sometimes updates directly
Controller contains control logic.  e.g. receives update from view then notifies model to 'add item'.
arrow to model, "manipulates"

MVC MVC MVC.  What is it in context of application?

In the context of application, how is MVC set up?  This would be the "C" (the app.get res.send . . .  the app.js file)

we are about to introduce the controller.  We have students, if we put entirety of application in file, that would be long.  The file would be long, 100 lines.  There are some people that are dogmatic, if program is 100 lines then they say you need to start modularizing your code.  M may not agree but will show how to modularize code right now.  (that is, split into tinier pieces).

Let's create a file, switch to terminal, going to create a folder called controllers.

mkdir controllers
touch controllers/studentsController.js

What trying to illustrate is, everything doing around git status after.  Whenever push git never a surprise.  What you push should never ever be a surprise.

So we have a controller file, we will now make a controller.

Bash in resume as skill.  If you can't follow along with M mentally, then learn it.

in terminal, ls

"everything that doesn't start with git is bash"

We do not have a model just yet.  No reason why we can't deploy today.

Let's go to conroller file.  (in terminal vim controllers/studentsController.js I think)

Open up controllers.  Everything in students taken out (here, commented out), dropped in students and add const app = require('../app')

PUll up docs expressjs.com

Routing
Route methdods

Copy and paste Hello World.

We create a router object, that router is going to handle those requests for us going forward.  This is what we need in our file.

We test routes in browser.  Note:  Review notes around 11:26 AM; Michael refreshed from Github ?

Test-driven development and all this usually pull requests and (?).  We take a task off jira or Github, work through that one little issue adding that feature, once finished, submit code to database.  If the company is organized.  Heh.  Once you submit pull request tests will automatically run, and deployment happens from there.

So let's look into deployments so we see what this looks like in production.

Let's all go to render.com
https://dashboard.render.com/

If pushed node_modules, how to fix:

in terminal
rm -rf node_modules/











Mail Angie
Contact Davonte
Scan two documents in bag AND get copy of school form.
Test Access HRA upload files seriously.  If not, print all out and go to HRA center.  Get it done.

Mail Max W, Mark notes.  Marangely too.  + Sherry.  Someone else.  jenny3, Kenyetta Griffin

https://pursuit-core.slack.com/archives/C0263S5R8EN/p1698157963102779

Documentation for "supertest".  Can't just return any object, has to have specific thing in it.  Test that passes but (?)  Truthy falsy things.
