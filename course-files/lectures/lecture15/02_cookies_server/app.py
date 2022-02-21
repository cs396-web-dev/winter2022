#pip3 install flask-jwt-extended
from dotenv import load_dotenv
load_dotenv()

from flask import Flask, make_response, request

app = Flask(__name__)

@app.route('/')
def home():
    print('-' * 50)
    print('All the request headers')
    print('-' * 50)
    print(request.headers)

    print('-' * 50)
    print('access tokens set')
    print('-' * 50)
    print('Cookie (userId):', request.cookies.get('userID'))

    resp = make_response('Hello world!')

    # you can set a cookie from the server (as well as from the client)
    resp.set_cookie('userID', '12')
    return resp

if __name__ == '__main__':
    app.run()
