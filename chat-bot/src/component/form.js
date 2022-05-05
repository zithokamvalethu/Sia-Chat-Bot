// import { botDataMess fages, msg } from "./chats";
import { useSelector } from "react-redux";

const Form = (props) => {
  let selector = useSelector((state) => state.messages.messages);
  let selectorOptions = useSelector((state) => state.messages.messages[2]);
  let selectorSubOptions = useSelector((state) => state.messages.solutions);
  let selectorSubSolution = useSelector((state) => state.messages.solution);
  console.log("subSolution", selectorSubSolution);

  const {
    handleSolutionMsg,
    // resetButton,
    handleSolutionMessages,
    // initialState,
  } = props;

  return (
    <div className="body">
      <div className="header">
        <h1>THIS IS A CHAT BOT</h1>
      </div>

      <div className="chatbot-container">
        <div className="chatbot-title">
          {/* <button type="reset" className="reset-button">
            RESET
          </button> */}
          <a href="something" className="user-btn">
            {" "}
            reset{" "}
          </a>

          <h2>CHATBOT</h2>
          <a href="090890985" type="number" className="user-btn">
            Agent Toll{" "}
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "auto" }}>
          <p className="intro">{selector[0]}</p>
          <p className="p-tag">{selector[1]}</p>
        </div>
        <br />
        <div style={{ display: "grid", gridTemplateColumns: "auto" }}>
          {selectorOptions
            ? selectorOptions &&
              selectorOptions.map((optionsMsg, index) => {
                console.log("optionsMsg");
                return (
                  <div key={index}>
                    <input
                      className="user-texts"
                      onClick={(e) => handleSolutionMsg(e)}
                      type="button"
                      value={optionsMsg}
                    />
                  </div>
                );
              })
            : ""}
        </div>

        {selectorSubOptions &&
          selectorSubOptions.map((subOption, key) => {
            return (
              <div className="response-texts" key={key}>
                <input
                  type="button"
                  value={subOption}
                  onClick={(e) => handleSolutionMessages(e)}
                ></input>
              </div>
            );
          })}
        <div>
          {selectorSubSolution &&
            selectorSubSolution.map((subSolution, values) => {
              return (
                <div className="bot-solution" key={values}>
                  <textarea
                    // type="button"
                    value={subSolution}
                    disabled
                    // onClick={(e) => handleSolutionMessages(e)}
                  ></textarea>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Form;
