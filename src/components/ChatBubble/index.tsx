import { SpeechWrapper } from "./ChatBubble.styled";
interface ChatBubbleProps {
  type?: "sender" | "recipient";
  group?: "first" | "middle" | "last" | "";
  message: string;
}
export function ChatBubble({ type = "sender", group = "middle", message }: ChatBubbleProps) {
  return (
    <SpeechWrapper>
      <section className="discussion">
        <div className={`bubble ${type} ${group}`}>{message}</div>
      </section>
    </SpeechWrapper>
  );
}
