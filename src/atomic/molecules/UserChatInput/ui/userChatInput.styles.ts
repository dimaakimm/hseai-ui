import styled from "styled-components";
import { Button, Input } from "antd";

export const SUserInput = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryGrey};
  width: 100%;
  max-width: 600px;
  padding: 10px;
  border-radius: 10px;
`;

export const STextArea = styled(Input.TextArea).attrs({ autoSize: true })`
  max-height: 300px;
  min-height: 80px;
  resize: none;
  padding: 0;
  background-color: unset !important;
  border: none !important;
  box-shadow: none !important;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryLightGrey};
  }
`;

export const SChatPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const SButtonsSection = styled.div``;

export const SSendButton = styled(Button)``;
