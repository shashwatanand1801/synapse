const mappingModel = require("../model/mapping")
const gptController = require("../service/gpt")

class Mapping {
    async getAllMapping(req, res) {
    try {
      let Mappings = await mappingModel
        .find({});
      if (Mapping) {
        return res.json({ Mappings });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async postAddProduct(req, res) {

    console.log(req)

    let {specification, bFile, email, bisName}  = req.body;
    if (!specification) {
      return res.json({ error: "Mapping not provided" });
    }
    else {
      try {

        const result = await gptController.call(bFile, specification, bisName)

        console.log(result)

        let newMappings = new mappingModel({
          mapping: JSON.parse(result),
          email: email,
          name: bisName
        });
        let save = await newMappings.save();
        if (save) {
          return res.json({ success: "Mappings save in DB successfully" ,
                            mapping: JSON.parse(result)});
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}

const mappingController = new Mapping();
module.exports = mappingController;
