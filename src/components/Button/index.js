import React from 'react';
import { BaseButton } from './Button.styled';

const Button = (props) => {
  const { onClick, disabled = false, children, ...otherProps} = props;

  return (
    <BaseButton onClick={onClick} disabled={disabled} {...otherProps}>
      {children}
    </BaseButton>
  )
}

export default Button;