import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[] | string;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button>{children}</button>;
};

export default Button;
