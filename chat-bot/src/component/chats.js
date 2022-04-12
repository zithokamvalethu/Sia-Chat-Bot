import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessages } from "../redux/actions/chatbot";

function Chats() {
  let chats = useSelector((state) => state.messages);
  let dispatch = useDispatch();
  console.log("chats", chats);
  // useEffect(() => {
  //   setTimeout(2000);
  //   getMessages();
  // });

  return (
    <div>
      <button onClick={() => dispatch(getMessages())}>BUTTON</button>
    </div>
  );
}

export default Chats;
