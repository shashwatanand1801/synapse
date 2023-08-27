const yaml = require('js-yaml')
const fs = require('fs')

class JsonConverter {
    
    converter(inputfile, isFile){
        var obj
        if(isFile){
            obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
        }else{
            obj = yaml.load(inputfile);
        }

        const paths = obj.paths

        const myMap = {};

        for (const [key, value] of Object.entries(paths)) {

            const subMap = {};
            for(const[sub_key, sub_value] of Object.entries(value)) {
                
                if(sub_value.description != null){
                    subMap[sub_key] = sub_value.description;
                } else if(sub_value.summary != null){
                    subMap[sub_key] = sub_value.summary;
                } else {
                    subMap[subMap] = "";
                }
            }
            myMap[key] = subMap;

        }
        return myMap
    }

}


const converterController = new JsonConverter();
module.exports = converterController;
