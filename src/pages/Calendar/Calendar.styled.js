import styled from 'styled-components';
import { breakpoints } from 'styles/global';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  margin: 20px;

   & > *:first-child {
    width: 70%;
  }

  @media ${breakpoints.lg} {
    flex-direction: column-reverse;

   & > *:first-child {
    width: 95%;
   }
  }
`;

export const Instructions = styled.section`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  padding: 30px 10px 10px;
  border-radius: 5px;
  width: 20%;

  @media ${breakpoints.lg} {
    width: 95%;
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
`;