from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    image_data = data.get('image', '')
    # Simulate result
    return jsonify({"translated": "Image analyzed! (Fake result)"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
