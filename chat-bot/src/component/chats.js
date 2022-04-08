import React, { useState, useEffect } from "react";

import { dialogue } from "./config/messageConfig";
import Form from "./form";

function Chats() {
  const [formData, setFormData] = useState({
    message: "",
  });
  //   const [displayBotMessage, setDisplayBotMessage] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
        setTimeout(handleHelpMsg, 2000);
    // Update the document title using the browser API
  });
  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (state, stateFn) => {
    if (chats.length === 0) {
      //   setChats([...chats, formData]);
      stateFn((state) => [...state, formData.message]);
    }
    setFormData({ message: "" });
    // handleBotMessage();
  };

  const handleHelpMsg = () => {
    // let botMainMenuOptions = dialogue[0].introMessage;
    let botHelpMessages = dialogue[0].botHelp.possibleClientIssues
    // console.log("botMainMenuOptions", botHelpMessages);
    
    if (chats.length === 0) {
        var msg = [...chats].concat(botHelpMessages);
      setChats(msg);
    }
    console.log('chats', chats)
    // if (botIntroMessageEmailRequest) {
    //   return botIntroMessageEmailRequest;
    //   // setTimeout(() => {}, 1000);
    // }
  };
  return (
    <div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        chats={chats}
        handleHelpMsg={handleHelpMsg}
      />
    </div>
  );
}

export default Chats;
