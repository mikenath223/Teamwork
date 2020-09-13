import styled from 'styled-components';

export const BubbleWrap = styled.div`
  margin-right: 9%;

  &.reversed {
    margin-left: -9%;
  }

  p {
    display: inline-block;
  }

`;

export const Message = styled.p`
  text-align: left;
`

export const TimeStamp = styled.p`
  text-align: right;
`