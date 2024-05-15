import styled from "styled-components"

export const TextBox = styled.input`
  height: 47px;
  font-size: 18px;
  padding: 0 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 400px;

  @media only screen and (max-width: 600px) {
    width: 68%;
    font-size: 15px;
  }

  @media only screen and (max-width: 330px) {
    width: 64%;
    margin-top: 25px;
    font-size: 15px;
  }
`

export const ButtonSubmitTask = styled.button`
  background-color: #8d4be4;
  color: #ffffff;
  width: 50px;
  height: 50px;
  font-size: 20px;
  border-radius: 3px;
  border: none;
  margin-left: 10px;

  @media only screen and (max-width: 600px) {
    width: 15%;
    font-size: 16px;
  }
`

export const SuccessSubmitMessage = styled.div`
  font-size: 14px;
  color: #11ba02;
  text-align: right;
  margin: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`

export const ErrorSubmitMessage = styled.div`
  font-size: 14px;
  color: #f10101;
  text-align: right;
  margin: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`
