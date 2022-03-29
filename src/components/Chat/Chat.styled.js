import styled from "styled-components";

export const ChatContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChatMessagesContainer = styled.div`
  flex: 1;
  padding: 1rem 2.5rem;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #323232;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #323232;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #262626;
  }
`;

export const MessageInput = styled.input`
  flex: 1;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.05rem;
  border: none;
  background: #323232;
  color: #fff;

  &:focus {
    outline: none;
    background: #424242;
  }
`;

export const SendButton = styled.button`
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.1rem;
  border: none;
  background: #466869;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #395455;
  }
  &:active {
    background: #4b6d6e;
  }
  &:focus {
    outline: none;
    background: #395455;
  }
`;

export const ChatForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ChatFooter = styled.footer`
  box-sizing: border-box;
  background: #262626;
  padding: 1rem 2.5rem;
`;
