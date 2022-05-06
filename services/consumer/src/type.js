const avro = require("avsc");

module.exports = avro.parse({
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
});
