#pip3 install flask-jwt-extended
from dotenv import load_dotenv
load_dotenv()

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template(
        'csrf-examples.html'
    )

if __name__ == '__main__':
    app.run()
