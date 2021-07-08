import { ChatClient, ChatMessage } from "@azure/communication-chat";
import { useUserInfo } from "contexts/userInfo";
import { useEffect, useState } from "react";
import { PAGE_SIZE } from "../../constants";
import {
  ClientChatMessage,
  CurrentHardCodedUsers,
  getChatThreadId,
} from "./helper";

export function useMessage(recipientName: string, chatClient?: ChatClient) {
  const { userInfo } = useUserInfo();
  const [messages, setMessages] = useState<ClientChatMessage[]>();
  useEffect(() => {
    async function getMessages() {
      const threadId = getChatThreadId(
        userInfo?.identity?.name as CurrentHardCodedUsers, // Assuming current user is never undefined
        recipientName
      );
      const chatThreadClient = chatClient?.getChatThreadClient(threadId || "");
      const getMessagesResponse = chatThreadClient?.listMessages({
        maxPageSize: PAGE_SIZE,
      });
      let messages_temp: ChatMessage[] = [];
      if (getMessagesResponse)
        for await (let page of getMessagesResponse.byPage()) {
          for (const message of page) {
            if (!messages_temp.find((item) => item.id === message.id))
              messages_temp.push(message);
          }
        }
      const reduced_messages = messages_temp
        .filter((item) => item.type === "text")
        .map(({ sender, id, senderDisplayName, createdOn, content }) => ({
          sender,
          id,
          senderDisplayName,
          createdOn,
          content,
        }))
        .reverse();
      setMessages([...reduced_messages]);
    }
    getMessages();
  }, [chatClient, recipientName, userInfo]);
  return messages;
}
