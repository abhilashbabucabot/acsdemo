import styled from "styled-components";

export const SpeechWrapper = styled.div`
  .discussion {
    max-width: 600px;
    margin: 0 auto;

    display: flex;
    flex-flow: column wrap;
  }

  .discussion > .bubble {
    border-radius: 1em;
    padding: 0.25em 0.75em;
    margin: 0.0625em;
    max-width: 50%;
  }

  .discussion > .bubble.sender {
    align-self: flex-start;
    background-color: #53ceb4;
    color: #fff;
  }
  .discussion > .bubble.recipient {
    align-self: flex-end;
    background-color: #efefef;
  }

  .discussion > .bubble.sender.first {
    border-bottom-left-radius: 0.1em;
  }
  .discussion > .bubble.sender.last {
    border-top-left-radius: 0.1em;
  }
  .discussion > .bubble.sender.middle {
    border-bottom-left-radius: 0.1em;
    border-top-left-radius: 0.1em;
  }

  .discussion > .bubble.recipient.first {
    border-bottom-right-radius: 0.1em;
  }
  .discussion > .bubble.recipient.last {
    border-top-right-radius: 0.1em;
  }
  .discussion > .bubble.recipient.middle {
    border-bottom-right-radius: 0.1em;
    border-top-right-radius: 0.1em;
  }
`;
