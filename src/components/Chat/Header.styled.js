import styled from "styled-components";

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  background: #262626;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5);
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  color: #f1f1f1;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const HeaderImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

export const HeaderTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.p`
  font-size: 1.4rem;
  color: #d9d9d9;
  margin: 0;
`;

export const HeaderSubtitle = styled.p`
  font-size: 0.9rem;
  color: #a6a6a6;
  margin: 0;
`;
