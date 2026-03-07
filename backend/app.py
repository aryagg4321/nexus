from flask import Flask
from flask_cors import CORS
from routes.commands import commands_bp

app = Flask(__name__)

# CORS (Cross-Origin Resource Sharing) is essential. 
# It allows your React website to talk to this Flask server.
CORS(app)

# We register the command module here
app.register_blueprint(commands_bp, url_prefix='/api')

if __name__ == '__main__':
    # Running on port 5000 in debug mode
    app.run(debug=True, port=5000)