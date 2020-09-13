import React from 'react';
import { BubbleWrap, Message, TimeStamp } from './ChatBubble.styled';

const ChatBubble = ({message, time, ...otherProps}) => (
  <BubbleWrap {...otherProps}>
    <Message>{message}</Message>
    <TimeStamp>{time}</TimeStamp>
  </BubbleWrap>
)

export default ChatBubble;