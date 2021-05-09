#flask app to mange calls to openai api
import os
import openai
from flask import Flask, jsonify, request
from dotenv import load_dotenv

app = Flask(__name__)
load_dotenv ()
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/openai/create_study_notes/', methods=['POST'])
def get_openai_create_study_notes():
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

@app.route('/openai/tldr/', methods=['POST'])
def get_openai_tldr():
    json_obj = request.get_json()
    prompt = json_obj['prompt']
    response = openai.Completion.create(
        engine="davinci",
        prompt=prompt,
        temperature=0.3,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    ).choices[0].text
    return jsonify("\n-" + response), 201

if __name__ == '__main__':
    app.run(debug=True)

# Test command
# curl -H "Content-Type: application/json" -X POST -d '{"prompt":"What are some key points I should know when studying Ancient Rome?\n\n1.", "address":"address xyz"}' http://127.0.0.1:5000/openai/create_study_notes/
# curl -H "Content-Type: application/json" -X POST -d '{"prompt":"A neutron star is the collapsed core of a massive supergiant star, which had a total mass of between 10 and 25 solar masses, possibly more if the star was especially metal-rich.[1] Neutron stars are the smallest and densest stellar objects, excluding black holes and hypothetical white holes, quark stars, and strange stars.[2] Neutron stars have a radius on the order of 10 kilometres (6.2 mi) and a mass of about 1.4 solar masses.[3] They result from the supernova explosion of a massive star, combined with gravitational collapse, that compresses the core past white dwarf star density to that of atomic nuclei.\n\ntl;dr:", "address":"address xyz"}' http://127.0.0.1:5000/openai/tldr/
