from flask import Blueprint, request, jsonify
import requests

# This creates a 'module' for our commands
commands_bp = Blueprint('commands', __name__)

@commands_bp.route('/handle', methods=['POST'])
def handle_command():
    # Get the JSON data sent from the frontend
    data = request.json
    user_msg = data.get('message', '')

    # Check for the #joke trigger
    if user_msg.startswith('#joke'):
        try:
            # We call a free joke API
            response = requests.get("https://v2.jokeapi.dev/joke/Any?format=txt")
            # If successful, we return the text of the joke
            return jsonify({"response": response.text})
        except:
            return jsonify({"response": "Nexus: Failed to fetch a joke. Try again!"})

    # Default response if the command isn't recognized
    return jsonify({"response": "Nexus: Command not recognized."})