import os
import openai
from flask import Flask, jsonify, request

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/', methods=['GET', 'POST'])
def index():
    if (request.method == 'POST'):
        json_obj = request.get_json()
        return jsonify({'recieved': json_obj}), 201
    else: 
        return jsonify({"about": "Hello World!"})
    
@app.route('/multi/<int:num>', methods=['GET'])
def get_multiply10(num):
    return jsonify({'result': num*10})

@app.route('/openai/', methods=['POST'])
def get_openai_response():
    json_obj = request.get_json()
    # name = json_obj['name']
    response = openai.Completion.create(
        engine="davinci",
        prompt="This is a tweet sentiment classifier\nTweet: \"I loved the new Batman movie!\"\nSentiment: Positive\n###\nTweet: \"I hate it when my phone battery dies\"\nSentiment: Negative\n###\nTweet: \"My day has been 👍\"\nSentiment: Positive\n###\nTweet: \"This is the link to the article\"\nSentiment: Neutral\n###\nTweet text\n\n\n1. \"I loved the new Batman movie!\"\n2. \"I hate it when my phone battery dies\"\n3. \"My day has been 👍\"\n4. \"This is the link to the article\"\n5. \"This new music video blew my mind\"\n\n\nTweet sentiment ratings:\n1: Positive\n2: Negative\n3: Positive\n4: Neutral\n5: Positive\n\n\n###\nTweet text\n\n\n1. \"I can't stand homework\"\n2. \"This sucks. I'm bored 😠\"\n3. \"I can't wait for Halloween!!!\"\n4. \"My cat is adorable ❤️❤️\"\n5. \"I hate chocolate\"\n\n\nTweet sentiment ratings:\n1.",
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
        stop=["###"]
    )
    return jsonify(response), 201

    # return json object
    # return jsonify({'parsed name': name}), 201 

    # returns string
    # return jsonify(name), 201

if __name__ == '__main__':
    app.run(debug=True)



# curl -H "Content-Type: application/json" -X POST -d '{"name":"xyz", "address":"address xyz"}' http://127.0.0.1:5000/