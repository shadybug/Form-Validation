import flask
from flask import request
app = flask.Flask(__name__)

@app.route('/', methods=['post', 'get'])
def login():
    message = ''

    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        if username == 'testusername' and password == 'testpassword':
            message = "Correct username and password"
            return flask.render_template('welcome.html', message=message)
        else:
            message = "Wrong username or password"

    return flask.render_template('index.html', message=message)
    