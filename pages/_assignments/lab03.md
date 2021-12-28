---
layout: assignment-two-column
title: Practice with MongoDB and Promises
type: lab
abbreviation: Lab 3
draft: 1
points: 5
num: 3
due_date: 2022-01-21
---

In today's lab, you're going to get some practice querying MongoDB using Mongoose and Express.

## Download & configure the Lab 3 files

<a class="nu-button" href="/winter2022/course-files/labs/lab03.zip">lab03.zip<i class="fas fa-download" aria-hidden="true"></i></a>

1. Download lab03.zip and unzip it.
2. Copy your `.env` file you created last week into `lab03`.
3. Run the installation: `npm install`
4. Populate your database: `npm run populate`
5. Take a look at your database using the <a href="https://account.mongodb.com/account/login" target="_blank">MongoDB cluster on mongodb.com</a>. You can view your data in the `collections` tab of the cluster. Your new database should be called `lab03`.
6. Run your web server: `npm start`
7. Check your endpoints:
  * Artists: [http://localhost:8081/artists](http://localhost:8081/artists)
  * Tracks: [http://localhost:8081/tracks](http://localhost:8081/tracks)
  * To reset your database (triggers the "populate" script): [http://localhost:8081/reset](http://localhost:8081/reset). This is a bad idea in the real world, but it's convenient for testing!

### Some suggestions
A few tips before you begin:
* Check out the `samples.js` file for some examples of how you might query the database. There are also some resources in [Lecture 5](../lectures/lecture05).
* Don't be afraid to ask your peer mentor to walk you through how do create, update, or delete an artist. The whole point of this lab is to get you comfortable creating API endpoints that interact with a database.
* If possible, try to go through some of this lab before attending lab so that you can ask questions.

## Your Tasks
Open the `lab03` folder in VS Code, and complete the following tasks. 

### 1. POST /artists
Implement the POST method for the [http://localhost:8081/artists](http://localhost:8081/artists) endpoint. 
* `name` (string) and `genres` (list of strings) are required.
* `spotify_id` (string) and `image_url` (string) are optional.
* For the response:
    * If succesful, respond with the new artist object and a `201` (created) status code.
    * If they posted bad data, respond with a message and a `400` (bad data) status code.

### 2. GET /artists/:id
Implement the GET method for the [http://localhost:8081/artists](http://localhost:8081/artists/:id) endpoint. 

For the response:
* If found, respond with the requested artist object and a `200` (success) status code.
* If not found, respond with a `404` (not found) status code and a nice message.

### 3. DELETE /artists/:id
Implement the DELETE method for the [http://localhost:8081/artists](http://localhost:8081/artists/:id) endpoint. 

For the response:
* If successful, respond with a null value and a `200` (success) status code.
* If not found, respond with a `404` (not found) status code and a nice message.

### 4. PATCH /artists/:id
Implement the PATCH method for the [http://localhost:8081/artists](http://localhost:8081/artists/:id) endpoint. You will update only the fields that match the fields in the request body. If a field is not present in the request body, leave it untouched in the artist object.

For the response
* If successful, respond with a null value and a `200` (success) status code.
* If not found, respond with a `404` (not found) status code and a nice message.


### 5. GET /search
Implement a GET method for the [http://localhost:8081/search](http://localhost:8081/seach) endpoint, which should be a general-purpose search endpoint to query for either tracks or artists based on a `term` keyword. This endpoint should have two required query string parameters:
* `term`: a string representing the search term.
* `type`: the data type of the query, which should either be `artist` or `track`.

Some valid URL queries are shown below (linked to the "solutions" deployment so that you can test it out):

* <a href="https://cs396-lab03.herokuapp.com/search?type=artist&term=beyonce" target="_blank">/search?type=artist&term=beyonce</a> (returns a list of artists that match the search term)
* <a href="https://cs396-lab03.herokuapp.com/search?type=track&term=peace" target="_blank">/search?type=track&term=peace</a> (returns a list of tracks that match the search term)

If you have time: 
* add another query string parameter that controls the sort (see the [documentation](https://mongoosejs.com/docs/api/query.html#query_Query-sort)).
* add another query string parameter that controls the maximum number of results returned (see the [documentation](https://mongoosejs.com/docs/api/query.html#query_Query-limit)).

## Submit to Canvas
When you're done, please submit your zipped routes.js file to Canvas (e.g. `routes.js.zip`).

