import axios from "axios";
import React from "react";

const ChatPage = () => {
  const fetch = async () => {
    let res = await axios.get("http://127.0.0.1:5000/chat/");
    console.log(res.data);
  };
  fetch();

  return <div></div>;
};

export default ChatPage;
