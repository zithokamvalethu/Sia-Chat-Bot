const { conversationChats } = require("../db");

const retrieveData = async () => {
  try {
    const res = await conversationChats.query("SELECT * FROM chats");
    console.log(res.rows);
  } catch (error) {
    console.error(error);
  }
};

retrieveData();
