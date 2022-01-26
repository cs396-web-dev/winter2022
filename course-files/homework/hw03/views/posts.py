from flask import Response, request
from flask_restful import Resource
from models import Post, User, db
from . import can_view_post, get_authorized_user_ids
import json
from sqlalchemy import and_

def get_path():
    return request.host_url + 'api/posts/'

class PostListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def get(self):
        # TODO: 
        # 1. No security implemented; 
        # 2. limit is hard coded (versus coming from the query parameter)
        # 3. No error checking
        data = Post.query.limit(20).all()

        data = [
            item.to_dict() for item in data
        ]
        return Response(json.dumps(data), mimetype="application/json", status=200)



    def post(self):
        body = request.get_json()
        image_url = body.get('image_url')
        caption = body.get('caption')
        alt_text = body.get('alt_text')
        user_id = self.current_user.id # id of the user who is logged in
        
        # create post:
        post = Post(image_url, user_id, caption, alt_text)
        db.session.add(post)
        db.session.commit()
        return Response(json.dumps(post.to_dict()), mimetype="application/json", status=201)
        
class PostDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user
        
    def patch(self, id):
        post = Post.query.get(id)

        # a user can only edit their own post:
        if not post or post.user_id != self.current_user.id:
            return Response(json.dumps({'message': 'Post does not exist'}), mimetype="application/json", status=404)
       

        body = request.get_json()
        post.image_url = body.get('image_url') or post.image_url
        post.caption = body.get('caption') or post.caption
        post.alt_text = body.get('alt_text') or post.alt_text
        
        # commit changes:
        db.session.commit()        
        return Response(json.dumps(post.to_dict()), mimetype="application/json", status=200)
    
    def delete(self, id):

        # a user can only delete their own post:
        post = Post.query.get(id)
        if not post or post.user_id != self.current_user.id:
            return Response(json.dumps({'message': 'Post does not exist'}), mimetype="application/json", status=404)
       

        Post.query.filter_by(id=id).delete()
        db.session.commit()
        serialized_data = {
            'message': 'Post {0} successfully deleted.'.format(id)
        }
        return Response(json.dumps(serialized_data), mimetype="application/json", status=200)

    def get(self, id):
        post = Post.query.get(id)

        # if the user is not allowed to see the post or if the post does not exist, return 404:
        if not post or not can_view_post(post.id, self.current_user):
            return Response(json.dumps({'message': 'Post does not exist'}), mimetype="application/json", status=404)
        
        return Response(json.dumps(post.to_dict()), mimetype="application/json", status=200)

def initialize_routes(api):
    api.add_resource(
        PostListEndpoint, 
        '/api/posts', '/api/posts/', 
        resource_class_kwargs={'current_user': api.app.current_user}
    )
    api.add_resource(
        PostDetailEndpoint, 
        '/api/posts/<id>', '/api/posts/<id>/',
        resource_class_kwargs={'current_user': api.app.current_user}
    )