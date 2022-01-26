---
layout: assignment-two-column
title: REST APIs
type: lab
abbreviation: Lab 4
draft: 0
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

## Overview / Set Up
In today's lab, you're going to get starter with your homework by going through the first three sections of [Homework 3](hw03):

{:.compact}
1. Introduction
1. Setting everything up
1. Background readings and concepts

This will involve practicing some SQL Alchemy queries, and working with some API endpoints using Postman. 

## Coding Tasks
When you've finished parts 1-3, you will modify the /api/posts route for the GET method (which is only partially implemented). Specifically, you will:
1. Ensure that only the posts that the user has access to are returned. A user may have read access to a post if:
    * They created the post themselves.
    * They are following a user who created the post.
1. Ensure that the limit paramter is honored. Furthermore, if it is invalid, an appropriate message should be returned to the user.

### Hints
There are a few helper functions in `views/__init__.py` that may help you with security: 

* `get_authorized_user_ids`
* `can_view_post`

That said, feel free to do it your own way!

## What to turn in
Please upload the `views/posts.py` file to Canvas when you've completed the tasks above.

