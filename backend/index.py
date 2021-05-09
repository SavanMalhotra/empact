import os
import openai
from flask import Flask, jsonify, request
from dotenv import load_dotenv

app = Flask(__name__)
load_dotenv ()
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
    prompt = json_obj['prompt']
    response = openai.Completion.create(
        engine="davinci-instruct-beta",
        prompt=prompt,
        temperature=1,
        max_tokens=64,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    ).choices[0].text
    return jsonify("\n-" + response), 201

if __name__ == '__main__':
    app.run(debug=True)


# Test command used to make sure request returns valid results
# curl -H "Content-Type: application/json" -X POST -d '{"prompt":"What are some key points I should know when studying Ancient Rome?\n\n1.", "address":"address xyz"}' http://127.0.0.1:5000/openai/

#Example repsonse
#"\n- Rome was founded in 753 BCE.\n\n2. Julius Caesar was assassinated in 44 BCE.\n\n3. Rome was conquered during the rule of Constantine.\n\n4. aqueducts were a significant construction because they were the first to build support structures for building these \"flows\" of water.\n"
