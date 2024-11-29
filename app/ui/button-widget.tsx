import React from "react";

interface IBoxProps {
  children?: React.ReactNode;
  online?: boolean;
}

const Box: React.FC<IBoxProps> = ({ 
  children,
  online
}) => {
  return (
    <div className="
      w-[48px]
      h-[48px]
      relative
      flex
      items-center
      justify-center
      rounded-lg
      bg-primary
      cursor-pointer
      hover:opacity-80
    ">
      {online && (
        <div
          className="
            h-[8px]
            w-[8px]
            bg-green-500
            rounded-full
            absolute
            top-[10px]
            right-[10px]
          "
        />
      )}
      {children}
    </div>
  );
}
 
export default Box;