from flask import Flask, jsonify, request
from flask_cors import CORS  # <-- import CORS
import random

app = Flask(__name__)
CORS(app)  # <-- enable CORS

@app.route('/api/response', methods=['POST'])
def get_response():
    response = ["success", "failed"]
    return jsonify({"status": random.choice(response)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
