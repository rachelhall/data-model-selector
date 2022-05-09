import React from "react";

import "./Button.scss";

interface IProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<IProps> = (props) => {
  const { onClick, children } = props;

  const handleClick = () => {
    onClick();
  };
  return (
    <button className="Button" type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
