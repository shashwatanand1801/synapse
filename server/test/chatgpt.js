const axios = require('axios');

const fs = require('fs');
const yaml = require('js-yaml');

const API_KEY = "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";
const API_URL = 'https://api.openai.com/v1/chat/completions';

async function getChatCompletion(prompt, model = 'gpt-3.5-turbo', temperature = 0) {
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

//getting yaml
function getYaml(fileName){
  var yamlString = ""
  try {
    yamlString = fs.readFileSync(fileName, 'utf8');
    const yamlObject = yaml.load(yamlString);
    return yamlString
  } catch (error) {
    console.error("Error reading or parsing YAML file:", error);
    return null
  }
  
}

// Usage
async function main() {

  const beckn_API = getYaml('becknDHCP.yaml')
  // console.log(getYaml('becknDHCP.yaml'))

  const business_API = getYaml('onlineCourse.yaml')
  console.log(typeof (business_API))

  const prompt = 'You are a mapping software which analyse and maps between the endpoints of two APIs following Open API specifications.'
  + 'Now analyse the following two APIs delimited by three ticks and give the mapping between both the apis in a JSON format.\n'
  + 'API 1 : \n' + '```\n' + JSON.stringify(beckn_API) + '\n```\n' + '\nAPI 2  :\n' + '```\n' + JSON.stringify(business_API) + '\n```\n' ;
  console.log(prompt)
  const completion = await getChatCompletion(prompt);
  if (completion) {
    console.log('ChatGPT response:', completion);
    const jsonString = JSON.stringify(completion);
    fs.writeFileSync('output.json', jsonString, 'utf-8');

  } else {
    console.log('An error occurred.');
  }
}

main();
