import { ChatClient } from "@azure/communication-chat";
import { useUserInfo } from "contexts/userInfo";
import { useCallback } from "react";
import { CurrentHardCodedUsers, getChatThreadId } from "./helper";

export function useSendMessage(recipientName: string, chatClient?: ChatClient) {
  const { userInfo } = useUserInfo();
  const sendMessage = useCallback(
    function (message: string) {
      const senderName = userInfo?.identity?.name as CurrentHardCodedUsers;
      const threadId = getChatThreadId(
        senderName, // Assuming current user is never undefined
        recipientName
      );
      const chatThreadClient = chatClient?.getChatThreadClient(threadId || "");
      const sendMessageRequest = {
        content: message,
      };
      const sendMessageOptions = {
        senderDisplayName: senderName,
        type: "text",
      };
      chatThreadClient?.sendMessage(sendMessageRequest, sendMessageOptions);
    },
    [chatClient, recipientName, userInfo?.identity?.name]
  );
  return sendMessage;
}
