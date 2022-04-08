const { conversationChats } = require("../db");

const insertData = async () => {
  const [message, response] = process.argv.slice(4).join(" ");

  console.log(process.argv.slice(4).join(" "));

  try {
    const res = await conversationChats.query(
      "INSERT INTO chats(message, response) VALUES ($1, $2)",
      [message, response]
    );
    console.log(
      `Hi Friend This Is Sia The Chat Bot!, I need help with creating a new Gmail account ${
        (message, response)
      }`
    );
  } catch (error) {
    console.log(error);
  }
};

insertData();
