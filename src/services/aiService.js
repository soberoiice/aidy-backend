const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

exports.generateSummary = async (text) => {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: `Summarize this: ${text}` }]
  });
  return response.data.choices[0].message.content;
};

exports.generateFlashcards = async (text) => {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: `Create flashcards from this text: ${text}` }]
  });
  return JSON.parse(response.data.choices[0].message.content);
};
