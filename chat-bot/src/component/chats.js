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
    // setTimeout(handleIssueMsg, 2000);
    // Update the document title using the browser API
    // handleIssueMsg();
  });
  const [help, setHelp] = useState([]);


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
    let botHelpMessages = dialogue[0].botHelp.possibleClientIssues;
    // console.log("botMainMenuOptions", botHelpMessages);

    if (chats.length === 0) {
      var msg = [...chats].concat(botHelpMessages);
      setChats(msg);
      // handleIssueMsg();
    }
  };

  const handleIssueMsg = (e) => {
    var convo = dialogue[0];
    var value = e.target.value;
    if (value.match("Having a problem with updating Chrome Version?")) {
      setChats([...chats].concat(convo.updatingChrome));
    } else if (value.match("Having a problem creating Gmail account")) {
      setChats([...chats].concat(convo.creatingGmailAccount));
    } else if (value.match("Having problem signing-In to google Chrome")) {
      setChats([...chats].concat(convo.signInToChrome));
    }
  };

  const handleSolutions = () => {
      var solutions = dialogue[0];
      var value = e.target.value;
      if (value.match("Having a problem with updating Chrome Version?")) {
        setChats([...chats].concat(solutions.updatingChrome));
      } else if (value.match("Having a problem creating Gmail account")) {
        setChats([...chats].concat(solutions.creatingGmailAccount));
      } else if (value.match("Having problem signing-In to google Chrome")) {
        setChats([...chats].concat(solutions.signInToChromeza));
      }
    };
  }

  return (
    <div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        chats={chats}
        handleHelpMsg={handleHelpMsg}
        handleIssueMsg={handleIssueMsg}
      />
    </div>
  );
}

export default Chats;
