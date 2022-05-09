import React from "react";

import "./Text.scss";

interface IProps {
  weight: "light" | "regular" | "bold";
  fontSize: "small" | "regular" | "large";
  children?: React.ReactNode;
}

export const Text: React.FC<IProps> = (props) => {
  const { weight = "regular", fontSize = "regular", children } = props;

  return (
    <div className="Text">
      <p>{children}</p>
    </div>
  );
};

export default Text;
