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

## 2. Background Readings

## 3. Set Up
Using Terminal (Mac),  GitBash (Windows), or the Command Prompt, please navigate to your lab02 folder and install the python dependencies:

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

 Navigate to <a href="http://127.0.0.1:5000/" target="_blank">http://127.0.0.1:5000/</a>, and you should see the solutions from Lab 1.

 <img class="large" src="/winter2022/assets/images/labs/lab01/desktop.png" />

 ## 4. Flask Exercises
 Flask allows you to use Python to generate output files on a server. Please try the following exercises to get a sense of the kinds of things you can do with Flask

 ### 1. Create a new route
YYY
 1. Open `app.py`

### 1. Create static string
YYY
```python
return 'Hello World!'
```
### 2. Merge with static template
YYY
```python
return 'Hello World!'
```
### 3. Create dynamic string (best pizza restaurant in Evanston)
YYY
```python
return 'Hello World!'
```
### 4. Create dynamic template (best pizza restaurant in Evanston)
YYY
```python
return 'Hello World!'
```
### 5. URL Params. Best X restaurant in Evanston
YYY
```python
return 'Hello World!'
```
### 6. Best X restaurant[s] in Evanston
YYY
```python
return 'Hello World!'
```
### 7. Includes
YYY
```python
return 'Hello World!'
```
