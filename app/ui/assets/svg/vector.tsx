import clsx from "clsx";
import React from "react";

interface IVectorProps {
  opacity?: boolean;
  width?: number;
  height?: number;
}

const IcVector: React.FC<IVectorProps> = ({ opacity, width, height }) => {
  return (
    <svg className={clsx("cursor-pointer hover:opacity-100 transition", {
      "opacity-50 rotate-180": opacity,
      "w-[10px] h-[20px]": !width && !height,
      })} width={width} height={height} viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 10.5L5.25 6L0.75 1.5" stroke="#768192" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
 
export default IcVector;
