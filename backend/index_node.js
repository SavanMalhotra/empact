// const OpenAI = require('openai-api');

// // Load your key from an environment variable or secret management service
// // (do not include your key directly in your code)
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// const openai = new OpenAI(OPENAI_API_KEY);

// (async () => {
//     const gptResponse = await openai.complete({
//         engine: 'davinci',
//         prompt: 'this is a test',
//         maxTokens: 5,
//         temperature: 0.9,
//         topP: 1,
//         presencePenalty: 0,
//         frequencyPenalty: 0,
//         bestOf: 1,
//         n: 1,
//         stream: false,
//         stop: ['\n', "testing"]
//     });
            
//     console.log(gptResponse.data);
// })();

const OpenAIAPI = require('openaiapi');

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const openai = new OpenAIAPI(OPENAI_API_KEY)

openai.CompletionsCreate("your starting prompt")
  .then(function(data) {
    //Do something with the data.
  })
  .catch(function(err) {
    //The API returned an error
  })