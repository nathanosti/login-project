import styled from "styled-components";

export const LoginFormWrapper = styled.form`
  width: 40%;
  height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;

  margin: 0 auto;
`;
