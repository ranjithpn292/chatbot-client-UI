import { styled } from "styled-components";

const ChatContainer = styled.div`
  padding: 12px;
  background-color: #f7f7f7;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MessageList = styled.div`
  flex: 1;
  overflow: auto;
  height: 600px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div<{ isUser: boolean }>`
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  background-color: ${({ isUser }) => (isUser ? "#cde8ff" : "#e0e0e0")};
  color: #333;
  padding: 12px 16px;
  border-radius: 12px;
  margin: 4px 0;
  max-width: 80%;
  overflow-wrap: break-word;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export { ChatContainer, MessageList, Message, InputRow, Input, Button };
