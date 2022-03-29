import React from "react";
import { MessageBody, MessageContainer } from "./Message.styled";

const Message = ({ text = "", toMe = true }) => {
  return (
    <MessageContainer toMe={toMe}>
      <MessageBody toMe={toMe}>{text}</MessageBody>
    </MessageContainer>
  );
};

export default Message;
