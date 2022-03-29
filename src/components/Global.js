import styled from "styled-components";

export const AppContainerWrapper = styled.div`
  width: 70%;
  height: 90vh;

  @media (max-width: 850px) {
    width: 80%;
  }

  @media (max-width: 660px) {
    width: 100%;
    height: 100%;
  }
`;

export const AppContainer = styled.section`
  background: #323232;
  height: 100%;
  -webkit-box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.5);
`;
