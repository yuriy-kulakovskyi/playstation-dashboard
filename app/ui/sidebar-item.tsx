import React from "react";

interface SideBarItemProps {
  isActive: boolean;
  children: React.ReactNode;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ isActive, children }) => {
  return (
    <>
      <div dir="rtl">
        {isActive && <div className="bg-indicator h-[20px] w-[2px] rounded-s-lg absolute top-[30%] left-0"></div>}
      </div>
      {children}
    </>
  );
}
 
export default SideBarItem;