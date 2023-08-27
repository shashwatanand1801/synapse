const mongoose = require("mongoose");

const mappingSchema = new mongoose.Schema(
  {
    mapping:{
        type: Object,
    },
    email: String,
    name: String
  },
  { timestamps: true }
);

const mappingModel = mongoose.model("mapping", mappingSchema);
module.exports = mappingModel;
