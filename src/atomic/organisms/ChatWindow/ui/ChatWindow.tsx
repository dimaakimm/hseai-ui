import {
  SChatHeader,
  SChatWindow,
  SMessagesList,
  SProfileImg,
  SProfileInfo,
  SStatus,
} from "./chatWindow.styles.ts";
import { UserChatInput } from "../../../molecules/UserChatInput";
import { useNavigate } from "react-router-dom";

export const ChatWindow = () => {
  const navigate = useNavigate();

  return (
    <SChatWindow>
      <SChatHeader>
        <SProfileImg>
          <img src="/public/bot-logo.png" alt="bot logo" />
        </SProfileImg>
        <SProfileInfo>
          <div>ВШЭ бот</div>
          <SStatus>
            * <div>в сети</div>
          </SStatus>
        </SProfileInfo>
      </SChatHeader>
      <SMessagesList>messagesList</SMessagesList>
      <UserChatInput onSendClick={() => navigate("/")} />
    </SChatWindow>
  );
};
