import { ClientChatMessage } from "components/Chat/helper";

interface GroupedMessage extends ClientChatMessage {
    type: "sender" | "recipient";
    group: "first" | "middle" | "last" | "";
  }
export function groupMessage(messages: ClientChatMessage[], userName?: string) {
    return messages.map((message, index): GroupedMessage => {
        const getType = (item: ClientChatMessage) =>
          item?.senderDisplayName === userName
            ? "sender"
            : "recipient";
    
        const currrentMessageType = getType(message);
        const lastMessageType = index !== 0 ? getType(messages[index - 1]) : null;
        const nextMessageType =
          index !== messages.length - 1 ? getType(messages[index + 1]) : null;
    
        const getGroupType = () => {
          if (lastMessageType === undefined) return "first";
          if (!nextMessageType === undefined) return "last";
          if (
            currrentMessageType === lastMessageType &&
            currrentMessageType === nextMessageType
          )
            return "middle";
          if (currrentMessageType === lastMessageType) return "last";
          if (currrentMessageType === nextMessageType) return "first";
          return "";
        };
    
        const group = getGroupType();
    
        return { ...message, group, type: currrentMessageType };
      });
}