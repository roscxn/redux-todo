import styled from 'styled-components';

export const WebTheme = styled.div`
  background: linear-gradient(#64d8d1, #4e8fe3);
  min-height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Helvetica', sans-serif;
  color: #000000;
  letter-spacing: 0.2px;

  @media only screen and (max-width: 600px) {
    max-height: 100vh;
    font-size: 10px;
  }
`;

export const ToDoContainerBackground = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 70vh;
  padding: 50px;
  border-radius: 8px;
  overflow-y: auto;

  @media only screen and (max-width: 600px) {
    width: 70%;
    padding: 20px;
  }
`;
