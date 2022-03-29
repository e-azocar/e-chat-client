import { useState } from "react";
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
import { io } from "socket.io-client";
import { SERVER_URL } from "../config";

const socket = io(SERVER_URL);

const Chat = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([{ text: "Hello" }]);

  socket.on("message:new", (data) => {
    setMessages([...messages, data]);
  });

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("message:new", { text: userMessage, user: "admin" });
    setUserMessage("");
  };

  const changeHandler = (e) => setUserMessage(e.target.value);

  return (
    <ChatContainer>
      <Header />
      <ChatMessagesContainer>
        {messages.map((msg, i) => (
          <Message text={msg.text} key={i} toMe={i % 2 === 0} />
        ))}
      </ChatMessagesContainer>

      <ChatFooter>
        <ChatForm onSubmit={sendMessage}>
          <MessageInput
            placeholder="Escribe un mensaje aquí"
            onChange={changeHandler}
            value={userMessage}
          />
          <SendButton>
            <FiSend />
          </SendButton>
        </ChatForm>
      </ChatFooter>
    </ChatContainer>
  );
};

export default Chat;
