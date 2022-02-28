from models import User
import flask_jwt_extended
from flask import Response, request
from flask_restful import Resource
import json
from datetime import timezone, datetime, timedelta

class AccessTokenEndpoint(Resource):

    def post(self):
        body = request.get_json() or {}
        username = body.get('username')
        password = body.get('password')
        user = User.query.filter_by(username=username).one_or_none()
        print(user)
        if user and user.check_password(password):
            # check username and log in credentials. If valid, return tokens
            return Response(json.dumps({ 
                "access_token": flask_jwt_extended.create_access_token(user.id), 
                "refresh_token": flask_jwt_extended.create_refresh_token(user.id)
            }), mimetype="application/json", status=200)
        elif user:
            return Response(json.dumps({ 
                "message": "bad password"
            }), mimetype="application/json", status=400)
        else:
            return Response(json.dumps({ 
                "message": "bad username"
            }), mimetype="application/json", status=400)



class RefreshTokenEndpoint(Resource):
    
    '''
    If the user gives you a valid refresh token, issue them a new
    access token!
    '''
    def post(self):

        body = request.get_json() or {}
        refresh_token = body.get('refresh_token')
        print(refresh_token)

        # https://flask-jwt-extended.readthedocs.io/en/latest/refreshing_tokens/
        # Hint: To decode the refresh token and see if it expired:
        decoded_token = flask_jwt_extended.decode_token(refresh_token)
        print(decoded_token)
        exp_timestamp = decoded_token.get("exp")
        user_id = decoded_token.get("sub")
        current_timestamp = datetime.timestamp(datetime.now(timezone.utc))
        if  current_timestamp > exp_timestamp:
            return Response(json.dumps({ 
                    "message": "refresh_token has expired"
                }), mimetype="application/json", status=401)
        else:
            return Response(json.dumps({ 
                    "access_token": flask_jwt_extended.create_access_token(user_id)
                }), mimetype="application/json", status=200)
        


def initialize_routes(api):
    api.add_resource(
        AccessTokenEndpoint, 
        '/api/token', '/api/token/'
    )

    api.add_resource(
        RefreshTokenEndpoint, 
        '/api/token/refresh', '/api/token/refresh/'
    )