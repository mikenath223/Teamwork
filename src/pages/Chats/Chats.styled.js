import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  & > *:first-child {
    margin-left: 10%;
  }
  & > *:nth-child(2) {
    margin-right: 10%;
  }
`;
