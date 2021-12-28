---
layout: assignment-two-column
title: JWTs (JSON Web Tokens)
type: lab
abbreviation: Lab 6
draft: 1
num: 6
points: 5
description: |
    Practice with cookies and session storage
due_date: 2022-02-11
---

<!-- ## Background
Things to cover here:

1. Server-side templates. For interfaces that aren't super dynamic. Usually login / logout / registration screens.
2. Hashing passwords.
3. JWT workflow.
4. Middleware.

### Helpers
In Visual Studio Code, install "REST Client"

...and the make a request...

```bash
GET http://localhost:8081/tasks
``` 

## Set Up

-->


Download the Lab 6 files, unzip them, and open them in VS Code: 

<a class="nu-button" href="/winter2022/course-files/labs/lab06.zip">lab06.zip<i class="fas fa-download" aria-hidden="true"></i></a> <a class="nu-button" href="/winter2022/course-files/labs/lab06-solutions.zip">lab06-solutions.zip<i class="fas fa-download" aria-hidden="true"></i></a>

Please complete the following steps to configure your new server:
1. Copy the `.env` file you have been using all quarter into the root of your `lab06` directory.
1. Install the dependencies `npm install`
1. Populate your DB: `npm run populate`
1. Edit your `.env file` in order to add two new environment variables:

```bash
# new in lab 6:
ACCESS_TOKEN_SECRET=0e222ec284d62617d5ac51670477b9f887a70570d86a539804bee7d039c5f6aa8f427a5e5b87a403b0f658ef00c2a0ba16345d29750b82c5093818e87ee4dfc6
REFRESH_TOKEN_SECRET=0edd0f3f81a919feb3ccee7e394acd0ac736f6fa13abef43f33571acf4f2d6f5de0c7c98bbaa6109c565d5816766748f3942927ed484b9cda329e4b47377191d
```

When you're done, run your local server: `npm start`


## Get Oriented with the Code and the Assignment
The goal of this app is to create a "TODO List" that anyone in the world can use. To use it, a user will log into your app with their username and password. If they provide the correct username/password, they will be issued a token that they can use to access their tasks, using the `/tasks` endpoint. A few files to point your attention to:
* `config/data.json` has two collections: one for users and one for tasks. There are currently 3 registered users. Each user has 4 tasks. Each task has a "user_id" attribute that specifies which user the task is associated with.
   * Note: currently the users' passwords are stored in plaintext. This is a big no-no, but we'll talk more about this next week!
* Note the two new schemas (User and Task)
* The current `tasks` endpoint is currently showing everyone's tasks at once ([http://localhost:8081/tasks](http://localhost:8081/tasks)). We need to fix this!

## Your Tasks
In this lab, you will implement some logic to:
1. [Authenticate](#step1) to the server (i.e. log into the app) in order to get a JWT.
2. [Use the JWT](#step2) (as a request header) to retrieve the data you have access to.
3. [Create a UI](#step3) for your TODO List that responds in a reasonable way when your JWT expires. 


{:#step1}
### Part 1: Login Endpoint (Authentication)
In your `src/routes.js` write some logic for the `POST` method of the  `/login` endpoint that handles the following scenario:
* The user tries to log into the system with a username and password by posting this data to the `/login` endpoint.
* Your route queries the database for the matching user.
* Success case: if the user has sent valid credentials:
   * Send a JWT back to the user with a success message.
   * Store that JWT as a cookie called "access_token".
* Failure case: 
   * If user sends bad credentials, the server should send a failure code.

**Hint 1**: You'll need to require the following dependencies:

```js
require("dotenv").config()
const jwt = require("jsonwebtoken");
```

**Hint 2**: You'll need to get the `ACCESS_TOKEN_SECRET` from the environment variables to sign the token. You'll also need to decide what data you want to serialize in your JWT.

**Hint 3**: If you're stuck, take a look at `src/hints/hint-1-router.js`

#### Testing
Test your route using POSTMAN or the `config/requests.rest` file that we made for you (which requires the REST Client extension in VS Code). If your route is successful, you should see a JWT token in your response body.

{:#step2}
### Part 2: Data Protection Using Middleware
Now that you've issued your JWT token, you need to write some code to ensure that your server is honoring it, and using it to determine what data is accessible. To do this, we're going to build some middleware, that we apply to select endpoints.

#### A. Create a middleware function
Create a new "middleware" function somewhere in your `src/routes.js` file called `authenticateToken`. It should have the following signature:

```js
const authenticateToken = (req, res, next) => {
    /* STEPS
    1. get the token sent from the user,
    2. verify that this is the correct user, and
    3. pass that user to the route
    */

    // 1. get the token sent from the user:
    const authHeader = req.headers['authorization'] // BEARER TOKEN
    const token = authHeader && authHeader.split(' ')[1]

    // 2. verify that token is valid using jwt.verify
    ...

    // 3. pass that user to the route
}
```

The three arguments needed in the function signature for your middleware function are:
* req: the HTTP request 
* res: the HTTP response
* next: the function you invoke when your middleware is done processing so that the route logic can execute.

In this function, you're going to check that a token has been sent in the header and that it's valid, using the <a href="https://www.npmjs.com/package/jsonwebtoken#tokenexpirederror" target="_blank">jwt.verify</a> function.
* Success case: If it is, you're going to:
   * Append the user object to the request object and invoke the `next()` function.
* Failure case: 
   * Return a `401` if they didn't give you a token.
   * Return a `403` if the token is invalid


**Hint**: If you're stuck, take a look at `hints/hint-2-router.js`

#### B. Attaching you middleware function to select endpoints
In order to test the middleware, you'll have to pass your middleware function as an argument in your routes function. So, for instance, if you wanted to only allow someone to access the `/tasks` endpoint if they're logged in, and furthermore if you only wanted that person to access ***their*** tasks (versus all of the tasks in the database), you would pass `authenticateToken` as an argument to your get function, and then filter your `Task` query by the user who is logged in:


```js

router.route("/tasks")
    .get(authenticateToken, (req, res) => {
        // Your job: How do you filter the tasks so that 
        // it only returns the ones associated whith 
        // the user who is logged in?
        console.log("GET /tasks");
        console.log(req.user);
        Task.find({})
            .sort('order')
            .then(tasks => {
                res.status(200).send(tasks);
            })
    });
```

#### Testing
Test your `/tasks` route using POSTMAN or the `config/requests.rest` file that we made for you (which requires the REST Client extension in VS Code). If your route is successful, you should see a list of tasks associated with the "logged in" user.


{:#step3}
### Part 3: Create a UI for Your Task List
Open `/public/index.html` and `public/js/tasks.js`. In your `tasks.js` file, write a fetch request to query your `/tasks` endpoint. You will include your token in the header as follows:

```js
fetch('/tasks',  {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + YOUR_ACCESS_TOKEN // retrieve from /login POST.
        }
    })
    .then(response => response.json())
    .then(data = > {
        console.log(data);
    });
```

If the request is successful, show the user's tasks on the index.html (which can be accessed here: [http://localhost:8081](http://localhost:8081)).


### If you have time
If you have the time (optional, but recommended), you can also write some logic so that this HTML Form [http://localhost:8081/login.html](http://localhost:8081/login.html) posts to the `login` endpoint. If successful:

* Store the access_token as a cookie, and then redirect to the "TODO List" page.
Then, update your "TODO List" logic so that it retrieves the token from the cookie.

See online demo here: <a href="https://lab06-todo.herokuapp.com/" target="_blank">https://lab06-todo.herokuapp.com/</a>


**Hint:** If you're stuck, take a look at `public/js/hints/hint-3-tasks.js`

## What to turn in
Please submit a zip file with just your routes.js and your entire `public` folder. 