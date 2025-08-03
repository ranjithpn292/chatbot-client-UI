// src/components/ChatBox.tsx
import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  ChatContainer,
  MessageList,
  Message,
  InputRow,
  Input,
  Button,
} from "./styled.components";
import axios from "axios";
import BouncingLoader from "../components/BouncingLoader";

export const ChatBox: React.FC = () => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<
    { text: string | ReactElement; isUser: boolean }[]
  >([]);

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    console.log("ranjith::", e.key === "Enter");
    if (e.key === "Enter") sendMessage();
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");

    try {
      setMessages([
        ...newMessages,
        { text: <BouncingLoader />, isUser: false },
      ]);
      const res = await axios.post("http://localhost:8080/api/chat", {
        message: input,
      });
      const reply = res.data.reply;
      setMessages([...newMessages, { text: reply, isUser: false }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { text: "Error getting response.", isUser: false },
      ]);
    }
  };

  useEffect(() => {
    // Scroll to top when new message is added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ChatContainer>
      <MessageList>
        {messages.map((msg, idx) => (
          <Message key={idx} isUser={msg.isUser}>
            {msg.text}
          </Message>
        ))}
        <div ref={messagesEndRef} />
      </MessageList>
      <InputRow>
        <Input
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />
        <Button onClick={sendMessage}>Send</Button>
      </InputRow>
    </ChatContainer>
  );
};
