---
layout: assignment-two-column
title: REST APIs
type: lab
abbreviation: Lab 4
draft: 1
num: 4
points: 5
due_date: 2022-01-28
---

<style>
    .compact li {
        margin-bottom: 2px;
        line-height: 1.5em;
    }
</style>

In today's lab, you're going to set up your Homework 3 by going through the first three sections:

{:.compact}
1. Introduction
1. Setting everything up
1. Background readings and concepts

This includes practicing some SQL Alchemy queries, and working with Postman. When you're done, you will complete the /api/posts route for the GET method. Specifically, I have asked you to:
* Ensure that all posts in the current users' feed are returned. This includes the current user's posts, as well as the people that the current user is following.
* If the 
    <ul>
        <li><a href="https://photo-app-demo.herokuapp.com/api/posts">/api/posts</a></li>
        <li><a href="https://photo-app-demo.herokuapp.com/api/posts?limit=5">/api/posts?limit=5</a></li>
        <li><a href="https://photo-app-demo.herokuapp.com/api/posts?username=jasmine_ortiz">/api/posts?username=jasmine_ortiz</a></li>
        <li><a href="https://photo-app-demo.herokuapp.com/api/posts?username=jasmine_ortiz&limit=2">/api/posts?username=jasmine_ortiz&limit=2</a></li>
    </ul>

    <ul>
        <li><code class="highlighter-rouge">username (string, optional)</code> Only shows posts that were created by the requested user.</li>
        <li><code class="highlighter-rouge">limit (int, optional)</code>: Limits the number of posts returned (defaults to 10, maximum is 50)</li>
    </ul>
 
