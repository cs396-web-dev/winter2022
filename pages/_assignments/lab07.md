---
layout: assignment-two-column
title: Authentication Lab
type: lab
abbreviation: Lab 7
draft: 0
num: 7
points: 5
due_date: 2022-02-27
---

<style>
    .compact li {
        margin-bottom: 4px;
        line-height: 1.5em;
    }
</style>

The goal of today's lab is to complete the login form (Part 3.1.1) of Homework 5.

## Your Task
Before beginning the lab, please complete sections 1 & 2 (Introduction and Set Up) of [HW05](hw05). When you're done, please complete the following tasks to create a login form for UI:

### 1. HTML Form
* Create an HTML login form for your app (feel free to borrow code from the Lecture 15 files) by editing the `templates/login.html` html file. The form should POST to the `/login` endpoint.
* Ensure that the form is accessible by using the Wave Chrome extension.

### 2. Login Endpoint
Implement the `/login` POST endpoint by editing `views/authentication.py`.

* If the enpoint receives a valid `username` and `password`, it should set the JWT cookie in the response header and redirect the user to the home screen (`/`).
* If the `/login` POST endpoint does not receive a valid username and password, redisplay the form with an appropriate error message.
* When you're done, your `tests_updated/test_login.py` tests should pass.



## What to Turn In
To submit Lab 7, please upload a zip file that has three files in it:

{:.compact}
* `views/authentication.py`
* `templates/login.html`
* `app.py`