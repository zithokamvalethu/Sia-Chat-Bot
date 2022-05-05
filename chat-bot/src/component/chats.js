import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import Form from "./form";

import {
  getMessages,
  getSolutions,
  getFirstWebSolutions,
} from "../redux/actions/chatbot";
function Chats() {
  const [chatsMsg, setChatMessages] = useState([]);
  const [botSolution, setBotSolution] = useState([]);
  const [solution, setSolution] = useState([]);
  const [initialState, setInitialState] = useState([]);
  // let options = useSelector((state) => state.solutions);
  // let firstSolution = useSelector((state) => state.solution);

  let dispatch = useDispatch();

  useEffect(() => {
    handleOptionsMsg();
  }, []);
  const handleOptionsMsg = async () => {
    return await axios
      .get("http://localhost:3009/message/")
      .then((res) => {
        dispatch(
          getMessages([
            res.data.introMessage[0],
            "SIA CHAT BOT CAN ASSIST YOU IF YOUR ISSUES IS AS LISTED BELOW...",
            res.data.option1,
          ])
        );
        if (chatsMsg) {
          setChatMessages([
            ...chatsMsg,
            res.data.introMessage[0],
            "SIA CHAT BOT CAN ASSIST YOU IF YOUR ISSUES IS AS LISTED BELOW...",
            res.data.option1,
          ]);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSolutionMsg = async (e) => {
    var value = e.target.value;
    let options = await axios
      .get("http://localhost:3009/message/")
      .then((res) => {
        return res.data.option1;
      })
      .catch((error) => console.log(error));
    // console.log("options", options);
    let solutions = await axios
      .get("http://localhost:3009/solution/")
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error));

    // if (option.match(value)) {
    //   dispatch(getSolutions(solutions));
    //   setSolution(...solution, solutions);
    // }

    if (options[0] === value) {
      dispatch(getSolutions(solutions.option1));
      setSolution([...solution, solutions]);
    } else if (options[1] === value) {
      dispatch(getSolutions(solutions.option2));
      setSolution([...solution, solutions]);
    } else {
      dispatch(getSolutions(solutions.option3));
      setSolution([...solution, solutions]);
    }
  };

  const handleSolutionMessages = async (e) => {
    var value = e.target.value;
    let options = await axios
      .get("http://localhost:3009/solution/")
      .then((res) => {
        return res.data;
      })

      .catch((error) => console.log(error));
    console.log("options", options);
    let solutions = await axios
      .get("http://localhost:3009/help/")
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error));
    console.log("helps", solutions);

    if (options.option1[0] === value) {
      dispatch(getFirstWebSolutions(solutions.option1[0]));
      console.log("disthfgch", options.option1[0]);
      setSolution([...solution, solutions]);
    } else if (options.option1[1] === value) {
      dispatch(getFirstWebSolutions(solutions.option1[1]));
      setSolution([...solution, solutions]);
    } else if (options.option1[2] === value) {
      dispatch(getFirstWebSolutions(solutions.option1[2]));
      setSolution([...solution, solutions]);
    } else if (options.option2[0] === value) {
      dispatch(getFirstWebSolutions(solutions.option2[0]));
      setSolution([...solution, solutions]);
    } else if (options.option2[1] === value) {
      dispatch(getFirstWebSolutions(solutions.option2[1]));
      setSolution([...solution, solutions]);
    } else if (options.option2[2] === value) {
      dispatch(getFirstWebSolutions(solutions.option2[2]));
      setSolution([...solution, solutions]);
    } else if (options.option3[0] === value) {
      dispatch(getFirstWebSolutions(solutions.option3[0]));
      setSolution([...solution, solutions]);
    } else if (options.option3[1] === value) {
      dispatch(getFirstWebSolutions(solutions.option3[1]));
      setSolution([...solution, solutions]);
    }
  };

  // const resetButton = () => {
  //   for (let i = 0; i < initialState.length; i++) {
  //     if (i == 0) {
  //       setInitialState([initialState[i]]);
  //     }
  //   }
  // };
  return (
    <div>
      <Form
        // resetButton={resetButton}
        // initialState={initialState}
        chatsMsg={chatsMsg}
        botSolution={botSolution}
        handleOptionsMsg={handleOptionsMsg}
        handleSolutionMsg={handleSolutionMsg}
        handleSolutionMessages={handleSolutionMessages}
      />
    </div>
  );
}

export default Chats;
