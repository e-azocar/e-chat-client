import React from "react";
import { MessageBody, MessageContainer } from "./Message.styled";

const Message = ({ text = "", fromMe = false }) => {
  return (
    <MessageContainer fromMe={fromMe}>
      <MessageBody fromMe={fromMe}>{text}</MessageBody>
    </MessageContainer>
  );
};

export default Message;
