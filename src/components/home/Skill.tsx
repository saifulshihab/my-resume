import React from "react";

interface ISkill {
  skill: string;
  icon: string;
}

const Skill: React.FC<ISkill> = (props) => {
  const { skill, icon } = props;
  return (
    <div className="flex text-sm font-light items-center gap-3 text-gray-300">
      <div className="w-4 h-4">
        <i className={icon} />
      </div>
      <p>{skill}</p>
    </div>
  );
};

export default Skill;
