import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-4tUQvv59uIFSbjGHBpFTR96v",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

