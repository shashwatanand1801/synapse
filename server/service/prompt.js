
class PromptEng {

        getPrompt(beckn_API, beckn_API_Name, business_API, bisName){
                const prompt = "You are a mapping software which analyse and maps between the endpoints of two APIs following Open API specifications." +
                "Now analyse the following two APIs delimited by three ticks and give the mapping between both the APIs.\n\n" +
                "API1: \n```\n" + JSON.stringify(beckn_API) + "\n```\n\nAPI2:\n```" + JSON.stringify(business_API) + 
                "\n```\n\nProvide your response with the following JSON schema in three ticks:\n\n" +
                "{\n\"mapping\" : [ \n {\n\"API1\": \" \",\n\"API2\": \" \",\n\"description\": \" \"\n}\n]\n}\n```";
                
                return prompt;
        }
}

const promptController = new PromptEng();
module.exports = promptController;