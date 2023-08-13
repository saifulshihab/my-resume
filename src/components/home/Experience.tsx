import React from "react";
import Dot from "./Dot";

interface IExperience {
  position: string;
  from: string;
  to?: string;
  company: string;
  roles: JSX.Element[];
}

const Experience: React.FC<IExperience> = (props) => {
  const { position, company, from, to, roles } = props;
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-md font-semibold">{position}</p>
        <p className="text-sm italic">{`${from} - ${to || "Present"}`}</p>
      </div>
      <p className="text-xs italic font-semibold text-primary">{company}</p>
      <div className="flex flex-col text-xs pl-3 mt-1">
        {roles.map((role, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div>
              <Dot />
            </div>
            <p className="text-justify">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
