---
layout: assignment-two-column
title: Setting Up Python & Flask
type: lab
abbreviation: Lab 2
draft: 0
num: 2
points: 5
due_date: 2022-01-14
---

## 1. Intro to Flask
<a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank">Flask</a> is a framework, built with Python, for helping people build dynamic, scalable web applications. We have selected Flask as our web server engine for this quarter because it has a relatively simple set of common abstractions, and is therefore easier to learn than some other frameworks. At the same time, it is also very powerful, and has features such as:

* Templating, using the <a href="https://jinja.palletsprojects.com/en/3.0.x/" target="_blank">Jinja template engine</a>
* A simple way to define <a href="https://flask.palletsprojects.com/en/2.0.x/api/#url-route-registrations" target="_blank">routes</a> (which bind URL addresses to functions), and to specify which HTTP methods are valid for a particular route (HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE)
* A way to listen for and parse HTTP requests over a specified port
* A way to create and send HTTP responses

In addition, since Flask is written in Python, you have access to any and all Python libraries (e.g., for connecting to various databases, taking advantage of pretrained models, and so forth).

Most frameworks have abstractions similar to those offered by Flask, so once you learn Flask, learning new server-side web frameworks will be easier. Some other web frameworks that are analagous to Flask (that you may have heard of) include:

{:.small}
| Python | Flask, Django, Web2Py, Pyramid, etc.| 
| Node.js | Express, etc. |
| PHP | Larvel, Symfony, etc. |
| Ruby | Rails, etc. |
| Java | Spring, Struts, etc. |
| C# | ASP.NET |


## 2. Background Readings
* Please review the readings from [Lecture 4](../lectures/lecture04).

## 3. Set Up
If you haven't used Python before, please download and install it: <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/</a>.

Once Python is installed, download lab02.zip (below), unzip it, and move your lab02 folder inside of your webdev-labs folder. 

<a class="nu-button" href="/winter2022/course-files/labs/lab02.zip">lab02.zip<i class="fas fa-download" aria-hidden="true"></i></a>

Your directory structure should look like this. Note that your git repository should be in the root of your webdev-labs directory:

```bash
webdev-labs
├── .git
├── lab01
│   ├── exercise01
│   └── exercise02
└── lab02
    ├── .gitignore
    ├── Procfile
    ├── app.py
    ├── helpers
    ├── requirements.txt
    ├── static
    └── templates
```

Using Terminal (Mac),  GitBash (Windows), or the Command Prompt (Windows) to navigate to your lab02 folder. Then, install the Python dependencies:

```bash
pip3 install -r requirements.txt    # install dependencies
```
If that doesn't work (usually on Windows), try:
```bash
py -m pip install -r requirements.txt
# or one of these:
# python3 -m pip install -r requirements.txt
# python -m pip install -r requirements.txt
```

### If you downloaded lab02.zip **before 6:30PM Wednesday**
Sarah forgot to add the `requests` module to requirements.txt, so you'll have to install it manually from the command line: `pip3 install requests`

When you're done, try running your flask app from your command line:

### Mac or Linux
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
# alternative commands to try if "flask run" doesn't work:
# py -m flask run
# python3 -m flask run
# python -m flask run
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

<img class="medium frame" src="/winter2022/assets/images/labs/lab02/hello-world.png" />

### FAQs / Troubleshooting
Sarah will keep adding FAQs to this section. Some known issues:
1. As mentioned above, Sarah forgot to include the `requests` module in the original `requirements.txt` installation file. If you downloaded the code before 6:30PM on Wednesday you'll have to install it manually (or else you can re-download the starter files): `pip3 install requests`
1. If you are using windows and you can't start flask using the `flask run` command, try: `python -m flask run` 


## 4. Required Flask Exercises
Please complete the following exercises to get a sense of the kinds of things you can do with Flask:

### 1. Display personalized greeting
Update the `exercise1` function so that it returns a personalized greeting to the user. In other words, replace "Hello World!" with something like, "Hi Erick!"
* Assume that the `current_user` variable, defined at the top of `app.py` represents the user who is currently logged in. 

<img class="medium frame" src="/winter2022/assets/images/labs/lab02/hello-erick.png" />

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
Open the `templates/quote-of-the-day.html` file and examine how the Jinja template allows python logic to be evaluated from within the HTML template (using double curly brace notation). Note that in order to give your template access to data, it must be passed into the `render_template` function as a keyword argument (from `app.py`). You may pass in as many keyword arguments (i.e. pieces of data) as you like into the template. These pieces of data are often referred to as the template's "context."

#### Your Task
Please make the following modifications:
1. In `app.py`, add another context variable, called `quote` that holds a randomly selected quote from the `quotes` list (see ~line 17). Consider using the built-in <a href="https://www.w3schools.com/python/ref_random_choice.asp" target="_blank">random.choice</a> function.
1. In `templates/quote-of-the-day.html`, update the template so that the quote of the day is displayed.

<img class="medium frame" src="/winter2022/assets/images/labs/lab02/erick-quote.png" />

### 3. Accessing data from other servers
Servers can also be clients that issue requests to other servers (the thing doing the "asking" is usually referred to as the client). In other words, your Flask server can query data from other servers (using HTTP or other protocols) and then make use of that data in their own way. The `exercise3` function queries a proxy server that Sarah made (<a href="https://www.apitutor.org" target="_blank">https://www.apitutor.org</a>) for accessing Yelp (and other providers). In this example, we are querying Yelp for restaurants that match a ***location*** and ***search term***:

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

Note that the `/restaurant-data` route returns a JSON string (instead of an HTML string). 

#### Your Task
You are going to make this route more customizable by replacing the code shown above with this code:

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

The code above allows function arguments to be passed into the Yelp query based on the route. After making the changes above, test your new routes by experimenting with the following URLs:

* <a href="http://127.0.0.1:5000/restaurant-data" target="_blank">http://127.0.0.1:5000/restaurant-data</a> (All restaurants in Evanston -- defaults to Evanston)
* <a href="http://127.0.0.1:5000/restaurant-data/Evanston,%20IL" target="_blank">http://127.0.0.1:5000/restaurant-data/Evanston,%20IL</a> (All restaurants in Evanston)
* <a href="http://127.0.0.1:5000/restaurant-data/Evanston,%20IL/chinese" target="_blank">http://127.0.0.1:5000/restaurant-data/Evanston,%20IL/chinese</a> (Chinese restaurants in Evanston)
* <a href="http://127.0.0.1:5000/restaurant-data/San Diego,%20CA" target="_blank">http://127.0.0.1:5000/restaurant-data/San Diego,%20CA</a> (All restaurants in San Diego)
* <a href="http://127.0.0.1:5000/restaurant-data/San Diego,%20CA/thai" target="_blank">http://127.0.0.1:5000/restaurant-data/San Diego,%20CA/thai</a> (Thai restaurants in San Diego)

Feel free to replace the cities and search terms with your own! Basic takeaway: you can allow your user to pass data into your functions via the URL.

<img class="large frame" src="/winter2022/assets/images/labs/lab02/data-feed-miami-cuban.png" />


### 4. Create a data-driven template
Now, you're going to create a data-driven **template** to display information about the "Top Restaurant" (according to Yelp) that matches your search criteria. Consider the following code:

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

It works very similarly to the code in exercise 3, except for it merges with the `restaurant.html` template (instead of dumping raw JSON data). Please try testing these routes by experimenting with the following URLs:

* <a href="http://127.0.0.1:5000/restaurant" target="_blank">http://127.0.0.1:5000/restaurant</a> (All restaurants in Evanston -- defaults to Evanston)
* <a href="http://127.0.0.1:5000/restaurant/Evanston,%20IL" target="_blank">http://127.0.0.1:5000/restaurant/Evanston,%20IL</a> (All restaurants in Evanston)
* <a href="http://127.0.0.1:5000/restaurant/Evanston,%20IL/chinese" target="_blank">http://127.0.0.1:5000/restaurant/Evanston,%20IL/chinese</a> (Chinese restaurants in Evanston)
* <a href="http://127.0.0.1:5000/restaurant/San Diego,%20CA" target="_blank">http://127.0.0.1:5000/restaurant/San Diego,%20CA</a> (All restaurants in San Diego)
* <a href="http://127.0.0.1:5000/restaurant/San Diego,%20CA/thai" target="_blank">http://127.0.0.1:5000/restaurant/San Diego,%20CA/thai</a> (Thai restaurants in San Diego)

Note that the `restaurant.html` template uses a new construct -- the "include" -- as a way to modularize code.

<img class="large frame" src="/winter2022/assets/images/labs/lab02/template-before.png" />

#### Your Task
Modify the HTML in this template so that it displays the Yelp data in a more visual format. For instance, Sarah made her's look like this:

<img class="medium frame" src="/winter2022/assets/images/labs/lab02/template-after.png" />

Feel free to jazz up your template any way you like!

## 5. Optional Flask Exercises (recommended if time)
If you have more time, please also try the optional flask exercises. It will give you more practice to ensure that you feel comfortable with HW2!

### 1. Looping using Jinja
In exercise 4, you only showed a single restaurant. Look at the <a href="https://jinja.palletsprojects.com/en/3.0.x/templates/" target="_blank">Jinja documentation</a> and see if you can figure out how to output all of the matching restaurants for the search (not just the first one). See if you can make your template look like this one:

<img class="large frame" src="/winter2022/assets/images/labs/lab02/restaurants.png" />

### 2. Includes
See if you can convert the HTML that shows a single restaurant card into an include file (similar to `includes/header.html`)

## 6. What to Turn In
To submit Lab 2:

### 1. Push all of your files to GitHub
Please copy the latest version of your files to GitHub by issuing the following commands:

```shell
git add .    # in case you created any new files
git commit -am 'Commiting my completed lab02 files'
git status   # to make sure that all of your files are being tracked
git push     # sends your files to GitHub
```

### 2. Paste a link to your repo on Canvas
Paste a link to your `webdev-labs` GitHub repository into the Canvas textbox for <a href="https://canvas.northwestern.edu/courses/157233/assignments/1016081" target="_blank">Lab 2</a>.

### 3. Answer the following question on Canvas
**Below the link to your repo**, in a brief reflective response (about 2-3 sentences per question), please consider the following questions:

- Did you consider conducting accessibility testing on your lab assignment? Why or why not?
- If you tested your site for accessibility and found issues, were you able to solve them? What did you do to try to solve them? What stopped you from successfully resolving or trying to resolve the issues?
- How might you change the JSON data response from the Yelp API to enhance accessibility?
