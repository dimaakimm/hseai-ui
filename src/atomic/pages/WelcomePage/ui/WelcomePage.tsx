import {
  SPageWrapper,
  SWelcomeDescription,
  SWelcomeImg,
  SWelcomeTitle,
  SWelcomeTitleText,
} from "./welcomePage.styles.ts";
import { UserChatInput } from "../../../molecules/UserChatInput";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <SPageWrapper>
      <SWelcomeTitle>
        <SWelcomeImg>
          <img src="/public/bot-logo.png" alt="bot logo" />
        </SWelcomeImg>
        <SWelcomeTitleText>Умный помощник ВШЭ</SWelcomeTitleText>
      </SWelcomeTitle>
      <SWelcomeDescription>Как я могу Вам помочь?</SWelcomeDescription>
      <UserChatInput onSendClick={() => navigate("/chat")} />
    </SPageWrapper>
  );
};

export default WelcomePage;
