from flask import Flask, render_template
import fake_data    # see fake_data.py file

app = Flask(__name__)

@app.route('/')
def home():
    current_user = fake_data.generate_user()
    return render_template(
        'starter_template.html', 
        user=current_user,
        posts=fake_data.generate_posts(n=8),
        stories=fake_data.generate_stories(n=6),
        suggestions=fake_data.generate_suggestions(n=7)
    )

@app.route('/api/feed')
def get_feed():
    return 'Replace with JSON feed'

@app.route('/api/stories')
def get_stories():
    return 'Replace with JSON feed'

@app.route('/api/suggestions')
def get_suggestions():
    return 'Replace with JSON feed'

# Enables flask app to run using "python3 app.py" command.
# Or you can use "flask run"
if __name__ == '__main__':
    app.run()