import { Card } from "../Card";
import {
  Avatar,
  ColumnContainer,
  Message,
  Name,
  RowContainer,
  Status,
  TopicContainer,
  UserContainer,
} from "./TopicCard.styled";
export function TopicCard() {
  return (
    <Card>
      <TopicContainer>
        <UserContainer>
          <RowContainer>
            <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
            <ColumnContainer>
              <Name>Donald Johnson</Name>
              <Status>Offline</Status>
            </ColumnContainer>
          </RowContainer>
          <Status>3h ago</Status>
        </UserContainer>
        <Message>Sample message sent from the user</Message>
      </TopicContainer>
    </Card>
  );
}
