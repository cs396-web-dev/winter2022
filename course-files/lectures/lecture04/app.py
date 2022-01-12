from flask import Flask
from flask import render_template

# initializes flask app:
app = Flask(__name__)

current_user = {
    'name': 'Walter',
    'username': 'walt2020'
}

@app.route('/')
def exercise1():
    return '''
        <!DOCTYPE html>
        <html lang="en" >
        <head>
            <meta charset="UTF-8">
            <title>Demo</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href="/static/style.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <h1>Hello World!</h1>
        </body>
        </html>
    '''

@app.route('/e2')
def exercise2():
    return render_template(
        'index.html'
    )

'''

beyonce_spotify = {
    "id": "6vWDO969PvNqNYHIOW5v0m",
    "name": "Beyoncé",
    "popularity": 87,
    "image_url": "https://i.scdn.co/image/ab6761610000e5ebd3d058be8485c8583703b6d2",
    "spotify_url": "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
}

new_order_spotify = {
    "id": "0yNLKJebCb8Aueb54LYya3",
    "name": "New Order",
    "popularity": 70,
    "image_url": "https://i.scdn.co/image/ab6761610000e5eba080a8e96758f416301578f9",
    "spotify_url": "https://open.spotify.com/artist/0yNLKJebCb8Aueb54LYya3"
}

<iframe 
    src="https://open.spotify.com/embed/artist/0yNLKJebCb8Aueb54LYya3?utm_source=generator" 
    width="100%" 
    height="380" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
></iframe>
'''