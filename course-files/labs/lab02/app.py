from flask import Flask
from flask import render_template
import random
import requests
from pprint import pprint


app = Flask(__name__)


@app.route('/')
def homepage():
    return render_template('index.html')


# Demo 1: Sends a dynamically generated paragraph to the client.
@app.route('/demo1')
def demo1():
    weather_options = [
        'sunny', 'cloudy', 'windy', 'rainy', 'snowy',
        'icy', 'hot', 'humid', 'muggy'
    ]
    prediction = random.choice(weather_options)
    return '<p>Today, the weather will be <strong>' + \
        prediction + '</strong></p>.'

# Demo 2: Merges with the demo2.html template;
# merges the template with the "prediction" variable.
@app.route('/demo2')
def demo2():
    response = requests.get('https://fcc-weather-api.glitch.me/api/current?lon=-87.698&lat=42.063')
    data = response.json()
    pprint(data)
    city = data.get('name')
    description = data.get('weather')[0].get('description')
    icon = data.get('weather')[0].get('icon')
    try:
        feels_like = data.get('main').get('feels_like')
        feels_like = to_fahrenheit(feels_like)
    except:
        feels_like = None
    try:
        temp = data.get('main').get('temp')
        temp = to_fahrenheit(temp)
    except:
        temp = None
    
    return render_template('demo2.html', 
        city=city,
        description=description,
        icon=icon,
        feels_like=feels_like,
        temp=temp
    )

def to_fahrenheit(temp):
    return '{0:.1f}'.format(temp * 1.8 + 32)

@app.route('/cards')
def photos_static():
    return render_template('cards.html')


    
