import { groupMessage } from "./helper";
import { useChat } from "components/Chat/useChat";
import { ChatBubble } from "components/ChatBubble";
import { useUserInfo } from "contexts/userInfo";
import { useState } from "react";
import {
  ChatBubbleContainer,
  MessageBoxContainer,
  MessageTextBox,
  SendButton,
} from "./MessagePanel.styled";

export function MessagePanel() {
  const { userInfo } = useUserInfo();
  // recipient should be taken from the list
  const recipient = userInfo?.identity.name === "Jane" ? "Beth" : "Jane";
  const { sendMessage, messages } = useChat(recipient);
  function sendHandler() {
    sendMessage(message);
    setMessage("");
  }
  const [message, setMessage] = useState("");

  const groupedMessages = groupMessage(messages, userInfo?.identity.name);

  return (
    <div>
      <ChatBubbleContainer>
        {groupedMessages?.map((item) => (
            <ChatBubble
              type={item.type}
              group={item.group}
              message={item?.content?.message || ""}
              key={item.id}
            />
          ))}
      </ChatBubbleContainer>
      <MessageBoxContainer>
        <MessageTextBox
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SendButton onClick={sendHandler}>SEND</SendButton>
      </MessageBoxContainer>
    </div>
  );
}
