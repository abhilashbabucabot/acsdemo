import styled from "styled-components";

export const ChatBubbleContainer = styled.div`
  height: 90vh;
  overflow: auto;
`;

export const MessageBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const MessageTextBox = styled.input`
  width: 70%;
  height: 40px;
  border-radius: 20px;
  background-color: #f0f0f0;
  border: none;
`;

export const SendButton = styled.button`
  background-color: #53ceb4;
  border-radius: 7px;
  width: 30%;
  border: none;
  color: white;
  font-size: medium;
  font-weight: bold;
`;
