const avro = require("avsc");

const avroSchema = {
  name: "StatType",
  type: "record",
  fields: [
    {
      name: "statDate",
      type: {
        type: "long",
        logicalType: "timestamp-millis"
      }
    },
    {
      name: "total",
      type: "double"
    }
  ]
};

const type = avro.parse(avroSchema);

module.exports = type;
