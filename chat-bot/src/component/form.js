import React from "react";

import { dialogue } from "./config/messageConfig";
const Form = (props) => {
  // console.log("props", props);
  const {
    handleChange,
    handleSubmit,
    formData,
    chats,
    // handleHelpMsg,
    help,
    handleIssueMsg,
    handleSolutions,
  } = props;
  // console.log("handleBotMessage", handleBotMessage);
  // console.log("chats.message", chats);
  // const [messagesToDisplay, setMessagesToDisplay] = useState([]);
  // console.log('lksshats', chats)
  return (
    <div>
      <div className="text"></div>

      <div
        style={{ width: "35%", height: "500px" }}
        className="chatbot-container"
      >
        <div
          style={{
            backgroundColor: "pink",
            display: "grid",
            height: "100px",
            gridTemplateColumns: "repeat(3, 2fr)",
          }}
          className="chatbot-title"
        >
          <button>RESET</button>
          <h1>CHAT-BOT</h1>
          <button>Speak To Agent</button>
        </div>
        <hr></hr>
        <div
          style={{
            backgroundColor: "pink",
            display: "grid",
            textAlign: "center",
            gap: "5rem",
            height: "100%",
          }}
          className="chatbot-body"
        >
          <input
            id="box"
            className="btn btn-outline-danger"
            value={dialogue[0].introMessage.greetingMessage}
          />
          {chats &&
            chats.map((options, index) => {
              return (
                <div key={index}>
                  <input
                    onClick={(e) => {
                      handleIssueMsg(e);
                    }}
                    type="button"
                    id="box"
                    className="btn btn-outline-danger"
                    value={options}
                  />
                </div>
              );
            })}

          <div>
            {help &&
              help.map((solutions, index) => {
                return (
                  <div key={index}>
                    <input
                      onClick={(e) => {
                        handleSolutions(e);
                      }}
                      type="button"
                      id="box"
                      className="btn btn-outline-danger"
                      value={solutions}
                    />
                  </div>
                );
              })}
          </div>

          {/* <div className="chatbot-footer">
            <form onSubmit={handleSubmit} className="msger-inputarea">
              <input
                type="text"
                name="message"
                className="msger-input"
                onChange={handleChange}
                value={formData.message}
                placeholder="THIS IS SIA THE CHAT BOT HOW CAN I HELP YOU..."
              />
              <button type="submit" className="msger-send-btn">
                Send
              </button>
              <hr />
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
