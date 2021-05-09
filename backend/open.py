import os
import openai
from dotenv import load_dotenv

load_dotenv ()
openai.api_key = os.getenv("OPENAI_API_KEY")

prompt = "What are some key points I should know when studying Ancient Rome?\n\n1."

response = openai.Completion.create(
  engine="davinci-instruct-beta",
  prompt=prompt,
  temperature=1,
  max_tokens=64,
  top_p=1.0,
  frequency_penalty=0.0,
  presence_penalty=0.0
).choices[0].text

print(response)
