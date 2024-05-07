import styled from "styled-components";

export const DisplayTodoBox = styled.div`
  display: flex;
  font-size: 17px;
  align-items: center;
  background-color: #f2f2f2;
  width: 485px;
  height: 50px;
  margin-top: 40px;

  @media only screen and (max-width: 600px) {
    width: 95%;
    margin-top: 25px;
    font-size: 14px;
  }
`;

export const LineThroughText = styled.span`
  text-decoration: line-through;
`;

export const ButtonClearSearch = styled.button`
  background-color: #A4A4A4;
  color: #ffffff;
  width: 50px;
  height: 50px;
  font-size: 15px;
  border-radius: 3px;
  border: none;
  margin-left: 10px;

  @media only screen and (max-width: 600px) {
    width: 15%;
    font-size: 12px;
  }
`;