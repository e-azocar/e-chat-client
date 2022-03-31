import styled from "styled-components";

export const AuthInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  margin: 1rem 0;
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

export const AuthButton = styled.button`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;
  font-size: 1.05rem;
  border: none;
  background: #466869;
  color: #fff;
  cursor: pointer;
  width: 100%;

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
