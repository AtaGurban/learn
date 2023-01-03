import React, { FC, useState } from "react";

export enum CardVariants {
  outline = "outline",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  onClick: (num: number)=>void;
  children?: React.ReactElement | React.ReactNode;
  variant: CardVariants;
}
const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
    const [state, setState] = useState(0)
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariants.outline ? "1px solid gray" : "none",
        background: variant === CardVariants.primary ? 'lightgray' : 'none'
      }}
      onClick={()=> onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
