// const data = require('./test.json')

// mappings = data.mapping

// // console.log(typeof(mappings))

// let map = new Map()

// mappings.forEach(function(element) {
//     console.log(element.source + " -> " + element.target);
//     map.set(element.source, element.target) 
// });

// console.log(map)


// This code is for v4 of the openai package: npmjs.com/package/openai
// import OpenAI from "openai";
// const OpenAI = require("openai")

// OPENAI_API_KEY = "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"

// const openai = new OpenAI({
//   apiKey: OPENAI_API_KEY,
// });

// const response = openai.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [
//     {
//       "role": "user",
//       "content": "Write a basic json code."
//     }
//   ],
//   temperature: 1,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });

// console.log(response)


// const fs = require('fs');
// const yaml = require('js-yaml');

// var yamlString = ""

// try {
//   yamlString = fs.readFileSync('test.yaml', 'utf8');
//   const yamlObject = yaml.load(yamlString);
//   // console.log(yamlObject);
// } catch (error) {
//   console.error("Error reading or parsing YAML file:", error);
// }

// console.log("------------------------------------------------------------------")
// // console.log(yamlString)



// const yaml = require('js-yaml');

// const fileName = "becknDHCP.yaml"

// var yamlString = ""
// try {
//   yamlString = fs.readFileSync(fileName, 'utf8');
//   const yamlObject = yaml.load(yamlString);
//   console.log(yamlString)
// } catch (error) {
//   console.error("Error reading or parsing YAML file:", error);
// }

// var inputfile = './assets/becknDSEP.yaml',
//     outputfile = 'output_test2.json',
//     yaml = require('js-yaml'),
//     fs = require('fs'),
//     obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
// // this code if you want to save
// const ans = JSON.stringify(obj, null, 2);
// console.log(ans)

// var json = require("./output_test.json")

// var result;

// console.log(json.paths)

// const paths = json.paths

// const myMap = new Map();

// for (const [key, value] of Object.entries(paths)) {
//   myMap.set(key, value.post.description);
//   // console.log(`Key: ${key}, Value: ${value.post.description}`);
// }

// console.log(myMap)






test = require("./service/gpt")

console.log(test.call())