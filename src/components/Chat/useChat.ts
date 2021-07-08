import { useEffect, useState } from "react";
import { useSubscribeMessage } from "./useSubscribeMessage";
import { useInitializeChatClient } from "./useInitializeChatClient";
import { useMessage } from "./useMessage";
import { useSendMessage } from "./useSendMessage";
import {
  ClientChatMessage,
} from "./helper";

interface State {
  messages: ClientChatMessage[];
}

const initialState = { messages: [] };


export function useChat(recipient: string) {
  const [state, setState] = useState<State>(initialState);

  function destroyState() {
    setState(initialState);
  }

  const chatClient = useInitializeChatClient();

  useSubscribeMessage(function (message) {
    if (!state.messages.find((item) => item.id === message.id)) {
      setState((state) => ({
        ...state,
        messages: [...state.messages, message],
      }));
    }
  }, chatClient);

  const messageList = useMessage(recipient, chatClient);

  useEffect(() => {
    if (messageList) {
      setState((state) => ({
        ...state,
        messages: [...messageList, ...state.messages],
      }));
    }
    return destroyState
  }, [messageList]);

  const sendMessage = useSendMessage(recipient, chatClient);

  return { sendMessage, messages: state.messages };
}
