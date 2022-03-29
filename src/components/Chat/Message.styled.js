import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 0.5rem 0;
  justify-content: ${({ toMe }) => (toMe ? "flex-start" : "flex-end")};
`;

export const MessageBody = styled.div`
  box-sizing: border-box;
  width: fit-content;
  max-width: 60%;
  border-radius: 1rem;
  background: ${({ toMe }) => (toMe ? "#262626" : "#466869")};
  color: #fff;
  padding: 0.8rem;
`;
