import users from "../../utils/users.json";
import threads from "../../utils/chatThreads.json";
import { ChatClient } from "@azure/communication-chat";
import { CommunicationIdentifierKind } from "@azure/communication-signaling";

export type CurrentHardCodedUsers = "Beth" | "Jane";

interface CreateThreadParams {
  chatClient: ChatClient;
  communicationUserId: string;
  displayName: string;
  topic: string;
}

export interface ClientChatMessage {
  sender?: CommunicationIdentifierKind;
  id: string;
  senderDisplayName?: string;
  createdOn: Date;
  content?: { message?: string };
}
export function userListForMessage(currentUserName: string) {
  return users.filter((user) => user.identity.name !== currentUserName);
}

export function getChatThreadId(
  currentUserName: CurrentHardCodedUsers,
  name: string
) {
  return threads[currentUserName].find(
    ({ name: userName }) => userName === name
  )?.token;
}

export async function createThread({
  chatClient,
  communicationUserId,
  displayName,
  topic,
}: CreateThreadParams) {
  const createChatThreadRequest = {
    topic,
  };
  const createChatThreadOptions = {
    participants: [
      {
        id: {
          communicationUserId,
        },
        displayName,
      },
    ],
  };
  const createChatThreadResult = await chatClient?.createChatThread(
    createChatThreadRequest,
    createChatThreadOptions
  );
  console.info(`THREAD CREATED WITH ID:: `, createChatThreadResult?.chatThread?.id);
  return createChatThreadResult?.chatThread?.id;
}