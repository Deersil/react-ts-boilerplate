import * as React from 'react';

interface Props {
  children: React.ReactNode;
  disabled: boolean;
}

const Button = ({children, disabled}: Props) => {
  return (
    <div>{children}</div>
  )
};

export default Button;