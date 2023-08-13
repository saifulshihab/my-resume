import React from "react";

const Dot: React.FC = () => {
  return (
    <div className="h-[4px] w-[4px] flex items-center justify-center bg-primary transform rotate-45">
      <div className="w-[2px] h-[2px] bg-neutral-950 transform rotate-45" />
    </div>
  );
};

export default Dot;
