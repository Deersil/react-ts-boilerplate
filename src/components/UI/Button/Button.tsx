import * as React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({children, onClick, disabled}: Props) => {
  return (
    <div>{children}</div>
  )
};

export default Button;