---
layout: assignment-two-column
title: Setting Up Python & Flask
type: lab
abbreviation: Lab 2
draft: 1
num: 2
points: 5
due_date: 2022-01-14
---

## 1. Intro to Flask
Flask is a framework, built with Python, for helping people build dynamic, scalable web applications. Sarah has selected Flask as our web server engine for this quarter because it has a relatively simple set of common abstractions, and is therefore easier to learn than some other frameworks. At the same time, it is also very powerful, and has features such as:

* Templating, using the <a href="https://jinja.palletsprojects.com/en/3.0.x/" target="_blank">Jinja template engine</a>
* A simple way to define <a href="https://flask.palletsprojects.com/en/2.0.x/api/#url-route-registrations" target="_blank">routes</a> (which bind URL addresses to functions), and to specify which methods are valid for a particular route (HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE)
* A way to listen for and parse HTTP requests over a specified port
* A way to create valid HTTP responses (sent out over said port)

Most frameworks have abstractions similar to those offered by Flask, so once you learn Flask, learning new server-side web frameworks will be easier. 

## 2. Background Readings
* Please review the readings from [Lecture 4](../lectures/lecture04).

## 3. Set Up
If you haven't used Python before, please download and install it: <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/</a>.

Once Python is installed, use Terminal (Mac),  GitBash (Windows), or the Command Prompt (Windows) to navigate to your lab02 folder. Then, install the python dependencies:

```bash
pip3 install -r requirements.txt    # install dependencies
```
When you're done, try running your flask app:

### Mac or GitBash
```bash
# set environment variables (you just have to do this once per session)
export FLASK_APP=app.py     
export FLASK_ENV=development

# then run flask (type Ctrl+C to quit)
flask run
```

### Windows
```bash
# set environment variables (you just have to do this once per session)
set FLASK_APP=app.py
set FLASK_ENV=development

# then run flask (type Ctrl+C to quit)
flask run
```

You should see the following output:
```bash
 * Serving Flask app "app.py" (lazy loading)
 * Environment: development
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 273-580-071
 ```

 Navigate to <a href="http://127.0.0.1:5000/" target="_blank">http://127.0.0.1:5000/</a>, and you should see a screen that says "Hello World!"


## 4. Required Flask Exercises
Please complete the following exercises to get a sense of the kinds of things you can do with Flask:

### 1. Display personalized greeting
Update the `exercise1` function so that it returns a personalized greeting to the user. In other words, replace "Hello World!" with something like, "Hi Erick!"
* Assume that the `current_user` variable, defined at the top of `app.py` represents the user who is currently logged in. 


### 2. Merge with a template
The `exercise2` function uses a template to generate its response. Specifically, python reads in the `templates/quote-of-the-day.html` file, finds any python expressions (represented by curly braces), evaluates them, and finally sends a "plain" HTML file back to the client:

```python
@app.route('/quote')
def exercise2():
    return render_template(
        'quote-of-the-day.html',
        user=current_user
    )
```
Open the `templates/quote-of-the-day.html` file and examine how the Jinja template allows python logic to be inject data into the HTML file (using double curly brace notation). Note that in order to give your template access to data, it must be passed into the `render_template` function as a keyword argument (from `app.py`). You may pass in as many keyword arguments (i.e. pieces of data) as you like into the template. These pieces of data are often referred to as the template's "context."

Please make the following modifications:
1. In `app.py`, add another context variable, called `quote` that holds a randomly selected quote from the `quotes` list (see line 16). Consider using the built-in <a href="https://www.w3schools.com/python/ref_random_choice.asp" target="_blank">random.choice</a> function.
1. In `templates/quote-of-the-day.html`, update the template so that the quote of the day is displayed.

### 3. Accessing data from other servers
Servers can also be clients of other servers. In other words, your Flask server can query data from other servers (using HTTP) and then make use of that data in their own way. The `exercise3` function queries a Yelp proxy server that Sarah made for restaurants that match a particular location and set of keywords:

```python
@app.route('/restaurant-data')
def exercise3():
    search_term = 'pizza'
    city = 'Evanston, Il'
    url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location={0}&term={1}'.format(city, search_term)
    response = requests.get(url)
    data = response.json()
    pprint(data) # for debugging -- prints the result to the command line
    return json.dumps(data)
```

Note that this route returns a JSON file (instead of HTML). You are going to make this route more customizable by replacing the code shown above with this code:

```python
@app.route('/restaurant-data/<city>/<search_term>')
@app.route('/restaurant-data/<city>')
@app.route('/restaurant-data')
def exercise3(city='Evanston, IL', search_term=''):
    url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location={0}&term={1}'.format(city, search_term)
    response = requests.get(url)
    data = response.json()
    pprint(data) # for debugging -- prints the result to the command line
    return json.dumps(data)
```

Then test your routes by experimenting with the following URLs:

* <a href="http://127.0.0.1:5000/restaurant-data" target="_blank">http://127.0.0.1:5000/restaurant-data</a> (All restaurants in Evanston -- defaults to Evanston)
* <a href="http://127.0.0.1:5000/restaurant-data/Evanston,%20IL" target="_blank">http://127.0.0.1:5000/restaurant-data/Evanston,%20IL</a> (All restaurants in Evanston)
* <a href="http://127.0.0.1:5000/restaurant-data/Evanston,%20IL/chinese" target="_blank">http://127.0.0.1:5000/restaurant-data/Evanston,%20IL/chinese</a> (Chinese restaurants in Evanston)
* <a href="http://127.0.0.1:5000/restaurant-data/San Diego,%20CA" target="_blank">http://127.0.0.1:5000/restaurant-data/San Diego,%20CA</a> (All restaurants in San Diego)
* <a href="http://127.0.0.1:5000/restaurant-data/San Diego,%20CA/thai" target="_blank">http://127.0.0.1:5000/restaurant-data/San Diego,%20CA/thai</a> (Thai restaurants in San Diego)

Basic takeaway: you can allow your user to pass data into your functions via the URL. Pretty cool!

### 4. Create a data-driven template
Now, you're going to create a data-driven template to display information about the "Top Restaurant" (according to Yelp) that matches your search criteria. Consider the following code:

```python
@app.route('/restaurant/<city>/<search_term>')
@app.route('/restaurant/<city>')
@app.route('/restaurant')
def exercise4(city='Evanston, IL', search_term=''):
    url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location={0}&term={1}'.format(city, search_term)
    response = requests.get(url)
    restaurants = response.json()
    pprint(restaurants[0]) # for debugging
    return render_template(
        'restaurant.html',
        user=current_user,
        search_term=search_term,
        city=city,
        restaurant=restaurants[0]
    )
```

It works very similarly to the code in exercise 3, except for it merges with the `restaurant.html` template (instead of dumping raw JSO data). Please try testing this routes by experimenting with the following URLs:

* <a href="http://127.0.0.1:5000/restaurant" target="_blank">http://127.0.0.1:5000/restaurant</a> (All restaurants in Evanston -- defaults to Evanston)
* <a href="http://127.0.0.1:5000/restaurant/Evanston,%20IL" target="_blank">http://127.0.0.1:5000/restaurant/Evanston,%20IL</a> (All restaurants in Evanston)
* <a href="http://127.0.0.1:5000/restaurant/Evanston,%20IL/chinese" target="_blank">http://127.0.0.1:5000/restaurant/Evanston,%20IL/chinese</a> (Chinese restaurants in Evanston)
* <a href="http://127.0.0.1:5000/restaurant/San Diego,%20CA" target="_blank">http://127.0.0.1:5000/restaurant/San Diego,%20CA</a> (All restaurants in San Diego)
* <a href="http://127.0.0.1:5000/restaurant/San Diego,%20CA/thai" target="_blank">http://127.0.0.1:5000/restaurant/San Diego,%20CA/thai</a> (Thai restaurants in San Diego)

Note that this template also uses a new construct -- the "include" -- as a way to modularize your code.


## 5. Optional Flask Exercises (recommended if time)
If you have more time, please also try the optional flask exercises. It will give you more practice to ensure that you feel comfortable with HW2!

### 1. Looping using Jinja
In exercise 4, you only showed a single restaurant. Look at the <a href="https://jinja.palletsprojects.com/en/3.0.x/templates/" target="_blank">Jinja documentation</a> and see if you can figure out how to output all of the matching restaurants for the search (not just the first one).

### 2. Includes
YYY
```python
return 'Hello World!'
```


