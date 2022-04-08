const { Pool } = require("pg");

const conversationChats = new Pool({
  user: "postgres",
  database: "chatbot",
  password: "newpassword",
  port: 5432,
  host: "localhost",
});

// module.exports = {};
// const getClient = async () => {
//   const client = await conversationChats.connect();
//   return client;
// };

module.exports = {
  conversationChats,
};
