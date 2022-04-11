import React, { useState, useEffect } from "react";

import { dialogue } from "./config/messageConfig";
import Form from "./form";

function Chats() {
  const [formData, setFormData] = useState({
    name: "",
  });
  // const [userName, setUserName] = useState([]);
  const [chats, setChats] = useState([]);
  const [help, setHelp] = useState([]);

  useEffect(() => {
    setTimeout(handleHelpMsg, 2000);
    // setTimeout(handleIssueMsg, 2000);
    // Update the document title using the browser API
    // handleIssueMsg();
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const handleSubmit = () => {
  //   if (userName.length === 0) {
  //     setUserName([...userName, formData.name]);
  //   }
  //   setFormData({ message: "" });
  //   // handleHelpMsg();
  // };

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
    var conversation = dialogue[0];
    var value = e.target.value;
    if (value.match("Having a problem with updating Chrome Version?")) {
      setChats([...chats].concat(conversation.updatingChrome));
    } else if (value.match("Having a problem creating Gmail account")) {
      setChats([...chats].concat(conversation.creatingGmailAccount));
    } else if (value.match("Having problem signing-In to google Chrome")) {
      setChats([...chats].concat(conversation.signInToChrome));
    }
  };

  const handleSolutions = (e) => {
    var solutions = dialogue[0];
    var value = e.target.value;
    if (value.match("Update Google Chrome?")) {
      setChats([...chats].concat(solutions.botUpdateSolution));
      console.log("solutions", solutions.botUpdateSolution);
    } else if (value.match("Create A google For Myself")) {
      setChats([...chats].concat(solutions.botGmailSolution));
    } else if (value.match("Forgot password")) {
      setChats([...chats].concat(solutions.botSignInSolution));
    }
  };
  return (
    <div>
      <Form
        handleChange={handleChange}
        // handleSubmit={handleSubmit}
        formData={formData}
        chats={chats}
        help={help}
        handleHelpMsg={handleHelpMsg}
        handleIssueMsg={handleIssueMsg}
        handleSolutions={handleSolutions}
      />
    </div>
  );
}

export default Chats;
