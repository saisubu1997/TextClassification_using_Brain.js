const brain = require("brain.js");
const data = require("./data.json");

const network = new brain.recurrent.LSTM();

const trainingdata = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingdata);
const output = network.run("I fixed the power supply");
console.log(output);
