import { useUserInfo } from "contexts/userInfo";
import { TopicCard } from "../TopicCard";
import { MessagePanel } from "components/MessagePanel";
import {
  ChatContainer,
  MessagePanelContainer,
  TopicPanel,
} from "./chat.styled";

export function Chat() {
  const { userInfo } = useUserInfo();
  const topics = Array.from(Array(5).keys());
  if (!userInfo) return <div>Error...</div>;
  return (
    <ChatContainer>
      <TopicPanel>
        {topics.map((topic) => (
          <TopicCard key={topic} />
        ))}
      </TopicPanel>
      <MessagePanelContainer>
        <MessagePanel />
      </MessagePanelContainer>
    </ChatContainer>
  );
}
