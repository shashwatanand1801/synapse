const axios = require('axios');
const converterController = require("./yamlToJson");
const promptController = require("./prompt")
const dotenv = require('dotenv')
const path = require('path');

//Load the env file
const envPath = path.resolve(__dirname, '../');
dotenv.config({ path: envPath})

const API_KEY = process.env.OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

class GPT {

    async getChatCompletion(prompt, model = 'gpt-3.5-turbo', temperature = 0) {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        };

        const data = {
            model: model,
            messages: [{ role: 'user', content: prompt }],
            temperature: temperature,
        };

        try {
            const response = await axios.post(API_URL, data, { headers });
            return response.data.choices[0].message.content;
        } catch (error) {
            console.error('Error:', error.response.data);
            return null;
        }
    }

    // Usage
    async call(becknFile, businessApi, bisName) {

        const file_loc = "./assets/Beckn Protocols/" + becknFile;
        const beckn_API = converterController.converter(file_loc, true)
        console.log("Beckn API :" + JSON.stringify(beckn_API))

        const beckn_API_Name = becknFile.split(".")[0];

        const business_API = converterController.converter(businessApi, false)
        console.log("business API : " + JSON.stringify(business_API))

        const prompt = promptController.getPrompt(beckn_API, beckn_API_Name, business_API, )
        console.log(prompt)

        var completion = await this.getChatCompletion(prompt);

        completion = completion.replaceAll("API1", beckn_API_Name)
        completion = completion.replaceAll("API2", bisName)

        if (completion) {
            console.log('ChatGPT response:', completion);
            return completion;
        } else {
            console.log('An error occurred.');
            return null;
        }
    }

}

const gptController = new GPT();
module.exports = gptController;
