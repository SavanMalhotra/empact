# import os
# import openai

# openai.api_key = os.getenv("OPENAI_API_KEY")

# response = openai.Completion.create(
#   engine="davinci",
#   prompt="Q: Ask Constance if we need some bread\nA: send-msg `find constance` Do we need some bread?\nQ: Send a message to Greg to figure out if things are ready for Wednesday.\nA: send-msg `find greg` Is everything ready for Wednesday?\nQ: Ask Ilya if we're still having our meeting this evening\nA: send-msg `find ilya` Are we still having a meeting this evening?\nQ: Contact the ski store and figure out if I can get my skis fixed before I leave on Thursday\nA: send-msg `find ski store` Would it be possible to get my skis fixed before I leave on Thursday?\nQ: Thank Nicolas for lunch\nA: send-msg `find nicolas` Thank you for lunch!\nQ: Tell Constance that I won't be home before 19:30 tonight — unmovable meeting.\nA: send-msg `find constance` I won't be home before 19:30 tonight. I have a meeting I can't move.\nQ: Let Jessie know I'll be at the meeting.\nA:",
#   temperature=0.5,
#   max_tokens=100,
#   top_p=1.0,
#   frequency_penalty=0.2,
#   presence_penalty=0.0,
#   stop=["\n"]
# )

# import os
# import openai

# # Load your API key from an environment variable or secret management service
# # openai.api_key = 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
# openai.api_key = os.getenv("OPENAI_API_KEY")

# response = openai.Completion.create(engine="davinci", prompt="This is a test", max_tokens=5)


import os
import openai
from dotenv import load_dotenv

load_dotenv ()
openai.api_key = os.getenv("OPENAI_API_KEY")
# print(os.getenv('OPENAI_API_KEY'))
# print(openai.api_key)

prompt = "I'd like to have a pizza"

# openai.Completion.create(engine="davinci", prompt=prompt, max_token=10).choices[0].text


response = openai.Completion.create(
  engine="davinci-instruct-beta",
  prompt="What are some key points I should know when studying Ancient Rome?\n\n1.",
  temperature=1,
  max_tokens=64,
  top_p=1.0,
  frequency_penalty=0.0,
  presence_penalty=0.0
).choices[0].text

print(response)


# curl https://api.openai.com/v1/engines/davinci-instruct-beta/completions \
#   -H "Content-Type: application/json" \
#   -H "Authorization: Bearer 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" \
#   -d '{
#   "prompt": "What are some key points I should know when studying Ancient Rome?\n\n1.",
#   "temperature": 1,
#   "max_tokens": 64,
#   "top_p": 1.0,
#   "frequency_penalty": 0.0,
#   "presence_penalty": 0.0
# }'



# curl https://api.openai.com/v1/engines/davinci/completions \
# -H "Content-Type: application/json" \
# -H "Authorization: Bearer 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" \
# -d '{"prompt": "This is a test", "max_tokens": 5}'


# curl https://api.openai.com/v1/engines/davinci/completions \
#   -H "Content-Type: application/json" \
#   -H "Authorization: Bearer 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" \
#   -d '{
#   "prompt": "A neutron star is the collapsed core of a massive supergiant star, which had a total mass of between 10 and 25 solar masses, possibly more if the star was especially metal-rich.[1] Neutron stars are the smallest and densest stellar objects, excluding black holes and hypothetical white holes, quark stars, and strange stars.[2] Neutron stars have a radius on the order of 10 kilometres (6.2 mi) and a mass of about 1.4 solar masses.[3] They result from the supernova explosion of a massive star, combined with gravitational collapse, that compresses the core past white dwarf star density to that of atomic nuclei.\n\ntl;dr:",
#   "temperature": 0.3,
#   "max_tokens": 60,
#   "top_p": 1.0,
#   "frequency_penalty": 0.0,
#   "presence_penalty": 0.0
# }'

