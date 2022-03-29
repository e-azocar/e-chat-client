import React from "react";
import { FiSend } from "react-icons/fi";
import {
  ChatContainer,
  ChatMessagesContainer,
  ChatFooter,
  MessageInput,
  ChatForm,
  SendButton,
} from "../components/Chat/Chat.styled";
import Header from "../components/Chat/Header";
import Message from "../components/Chat/Message";

const messages = [
  "Hello World",
  "Hola Mundo",
];

const Chat = () => {
  return (
    <ChatContainer>
      <Header />
      <ChatMessagesContainer>
        {messages.map((msg, i) => (
          <Message text={msg} key={i} toMe={i % 2 === 0} />
        ))}
      </ChatMessagesContainer>

      <ChatFooter>
        <ChatForm>
          <MessageInput placeholder="Escribe un mensaje aquí" />
          <SendButton>
            <FiSend />
          </SendButton>
        </ChatForm>
      </ChatFooter>
    </ChatContainer>
  );
};

export default Chat;
