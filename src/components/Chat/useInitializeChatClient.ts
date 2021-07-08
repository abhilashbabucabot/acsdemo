import { AzureCommunicationTokenCredential } from "@azure/communication-common";
import { useEffect, useState } from "react";
import { useUserInfo } from "contexts/userInfo";
import { ChatClient } from "@azure/communication-chat";

export function useInitializeChatClient() {
  const { userInfo } = useUserInfo();
  const [chatClient, setChatClient] = useState<ChatClient>();
  useEffect(() => {
    const tokenCredential = new AzureCommunicationTokenCredential(
      userInfo?.token || ""
    );
    setChatClient(
      new ChatClient(process.env.REACT_APP_ACS_URL || "", tokenCredential)
    );
  }, [userInfo?.token]);
  return chatClient;
}
