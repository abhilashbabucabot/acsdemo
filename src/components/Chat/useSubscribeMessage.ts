import { ChatClient } from "@azure/communication-chat";
import { useEffect, useRef } from "react";
import { ClientChatMessage } from "./helper";

export async function useSubscribeMessage(
  onMessageReceived: (clientMessage: ClientChatMessage) => void,
  chatClient?: ChatClient
) {
  const notifyCallBackRef = useRef(onMessageReceived);
  useEffect(() => {
    async function startNoification() {
      await chatClient?.startRealtimeNotifications();
      chatClient?.on("chatMessageReceived", async (event) => {
        const clientChatMessage = {
          sender: event.sender,
          id: event.id,
          senderDisplayName: event.senderDisplayName,
          createdOn: event.createdOn,
          content: { message: event.message },
        };
        notifyCallBackRef.current(clientChatMessage);
      });
    }
    startNoification();
  }, [chatClient]);
}
