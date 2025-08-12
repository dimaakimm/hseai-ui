import styled from "styled-components";

export const SChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.primaryLightGrey};
  border: 5px solid ${({ theme }) => theme.colors.darkBlue};
  margin: 20px;
`;

export const SChatHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryGrey};
  display: flex;
  gap: 6px;
`;

export const SMessagesList = styled.div`
  flex: 1;
`;

export const SUserInput = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryGrey};
  height: 50px;
`;

export const SProfileImg = styled.div`
  width: 40px;
`;

export const SProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SStatus = styled.div`
  display: flex;
`;
