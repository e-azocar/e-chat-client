import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 0.5rem 0;
  justify-content: ${({ fromMe }) => (fromMe ? "flex-end" : "flex-start")};
`;

export const MessageBody = styled.div`
  box-sizing: border-box;
  width: fit-content;
  max-width: 60%;
  border-radius: 1rem;
  background: ${({ fromMe }) => (fromMe ? "#466869" : "#262626")};
  color: #fff;
  padding: 0.8rem;
`;
