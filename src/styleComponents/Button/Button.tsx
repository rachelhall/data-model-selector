import React, { FunctionComponent, ReactNode } from "react";
import cx from "classnames";

import "./Button.scss";

interface IProps {
  className?: string;
  onClick: (value?: any) => void;
  children: ReactNode;
  icon?: FunctionComponent;
  buttonType?: "primary" | "outline" | "active";
}

export const Button: React.FC<IProps> = (props) => {
  const {
    onClick,
    children,
    className,
    icon: Icon,
    buttonType = "primary",
  } = props;

  const handleClick = () => {
    onClick();
  };

  const mainClass = cx(
    "Button",
    buttonType === "outline"
      ? "Button--outline"
      : buttonType === "active"
      ? "Button--active"
      : undefined,
    className
  );
  return (
    <button className={mainClass} type="button" onClick={handleClick}>
      {children}
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
