import React from "react";

interface ISkill {
  name: string;
  icon: string;
}

const Skill: React.FC<ISkill> = (props) => {
  const { name, icon } = props;
  return (
    <div className="flex items-center gap-3 text-gray-300">
      <div
        className="w-8 h-8 flex items-center justify-center border border-neutral-800 p-2 shadow shadow-primary rounded-full"
        title={name}
      >
        <i className={icon} />
      </div>
    </div>
  );
};

export default Skill;
