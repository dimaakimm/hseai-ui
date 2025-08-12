import {
  SButtonsSection,
  SChatPanel,
  SSendButton,
  STextArea,
  SUserInput,
} from "./userChatInput.styles.ts";
import { ArrowUp } from "../../../../shared/assets";
import type { UserChatInputProps } from "../model/userChatInput.types.ts";
import type { FC } from "react";

export const UserChatInput: FC<UserChatInputProps> = ({ onSendClick }) => {
  return (
    <SUserInput>
      <STextArea placeholder="Задайте вопрос нашему боту!">textarea</STextArea>
      <SChatPanel>
        <SButtonsSection>
          <SSendButton icon={<ArrowUp />} onClick={onSendClick} />
        </SButtonsSection>
      </SChatPanel>
    </SUserInput>
  );
};
