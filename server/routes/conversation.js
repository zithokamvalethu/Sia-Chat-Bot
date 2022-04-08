const { retrieveData } = require("../retrieveData");
const { addData } = require("../addData/insertData");

const messages = (app) => {
  app.get("/", async (req, res) => {
    const messages = await getMessages();
    console.log("messages", messages);
    res.send(messages);
  });

  app.post("/message", async (req, res) => {
    try {
      const { messages, response } = req.body;
      if (messages == "" || response == "") {
        return res.send(400);
      }

      const conversation = new Messages({ messages, response });
      const value = await conversation.save();
      console.log(value);
      res.send(value);
    } catch (err) {
      console.log(err);
      res.send(501);
    }
  });
};
module.exports = { messages, retrieveData, addData };
