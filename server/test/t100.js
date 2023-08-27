require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const { OPENAI_API_KEY } = "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";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
// const openai = new OpenAIApi(configuration);

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });


app.post("/create", async (req, res) => {
    const { prompt } = req.body;
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "user",
            "content": "Write a basic json code."
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      res.send(response.data.data[0].url);
    } catch (err) {
      res.send(err.message);
    }
  });


app.use(bodyParser.json());
app.use(cors());

app.listen(8080, () => {
  console.log("server started");
});

