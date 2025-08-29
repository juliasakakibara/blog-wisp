import React from "react";

interface SimpleTextProps {
  text: string;
  color?: string;
  size?: string;
  className?: string;
}

export const SimpleText: React.FC<SimpleTextProps> = ({ text, color = "inherit", size = "1rem", className }) => (
  <span
    className={className}
    style={{ color, fontSize: size }}
  >
    {text}
  </span>
);
