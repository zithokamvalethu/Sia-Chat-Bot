const dataMessages = require("../botMessageConfig.json");

// // let dataMessages = botTreeMessages[0];
const messages = (app) => {
  // app.get("/message", async (req, res) => {
  //   let data = dataMessages.botTreeMessages.introMessage;
  //   res.send(data);
  //   // console.log("data", data);
  // });
  app.get("/message", async (req, res) => {
    let options = dataMessages.botTreeMessages.msgOptions;
    res.send(options);
    console.log("options", options);
  });
};
const solutions = (app) => {
  app.get("/solution", async (req, res) => {
    let solutions = dataMessages.botTreeMessages.options;
    res.send(solutions);
    console.log("solution", solutions);
  });
};

const webSolutions = (app) => {
  app.get("/help", async (req, res) => {
    let solutions = dataMessages.botTreeMessages.solutions1;
    res.send(solutions);
    console.log("solution1", solutions);
  });
};
module.exports = { messages, solutions, webSolutions };
